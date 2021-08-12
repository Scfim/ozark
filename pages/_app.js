import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import Head from "next/head";
import Menu from "../components/Menu";
import { BiShare } from "react-icons/bi";
import { useEffect, useState } from "react";
import MenuItem from "../components/MenuItem";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

function MyApp({ Component, pageProps }) {
  const [currentTarget, setCurrentTarget] = useState("");
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  useEffect(() => {
    const letRenderMenuClickable = (canRender, callback = () => {}) => {
      if (canRender) {
        const items = document.querySelectorAll("[data-menu]");
        items.forEach((item) => {
          item.addEventListener("click", onClickMenu);
          function onClickMenu(_self) {
            const _currentItem = _self.currentTarget;
            setCurrentTarget(_currentItem.getAttribute("data-menu"));
            setIsMenuOpened(true);
            _currentItem.nextElementSibling.classList.toggle("h-0");
            _currentItem.nextElementSibling.classList.toggle("border");
          }
          callback(item, onClickMenu);
        });
      }
    };
    letRenderMenuClickable(true);

    return () => {
      letRenderMenuClickable(false, (item, func) =>
        item.removeEventLister("click", func)
      );
    };
  }, [setCurrentTarget]);
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="logo.JPG" />
      </Head>
      <div className="flex justify-between w-screen h-screen bg-gray-50">
        <div className="w-2/12">
          <Menu
            isOpened={isMenuOpened}
            activeMenu={currentTarget}
            icon={<BiShare />}
            title="Operation"
          >
            <MenuItem
              route="/operations/input"
              icon={<FaArrowRight />}
              title="Entree"
            />
            <MenuItem
              route="/operations/output"
              icon={<FaArrowLeft />}
              title="Sortie"
            />
          </Menu>
          <Menu
            isOpened={isMenuOpened}
            activeMenu={currentTarget}
            title="Commandes"
          ></Menu>
        </div>
        <div className="w-10/12">
          <Component {...pageProps} />
        </div>
      </div>
    </>
  );
}

export default MyApp;
