"use client"; // Ensure the component is rendered on the client side
import React from "react";
import MenuBtn from "./MenuBtn";


const UlNavbar = () => {
  return (
    <>

    {/* ul in desktop screen */}
      <ul className="hidden sm:flex h-14 px-10 items-center gap-10 child:font-bold child:text-2xl child:text-white bg-second rounded-3xl">
        <li>خانه</li>
        <li>محصولات</li>
        <li>درباره ما</li>
        <li>تماس باما</li>
      </ul>

      {/* ul in mobile screen */}
      <MenuBtn />
    </>
  );
};

export default UlNavbar;



