import React from "react";
import Layout from "../../components/Layout";
import Tabs from "../../components/stuff-i-like/Tabs";
import { writing } from "../../lib/stuffILike";

const Writing = () => {
  return (
    <Layout>
      <Tabs activeTabName="writing" />

      <div className="mt-6 prose">
        <ul>
          {writing.map(({ title, link }) => {
            return (
              <li key="title">
                <a href={link} target="_blank" rel="noopener">
                  {title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </Layout>
  );
};

export default Writing;
