import React from "react";
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
