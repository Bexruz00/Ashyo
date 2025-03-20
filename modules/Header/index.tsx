import React from "react";
import HeaderTop from "./HeaderTop";
import HeaderSearch from "./HeaderCenter/HeaderSearch";

const Header = () => {
  return (
    <header>
      <HeaderTop />
      <HeaderSearch/>
    </header>
  );
};

export default Header;
