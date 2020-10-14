import React from "react";
import { ReactComponent as SpaceXLogo } from "../assets/images/space-X-logo.svg";

function Header() {
  return (
    <nav class="flex items-center justify-between flex-wrap bg-black py-3">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <SpaceXLogo />
      </div>
      <div class="block lg:hidden"></div>
    </nav>
  );
}

export default Header;
