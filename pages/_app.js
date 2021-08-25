import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import Head from "next/head";
import LeftMenuSection from "../components/LeftMenuSection";
import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const [canSetNavBar, setCanSetNavBar] = useState(true);
  const [currentLayout, setCurrentLayout] = useState("");
  const [navLinks, setNavLinks] = useState({});
  const { pathname } = useRouter();
  const [showNavbar, setShowNavbar] = useState(true);

  /**
   * This function should toggle the navbar
   * Hide it or may just show it
   */
  const onToggleNavbar = () => {
    if (showNavbar) {
      setShowNavbar(false);
    } else setShowNavbar(true);
  };
  useEffect(() => {
    function setNavBar(canHandleSetter = true) {
      if (canHandleSetter) {
        if (pathname !== "/login") {
          setCanSetNavBar(true);
        } else {
          setCanSetNavBar(false);
        }
      }
    }
    setNavBar();
    return () => setNavBar(false);
  }, [pathname]);

  const onSetNewLayout = (activeLayout) => setCurrentLayout(activeLayout);
  const onSetNavLinks = (links) => setNavLinks(links);
  const onInitNewPage = () => setCurrentLayout("Dashboard");

  if (canSetNavBar)
    return (
      <>
        <Head>
          <link rel="shortcut icon" href="logo.JPG" />
        </Head>
        <div className="flex overflow-x-hidden overflow-y-hidden justify-between w-screen h-screen bg-gray-100">
          {showNavbar && (
            <LeftMenuSection
              onInitNewPage={onInitNewPage}
              setNavLinks={onSetNavLinks}
            />
          )}
          <div className={`${showNavbar ? "w-10/12" : "w-full"} h-screen scrollBar overflow-y-auto`}>
            <div className="w-11/12 ml-11 mt-2 p-1 sticky top-0">
              <NavBar
                activeLayout={currentLayout}
                onSetNewLayout={onSetNewLayout}
                links={navLinks}
                onToggleNavbar={onToggleNavbar}
              />
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
