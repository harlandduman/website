import Link from "next/link";
import { frontMatter as writingPages } from "./writing/*.mdx";

const formatPath = (p) => p.replace(/\.mdx$/, "");

export default function Home() {
  console.log(writingPages);
  return (
    <main>
      <h3>Hey, I'm Harland.</h3>
      <p>
        I'm a developer on the Web Platform team at PayPal. Recently, I've been
        focused on building our new static asset deployment system. I used to
        work at Neo4j, helping customers solve all sorts of problems using graph
        databases.
      </p>
      <h3>Writing</h3>
      {writingPages.map(({ title, description, __resourcePath }) => {
        return (
          <Link key={title} href={formatPath(__resourcePath)}>
            <a style={{ textDecoration: "none", color: "unset" }}>
              <h4 style={{ fontWeight: 600, lineHeight: 1.25 }}>{title}</h4>
              <p style={{ color: "gray" }}>{description}</p>
            </a>
          </Link>
        );
      })}
    </main>
  );
}
