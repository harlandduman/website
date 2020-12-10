import Link from "next/link";
import Layout from "../components/Layout";
import TimeAgo from "../components/TimeAgo";
import { frontMatter as posts } from "./writing/*.mdx";

const formatPath = (p) => p.replace(/\.mdx$/, "");

export default function Home() {
  // Sort so newer posts are first
  const sortedPosts = posts.sort(
    (first, second) => new Date(second.date) - new Date(first.date)
  );
  return (
    <Layout>
      <div className="mb-4 prose">
        <h2 className="">Writing</h2>
      </div>
      <ul>
        {sortedPosts.map(({ title, lastUpdated, __resourcePath, date }) => {
          return (
            <li key={title}>
              <Link href={formatPath(__resourcePath)}>
                <a className="text-lg font-semibold hover:text-light-blue-600">
                  {title}
                </a>
              </Link>
              <p className="mb-4 text-sm font-medium text-gray-600 ">
                Updated <TimeAgo date={lastUpdated} />
              </p>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
}
