import ModalWrapper from "@/components/modal/ModalWrapper";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";

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
        <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_SITE_URL}/images/Profile.jpg`}
        />

        <meta property="og:description" content="나에 대해서 소개합니다." />
      </Head>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-VBM4JYW41G" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-VBM4JYW41G');
        `}
      </Script>
      <ModalWrapper />
      <Component {...pageProps} />
    </>
  );
}
