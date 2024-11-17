import React, { useState } from "react";
import LI from "../Components/LI";
import { Link } from "react-router-dom";

const SideMenuBar = () => {
  let userDetails = {
    name: "Samantha",
    email: "samantha@gmail.com",
    userImg: "/Profile.png",
  };
  let [active, setActive] = useState("1");

  return (
    <div className=" mt-12">
      <div className=" text-white">
        <img className=" h-[72px]" src={userDetails.userImg} alt="User Image" />
        <h3 className=" font-Poppins text-[25px]">{userDetails.name}</h3>
        <p className=" font-Poppins text-gray-400 tex-[17px]">
          {userDetails.email}
        </p>
      </div>
      <div className=" mt-[117px] flex gap-y-[30px] flex-col">
        <Link
          onClick={() => setActive("1")}
          className={` ${
            active === "1" ? " text-white" : " hover:text-white"
          } text-gray-400 font-Poppins text-[25px] transition-all duration-500 `}
          to={"/"}
        >
          Expenses
        </Link>
        <Link
          onClick={() => setActive("2")}
          className={` ${
            active === "2" ? " text-white" : " hover:text-white"
          } text-gray-400 font-Poppins text-[25px] transition-all duration-500 `}
          to={"/dashboard"}
        >
          Dashboard
        </Link>
        <Link
          onClick={() => setActive(3)}
          className={` ${
            active == 3 ? " text-white" : " hover:text-white"
          } text-gray-400 font-Poppins text-[25px] transition-all duration-500 `}
          to={"/wallets"}
        >
          Wallets
        </Link>
        <Link
          onClick={() => setActive(4)}
          className={` ${
            active == 4 ? " text-white" : " hover:text-white"
          } text-gray-400 font-Poppins text-[25px] transition-all duration-500 `}
          to={"/Summary"}
        >
          Summary
        </Link>
        <Link
          onClick={() => setActive(5)}
          className={` ${
            active == 5 ? " text-white" : " hover:text-white"
          } text-gray-400 font-Poppins text-[25px] transition-all duration-500 `}
          to={"/account"}
        >
          Accounts
        </Link>
        <Link
          onClick={() => setActive(6)}
          className={` ${
            active == 6 ? " text-white" : " hover:text-white"
          } text-gray-400 font-Poppins text-[25px] transition-all duration-500 `}
          to={"/settings"}
        >
          Settings
        </Link>
      </div>
    </div>
  );
};

export default SideMenuBar;
