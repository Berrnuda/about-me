import ModalWrapper from "@/components/modal/ModalWrapper";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>About-Bermuda</title>
        <meta name="description" content="나에 대해서 소개합니다." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="About-Bermuda" />
        <meta property="og:site_name" content="About-Bermuda" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://about-bermuda.vercel.app/" />
        <meta property="og:description" content="나에 대해서 소개합니다." />
      </Head>
      <ModalWrapper />
      <Component {...pageProps} />
    </>
  );
}
