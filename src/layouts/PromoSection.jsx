import { Link } from "react-router-dom";
import { Container, Heading } from "../components";

export const PromoSection = () => {
  return (
    <section className="py-20 bg-center bg-no-repeat bg-cover bg-courses-gradient">
      <Container className="grid h-full text-center place-items-center lg:grid-cols-2">
        <div className="flex flex-col items-center col-start-2 col-end-3 space-y-10">
          <Heading text="Aprende a tocar guitarra" />
          <p className="text-xl leading-relaxed text-white">
            Descubre el apasionante mundo de la música y desarrolla tus
            habilidades con nuestra completa guía para aprender a tocar la
            guitarra. Ya seas principiante busques mejorar tus técnicas, nuestro
            curso está diseñado para ayudarte a alcanzar tus metas musicales.
          </p>
          <Link
            to={`/`}
            className="block px-8 py-2 text-sm font-bold text-white uppercase border-2 border-yellow-600 hover:bg-yellow-600"
          >
            Más Información
          </Link>
        </div>
      </Container>
    </section>
  );
};
