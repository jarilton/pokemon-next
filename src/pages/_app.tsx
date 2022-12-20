import "../styles/globals.ts";
import type { AppProps } from "next/app";
import { Layout } from "../components/Layout";
import { GlobalStyles } from "../styles/globals";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
