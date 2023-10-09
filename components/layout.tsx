import React, { ReactNode } from "react";
import Head from "next/head";
import Header from "./Header";

// Component to use as container for all pages
export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Head>
        <title>Nikki</title>
        {/* <link rel="icon" href="../public/favicon.ico" /> */}
      </Head>
      <Header></Header>

      {children}
    </div>
  );
}
