import React, { useEffect, useState } from "react";
import Menu from "./Menu";
import MenuWrapper from "./MenuWrapper";
import {
  FaUsers,
  FaUserFriends,
  FaList,
  FaTasks,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";
import {
  BiBox,
  BiCommand,
  BiDollar,
  BiUserCheck,
  BiCalendarPlus,
} from "react-icons/bi";

export default function LeftMenuSection() {
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
    <div className="w-2/12 overflow-y-auto scrollBar">
      <MenuWrapper>
        <Menu
          isOpened={isMenuOpened}
          activeMenu={currentTarget}
          title="Fournisseurs"
          isDropDown={false}
          icon={<FaUsers />}
          router="/providers/provider"
          withShadow={false}
        ></Menu>
        <Menu
          isOpened={isMenuOpened}
          activeMenu={currentTarget}
          title="Utilisateurs"
          isDropDown={false}
          icon={<FaUserFriends />}
          router="/users/signup"
          withShadow={false}
        ></Menu>
        <Menu
          isOpened={isMenuOpened}
          activeMenu={currentTarget}
          title="Clients"
          isDropDown={false}
          icon={<BiUserCheck />}
          router="/clients/client"
          withShadow={false}
        ></Menu>
      </MenuWrapper>
      <MenuWrapper>
        <Menu
          isOpened={isMenuOpened}
          activeMenu={currentTarget}
          title="Sortie"
          isDropDown={false}
          icon={<FaArrowLeft />}
          router="/operations/output"
          withShadow={false}
        ></Menu>
        <Menu
          isOpened={isMenuOpened}
          activeMenu={currentTarget}
          title="Entrée"
          isDropDown={false}
          icon={<FaArrowRight />}
          router="/operations/input"
          withShadow={false}
        ></Menu>
        <Menu
          isOpened={isMenuOpened}
          activeMenu={currentTarget}
          title="Commandes"
          isDropDown={false}
          icon={<BiCommand />}
          router="/bookings/add"
          withShadow={false}
        ></Menu>
        <Menu
          isOpened={isMenuOpened}
          activeMenu={currentTarget}
          title="Paiement"
          isDropDown={false}
          icon={<BiDollar />}
          router="/payment"
          withShadow={false}
        ></Menu>
      </MenuWrapper>

      <Menu
        isOpened={isMenuOpened}
        activeMenu={currentTarget}
        title="Exercices"
        isDropDown={false}
        icon={<BiCalendarPlus />}
        router="/categories/subCategory"
      ></Menu>
      <MenuWrapper>
        <Menu
          isOpened={isMenuOpened}
          activeMenu={currentTarget}
          title="Sous categories"
          isDropDown={false}
          icon={<FaList />}
          router="/categories/subCategory"
          withShadow={false}
        ></Menu>
        <Menu
          isOpened={isMenuOpened}
          activeMenu={currentTarget}
          title="Categories"
          isDropDown={false}
          icon={<FaTasks />}
          router="/categories/category"
          withShadow={false}
        ></Menu>
        <Menu
          isOpened={isMenuOpened}
          activeMenu={currentTarget}
          title="Produits"
          isDropDown={false}
          icon={<BiBox />}
          router="/product/add"
          withShadow={false}
        ></Menu>
      </MenuWrapper>
    </div>
  );
}
