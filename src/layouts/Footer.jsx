import { Link } from "react-router-dom";
import { Container } from "../components";

export const Footer = () => {
  return (
    <footer className="py-10 text-white bg-neutral-900">
      <Container className="flex flex-col items-center">
        <Link to="/" className="w-full max-w-56">
          <img src="/img/logo.svg" alt="Guitar LA logo" />
        </Link>

        <nav className="flex flex-col items-center gap-5 my-10 md:flex-row">
          <Link className="hover:text-yellow-600" to="/">
            Inicio
          </Link>
          <Link className="hover:text-yellow-600" to="/about">
            Nosotros
          </Link>
          <Link className="hover:text-yellow-600" to="/blog">
            Blog
          </Link>
          <Link className="hover:text-yellow-600" to="/store">
            Tienda
          </Link>
        </nav>

        <p>
          Website created by{" "}
          <a
            className="text-yellow-600 underline hover:text-yellow-700"
            href="https://www.linkedin.com/in/brandon-gómez-064904239"
            target="_blank"
          >
            Brandon Gomez Carvajal
          </a>
        </p>
      </Container>
    </footer>
  );
};
