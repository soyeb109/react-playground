import Link from "next/link";

type Props = {
  topic: string;
  page: string | undefined;
  prevPage: string | null;
  nextPage: string | null;
};

import React from "react";

export default function Footer({ topic, page, prevPage, nextPage }: Props) {
  if (!prevPage && !nextPage) return;

  const pageNums: number[] = [];
  if (prevPage && nextPage) {
    for (let i = parseInt(prevPage) + 1; i < parseInt(nextPage); i++) {
      pageNums.push(i);
    }
  }

  const nextPageArea = nextPage ? (
    <Link
      href={`/result/${topic}/${nextPage}`}
      className={!prevPage ? "mx-auto" : ""}
    >
      {!prevPage ? "more" : ""} &gt;&gt;&gt;
    </Link>
  ) : null;
  const prevPageArea = prevPage ? (
    <>
      <Link
        href={`/result/${topic}/${nextPage}`}
        className={!nextPage ? "mx-auto" : ""}
      >
        &lt;&lt;&lt; {!nextPage ? "back" : ""}
      </Link>
      {pageNums.map((num) =>
        page && num === parseInt(page) ? (
          num
        ) : (
          <Link href={`/result/${topic}/${num}`} className="underline" key={i}>
            {num}
          </Link>
        )
      )}
    </>
  ) : null;

  return (
    <div className="flex flex-row justify-between items-center px-2 py-4 font-bold w-60 mx-auto">
      {prevPageArea}
      {nextPageArea}
    </div>
  );
}
