import React, { useEffect, useRef, useState } from "react";
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

export default function LeftMenuSection({ setNavLinks, onInitNewPage }) {
  //currentOpenedPage and layout
  const [currentPage, setCurrentPage] = useState("Dashboard");
  const onClickMenu = (activePage, links) => {
    setCurrentPage(activePage);
    setNavLinks(links);
    onInitNewPage();
  };

  return (
    <div className="w-2/12 overflow-y-auto scrollBar">
      <MenuWrapper>
        <Menu
          links={{
            data: "/providers/data",
            dash: "/providers/provider",
            form: "/providers/add",
          }}
          onClick={onClickMenu}
          activeMenu={currentPage}
          title="Fournisseurs"
          isDropDown={false}
          icon={<FaUsers />}
          router="/providers/provider"
          withShadow={false}
        ></Menu>
        <Menu
          links={{
            data: "/users/data",
            dash: "/users/dash",
            form: "/users/signup",
          }}
          onClick={onClickMenu}
          activeMenu={currentPage}
          title="Utilisateurs"
          isDropDown={false}
          icon={<FaUserFriends />}
          router="/users/signup"
          withShadow={false}
        ></Menu>
        <Menu
          links={{
            data: "/customers/data",
            dash: "/clients/client",
            form: "/customers/add",
          }}
          onClick={onClickMenu}
          activeMenu={currentPage}
          title="Clients"
          isDropDown={false}
          icon={<BiUserCheck />}
          router="/clients/client"
          withShadow={false}
        ></Menu>
      </MenuWrapper>
      <MenuWrapper>
        <Menu
          links={{
            data: "/operations/output/data",
            dash: "/operations/output",
            form: "/operations/output/add",
          }}
          onClick={onClickMenu}
          activeMenu={currentPage}
          title="Sortie"
          isDropDown={false}
          icon={<FaArrowLeft />}
          router="/operations/output"
          withShadow={false}
        ></Menu>
        <Menu
          links={{
            data: "/operations/input/data",
            dash: "/operations/input",
            form: "/operations/input/add",
          }}
          onClick={onClickMenu}
          activeMenu={currentPage}
          title="Entrée"
          isDropDown={false}
          icon={<FaArrowRight />}
          router="/operations/input"
          withShadow={false}
        ></Menu>
        <Menu
          links={{
            data: "/bookings/data",
            dash: "/bookings",
            form: "/bookings/add",
          }}
          onClick={onClickMenu}
          activeMenu={currentPage}
          title="Commandes"
          isDropDown={false}
          icon={<BiCommand />}
          router="/bookings/add"
          withShadow={false}
        ></Menu>
        <Menu
          links={{
            data: "/payment/data",
            dash: "/payment",
            form: "/payment/add",
          }}
          onClick={onClickMenu}
          activeMenu={currentPage}
          title="Paiement"
          isDropDown={false}
          icon={<BiDollar />}
          router="/payment"
          withShadow={false}
        ></Menu>
      </MenuWrapper>

      <Menu
        links={{
          data: "/exercise/data",
          dash: "/exercise",
          form: "/exercise/add",
        }}
        onClick={onClickMenu}
        activeMenu={currentPage}
        title="Exercices"
        isDropDown={false}
        icon={<BiCalendarPlus />}
        router="/exercise/add"
      ></Menu>
      <MenuWrapper>
        <Menu
          links={{
            data: "/categories/output/data",
            dash: "/categories/subCategory",
            form: "/categories/output/add",
          }}
          onClick={onClickMenu}
          activeMenu={currentPage}
          title="Sous categories"
          isDropDown={false}
          icon={<FaList />}
          router="/categories/subCategory"
          withShadow={false}
        ></Menu>
        <Menu
          links={{
            data: "/categories/category/data",
            dash: "/categories/category",
            form: "/categories/category/add",
          }}
          onClick={onClickMenu}
          activeMenu={currentPage}
          title="Categories"
          isDropDown={false}
          icon={<FaTasks />}
          router="/categories/category"
          withShadow={false}
        ></Menu>
        <Menu
          links={{
            data: "/product/output/data",
            dash: "/product",
            form: "/product/add",
          }}
          onClick={onClickMenu}
          activeMenu={currentPage}
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
