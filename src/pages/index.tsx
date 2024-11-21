import dynamic from "next/dynamic";
import HeaderApp from "./header-app";
import ChooseBrandSkeleton from "@/core/ui/templates/choose-brand/skeleton";

const App = dynamic(async () => import('@/core/ui/index'), {
  loading: ChooseBrandSkeleton,
  ssr: false
})

const HomePage = () => {
  return (
    <>
      <HeaderApp />
      <App />
    </>
  );
}

export default HomePage