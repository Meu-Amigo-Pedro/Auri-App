import dynamic from "next/dynamic";
import HeaderApp from "./header-app";
import LoadingSkeleton from "@/core/ui/molecules/skeleton";

const ChoosePlace = dynamic(async () => import("@/core/ui/templates/choose-place"), {
  loading: LoadingSkeleton,
  ssr: false,
});

const HomePage = () => {
  return (
    <>
      <HeaderApp />
      <ChoosePlace />
    </>
  );
};

export default HomePage;
