import { GlobalStyle } from "@/core/ui/styles/global";
import type { AppProps } from "next/app";
import { useMemo } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = useMemo(() => new QueryClient({
    defaultOptions: {
      queries: { refetchOnWindowFocus: false }
    }
  }), [])
  
  return (
    <>
      <QueryClientProvider
        client={queryClient}
      >
        <GlobalStyle />
        <Component {...pageProps} />
      </QueryClientProvider>
    </>
  );
}
