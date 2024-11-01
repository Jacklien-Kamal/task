import React from 'react'
import { BiDotsVerticalRounded } from 'react-icons/bi'
import { FaAngleUp } from 'react-icons/fa6'
import { FiEyeOff } from 'react-icons/fi'
import { GrCopy } from 'react-icons/gr'
import { IoCheckmarkOutline, IoCloseOutline, IoVideocamOutline } from 'react-icons/io5'
import { MdMusicVideo } from 'react-icons/md'
import { PiImagesSquareLight, PiRocket } from 'react-icons/pi'

export default function Main_Left() {
  return (
    <div className="bg-white p-2 xl:p-4   xl:w-[1200px] border border-gray rounded-2xl ">
    {/* top */}
    <div className="border-gray border rounded-2xl p-2 xl:p-5">
      <span className="flex items-center gap-1 xl:gap-4">
        <p className="bg-my-gradient-bg bg-clip-text text-transparent text-[10px] md:text-[19px] xl:text-[21px] 2xl:text-[27px] font-bold">
          Contract Tracker
        </p>
        <hr className="border-0 w-[74%] md:w-[70%] xl:w-[80%] mt-1 h-[1px] bg-my-gradient-bg " />
        <FaAngleUp className="text-[#df2828f1] text-xs xl:text-xl" />
      </span>

      <div className="flex  xl:justify-between my-3 mt-5">
        <div className="flex items-center gap-2 xl:gap-3  ">
          <p className="w-[30px] h-[30px] xl:w-[50px] xl:h-[50px] flex justify-center items-center rounded-full bg-my-gradient-bg text-white xl:    text-3xl  xl:ms-2  ">
            {" "}
            <span className="w-[28px] h-[28px] xl:w-[48px] xl:h-[48px] bg-white rounded-full flex items-center justify-center p-1 xl:p-3 ">
              {" "}
              <PiRocket className=" text-red-700 text-4xl" />
            </span>{" "}
          </p>

          <p className="font-[600] text-[10px] xl:text-[14px] text-[#00000080]">
            Your Content Started With {"<V-customer Name>"}
          </p>
        </div>

        <div className="flex items-center text-[9px] text-center lg:text-right xl:text-[14px] text-[#00000080] font-[500] gap-1">
          <p>09-Sep-2023 05:45 PM | </p>
          <a className="bg-my-gradient-bg bg-clip-text text-transparent font-[400] ">
            View Requirements
          </a>{" "}
        </div>
      </div>
      <hr />

      <div className="flex  xl:justify-between my-3 mt-5 gap-4">
        <div className="flex items-center gap-2 xl:gap-3  ">
          <p className="w-[30px] h-[30px] xl:w-[50px] xl:h-[50px] flex justify-center items-center rounded-full bg-my-gradient-bg text-white xl:    text-3xl  xl:ms-2  ">
            {" "}
            <span className="w-[28px] h-[28px] xl:w-[48px] xl:h-[48px] bg-white rounded-full flex items-center justify-center p-1 xl:p-3 ">
              {" "}
              {" "}
              <IoCheckmarkOutline className=" text-red-700 text-xs xl:text-4xl" />
            </span>{" "}
          </p>

          <p className="font-[600] text-[9px]  xl:text-[14px]  text-[#00000080]">
            You Added Milestone {"< Milestone Title >"}
          </p>
        </div>

        <div className="flex items-center text-[9px] text-center lg:text-right xl:text-[14px]  text-[#00000080] font-[500]">
          <p>09-Sep-2023 05:45 PM </p>
        </div>
      </div>
      <hr />

   
      <div className="flex  xl:justify-between my-3 mt-5 gap-4">
        <div className="flex items-center gap-2 xl:gap-3  ">
          <p className="w-[30px] h-[30px] xl:w-[50px] xl:h-[50px] flex justify-center items-center rounded-full bg-my-gradient-bg text-white xl:    text-3xl  xl:ms-2  ">
            {" "}
            <span className="w-[28px] h-[28px] xl:w-[48px] xl:h-[48px] bg-white rounded-full flex items-center justify-center p-1 xl:p-3 ">
              {" "}
              <IoCheckmarkOutline className=" text-red-700 text-xs xl:text-4xl" />
            </span>{" "}
          </p>

          <p className="font-[600] text-[9px]  xl:text-[14px]  text-[#00000080]">
            You Funded Milestone {"< Milestone Title >"}
          </p>
        </div>

        <div className="flex items-center text-[9px] text-center lg:text-right xl:text-[14px] text-[#00000080] font-[500]">
          <p>09-Sep-2023 05:45 PM </p>
        </div>
      </div>
      <hr />
      <div className="flex  xl:justify-between my-3 mt-5 gap-4">
        <div className="flex items-center gap-2 xl:gap-3  ">
          <p className="w-[30px] h-[30px] xl:w-[50px] xl:h-[50px] flex justify-center items-center rounded-full bg-my-gradient-bg text-white xl:    text-3xl  xl:ms-2  ">
            {" "}
            <span className="w-[28px] h-[28px] xl:w-[48px] xl:h-[48px] bg-white rounded-full flex items-center justify-center p-1 xl:p-3 ">
              {" "}
              <IoCheckmarkOutline className=" text-red-700 text-xs xl:text-4xl" />
            </span>{" "}
          </p>

          <p className="font-[600] text-[9px]  xl:text-[14px]  text-[#00000080]">
            You Funded Milestone {"< Milestone Title >"}
          </p>
        </div>

        <div className="flex items-center text-[9px] text-center lg:text-right xl:text-[14px] text-[#00000080] font-[500]">
          <p>09-Sep-2023 05:45 PM </p>
        </div>
      </div>
      <hr />

  <div className="flex  xl:justify-between my-3 mt-5 gap-4">
        <div className="flex items-center gap-2 xl:gap-3  ">
          <p className="w-[30px] h-[30px] xl:w-[50px] xl:h-[50px] flex justify-center items-center rounded-full bg-my-gradient-bg text-white xl:    text-3xl  xl:ms-2  ">
            {" "}
            <span className="w-[28px] h-[28px] xl:w-[48px] xl:h-[48px] bg-white rounded-full flex items-center justify-center p-1 xl:p-3 ">
              {" "}
              <IoCloseOutline className=" text-red-700 text-4xl" />
            </span>{" "}
          </p>

          <p className="font-[600] text-[9px]  xl:text-[14px]  text-[#00000080]">
            You Decline The Delivery
          </p>
        </div>

        <div className="flex items-center text-[9px] text-center lg:text-right xl:text-[14px] text-[#00000080] font-[500]">
          <p>11-Sep-2023 02:00 PM </p>
        </div>
      </div>
      <hr />

      <div className="flex  xl:justify-between my-3 mt-5 gap-4">
        <div className="flex items-center gap-2 xl:gap-3  ">
          <p className="w-[30px] h-[30px] xl:w-[50px] xl:h-[50px] flex justify-center items-center rounded-full bg-my-gradient-bg text-white xl:    text-3xl  xl:ms-2  ">
            {" "}
            <span className="w-[28px] h-[28px] xl:w-[48px] xl:h-[48px] bg-white rounded-full flex items-center justify-center p-1 xl:p-3 ">
              {" "}
              <IoCheckmarkOutline className=" text-red-700 text-4xl" />
            </span>{" "}
          </p>

          <p className="font-[600] text-[9px]  xl:text-[14px]  text-[#00000080]">
            {"<V-Lancer Name> "} Submited Milestone
          </p>
        </div>

        <div className="flex items-center text-[9px] text-center lg:text-right xl:text-[14px] text-[#00000080] font-[500]">
          <p>12-Sep-2023 07:45 PM </p>
        </div>
      </div>
    </div>

    {/* Mid */}
    <div className="border-gray border rounded-2xl p-2 lg:p-5 my-5">
    <span className="flex items-center gap-1 xl:gap-4">
    <p className="bg-my-gradient-bg bg-clip-text text-transparent text-[8px] md:text-[19px] xl:text-[21px] 2xl:text-[27px] font-bold">
          Contract Milestones
        </p>
        <hr className="border-0 w-[74%] md:w-[70%] xl:w-[80%] mt-1 h-[1px] bg-my-gradient-bg " />
        <FaAngleUp className="text-[#df2828f1] text-xs xl:text-xl" />
      </span>

      <div className=" my-5">
        <span className="flex items-center gap-3 font-bold">
          <p className="w-[30px] h-[30px] xl:w-[50px] xl:h-[50px] flex justify-center items-center rounded-full bg-my-gradient-bg text-white text-3xl  ms-2  ">
            {" "}
            <span className="w-[28] h-[28] xl:w-[48px] xl:h-[48px] bg-white rounded-full flex items-center justify-center p-[7px]  xl:p-3 ">
              {" "}
              <FiEyeOff className=" text-blue-500 text-sm xl:text-2xl" />
            </span>{" "}
          </p>
          <h2 className="text-[#016DEA]">Hide Completed</h2>
        </span>

        <div className="border-l-[1px] border-dashed h-6 border-blue-400 ms-6 xl:ms-8"></div>

        {/* ////////////////////////////// */}

        <span className="flex items-center gap-3 font-bold">
          <p className="w-[30px] h-[30px] flex justify-center items-center rounded-full bg-my-gradient-bg text-white text-3xl  ms-2  ">
            {" "}
            <span className="w-[28] h-[28] xl:w-[48px] xl:h-[48px] bg-white rounded-full flex items-center justify-center p-[7px]  xl:p-3 ">
              {" "}
              <IoCheckmarkOutline className=" text-red-700 text-sm  xl:text-4xl" />
            </span>{" "}
          </p>
          <div>
            <h2 className="text-[#016DEA]">
              Milestone:{" "}
              <span className="font-[600] text-sm text-[#00000080]">
                {" <Milestone Tiltle>"}{" "}
              </span>{" "}
            </h2>
            <h2 className="text-[9px] xl:text-sm text-[#00000080] flex gap-2 xl:gap-3 items-center">
              $10.00 |{" "}
              <button className=" w-[30px] h-[16] xl:w-[57px] xl:h-[28px] rounded-3xl bg-[linear-gradient(90deg,_#02913F_0%,_#0ACD5E_100%)] text-white font-[600] text-[9px] xl:text-xs mt-1">
                Paid
              </button>{" "}
              | <span className="">{"Dilevery Date:"} </span>{" "}
              <span className="font-[500] text-[9px] xl:text-sm">
                11-Sep-2024 11:35 AM{" "}
              </span>{" "}
            </h2>
          </div>
        </span>

        <div className="border-l-[1px] border-solid h-7 border-blue-500 ms-6 xl:ms-8"></div>
        <span className="flex items-center gap-3 font-bold">
        <p className="w-[30px] h-[30px] flex justify-center items-center rounded-full bg-my-gradient-bg text-white text-3xl  ms-2  ">
        {" "}
        <span className="w-[28] h-[28] xl:w-[48px] xl:h-[48px] bg-white rounded-full flex items-center justify-center p-[7px]  xl:p-3 ">
        {" "}
              <IoCheckmarkOutline className=" text-red-700 text-sm xl:text-4xl" />
            </span>{" "}
          </p>
          <div>
            <h2 className="text-[#016DEA]">
              Milestone:{" "}
              <span className="font-[600] text-sm text-[#00000080]">
                {" <Milestone Tiltle>"}{" "}
              </span>{" "}
            </h2>
            <h2 className="text-[9px] xl:text-sm text-[#00000080] flex gap-2 xl:gap-3 items-center">
              $0.00 | <span className="font-[700] ">{"Due Date:"} </span>{" "}
              <span className="font-[500] text-[9px] xl:text-sm">
                11-Sep-2024 11:35 AM{" "}
              </span>{" "}
              |{" "}
              <button className="w-[80px] h-[20px] xl:w-[105px] xl:h-[30px] rounded-3xl bg-my-gradient-bg text-white font-[600] text-[9px]  xl:text-xs">
                Add Funds
              </button>{" "}
            </h2>
          </div>
        </span>

        <div className="border-l-[1px] border-solid h-7 border-blue-600 ms-6 xl:ms-8"></div>

        <span className="flex items-center gap-3 font-bold">
        <p className="w-[30px] h-[30px] flex justify-center items-center rounded-full bg-my-gradient-bg text-white text-3xl  ms-2  ">
            {" "}
            <span className="w-[28] h-[28] xl:w-[48px] xl:h-[48px] bg-white rounded-full flex items-center justify-center p-[7px]  xl:p-3 ">
            {" "}
              <FiEyeOff className=" text-blue-500 text-sm xl:text-2xl" />
            </span>{" "}
          </p>
          <h2 className="text-[#016DEA]">Hide All Upcoming</h2>
        </span>
      </div>
    </div>

    {/* Bottom */}
    <div className="border-gray border rounded-2xl p-2 xl:p-5 my-5">
      <span className="flex items-center gap-1 xl:gap-4">
        <p className="bg-my-gradient-bg bg-clip-text text-transparent text-[9px] xl:text-[20px] font-bold">
          Contract Deliverables
        </p>
        <hr className="border-0 w-[77%] h-[1px] bg-my-gradient-bg mt-1" />
        <FaAngleUp className="text-[#df2828f1] text-sm lg:text-xl" />
      </span>

      <div className="mt-4 flex flex-col  lg:flex-row  gap-5">
        <p className="w-[50px] h-[50px] flex justify-center items-center rounded-full bg-my-gradient-bg text-white text-3xl  ms-2   ">
          {" "}
          <span className="w-[48px] h-[48px] bg-white rounded-full flex items-center justify-center p-3 ">
            {" "}
            <GrCopy className="transform scale-x-[-1] text-blue-600" />
          </span>{" "}
        </p>

        <div className="border-gray border rounded-2xl p-[10px] w-[95%]">
          <div className="flex items-center justify-between pb-2">
            <p className="text-[#016DEA] font-[700] text-xs lg:text-sm">
              Delivery-1
            </p>
            <span className="flex items-center justify-center gap-3">
              <span className="text-xs lg:text-[14px] text-[#00000080] font-[500]">
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

          <div className="grid grid-cols-1 lg:grid-cols-6 p-2 gap-y-3 ">
            {/* Card s */}
            <div className="w-full lg:w-[136px] bg-my-gradient-bg rounded-lg p-2 flex flex-col items-center justify-between shadow-inner-bottom">
              <div className="w-full flex justify-end">
                <span className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-gray-500 text-lg">
                  <BiDotsVerticalRounded />
                </span>
              </div>
              <div className="flex items-center justify-center  pb-5 text-2xl text-white">
                <PiImagesSquareLight />
              </div>
            </div>
            <div className="w-full lg:w-[136px] h-[90px]  bg-my-gradient-bg rounded-lg p-2 flex flex-col items-center justify-between shadow-inner-bottom">
              <div className="w-full flex justify-end">
                <span className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-gray-500 text-lg">
                  <BiDotsVerticalRounded />
                </span>
              </div>
              <div className="flex items-center justify-center  pb-5 text-2xl text-white">
                <IoVideocamOutline />
              </div>
            </div>
            <div className="w-full lg:w-[136px] h-[90px]  bg-my-gradient-bg rounded-lg p-2 flex flex-col items-center justify-between shadow-inner-bottom">
              <div className="w-full flex justify-end">
                <span className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-gray-500 text-lg">
                  <BiDotsVerticalRounded />
                </span>
              </div>
              <div className="flex items-center justify-center  pb-5 text-2xl text-white">
                <MdMusicVideo />
              </div>
            </div>
            <div className="w-full lg:w-[136px] h-[90px]  rounded-lg p-2 flex flex-col items-center justify-between border  border-[#80808049]">
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

            <div className="w-full lg:w-[136px] h-[90px]  rounded-lg p-2 flex flex-col items-center justify-between border border-[#80808049]">
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
            <div className="w-full lg:w-[136px] rounded-lg p-2 flex flex-col items-center justify-between border border-[#80808049]">
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
            <div className="w-full lg:w-[136px] h-[90px]  rounded-lg p-2 flex flex-col items-center justify-between border border-[#80808049]">
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
            <div className="w-full lg:w-[136px]h-[90px] rounded-lg p-2 flex flex-col items-center justify-between border border-[#80808049]">
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
  )
}
