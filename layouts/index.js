import Head from "next/head";

const Layout = ({ children, frontMatter }) => {
  return (
    <div className="max-w-3xl px-6 mx-auto mb-12">
      <Head>
        <title>{frontMatter.title} - Harland Duman</title>
      </Head>
      <div className="font-medium text-gray-600">{frontMatter.date}</div>
      <h1 className="mb-2 text-3xl font-semibold">{frontMatter.title}</h1>
      <div className="w-32 mb-8 border-b-4 border-gray-300 sm:w-48" />
      <div className="max-w-3xl mx-auto prose prose-lg">{children}</div>
    </div>
  );
};

export default Layout;
