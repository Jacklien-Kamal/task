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

export default function Main() {
  return (
    <main className="p-10 w-full  bg-slate-50">
      <section className="flex items-center gap-5 w-full ">
        <p className="w-[40px] h-[40px] flex justify-center items-center rounded-full bg-my-gradient-bg text-white text-2xl mt-1">
          {" "}
          <IoArrowBackOutline />
        </p>
        <p className="bg-my-gradient-bg bg-clip-text text-transparent text-[27px] font-bold">
          Project Contract{" "}
        </p>
        <hr className="border-0 w-[80%] h-[1px] bg-my-gradient-bg mt-1" />
      </section>

      <section className="flex  gap-10 my-7   ">
        {/* left section */}
        <div className="bg-white p-4 w-[1200px] border border-gray rounded-2xl ">
          {/* top */}
          <div className="border-gray border rounded-2xl p-5">
            <span className="flex items-center gap-4">
              <p className="bg-my-gradient-bg bg-clip-text text-transparent text-[20px] font-bold">
                Contract Tracker
              </p>
              <hr className="border-0 w-[81.5%] mt-1 h-[1px] bg-my-gradient-bg " />
              <FaAngleUp className="text-[#df2828f1] text-xl" />
            </span>

            <div className="flex justify-between my-3 mt-5">
              <div className="flex items-center gap-3  ">
                <p className="w-[50px] h-[50px] flex justify-center items-center rounded-full bg-my-gradient-bg text-white text-3xl  ms-2  ">
                  {" "}
                  <span className="w-[48px] h-[48px] bg-white rounded-full flex items-center justify-center p-3 ">
                    {" "}
                    <PiRocket className=" text-red-700 text-4xl" />
                  </span>{" "}
                </p>

                <p className="font-[600] text-[14px] text-[#00000080]">
                  Your Content Started With {"<V-customer Name>"}
                </p>
              </div>

              <div className="flex items-center text-[14px] text-[#00000080] font-[500] gap-1">
                <p>09-Sep-2023 05:45 PM | </p>
                <a className="bg-my-gradient-bg bg-clip-text text-transparent font-[400] ">
                  View Requirements
                </a>{" "}
              </div>
            </div>
            <hr />

            <div className="flex justify-between my-3">
              <div className="flex items-center gap-3  ">
                <p className="w-[50px] h-[50px] flex justify-center items-center rounded-full bg-my-gradient-bg text-white text-3xl  ms-2  ">
                  {" "}
                  <span className="w-[48px] h-[48px] bg-white rounded-full flex items-center justify-center p-3 ">
                    {" "}
                    <IoCheckmarkOutline className=" text-red-700 text-4xl" />
                  </span>{" "}
                </p>

                <p className="font-[600] text-[14px] text-[#00000080]">
                  You Added Milestone {"< Milestone Title >"}
                </p>
              </div>

              <div className="flex items-center text-[14px] text-[#00000080] font-[500]">
                <p>09-Sep-2023 05:45 PM </p>
              </div>
            </div>
            <hr />

            <div className="flex justify-between my-3">
              <div className="flex items-center gap-3  ">
                <p className="w-[50px] h-[50px] flex justify-center items-center rounded-full bg-my-gradient-bg text-white text-3xl  ms-2  ">
                  {" "}
                  <span className="w-[48px] h-[48px] bg-white rounded-full flex items-center justify-center p-3 ">
                    {" "}
                    <IoCheckmarkOutline className=" text-red-700 text-4xl" />
                  </span>{" "}
                </p>

                <p className="font-[600] text-[14px] text-[#00000080]">
                  You Funded Milestone {"< Milestone Title >"}
                </p>
              </div>

              <div className="flex items-center text-[14px] text-[#00000080] font-[500]">
                <p>09-Sep-2023 05:45 PM </p>
              </div>
            </div>
            <hr />

            <div className="flex justify-between my-3">
              <div className="flex items-center gap-3  ">
                <p className="w-[50px] h-[50px] flex justify-center items-center rounded-full bg-my-gradient-bg text-white text-3xl  ms-2  ">
                  {" "}
                  <span className="w-[48px] h-[48px] bg-white rounded-full flex items-center justify-center p-3 ">
                    {" "}
                    <IoCheckmarkOutline className=" text-red-700 text-4xl" />
                  </span>{" "}
                </p>

                <p className="font-[600] text-[14px] text-[#00000080]">
                  {"<V-Lancer Name> "} Submited Milestone
                </p>
              </div>

              <div className="flex items-center text-[14px] text-[#00000080] font-[500]">
                <p>12-Sep-2023 07:45 PM </p>
              </div>
            </div>
            <hr />
            <div className="flex justify-between my-3">
              <div className="flex items-center gap-3  ">
                <p className="w-[50px] h-[50px] flex justify-center items-center rounded-full bg-my-gradient-bg text-white text-3xl  ms-2  ">
                  {" "}
                  <span className="w-[48px] h-[48px] bg-white rounded-full flex items-center justify-center p-3 ">
                    {" "}
                    <IoCloseOutline className=" text-red-700 text-4xl" />
                  </span>{" "}
                </p>

                <p className="font-[600] text-[14px] text-[#00000080]">
                  You Decline The Delivery
                </p>
              </div>

              <div className="flex items-center text-[14px] text-[#00000080] font-[500]">
                <p>11-Sep-2023 02:00 PM </p>
              </div>
            </div>
            <hr />

            <div className="flex justify-between my-3">
              <div className="flex items-center gap-3  ">
                <p className="w-[50px] h-[50px] flex justify-center items-center rounded-full bg-my-gradient-bg text-white text-3xl  ms-2  ">
                  {" "}
                  <span className="w-[48px] h-[48px] bg-white rounded-full flex items-center justify-center p-3 ">
                    {" "}
                    <IoCheckmarkOutline className=" text-red-700 text-4xl" />
                  </span>{" "}
                </p>

                <p className="font-[600] text-[14px] text-[#00000080]">
                  {"<V-Lancer Name> "} Submited Milestone
                </p>
              </div>

              <div className="flex items-center text-[14px] text-[#00000080] font-[500]">
                <p>12-Sep-2023 07:45 PM </p>
              </div>
            </div>
          </div>

          {/* Mid */}
          <div className="border-gray border rounded-2xl p-5 my-5">
            <span className="flex items-center gap-4">
              <p className="bg-my-gradient-bg bg-clip-text text-transparent text-[20px] font-bold">
                Contract Milestones
              </p>
              <hr className="border-0 w-[78%] h-[1px] bg-my-gradient-bg mt-1" />
              <FaAngleUp className="text-[#df2828f1] text-xl" />
            </span>

            <div className=" my-5">
              <span className="flex items-center gap-3 font-bold">
                <p className="w-[50px] h-[50px] flex justify-center items-center rounded-full bg-my-gradient-bg text-white text-3xl  ms-2  ">
                  {" "}
                  <span className="w-[48px] h-[48px] bg-white rounded-full flex items-center justify-center p-3 ">
                    {" "}
                    <FiEyeOff className=" text-blue-500 text-2xl" />
                  </span>{" "}
                </p>
                <h2 className="text-[#016DEA]">Hide Completed</h2>
              </span>

              <div className="border-l-[1px] border-dashed h-6 border-blue-400 ms-8"></div>

              {/* ////////////////////////////// */}

              <span className="flex items-center gap-3 font-bold">
                <p className="w-[50px] h-[50px] flex justify-center items-center rounded-full bg-my-gradient-bg text-white text-3xl  ms-2  ">
                  {" "}
                  <span className="w-[48px] h-[48px] bg-white rounded-full flex items-center justify-center p-3 ">
                    {" "}
                    <IoCheckmarkOutline className=" text-red-700 text-4xl" />
                  </span>{" "}
                </p>
                <div>
                  <h2 className="text-[#016DEA]">
                    Milestone:{" "}
                    <span className="font-[600] text-sm text-[#00000080]">
                      {" <Milestone Tiltle>"}{" "}
                    </span>{" "}
                  </h2>
                  <h2 className="text-sm text-[#00000080] flex gap-3 items-center">
                    $10.00 |{" "}
                    <button className="w-[57px] h-[28px] rounded-3xl bg-[linear-gradient(90deg,_#02913F_0%,_#0ACD5E_100%)] text-white font-[600] text-xs mt-1">
                      Paid
                    </button>{" "}
                    | <span className="">{"Dilevery Date:"} </span>{" "}
                    <span className="font-[500] text-sm">
                      11-Sep-2024 11:35 AM{" "}
                    </span>{" "}
                  </h2>
                </div>
              </span>

              <div className="border-l-[1px] border-solid h-7 border-blue-500 ms-8"></div>
              <span className="flex items-center gap-3 font-bold">
                <p className="w-[50px] h-[50px] flex justify-center items-center rounded-full bg-my-gradient-bg text-white text-3xl  ms-2  ">
                  {" "}
                  <span className="w-[48px] h-[48px] bg-white rounded-full flex items-center justify-center p-3 ">
                    {" "}
                    <IoCheckmarkOutline className=" text-red-700 text-4xl" />
                  </span>{" "}
                </p>
                <div>
                  <h2 className="text-[#016DEA]">
                    Milestone:{" "}
                    <span className="font-[600] text-sm text-[#00000080]">
                      {" <Milestone Tiltle>"}{" "}
                    </span>{" "}
                  </h2>
                  <h2 className="text-sm text-[#00000080] flex gap-2 items-center font-[500]">
                    $0.00 | <span className="font-[700] ">{"Due Date:"} </span>{" "}
                    <span className="font-[500] text-sm">
                      11-Sep-2024 11:35 AM{" "}
                    </span>{" "}
                    |{" "}
                    <button className=" w-[105px] h-[30px] rounded-3xl bg-my-gradient-bg text-white font-[600] text-xs">
                      Add Funds
                    </button>{" "}
                  </h2>
                </div>
              </span>

              <div className="border-l-[1px] border-solid h-7 border-blue-600 ms-8"></div>

              <span className="flex items-center gap-3 font-bold">
                <p className="w-[50px] h-[50px] flex justify-center items-center rounded-full bg-my-gradient-bg text-white text-3xl  ms-2  ">
                  {" "}
                  <span className="w-[48px] h-[48px] bg-white rounded-full flex items-center justify-center p-3 ">
                    {" "}
                    <FiEyeOff className=" text-blue-500 text-2xl" />
                  </span>{" "}
                </p>
                <h2 className="text-[#016DEA]">Hide All Upcoming</h2>
              </span>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-gray border rounded-2xl p-5 my-5">
            <span className="flex items-center gap-4">
              <p className="bg-my-gradient-bg bg-clip-text text-transparent text-[20px] font-bold">
                Contract Deliverables
              </p>
              <hr className="border-0 w-[77%] h-[1px] bg-my-gradient-bg mt-1" />
              <FaAngleUp className="text-[#df2828f1] text-xl" />
            </span>

            <div className="mt-4 flex  gap-5">
              <p className="w-[50px] h-[50px] flex justify-center items-center rounded-full bg-my-gradient-bg text-white text-3xl  ms-2   ">
                {" "}
                <span className="w-[48px] h-[48px] bg-white rounded-full flex items-center justify-center p-3 ">
                  {" "}
                  <GrCopy className="transform scale-x-[-1] text-blue-600" />
                </span>{" "}
              </p>

              <div className="border-gray border rounded-2xl p-[10px] w-[95%]">
                <div className="flex items-center justify-between pb-2">
                  <p className="text-[#016DEA] font-[700] text-sm">
                    Delivery-1
                  </p>
                  <span className="flex items-center justify-center gap-3">
                    <span className="text-[14px] text-[#00000080] font-[500]">
                      15-Sep-2022 11:30 AM{" "}
                    </span>
                    <button className="w-[80px]  h-[30px] rounded-[30px] bg-[linear-gradient(90deg,_#5200A5_0%,_#7F00FF_100%)] text-white text-xs font-[600] p-1">
                      {" "}
                      Pending
                    </button>
                  </span>
                </div>
                <hr />
                <p className="text-[14px] text-[#00000080] font-[500] p-[10px]">
                  id risus urna neque Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Assumenda impedit dolore debitis aperiam cum
                  aliquam eaque doloribus qui excepturi nesciunt consequuntur
                  earum deleniti numquam reprehenderit iusto, est enim
                  voluptatum sunt!
                </p>
                <span className="flex gap-2 items-center ">
                  <span className="flex items-center gap-1 w-20 h-7 border border-gray rounded-[50px] justify-center text-xs font-[500] text-[#00000080]">
                    8 Files <FaAngleUp className="text-blue-600 text-sm" />{" "}
                  </span>
                  <hr className="border-0 h-[1px] w-[93%] bg-[#8080804b]" />
                </span>

                <div className="grid grid-cols-6 p-2 gap-y-3 ">
                  {/* Card s */}
                  <div className="w-[136px] bg-my-gradient-bg rounded-lg p-2 flex flex-col items-center justify-between shadow-inner-bottom">
                    <div className="w-full flex justify-end">
                      <span className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-gray-500 text-lg">
                        <BiDotsVerticalRounded />
                      </span>
                    </div>
                    <div className="flex items-center justify-center  pb-5 text-2xl text-white">
                      <PiImagesSquareLight />
                    </div>
                  </div>
                  <div className="w-[136px] h-[90px]  bg-my-gradient-bg rounded-lg p-2 flex flex-col items-center justify-between shadow-inner-bottom">
                    <div className="w-full flex justify-end">
                      <span className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-gray-500 text-lg">
                        <BiDotsVerticalRounded />
                      </span>
                    </div>
                    <div className="flex items-center justify-center  pb-5 text-2xl text-white">
                      <IoVideocamOutline />
                    </div>
                  </div>
                  <div className="w-[136px] h-[90px]  bg-my-gradient-bg rounded-lg p-2 flex flex-col items-center justify-between shadow-inner-bottom">
                    <div className="w-full flex justify-end">
                      <span className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-gray-500 text-lg">
                        <BiDotsVerticalRounded />
                      </span>
                    </div>
                    <div className="flex items-center justify-center  pb-5 text-2xl text-white">
                      <MdMusicVideo />
                    </div>
                  </div>
                  <div className="w-[136px]  h-[90px]  rounded-lg p-2 flex flex-col items-center justify-between border  border-[#80808049]">
                    <div className="w-full flex justify-end">
                      <span className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-gray-500 text-lg border border-[#80808071]">
                        <BiDotsVerticalRounded />
                      </span>
                    </div>
                    <div className="flex items-center justify-center  pb-5 text-2xl text-white">
                      <img
                        src="https://cdn.worldvectorlogo.com/logos/adobe-pdf-icon.svg"
                        className="w-6 h-6"
                      />
                    </div>
                  </div>

                  <div className="w-[136px] h-[90px]  rounded-lg p-2 flex flex-col items-center justify-between border border-[#80808049]">
                    <div className="w-full flex justify-end">
                      <span className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-gray-500 text-lg border border-[#80808071]">
                        <BiDotsVerticalRounded />
                      </span>
                    </div>
                    <div className="flex items-center justify-center pb-5 text-2xl text-white">
                      <img
                        src="https://images.freeimages.com/fic/images/icons/2795/office_2013_hd/2000/powerpoint.png"
                        className="w-7 h-7"
                      />
                    </div>
                  </div>
                  <div className="w-[136px]  rounded-lg p-2 flex flex-col items-center justify-between border border-[#80808049]">
                    <div className="w-full flex justify-end">
                      <span className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-gray-500 text-lg border border-[#80808071]">
                        <BiDotsVerticalRounded />
                      </span>
                    </div>
                    <div className="flex items-center justify-center  pb-5 text-2xl text-white">
                      <img
                        src="https://static.vecteezy.com/system/resources/previews/027/179/344/non_2x/microsoft-word-icon-logo-symbol-free-png.png"
                        className="w-8 h-8"
                      />
                    </div>
                  </div>
                  <div className="w-[136px]  h-[90px]  rounded-lg p-2 flex flex-col items-center justify-between border border-[#80808049]">
                    <div className="w-full flex justify-end">
                      <span className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-gray-500 text-lg border border-[#80808071]">
                        <BiDotsVerticalRounded />
                      </span>
                    </div>
                    <div className="flex items-center justify-center  pb-5 text-2xl text-white">
                      <img
                        src="https://e7.pngegg.com/pngimages/417/369/png-clipart-microsoft-excel-logo-microsoft-word-microsoft-office-365-pivot-table-excel-office-xlsx-icon-microsoft-excel-logo-miscellaneous-template-thumbnail.png"
                        className="w-7 h-7"
                      />
                    </div>
                  </div>
                  <div className="w-[136px] h-[90px] rounded-lg p-2 flex flex-col items-center justify-between border border-[#80808049]">
                    <div className="w-full flex justify-end">
                      <span className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-gray-500 text-lg border border-[#80808071]">
                        <BiDotsVerticalRounded />
                      </span>
                    </div>
                    <div className="flex items-center justify-center pb-5 text-2xl text-white">
                      <img
                        src="https://cdn-icons-png.freepik.com/512/1659/1659111.png"
                        className="w-6 h-6"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-5 pt-3">
              <button className="w-[86px] h-[30px] text-white  font-[600] text-xs bg-[linear-gradient(270deg,_#5D0076_0%,_#9D01C8_100%)] rounded-[30px]">
                {" "}
                Decline
              </button>
              <button className="w-[86px] h-[30px] text-white  font-[600] text-xs bg-[linear-gradient(220deg,_#FA0101_0%,_#016DEA_80%)] rounded-[30px]">
                {" "}
                Accept
              </button>
            </div>
          </div>
        </div>

        {/* Right section */}
        <div className="bg-white p-4 w-[400px] border border-gray rounded-2xl h-fit sticky top-4 ">
          <div className="my-1">
            <span className="flex items-center gap-4">
              <p className="bg-my-gradient-bg bg-clip-text text-transparent text-[14px] font-bold">
                Contract Summary
              </p>
              <hr className="border-0 w-[50.5%] mt-1 h-[1px] bg-my-gradient-bg " />
              <FaAngleDown className="text-[#df2828f1] text-base" />
            </span>

            <div className="flex gap-2 p-1 my-2 items-center">
              <div className="w-[72px] h-[46px] bg-my-gradient-bg rounded-lg p-2 flex flex-col items-center justify-center text-[#ffffffc5] shadow-inner-bottom ">
                <PiImagesSquareLight />
              </div>
              <p className="bg-my-gradient-bg bg-clip-text text-transparent font-[700] w-[290px] leading-5 text-[18px]">
                {"<"} This Will be Project Name & It can be over 2 lines BAsed
                on your Needs {">"}{" "}
              </p>
            </div>
            <hr />

            <div>
              <span className="flex justify-between p-2">
                <p className="text-[#016DEA]  font-[700] "> Order ID: </p>
                <p className="text-[#00000080]  font-[600]">#ORDDWJ-123</p>
              </span>
              <span className="flex justify-between p-2">
                <p className="text-[#016DEA]  font-[700] "> Order ID: </p>
                <p className="text-[#00000080]  font-[600]">#ORDDWJ-123</p>
              </span>
              <span className="flex justify-between p-2">
                <p className="text-[#016DEA]  font-[700] "> Order ID: </p>
                <p className="text-[#00000080]  font-[600]">#ORDDWJ-123</p>
              </span>
              <span className="flex justify-between p-2">
                <p className="text-[#016DEA]  font-[700] "> Order ID: </p>
                <p className="text-[#00000080]  font-[600]">#ORDDWJ-123</p>
              </span>
              <span className="flex justify-between p-2">
                <p className="text-[#016DEA]  font-[700] "> Order ID: </p>
                <p className="text-[#00000080]  font-[600]">#ORDDWJ-123</p>
              </span>
              <span className="flex justify-between p-2">
                <p className="text-[#016DEA]  font-[700] "> Order ID: </p>
                <p className="text-[#00000080]  font-[600]">#ORDDWJ-123</p>
              </span>
            </div>
          </div>
          <div>
            <span className="flex items-center gap-4">
              <p className="bg-my-gradient-bg bg-clip-text text-transparent text-[14px] font-bold">
                Contract Actions
              </p>
              <hr className="border-0 w-[54%] mt-1 h-[1px] bg-my-gradient-bg " />
              <FaAngleDown className="text-[#df2828f1] text-base" />
            </span>

            <div className="flex flex-col gap-2 mt-5">
              <button className=" w-full h-[40px] rounded-3xl bg-my-gradient-bg text-white font-[600] text-xs">
                New Milestone
              </button>{" "}
              <button className=" w-full h-[40px] rounded-3xl bg-my-gradient-bg text-white font-[600] text-xs">
                Cancel Contract
              </button>{" "}
              <button className=" w-full h-[40px] rounded-3xl bg-my-gradient-bg text-white font-[600] text-xs">
                End Contract
              </button>{" "}
            </div>
          </div>
          {/* 2 */}

          <div className="my-3">
            <span className="flex items-center gap-4 my-3">
              <p className="bg-my-gradient-bg bg-clip-text text-transparent text-[14px] font-bold">
                Contract Phase
              </p>
              <hr className="border-0 w-[54%] mt-1 h-[1px] bg-my-gradient-bg " />
              <FaAngleDown className="text-[#df2828f1] text-base" />
            </span>
            <span className="flex items-center gap-3 font-bold">
              <span className="w-[32px] h-[32px] flex justify-center items-center rounded-full bg-custom-gradient text-white text-3xl  ms-2  ">
                <CgCheck />
              </span>
              <span className="text-[#00000080] font-[500] text-sm">
                {" "}
                Constract Started
              </span>
            </span>

            <div className="border-l-[1px] border-solid h-6 border-blue-400 ms-6"></div>
            <span className="flex items-center gap-3 font-bold">
              <span className="w-[32px] h-[32px] flex justify-center items-center rounded-full bg-custom-gradient text-white text-3xl  ms-2  ">
                <CgCheck />
              </span>
              <span className="text-[#00000080] font-[500] text-sm">
                {" "}
                Constract Requirements Submitted{" "}
              </span>
            </span>

            <div className="border-l-[1px] border-solid h-6 border-blue-400 ms-6"></div>
            <span className="flex items-center gap-3 font-bold">
              <p className="w-[32px] h-[32px] flex justify-center items-center rounded-full bg-custom-gradient text-white text-3xl  ms-2  ">
                <CgCheck />
              </p>
              <p className="text-[#00000080] font-[500] text-sm">
                {" "}
                Constract in Progress
              </p>
            </span>

            <div className="border-l-[1px] border-solid h-6 border-blue-400 ms-6"></div>
            <div className="flex  items-center gap-3">
              <span className="w-[32px] h-[32px] flex justify-center items-center rounded-full bg-my-gradient-bg text-white text-3xl  ms-2  ">
                {" "}
                <span className="w-[30px] h-[30px] bg-white rounded-full flex items-center justify-center  ">
                  {" "}
                  <span className="w-[26px] h-[26px] flex justify-center items-center rounded-full bg-my-gradient-bg text-white text-3xl  p-2 ">
                    {" "}
                    <span className="w-[24px] h-[24px] bg-white rounded-full flex items-center justify-center p-[11px]">
                      <span className="bg-my-gradient-bg bg-clip-text text-transparent text-sm">
                        !
                      </span>
                    </span>{" "}
                  </span>
                </span>{" "}
              </span>
              <p className="text-[#00000080] font-[500] text-sm">
                {" "}
                Constract Closure
              </p>
            </div>
          </div>
          <div>
            <span className="flex items-center gap-4 my-3">
              <p className="bg-my-gradient-bg bg-clip-text text-transparent text-[14px] font-bold">
                Contract Support
              </p>
              <hr className="border-0 w-[54%] mt-1 h-[1px] bg-my-gradient-bg " />
              <FaAngleDown className="text-[#df2828f1] text-base" />
            </span>

            <div className="border border-[#0000001A]  rounded-[10px] p-4 flex items-center gap-2">
              <div className="border border-[#0000001A]  rounded-[10px] text-red-700 text-5xl w-fit p-2">
                <MdOutlinePrivacyTip />{" "}
              </div>
              <div className="">
                <p className="bg-my-gradient-bg bg-clip-text text-transparent font-[500]">
                  Payment Protection
                </p>
                <p className=" text-[#00000080] font-[500] text-sm ">
                  {" "}
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
            <div className="border border-[#0000001A]  rounded-[10px] p-4 flex items-center gap-2 my-2">
              <div className="border border-[#0000001A]  rounded-[10px] text-red-700 text-5xl w-fit p-2">
                <span className="w-[36px] h-[36px] flex justify-center items-center rounded-full bg-my-gradient-bg text-white text-3xl   ">
                  {" "}
                  <span className="w-[34px] h-[34px] bg-white rounded-full flex items-center justify-center  ">
                    {" "}
                    <img src="/logo.png" className="w-6 h-5" />
                  </span>
                </span>{" "}
              </div>
              <div className=" ">
                <p className="bg-my-gradient-bg bg-clip-text text-transparent font-[500]">
                  Need Help with constract
                </p>
                <p className=" text-[#00000080] font-[500] text-sm ">
                  {" "}
                  We are always here with you
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <button className=" w-[200px] h-[40px] rounded-3xl bg-my-gradient-bg text-white font-[600] text-xs flex items-center justify-center gap-3  ">
              <TbCurrentLocation className="text-lg"/>

                Visit Help Disk{" "}
              </button>{" "}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
