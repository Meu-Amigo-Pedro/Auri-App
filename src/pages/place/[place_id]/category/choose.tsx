/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import dynamic from 'next/dynamic';
import HeaderApp from '../../../header-app';
import {  GetServerSidePropsContext, GetServerSidePropsResult } from 'next';
import { iocContainer } from '@/core/ioc';
import { IPlaceGateway } from '@/core/infra/gateways/contracts/place';
import { PlaceDTO } from '@/core/infra/gateways/dtos/place';

const ChooseCategory = dynamic(async () => import('@/core/ui/templates/choose-category'), {
  ssr: false
})

interface Props {
  place: PlaceDTO
}

const ChooseCategoryPage = ({ place }: Props) => {
  return (
    <>
      <HeaderApp />
      <ChooseCategory place={PlaceDTO.toPlace(place)} />
    </>
  );
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

export default ChooseCategoryPage