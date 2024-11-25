/* eslint-disable @typescript-eslint/no-unused-vars */
import { GetServerSidePropsResult } from "next";
import { IPlaceGateway } from "@/core/infra/gateways/contracts/place";
import LoadingSkeleton from "@/core/ui/molecules/skeleton";
import { iocContainer } from "@/core/ioc";
import HeaderApp from "./header-app";
import dynamic from "next/dynamic";
import { PlaceDTO } from "@/core/infra/gateways/dtos/place";

const ChoosePlace = dynamic(async () => import("@/core/ui/templates/choose-place"), {
  loading: LoadingSkeleton,
  ssr: false,
});

interface HomePageProps {
  places: PlaceDTO[]
}

const HomePage = (props: HomePageProps) => {
  return (
    <>
      <HeaderApp />
      <ChoosePlace places={props.places.map(PlaceDTO.toPlace)} />
    </>
  );
};

export async function getServerSideProps (): Promise<GetServerSidePropsResult<HomePageProps>> {
  const placeGateway = iocContainer.get<IPlaceGateway>('PlaceGateway')

  try {
    const places = await placeGateway.getAll()
    return {
      props: { 
        places: places.map(PlaceDTO.fromPlace) 
      }
    }
  } catch (error) {
    return {
      props: { places: [] }
    }
  }
}

export default HomePage;
