/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import dynamic from 'next/dynamic';
import HeaderApp from '../header-app';
import LoadingSkeleton from '@/core/ui/molecules/skeleton';

const PlaceCms = dynamic(async () => import('@/core/ui/templates/place-cms'), {
  loading: LoadingSkeleton,
  ssr: false
})

const CreatePlacePage = () => {
  return (
    <>
      <HeaderApp />
      <PlaceCms />
    </>
  );
}

export default CreatePlacePage