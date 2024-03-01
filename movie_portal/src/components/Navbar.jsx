import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="w-full flex flex-row md:justify-around justify-between items-center bg-lotus-950 py-5 text-white px-4 md:px-0">
        <div className="flex items-center">
          <img
            className="md:w-14 w-10"
            src="https://cdn-icons-png.flaticon.com/128/1038/1038100.png"
            alt=""
          />
          <h1 className="md:text-2xl text-sm ml-2 font-bold ">M O V I E S</h1>
        </div>

        <div className="lg:flex flex-row font-mono items-center font-bold hidden ">
          <span className="mx-5 h-8 text-xl hover:border-b-4 hover:border-white hover:cursor-pointer">
            Movies
          </span>
          <span className="mx-5 h-8 text-xl hover:border-b-4 hover:border-white hover:cursor-pointer ">
            Shows
          </span>
          <span className="mx-5 h-8 text-xl hover:border-b-4 hover:border-white hover:cursor-pointer">
            Tickets
          </span>
          <span className="mx-5 h-8 text-xl hover:border-b-4 hover:border-white hover:cursor-pointer">
            Favourite
          </span>
          <span className="mx-5 h-8 text-xl hover:border-b-4 hover:border-white hover:cursor-pointer">
            Trending
          </span>
        </div>
        <div className="bg-white md:h-10 flex items-center justify-center rounded-sm font-bold font-mono text-black md:w-20 w-16 hover:text-white hover:bg-black mr-2">
          <NavLink to="/login">Login</NavLink>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
