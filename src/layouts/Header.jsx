import { useState } from "react";
import { Link } from "react-router-dom";
import { Container, NavBar } from "../components";
import { useHome } from "../hooks";
import { guitars } from "../data/guitars";

export const Header = () => {
  const [guitar, setGuitar] = useState(
    guitars.find((guitar) => guitar.id === 1)
  );
  const { isHome } = useHome();

  return (
    <header
      className={`relative py-12 bg-center bg-cover md:h-auto bg-header-gradient overflow-hidden ${
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
          <div className="w-3/4 my-20 space-y-6 text-white lg:w-1/2 fadeRight">
            <h1 className="font-black text-7xl">{guitar?.name}</h1>
            <p className="text-xl">{guitar?.description}</p>
            <p className="text-6xl font-black text-yellow-600">
              ${guitar?.price}
            </p>
            <Link
              to={`/store/guitar/${guitar.id}`}
              className="inline-block px-8 py-2 font-bold uppercase border border-yellow-600 hover:bg-yellow-600"
            >
              Ver Producto
            </Link>
          </div>
        )}
      </Container>

      {isHome && (
        <img
          className="absolute bottom-0 right-0 hidden lg:block fadeLeft"
          src="/img/header_guitarra.png"
          alt="guitarra header"
        />
      )}
    </header>
  );
};
