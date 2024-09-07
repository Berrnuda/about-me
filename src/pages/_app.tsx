import ModalWrapper from "@/components/modal/ModalWrapper";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ModalWrapper />
      <Component {...pageProps} />
    </>
  );
}
