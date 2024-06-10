import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { CloseIcon, MenuIcon } from "../assets";
import { ShoppingCart } from "./";
import { useOutsideClick } from "../hooks";

const links = [
  { id: 1, route: "/", text: "inicio" },
  { id: 2, route: "/about", text: "Nosotros" },
  { id: 3, route: "/blog", text: "Blog" },
  { id: 4, route: "/store", text: "Tienda" },
];

export const NavBar = () => {
  const [showNavBar, setShowNavBar] = useState(false);
  const navRef = useOutsideClick(() => setShowNavBar(false));

  return (
    <div ref={navRef}>
      <MenuIcon
        className="text-yellow-600 cursor-pointer size-10 md:hidden"
        onClick={() => setShowNavBar(!showNavBar)}
      />

      <nav
        className={`fixed backdrop-blur-3xl bg-stone-700 bg-opacity-50 md:bg-opacity-100 p-4 md:p-0 top-0 right-0 w-[70%] h-screen flex flex-col gap-5 md:gap-2 text-white md:flex-row md:bg-transparent md:backdrop-blur-none md:relative z-10 md:h-auto ${
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

        {links.map((link) => (
          <NavLink
            key={link.id}
            to={link.route}
            className={({ isActive }) =>
              `hover:bg-yellow-600 p-2 duration-300 text-center font-bold uppercase 
              ${isActive && "border-b-2 border-yellow-600"}`
            }
          >
            {link.text}
          </NavLink>
        ))}

        <ShoppingCart />
      </nav>
    </div>
  );
};
