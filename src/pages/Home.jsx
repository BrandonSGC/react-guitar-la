import { Link, NavLink } from "react-router-dom";
import { Container } from "../components";

export const Home = () => {
  return (
    <>
      <header className="py-12 bg-center bg-cover bg-header-gradient">
        <Container>
          {/* Navbar */}
          <div className="flex flex-col items-center gap-10 md:flex-row md:justify-between">
            <Link to={"/"}>
              <img className="w-[300px]" src="/img/logo.svg" alt="logo" />
            </Link>
            <nav className="flex flex-col justify-center w-full text-lg font-bold text-white uppercase md:flex-row md:gap-5 md:w-auto">
              <NavLink
                className={({ isActive }) =>
                  `hover:bg-yellow-600 p-2 duration-300 text-center 
                  ${isActive && "border-b-2 border-yellow-600"}`
                }
                to={"/"}
              >
                Inicio
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `hover:bg-yellow-600 p-2 duration-300 text-center 
                  ${isActive && "border-b-2 border-yellow-600"}`
                }
                to={"/about"}
              >
                Nosotros
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `hover:bg-yellow-600 p-2 duration-300 text-center 
                  ${isActive && "border-b-2 border-yellow-600"}`
                }
                to={"/blog"}
              >
                Blog
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `hover:bg-yellow-600 p-2 duration-300 text-center 
                  ${isActive && "border-b-2 border-yellow-600"}`
                }
                to={"/store"}
              >
                Tienda
              </NavLink>
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
