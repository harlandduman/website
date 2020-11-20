import Link from "next/link";
import { frontMatter as writingPages } from "./writing/*.mdx";

const formatPath = (p) => p.replace(/\.mdx$/, "");

export default function Home() {
  return (
    <main className="max-w-3xl px-6 mx-auto leading-relaxed text-gray-900">
      <ul>
        {writingPages.map(({ title, date, __resourcePath }) => {
          return (
            <li key={title}>
              <p className="font-medium leading-6 text-gray-600 ">{date}</p>
              <Link href={formatPath(__resourcePath)}>
                <a className="mb-1 text-3xl font-semibold hover:text-light-blue-600">
                  {title}
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
