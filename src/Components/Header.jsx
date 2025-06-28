import React from "react";
import logo from "../assets/lws-logo-en.svg";

function Header() {
  return (
    <nav className="py-5 top-0 w-full sticky !bg-[#191D26] z-20">
      <div className="container mx-auto flex items-center justify-between gap-x-6">
        <a href="/">
          <img src={logo} className="object-cover h-[3rem]" alt="lws-logo" />
        </a>
      </div>
    </nav>
  );
}

export default Header;
