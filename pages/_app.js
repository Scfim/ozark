import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import Head from "next/head";
import LeftMenuSection from "../components/LeftMenuSection";
import React from "react";
import NavBar from "../components/NavBar";
import useNavBar from "../hooks/useNavBar";

function MyApp({ Component, pageProps }) {
  const isNavbarNeeded = useNavBar();

  if (isNavbarNeeded)
    return (
      <>
        <Head>
          <link rel="shortcut icon" href="logo.JPG" />
        </Head>
        <div className="flex overflow-x-hidden overflow-y-hidden justify-between w-screen h-screen bg-gray-100">
          <LeftMenuSection />
          <div className={`w-10/12 h-screen scrollBar overflow-y-auto`}>
            <div className="w-11/12 ml-11 mt-2 p-1 sticky top-0">
              <NavBar />
            </div>
            <Component {...pageProps} />
          </div>
        </div>
      </>
    );
  else
    return (
      <>
        <Head>
          <link rel="shortcut icon" href="logo.JPG" />
        </Head>
        <Component {...pageProps} />
      </>
    );
}

export default MyApp;
