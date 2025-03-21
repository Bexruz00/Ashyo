import React from "react";
import HeaderTop from "./HeaderTop";
import HeaderMobile from "./HeaderMobile";
import HeaderCenter from "./HeaderCenter";
import HeaderCategory from "./HeaderCategory";

const Header = () => {
  return (
    <header className="pb-[30px]">
      <HeaderTop />
      <HeaderCenter/>
      <HeaderMobile/>
      <HeaderCategory/>
    </header>
  );
};

export default Header;
