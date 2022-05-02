import React from "react";
import logo from "./logo.svg";

export default function Header() {
  return (
    <header className="py-10 bg-red-400  ">
      <nav className="flex justify-between items-center">
        <div className="logo">
          <h1 className="text-3xl font-bold">Portfolio</h1>
        </div>
        <div className=" navlinks flex flex-row gap-5 hover:bg-red ">
          <a href="#" className="">
            SERVICES
          </a>
          <a href="#" className="">
            PORTFOLIO
          </a>
          <a href="#" className="">
            RESUME
          </a>
          <a href="#" className="">
            CONTACT
          </a>
        </div>
      </nav>
    </header>
  );
}
