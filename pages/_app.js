import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
import * as gtag from "../lib/gtag";
import "../styles/index.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  return (
    <>
      <Head>
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <title>Harland Duman</title>
      </Head>
      <header>
        <div className="max-w-3xl px-6 mx-auto mt-6 mb-8">
          <div>
            <Link href="/">
              <a className="text-3xl font-semibold text-gray-900 hover:text-light-blue-600">
                Harland Duman
              </a>
            </Link>
          </div>
          <div>
            <a
              href="https://twitter.com/harlandduman"
              rel="noopener"
              className="text-lg font-medium text-light-blue-600 hover:text-light-blue-500"
            >
              @harlandduman
            </a>
          </div>
        </div>
      </header>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
