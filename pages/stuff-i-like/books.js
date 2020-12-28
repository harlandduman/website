import React from "react";
import Layout from "../../components/Layout";
import Tabs from "../../components/stuff-i-like/Tabs";
import { booksRead, booksToRead } from "../../lib/stuffILike";

const Books = () => {
  return (
    <Layout>
      <Tabs activeTabName="books" />

      <div className="mt-6 prose">
        <ul>
          {booksRead.map(({ title, link }) => {
            return (
              <li key={title}>
                <a href={link} target="_blank" rel="noopener">
                  {title}
                </a>
              </li>
            );
          })}
        </ul>
        <h3>Next on my list</h3>
        <ul>
          {booksToRead.map(({ title, link }) => {
            return (
              <li key={title}>
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

export default Books;
