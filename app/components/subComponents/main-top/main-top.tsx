import React from 'react'
import { IoArrowBackOutline } from 'react-icons/io5'

export default function Main_Top() {
  return (
<section className="flex items-center gap-2 xl:gap-5 w-full ">
        <p className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] flex justify-center items-center rounded-full bg-my-gradient-bg text-white xl:text-2xl mt-1">
          {" "}
          <IoArrowBackOutline />
        </p>
        <p className="bg-my-gradient-bg bg-clip-text text-transparent text-[10px] md:text-[19px] xl:text-[21px] 2xl:text-[27px] font-bold">
          Project Contract{" "}
        </p>
        <hr className="border-0  w-[68%] md:w-[70%] xl:w-[80%] h-[1px] bg-my-gradient-bg mt-1" />
      </section>
  )
}
