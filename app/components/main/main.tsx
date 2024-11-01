import React from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { CgCheck } from "react-icons/cg";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { FiEyeOff } from "react-icons/fi";
import { GrCopy } from "react-icons/gr";
import { IoIosArrowDown } from "react-icons/io";
import {
  IoArrowBackOutline,
  IoCheckmarkOutline,
  IoCloseOutline,
  IoVideocamOutline,
} from "react-icons/io5";
import { MdMusicVideo, MdOutlinePrivacyTip } from "react-icons/md";
import { PiImagesSquareLight, PiRocket } from "react-icons/pi";
import { SiApplemusic } from "react-icons/si";
import { TbCurrentLocation } from "react-icons/tb";
import Main_Right from "../subComponents/main-right/main-right";
import Main_Left from "../subComponents/main-left/main-left";
import Main_Top from "../subComponents/main-top/main-top";

export default function Main() {
  return (
    <main className="p-2 xl:p-10 w-full  bg-slate-50">

        {/* Top */}
        <Main_Top/>
      
      <section className="flex flex-col  lg:flex-row xl:gap-10 my-7   ">
        {/* left section */}
      <Main_Left/>

        {/* Right section */}
        <Main_Right/>
      </section>
    </main>
  );
}
