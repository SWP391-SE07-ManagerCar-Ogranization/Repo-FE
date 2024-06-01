import React from "react";
import { useState } from "react";
import { BsSunFill } from "react-icons/bs";
import { FaMoon } from "react-icons/fa";
import { HiOutlineMenu } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";
import images from "../../../assets/icons/logo.svg";

function Header(props) {
  const { isMoble } = props;
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header className="flex  justify-center shadow-md">
      <div className=" flex items-center justify-evenly gap-10 w-[1150px] mobile:h-[50px] desktop:h-[82px] ">
        <div>
          <div className="">
            <img src={images} width={"102px"} alt="logo" className=""></img>
          </div>
        </div>
        <ul className=" ml-auto flex gap-2 text-black">
          {openMenu && isMoble ? (
            <MdOutlineClose
              size={"24px"}
              onClick={() => setOpenMenu(!openMenu)}
            />
          ) : !openMenu && isMoble ? (
            <HiOutlineMenu
              size={"24px"}
              onClick={() => setOpenMenu(!openMenu)}
            />
          ) : (
            <div className="md:flex md:flex-row md:gap-10">
              <li className="btn hover:text-purple-500">Home</li>
              <li className="btn">About</li>
              <li className="btn">Destination</li>
              <li className="btn">Tour</li>
              <li className="btn">Blog</li>
            </div>
          )}
          {openMenu && (
            <div className="absolute right-10 top-[50px] mobile:mr-[-24px] bg-gray-200 p-10 text-center z-10 w-full text-black text-13">
              <li className="btn hover:text-orange-500">Home</li>
              <li className="btn hover:text-orange-500">About</li>
              <li className="btn hover:text-orange-500">Destination</li>
              <li className="btn hover:text-orange-500">Tour</li>
              <li className="btn hover:text-orange-500">Blog</li>
            </div>
          )}
        </ul>
        <div className="flex mobile:hidden desktop:block">
          <button className=" w-[120px] mr-10 px-[12px] text-orange-500  py-[10px] rounded-md bg-gray-900">
            Login
          </button>
          <button className="w-[120px] px-[12px] py-[10px] text-white rounded-md bg-orange-500">
            Register
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
