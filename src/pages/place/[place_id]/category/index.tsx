/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import dynamic from 'next/dynamic';
import HeaderApp from '../../../header-app';
import {  GetServerSidePropsContext, GetServerSidePropsResult } from 'next';
import { IPlaceGateway } from '@/core/infra/gateways/contracts/place';
import { PlaceDTO } from '@/core/infra/gateways/dtos/place';
import { iocContainer } from '@/core/ioc';

const CategoryCms = dynamic(async () => import('@/core/ui/templates/category-cms'), {
  ssr: false
})

interface Props {
  place: PlaceDTO
}

const CategoryCmsPage = ({ place }: Props) => {
  return (
    <>
      <HeaderApp />
      <CategoryCms place={PlaceDTO.toPlace(place)} />
    </>
  );
}

export async function getServerSideProps ({ params }: GetServerSidePropsContext): Promise<GetServerSidePropsResult<Props>> {
  const placeGateway = iocContainer.get<IPlaceGateway>('PlaceGateway')

  try {
    const place = await placeGateway.getOne(params?.place_id as string)

    return {
      props: {
        place: PlaceDTO.fromPlace(place),
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

export default CategoryCmsPage