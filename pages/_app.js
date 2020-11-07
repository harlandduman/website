import Head from "next/head";
import Link from "next/link";
import "../styles/index.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <title>Harland Duman</title>
      </Head>
      <header className="py-4 mb-6 bg-gray-100 border-b border-gray-400">
        <div className="max-w-3xl px-6 mx-auto">
          <Link href="/">
            <a className="text-2xl font-semibold">Harland Duman</a>
          </Link>
        </div>
      </header>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
