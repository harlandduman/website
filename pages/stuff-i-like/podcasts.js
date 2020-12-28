import React from "react";
import Layout from "../../components/Layout";
import Tabs from "../../components/stuff-i-like/Tabs";
import { podcasts } from "../../lib/stuffILike";

const Podcasts = () => {
  return (
    <Layout>
      <Tabs activeTabName="podcasts" />

      <div className="mt-6 prose">
        <ul>
          {podcasts.map(({ name, link }) => {
            return (
              <li key={name}>
                <a href={link} target="_blank" rel="noopener">
                  {name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </Layout>
  );
};

export default Podcasts;
