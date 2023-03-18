import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideMenu from "./SideMenu";

function Layout() {
  return (
    <>
      <Header />
      <div className="grid grid-cols-12 bg-gray-100 items-baseline">
        <SideMenu />
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
