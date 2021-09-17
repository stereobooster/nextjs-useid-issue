import type { AppProps } from "next/app";
import { IdProvider } from "@radix-ui/react-id";
import { StrictMode } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StrictMode>
      <IdProvider>
        <Component {...pageProps} />
      </IdProvider>
    </StrictMode>
  );
}

export default MyApp;
