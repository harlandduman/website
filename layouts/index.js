import Head from "next/head";

const Layout = ({ children, frontMatter }) => {
  return (
    <div className="max-w-3xl px-6 mx-auto mb-12">
      <Head>
        <title>{frontMatter.title} - Harland Duman</title>
      </Head>
      <h1 className="mb-2 text-3xl font-bold">{frontMatter.title}</h1>
      <div className="mb-6 font-medium text-gray-700">{frontMatter.date}</div>
      <div className="prose ">{children}</div>
    </div>
  );
};

export default Layout;
