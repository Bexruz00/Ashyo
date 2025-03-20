import React from "react";
import HeaderTop from "./HeaderTop";
import HeaderMobile from "./HeaderMobile";
import HeaderCenter from "./HeaderCenter";

const Header = () => {
  return (
    <header>
      <HeaderTop />
      <HeaderCenter/>
      <HeaderMobile/>
    </header>
  );
};

export default Header;
