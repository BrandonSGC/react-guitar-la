import { Link, NavLink } from "react-router-dom";
import { Container } from "../components";

export const Home = () => {
  return (
    <>
      <header className="bg-cover bg-center bg-header-gradient py-12">
        <Container>
          {/* Navbar */}
          <div className="flex flex-col items-center md:flex-row md:justify-between gap-10">
            <Link to={"/"}>
              <img className="w-[300px]" src="/img/logo.svg" alt="logo" />
            </Link>
            <nav className="flex flex-col justify-center text-white md:flex-row md:gap-5 uppercase text-lg font-bold w-full md:w-auto">
              <NavLink className={`hover:bg-yellow-600 p-2 duration-300 text-center`} to={"/"}>Inicio</NavLink>
              <NavLink className={`hover:bg-yellow-600 p-2 duration-300 text-center`} to={"/"}>Nosotros</NavLink>
              <NavLink className={`hover:bg-yellow-600 p-2 duration-300 text-center`} to={"/"}>Blog</NavLink>
              <NavLink className={`hover:bg-yellow-600 p-2 duration-300 text-center`} to={"/"}>Tienda</NavLink>
            </nav>
          </div>

          <div>
            <h1>Modelo VAI</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              nostrum exercitationem tenetur ducimus. Rerum ipsum beatae odio,
              sapiente harum hic. Ad eaque molestias suscipit aliquam molestiae
              similique doloribus at temporibus.
            </p>
            <p>$399</p>
            <Link>Ver Producto</Link>
          </div>
        </Container>

        <img
          className="hidden"
          src="/img/header_guitarra.png"
          alt="guitarra header"
        />
      </header>
    </>
  );
};
