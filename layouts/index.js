import Head from "next/head";
import TimeAgo from "../components/TimeAgo";
import Layout from "../components/Layout";

const PostLayout = ({ children, frontMatter }) => {
  return (
    <Layout>
      <Head>
        <title>{frontMatter.title} - Harland Duman</title>
      </Head>
      <h1 className="text-2xl font-semibold ">{frontMatter.title}</h1>
      <div className="mt-0.5 mb-8 font-medium text-gray-600">
        Last updated <TimeAgo date={frontMatter.lastUpdated} />
      </div>
      <div className="w-16 mb-8 border-b-2 border-light-blue-500" />
      <div className="max-w-3xl mx-auto prose">{children}</div>
    </Layout>
  );
};

export default PostLayout;
