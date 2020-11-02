import Head from "next/head";
import Link from "next/link";
import "../styles/index.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Harland Duman</title>
      </Head>
      <header style={{ paddingTop: "1rem", paddingBottom: "1rem" }}>
        <Link href="/">
          <a style={{ textDecoration: "none" }}>
            <h3>Harland</h3>
          </a>
        </Link>
      </header>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
