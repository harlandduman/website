const Page = ({ children, frontMatter }) => {
  // console.log(frontMatter);
  return (
    <div>
      <h2 style={{ marginBottom: "1rem" }}>{frontMatter.title}</h2>
      {children}
    </div>
  );
};

export default Page;
