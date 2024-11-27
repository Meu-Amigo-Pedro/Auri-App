/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import dynamic from 'next/dynamic';
import HeaderApp from '../../../header-app';
import {  GetServerSidePropsContext, GetServerSidePropsResult } from 'next';
import { iocContainer } from '@/core/ioc';
import { IPlaceGateway } from '@/core/infra/gateways/contracts/place';
import { PlaceDTO } from '@/core/infra/gateways/dtos/place';
import { ICategoryGateway } from '@/core/infra/gateways/contracts/category';
import { CategoryDTO } from '@/core/infra/gateways/dtos/category';

const CategoryCms = dynamic(async () => import('@/core/ui/templates/category-cms'), {
  ssr: false
})

interface Props {
  place: PlaceDTO
  category: CategoryDTO
}

const CategoryCmsPage = ({ place, category }: Props) => {
  return (
    <>
      <HeaderApp />
      <CategoryCms 
        place={PlaceDTO.toPlace(place)} 
        category={CategoryDTO.toCategory(category)}
      />
    </>
  );
}

export async function getServerSideProps ({ params }: GetServerSidePropsContext): Promise<GetServerSidePropsResult<Props>> {
  const placeGateway = iocContainer.get<IPlaceGateway>('PlaceGateway')
  const categoryGateway = iocContainer.get<ICategoryGateway>('CategoryGateway')

  try {
    const place = await placeGateway.getOne(params?.place_id as string)
    const category = await categoryGateway.getOne(params?.category_id as string)

    return {
      props: {
        place: PlaceDTO.fromPlace(place),
        category: CategoryDTO.toDTO(category)
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