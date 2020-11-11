import Link from "next/link";
import { frontMatter as writingPages } from "./writing/*.mdx";

const formatPath = (p) => p.replace(/\.mdx$/, "");

export default function Home() {
  return (
    <main className="max-w-3xl px-6 mx-auto">
      <h2 className="mb-4 text-2xl font-semibold">About Me</h2>
      <p className="mb-6">
        I'm a developer currently working on the Web Platform team at PayPal.
        Recently, I've been focused on building our new static asset deployment
        system. Before, I worked as a Solutions Engineer at Neo4j, helping
        customers solve all sorts of problems.
      </p>
      <h2 className="mb-4 text-2xl font-semibold">Writing</h2>
      <ul>
        {writingPages.map(({ title, description, __resourcePath }) => {
          return (
            <li key={title}>
              <Link href={formatPath(__resourcePath)}>
                <a>
                  <h3 className="mb-1 text-lg font-semibold">{title}</h3>
                  <p className="text-gray-700">{description}</p>
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
