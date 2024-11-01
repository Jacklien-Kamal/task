'use client'
import React from "react";
import { useState } from "react";
import Image from "next/image";
import logo from "../../../public/logo.png";
import { FiSearch } from "react-icons/fi";
import { LuPlus } from "react-icons/lu";
import { FaRegBell } from "react-icons/fa6";
import { PiWechatLogoLight } from "react-icons/pi";
import { FaRegHeart } from "react-icons/fa6";
import { BiCoin, BiMenuAltRight } from "react-icons/bi";
import { PiCoinVertical } from "react-icons/pi";
import { IoIosArrowDown } from "react-icons/io";
export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleNavbar = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <header className="w-full bg-slate-50 h-[30px] md:h-[70px] px-5 md:p-4 flex items-center justify-between border-b-2 relative">
        <div>
          <Image src={logo} alt="logo" className="w-[28px] h-[20px] md:w-[79px] md:h-[66px]" />
        </div>
  
        {/* Mobile menu button */}
        <button
          className="md:hidden flex items-center"
          onClick={toggleNavbar}
        >
          <BiMenuAltRight className="text-2xl text-red-700" />
        </button>
  
        {/* Navigation items */}
        <div className={`md:flex items-center gap-5 ${isOpen ? 'hidden  ' : 'hidden'} md:block`}>
          <p className="w-[40px] h-[40px] flex justify-center items-center rounded-full bg-my-gradient-bg text-white text-2xl">
            <FiSearch />
          </p>
          <p className="w-[40px] h-[40px] flex justify-center items-center rounded-full bg-my-gradient-bg text-white text-2xl">
            <LuPlus />
          </p>
          <div className="relative w-[40px] h-[40px]">
            <p className="flex justify-center items-center w-full h-full rounded-full bg-my-gradient-bg text-white text-2xl">
              <FaRegBell />
            </p>
            <span className="absolute top-[-5px] right-[-5px] border border-red-500 text-blue-400 bg-white text-xs font-bold rounded-full w-6 h-4 flex justify-center items-center">
              3
            </span>
          </div>
          <div className="relative w-[40px] h-[40px]">
            <p className="flex justify-center items-center w-full h-full rounded-full bg-my-gradient-bg text-white text-2xl">
              <FaRegHeart />
            </p>
            <span className="absolute top-[-5px] right-[-5px] border border-red-500 text-blue-400 bg-white text-xs font-bold rounded-full w-6 h-4 flex justify-center items-center">
              3
            </span>
          </div>
          <div className="relative w-[40px] h-[40px]">
            <p className="flex justify-center items-center w-full h-full rounded-full bg-my-gradient-bg text-white text-2xl">
              <PiWechatLogoLight />
            </p>
            <span className="absolute top-[-5px] right-[-5px] border border-red-500 text-blue-400 bg-white text-xs font-bold rounded-full w-6 h-4 flex justify-center items-center">
              3
            </span>
          </div>
          <div className="relative w-[40px] h-[40px]">
            <p className="flex justify-center items-center w-full h-full rounded-full bg-my-gradient-bg text-white text-2xl">
              <BiCoin />
              <PiCoinVertical />
            </p>
            <span className="absolute top-[-5px] right-[-5px] border border-red-500 text-blue-400 bg-white text-xs font-bold rounded-full w-6 h-4 flex justify-center items-center">
              3
            </span>
          </div>
          <div className="relative w-[40px] h-[40px]">
            <p className="flex justify-center items-center w-full h-full rounded-full bg-my-gradient-bg text-white text-2xl">
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13.6 16.733c.234.269.548.456.895.534a1.4 1.4 0 0 0 1.75-.762c.172-.615-.446-1.287-1.242-1.481-.796-.194-1.41-.861-1.241-1.481a1.4 1.4 0 0 1 1.75-.762c.343.077.654.26.888.524m-1.358 4.017v.617m0-5.939v.725M4 15v4m3-6v6M6 8.5 10.5 5 14 7.5 18 4m0 0h-3.5M18 4v3m2 8a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
                />
              </svg>
            </p>
            <span className="absolute top-[-5px] right-[-5px] border border-red-500 text-blue-400 bg-white text-xs font-bold rounded-full w-6 h-4 flex justify-center items-center">
              3
            </span>
          </div>
  
          <div className="flex justify-center items-center">
            <p className="w-[45px] h-[45px] flex justify-center items-center rounded-full ">
              <img
                alt=""
                src="https://png.pngtree.com/png-vector/20230928/ourmid/pngtree-young-afro-professional-doctor-png-image_10148632.png"
                className="w-full h-full rounded-full"
              />
            </p>
            <IoIosArrowDown className="text-blue-500" />
            <BiMenuAltRight className="text-3xl text-[#c02a2a] tranform scale-y-[-1] mx-3 hidden md:flex" />

          </div>
        </div>
  
        {/* Mobile Sidebar */}
        {isOpen && (
          <div className="fixed top-0 right-0 h-full w-64 bg-slate-50 border-l-2 transform transition-transform duration-300 ease-in-out z-50 flex flex-col gap-4 items-center p-3">
               <p className="w-[40px] h-[40px] flex justify-center items-center rounded-full bg-my-gradient-bg text-white text-2xl">
            <FiSearch />
          </p>
          <p className="w-[40px] h-[40px] flex justify-center items-center rounded-full bg-my-gradient-bg text-white text-2xl">
            <LuPlus />
          </p>
          <div className="relative w-[40px] h-[40px]">
            <p className="flex justify-center items-center w-full h-full rounded-full bg-my-gradient-bg text-white text-2xl">
              <FaRegBell />
            </p>
            <span className="absolute top-[-5px] right-[-5px] border border-red-500 text-blue-400 bg-white text-xs font-bold rounded-full w-6 h-4 flex justify-center items-center">
              3
            </span>
          </div>
          <div className="relative w-[40px] h-[40px]">
            <p className="flex justify-center items-center w-full h-full rounded-full bg-my-gradient-bg text-white text-2xl">
              <FaRegHeart />
            </p>
            <span className="absolute top-[-5px] right-[-5px] border border-red-500 text-blue-400 bg-white text-xs font-bold rounded-full w-6 h-4 flex justify-center items-center">
              3
            </span>
          </div>
          <div className="relative w-[40px] h-[40px]">
            <p className="flex justify-center items-center w-full h-full rounded-full bg-my-gradient-bg text-white text-2xl">
              <PiWechatLogoLight />
            </p>
            <span className="absolute top-[-5px] right-[-5px] border border-red-500 text-blue-400 bg-white text-xs font-bold rounded-full w-6 h-4 flex justify-center items-center">
              3
            </span>
          </div>
          <div className="relative w-[40px] h-[40px]">
            <p className="flex justify-center items-center w-full h-full rounded-full bg-my-gradient-bg text-white text-2xl">
              <BiCoin />
              <PiCoinVertical />
            </p>
            <span className="absolute top-[-5px] right-[-5px] border border-red-500 text-blue-400 bg-white text-xs font-bold rounded-full w-6 h-4 flex justify-center items-center">
              3
            </span>
          </div>
          <div className="relative w-[40px] h-[40px]">
            <p className="flex justify-center items-center w-full h-full rounded-full bg-my-gradient-bg text-white text-2xl">
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13.6 16.733c.234.269.548.456.895.534a1.4 1.4 0 0 0 1.75-.762c.172-.615-.446-1.287-1.242-1.481-.796-.194-1.41-.861-1.241-1.481a1.4 1.4 0 0 1 1.75-.762c.343.077.654.26.888.524m-1.358 4.017v.617m0-5.939v.725M4 15v4m3-6v6M6 8.5 10.5 5 14 7.5 18 4m0 0h-3.5M18 4v3m2 8a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
                />
              </svg>
            </p>
            <span className="absolute top-[-5px] right-[-5px] border border-red-500 text-blue-400 bg-white text-xs font-bold rounded-full w-6 h-4 flex justify-center items-center">
              3
            </span>
          </div>
  
          <div className="flex justify-center items-center">
            <p className="w-[45px] h-[45px] flex justify-center items-center rounded-full ">
              <img
                alt=""
                src="https://png.pngtree.com/png-vector/20230928/ourmid/pngtree-young-afro-professional-doctor-png-image_10148632.png"
                className="w-full h-full rounded-full"
              />
            </p>
            <IoIosArrowDown className="text-blue-500" />
          </div>
          </div>
        )}
  
        {/* Overlay when sidebar is open */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"
            onClick={toggleNavbar}
          />
        )}
      </header>
    );
  }