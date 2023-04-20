import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";

import { Analytics } from "@vercel/analytics/react";

import { useHuddle01 } from "@huddle01/react";

export default function App({ Component, pageProps }: AppProps) {
  const { initialize } = useHuddle01();

  useEffect(() => {
    initialize(process.env.NEXT_PUBLIC_PROJECT_ID as string);
  }, []);

  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
