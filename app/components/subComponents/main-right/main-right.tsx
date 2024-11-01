import React from 'react'
import { CgCheck } from 'react-icons/cg'
import { FaAngleDown } from 'react-icons/fa6'
import { MdOutlinePrivacyTip } from 'react-icons/md'
import { PiImagesSquareLight } from 'react-icons/pi'
import { TbCurrentLocation } from 'react-icons/tb'

export default function Main_Right() {
  return (
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
              <p className="bg-my-gradient-bg bg-clip-text text-transparent font-[700] w-[290px] leading-5 text-[12px] lg:text-[18px]">
                {"<"} This Will be Project Name & It can be over 2 lines BAsed
                on your Needs {">"}{" "}
              </p>
            </div>
            <hr />

            <div>
              <span className="flex justify-between p-2 text-xs md:text-base">
                <p className="text-[#016DEA]  font-[700] "> Order ID: </p>
                <p className="text-[#00000080]  font-[600]">#ORDDWJ-123</p>
              </span>
              <span className="flex justify-between p-2 text-xs md:text-base">
                <p className="text-[#016DEA]  font-[700] "> Order ID: </p>
                <p className="text-[#00000080]  font-[600]">#ORDDWJ-123</p>
              </span>
              <span className="flex justify-between p-2 text-xs md:text-base">
                <p className="text-[#016DEA]  font-[700] "> Order ID: </p>
                <p className="text-[#00000080]  font-[600]">#ORDDWJ-123</p>
              </span>
              <span className="flex justify-between p-2 text-xs md:text-base">
                <p className="text-[#016DEA]  font-[700] "> Order ID: </p>
                <p className="text-[#00000080]  font-[600]">#ORDDWJ-123</p>
              </span>
              <span className="flex justify-between p-2 text-xs md:text-base">
                <p className="text-[#016DEA]  font-[700] "> Order ID: </p>
                <p className="text-[#00000080]  font-[600]">#ORDDWJ-123</p>
              </span>
              <span className="flex justify-between p-2 text-xs md:text-base">
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
        </div>  )
}
