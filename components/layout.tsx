import React, { ReactNode } from "react";
import Head from "next/head";
import Header from "./header";
import Footer from "./footer";
import "@fontsource/forum";

// Component to use as container for all pages
export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col text-lg px-4 md:px-8 lg:px-24 container mx-auto ">
      <Head>
        <title>Nikki</title>
        <link rel="icon" href="/images/favicon.ico" />
      </Head>

      <div className="basis-2/12">
        <Header></Header>
      </div>

      <div className="grow">{children}</div>

      <div className="basis-6/12">
        <Footer></Footer>
      </div>
    </div>
  );
}
