import React from "react";
import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
import * as gtag from "../lib/gtag";
import "../styles/index.css";

const HeaderLink = React.forwardRef(
  ({ href, onClick, children, active }, ref) => {
    const className = `uppercase text-sm font-medium ${
      active ? "text-light-blue-600" : "text-gray-500 hover:text-gray-900"
    }`;
    return (
      <a href={href} onClick={onClick} ref={ref} className={className}>
        {children}
      </a>
    );
  }
);

const MyApp = ({ Component, pageProps }) => {
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

  const onWritingPage = router.pathname.startsWith("/writing");
  const onAboutPage = router.pathname.startsWith("/about");
  const onStuffILikePage = router.pathname.startsWith("/stuff-i-like");

  return (
    <>
      <Head>
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <title>Harland Duman</title>
      </Head>
      <header className="py-3 bg-white border-b border-gray-200 shadow-sm">
        <div className="flex flex-wrap items-center justify-between w-full max-w-3xl px-6 mx-auto -mt-2">
          <Link href="/">
            <a className="flex-shrink-0 mt-2 mr-10 text-xl font-semibold text-gray-900 hover:text-light-blue-600">
              Harland Duman
            </a>
          </Link>
          <nav className="flex-shrink-0 mt-2 space-x-6">
            <Link href="/writing" passHref>
              <HeaderLink active={onWritingPage}>Writing</HeaderLink>
            </Link>
            <Link href="stuff-i-like/books" passHref>
              <HeaderLink active={onStuffILikePage}>Stuff I Like</HeaderLink>
            </Link>
            <Link href="/about" passHref>
              <HeaderLink active={onAboutPage}>About</HeaderLink>
            </Link>
          </nav>
        </div>
      </header>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
