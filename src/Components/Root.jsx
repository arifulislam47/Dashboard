import React from "react";
import SideMenuBar from "../pages/SideMenuBar";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className=" flex justify-center items-center h-dvh">
      <div className=" flex w-[1440px] rounded-3xl bg-black mx-auto pl-[100px] pr-5 gap-[83px] py-5">
        <SideMenuBar />
        <div className=" rounded-3xl w-full bg-white overflow-hidden">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Root;
