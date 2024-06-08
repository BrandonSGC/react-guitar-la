import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { CloseIcon, MenuIcon } from "../assets";

export const NavBar = () => {
  const [showNavBar, setShowNavBar] = useState(false);

  return (
    <div>
      <MenuIcon
        className="text-yellow-600 cursor-pointer size-10 md:hidden"
        onClick={() => setShowNavBar(!showNavBar)}
      />

      <nav
        className={`absolute backdrop-blur-3xl bg-stone-700-700 bg-opacity-50 md:bg-opacity-100 p-4 md:p-0 top-0 right-0 w-[70%] h-screen flex flex-col gap-5 text-white md:flex-row md:bg-transparent md:backdrop-blur-none md:relative z-10 md:h-auto ${
          showNavBar ? "" : "hidden md:flex"
        }`}
      >
        <CloseIcon
          className="text-white cursor-pointer size-10 md:hidden"
          onClick={() => setShowNavBar(!showNavBar)}
        />

        <Link className="w-[80%] my-10 mx-auto md:hidden" to={"/"}>
          <img className="" src="/img/logo.svg" alt="logo" />
        </Link>

        <NavLink
          to={"/"}
          className={({ isActive }) =>
            `hover:bg-yellow-600 p-2 duration-300 text-center font-bold uppercase 
          ${isActive && "border-b-2 border-yellow-600"}`
          }
        >
          Inicio
        </NavLink>
        <NavLink
          to={"/about"}
          className={({ isActive }) =>
            `hover:bg-yellow-600 p-2 duration-300 text-center font-bold uppercase 
          ${isActive && "border-b-2 border-yellow-600"}`
          }
        >
          Nosotros
        </NavLink>
        <NavLink
          to={"/blog"}
          className={({ isActive }) =>
            `hover:bg-yellow-600 p-2 duration-300 text-center font-bold uppercase 
          ${isActive && "border-b-2 border-yellow-600"}`
          }
        >
          Blog
        </NavLink>
        <NavLink
          to={"/store"}
          className={({ isActive }) =>
            `hover:bg-yellow-600 p-2 duration-300 text-center font-bold uppercase 
          ${isActive && "border-b-2 border-yellow-600"}`
          }
        >
          Tienda
        </NavLink>
      </nav>
    </div>
  );
};
