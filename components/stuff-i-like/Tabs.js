import React from "react";
import Link from "next/link";

const Tabs = ({ activeTabName }) => {
  const tabClassName = "px-3 py-2 rounded-lg hover:text-gray-800";
  const activeTabClassName = tabClassName + " bg-gray-200 text-gray-800";
  return (
    <>
      <div className="prose">
        <h2>Stuff I Like</h2>
      </div>
      <ul className="flex mt-4 space-x-3 text-lg font-medium text-gray-600">
        <li>
          <Link href="/stuff-i-like/books">
            <a
              className={
                activeTabName === "books" ? activeTabClassName : tabClassName
              }
            >
              Books
            </a>
          </Link>
        </li>
        <li>
          <Link href="/stuff-i-like/writing">
            <a
              className={
                activeTabName === "writing" ? activeTabClassName : tabClassName
              }
            >
              Writing
            </a>
          </Link>
        </li>
        <li>
          <Link href="/stuff-i-like/podcasts">
            <a
              className={
                activeTabName === "podcasts" ? activeTabClassName : tabClassName
              }
            >
              Podcasts
            </a>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Tabs;
