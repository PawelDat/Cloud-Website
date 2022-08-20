import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handleChange = () => setNav(!nav);

  return (
    <div className="w-screen h-[5em] z-10 bg-zinc-200 fixed drop-shadow-lg ">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
        <Link to="home" smooth={true} duration={500}>
          <h1 className="text-3xl font-bold mr-4 cursor-pointer">CLOUD.</h1>
          </Link>
          <ul className="hidden md:flex ">
            <li>
              <Link to="home" smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li>
              <Link to="about" smooth={true} offset={-200} duration={500}>
                About
              </Link>
            </li>
            <li>
              <Link to="pricing" smooth={true} offset={-50} duration={500}>
                Pricing
              </Link>
            </li>
            <li>
              <Link to="support" smooth={true} offset={-50} duration={500}>
                Support
              </Link>
            </li>
            <li>
              <Link to="platforms" smooth={true} offset={-100} duration={500}>
                Platforms
              </Link>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex pr-4">
          <button className="border-none bg-transparent text-black mr-4">
            Sign In
          </button>
          <button className="px-8 py-3">Sign Up</button>
        </div>
        <div className="md:hidden" onClick={handleChange}>
          {!nav ? <MenuIcon className="w-5" /> : <XIcon className="w-5" />}
        </div>
      </div>
      <ul className={!nav ? "hidden" : "abosolute bg-zinc-200 w-full px-8"}>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link onClick={handleChange} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link
            onClick={handleChange}
            to="about"
            smooth={true}
            offset={-200}
            duration={500}
          >
            About
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link
            onClick={handleChange}
            to="pricing"
            smooth={true}
            offset={-50}
            duration={500}
          >
            Pricing
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full cursor-pointer ">
          <Link
            onClick={handleChange}
            to="support"
            smooth={true}
            offset={-50}
            duration={500}
          >
            Support
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link
            onClick={handleChange}
            to="platforms"
            smooth={true}
            offset={-100}
            duration={500}
          >
            Platforms
          </Link>
        </li>

        <div className="flex flex-col my-4">
          <button className="bg-transparent text-indigo-600 mb-4 px-10 py-3">
            Sign In
          </button>
          <button className="px-8 py-3 ">Sign Up</button>
        </div>
      </ul>
    </div>
  );
};

export default NavBar;
