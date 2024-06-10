import React from "react";
import mailbox from "../../../assets/icons/mailbox.svg";
import Person from "../../../assets/images/Person.svg";
import Car from "../../../assets/images/Car.svg";
import Tree from "../../../assets/images/Tree.svg";
import Group from "../../../assets/images/Group.svg";
import Logo from "../../../assets/icons/logo.svg";
import { ReactSVG } from "react-svg";
import Itemfooter from "../components/item_footer";
import fb from "../../../assets/icons/fb.svg";
import ig from "../../../assets/icons/ig.svg";
import tw from "../../../assets/icons/tw.svg";

function Footer(props) {
  const { label, p1, p2, p3 } = props;
  return (
    <footer className="w-full flex flex-col items-center gap-10  h-[1100px] mt-[82px]">
      <div
        className=" gap-10 flex flex-row items-center justify-center bg-orange-500 w-[1100px] h-[300px] rounded-md mobile:max-sm:hidden
      "
      >
        <div className="relative  w-[300px] h-[300px]">
          <img className="w-[250px] absolute bottom-0 l" src={Group}></img>
          <img
            className="w-[160px] h-[200px] absolute right-[8.5rem]"
            src={Person}
          ></img>
        </div>
        <div className="flex flex-col ">
          <div>
            <h2 className="text-6xl font-Volkhov text-white-500 text-wrap text-center font-bold leading-relaxed">
              Subscribe and get exclusive <br /> deals & offer
            </h2>
          </div>
          <div className="bg-white w-[500px] h-[52px] flex items-center  rounded-md pr-[8px] pl-[12px] mt-[30px]">
            <button className="pr-[5px]">
              <img src={mailbox} alt="mailbox" />
            </button>
            <input
              placeholder="Enter your mail"
              spellCheck={false}
              className="flex-1 h-full text-base border-none bg-transparent decoration-black"
            />
            <button className=" bg-orange-500 px-[20px] py-[10px] rounded-md ">
              Subscribe
            </button>
          </div>
        </div>
        <div className=" flex flex-col relative top-[-20px]">
          <img src={Tree} className="w-[88px]  mb-[-3.75rem]" alt="Tree"></img>
          <img src={Car} className="w-[220px] mb-10 " alt="Car"></img>
        </div>
      </div>
      <div className="w-full flex items-center justify-center mobile:bg-pink-200 ipad:bg-inherit desktop:bg-inherit">
        <div className="flex desktop:w-[1100px]  desktop:flex-row desktop:items-center justify-between  mobile:w-[400px] mobile:flex-col mobile:items-start ">
          <div className="flex flex-col ">
            <div className="flex items-center">
              <h2 className="font-bold text-3xl">FCar</h2>
              <img src={Logo} className="h-[40px]" alt="logo" />
            </div>
            <p className="font-light text-xl text-gray-500">
              Book your trip in minute, get full <br /> Control for much longer.
            </p>
            <div className="flex flex-row">
              <img src={fb}></img>
              <img src={ig}></img>
              <img src={tw}></img>
            </div>
          </div>
          <div className="flex flex-row mobile:max-sm:grid  mobile:max-sm:grid-cols-2  ">
            <Itemfooter
              label={"Company"}
              p1={"About"}
              p2={"Careers"}
              p3={"Logistic"}
            ></Itemfooter>
            <Itemfooter
              label={"Contact"}
              p1={"Help/FAQ"}
              p2={"Press"}
              p3={"Affilates"}
            ></Itemfooter>
            <Itemfooter
              label={"More"}
              p1={"Press Centre"}
              p2={"Our Blog"}
              p3={"Low fare tips"}
            ></Itemfooter>
          </div>
        </div>
      </div>
      <span className=" border-[0.5px] w-[1100px] border-gray-300 mobile:hidden"></span>
      <div className="flex justify-between flex-row desktop:max-xl:gap-[846px]  mobile:max-sm:gap-[100px] ">
        <span className="text-gray-600 text-sm mr-4">
          Copyright, Trabook 2022. All rights reserved
        </span>
        <div className="text-gray-600 text-sm ">Terms & Conditions</div>
      </div>
    </footer>
  );
}

export default Footer;
