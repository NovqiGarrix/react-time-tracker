import type { NextPage } from "next";
import Head from "next/head";

const Hello: NextPage = () => {
  return (
    <div className="mx-auto my-auto flex items-center justify-center h-screen flex-col space-y-5">
      <Head>
        <title>Hello - Time Tracker</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="font-poppins text-7xl text-green-500 font-semibold">
        Hello, Hello!
      </h1>
    </div>
  );
};

export default Hello;
