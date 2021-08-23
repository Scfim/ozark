import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import Head from "next/head";
import LeftMenuSection from "../components/LeftMenuSection";
import React, { useState} from "react";
import NavBar from "../components/NavBar";
import useNavBar from "../hooks/useNavBar";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const isNavbarNeeded = useNavBar();
  const [currentLayout, setCurrentLayout] = useState("");
  const [navLinks, setNavLinks] = useState({})
  console.log("Navbar is needed: "+ isNavbarNeeded)

  const onSetNewLayout = activeLayout => setCurrentLayout(activeLayout)
  const onSetNavLinks = links=> setNavLinks (links)
  const onInitNewPage = () => setCurrentLayout("Dashboard")

  if (isNavbarNeeded)
    return (
      <>
        <Head>
          <link rel="shortcut icon" href="logo.JPG" />
        </Head>
        <div className="flex overflow-x-hidden overflow-y-hidden justify-between w-screen h-screen bg-gray-100">
          <LeftMenuSection onInitNewPage={onInitNewPage} setNavLinks={onSetNavLinks} />
          <div className={`w-10/12 h-screen scrollBar overflow-y-auto`}>
            <div className="w-11/12 ml-11 mt-2 p-1 sticky top-0">
              <NavBar activeLayout={currentLayout} onSetNewLayout={onSetNewLayout} links={navLinks} />
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
