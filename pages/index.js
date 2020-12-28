import Link from "next/link";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <div className="prose">
        <h2>Hey, I'm Harland</h2>
        <p>
          I'm a software engineer currently building infrastructure on the Web
          Platform team at PayPal. Right now I'm focused on building our new
          static file deployment system, and I used to work on GraphQL
          infrastructure. Before, I worked at Neo4j, helping customers realize
          the potential of graph databases.
        </p>

        <h2>This Website</h2>
        <p>
          This website contains some of my{" "}
          <Link href="/writing">
            <a>writing</a>
          </Link>{" "}
          and a catalog of some of my{" "}
          <Link href="stuff-i-like/books">
            <a>favorite things</a>
          </Link>
          .
        </p>
      </div>
    </Layout>
  );
}
