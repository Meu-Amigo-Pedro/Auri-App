/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import dynamic from "next/dynamic";
import HeaderApp from "../header-app";
import LoadingSkeleton from "@/core/ui/molecules/skeleton";
import {  GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import { iocContainer } from "@/core/ioc";
import { IPlaceGateway } from "@/core/infra/gateways/contracts/place";
import { Place } from "@/core/entities/place";
import { PlaceDTO } from "@/core/infra/gateways/dtos/place";

const EditPlace = dynamic(async () => import('@/core/ui/templates/edit-place'), {
  loading: LoadingSkeleton,
  ssr: false
})

interface Props {
  place: PlaceDTO
}

export async function getServerSideProps ({ params }: GetServerSidePropsContext): Promise<GetServerSidePropsResult<Props>> {
  const gateway = iocContainer.get<IPlaceGateway>('PlaceGateway')

  try {
    const place = await gateway.getOne(params?.place_id as string)

    return {
      props: {
        place: PlaceDTO.fromPlace(place)
      }
    }
  } catch (error) {
    return {
      props: { } as any,
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }
}

const EditPlacePage = ({ place }: Props) => {
  return (
    <>
      <HeaderApp />
      <EditPlace place={PlaceDTO.toPlace(place)} />
    </>
  );
}

export default EditPlacePage