import dynamic from "next/dynamic";
import HeaderApp from "./header-app";
import ChoosePlaceSkeleton from "@/core/ui/templates/choose-place/skeleton";

const ChoosePlace = dynamic(async () => import('@/core/ui/templates/choose-place'), {
  loading: ChoosePlaceSkeleton,
  ssr: false
})

const HomePage = () => {
  return (
    <>
      <HeaderApp />
      <ChoosePlace />
    </>
  );
}

export default HomePage