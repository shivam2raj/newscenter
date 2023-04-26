import React from "react";
import DropDown from "./DropDown";
import { ConDrop } from "./ConDrop";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <div className="grid grid-cols-3 mt-4 xl:mt-8">
        <div className="flex">
          <div className="flex flex-col m-3 space-y-1.5">
            <span className="block h-0.5 w-8 animate-pulse bg-black"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-black"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-black"></span>
          </div>
        </div>
        <div className="flex justify-center">
          <img className="w-10 h-10 xl:w-16 xl:h-14" src={require("./logo.png")} alt="logo" />
          <Link to="/">
          <p className="text-black text-sm xl:text-xl xl:font-medium pt-3">NewsCreation</p>
          </Link>
        </div>
        <div className="mr-56">
          <ul className="flex p-1 flex-row justify-between">
            <li>
              <DropDown />
            </li>
            <li>
              <img
                className="w-8  h-8"
                src={require("./search.png")}
                alt="logo"
              />
            </li>
            <li>
              <ConDrop />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
