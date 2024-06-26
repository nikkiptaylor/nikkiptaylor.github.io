import React, { ReactNode } from "react";
import Head from "next/head";
import Header from "./header";
import Footer from "./footer";
import "@fontsource/forum";

// Component to use as container for all pages
export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Nikki</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>

      {children}

      <Footer></Footer>
    </div>
  );
}
