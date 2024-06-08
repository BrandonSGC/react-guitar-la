import { useEffect, useState } from "react";
import { Container, NavBar } from "../components";
import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  const [isHome, setIsHome] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    pathname === "/" ? setIsHome(true) : setIsHome(false);
  }, [pathname]);

  return (
    <header
      className={`relative py-12 bg-center bg-cover md:h-auto bg-header-gradient ${
        isHome ? "h-screen" : ""
      }`}
    >
      <Container>
        <div className="flex items-center justify-between gap-10">
          <Link to={"/"}>
            <img
              className="w-[200px] md:w-full"
              src="/img/logo.svg"
              alt="logo"
            />
          </Link>

          <NavBar />
        </div>

        {isHome && (
          <div className="w-3/4 my-20 space-y-6 text-white lg:w-1/2">
            <h1 className="font-black text-7xl">Modelo VAI</h1>
            <p className="text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              nostrum exercitationem tenetur ducimus. Rerum ipsum beatae odio,
              sapiente harum hic.
            </p>
            <p className="text-6xl font-black text-yellow-600">$399</p>
            <Link className="inline-block px-8 py-2 font-bold uppercase border border-yellow-600 hover:bg-yellow-600">
              Ver Producto
            </Link>
          </div>
        )}
      </Container>

      {isHome && (
        <img
          className="absolute bottom-0 right-0 hidden lg:block"
          src="/img/header_guitarra.png"
          alt="guitarra header"
        />
      )}
    </header>
  );
};
