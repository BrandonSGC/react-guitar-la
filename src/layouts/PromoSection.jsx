import { Link } from "react-router-dom";
import { Container, Heading } from "../components";

export const PromoSection = () => {
  return (
    <section className="py-20 bg-center bg-no-repeat bg-cover bg-courses-gradient">
      <Container className="grid h-full text-center place-items-center lg:grid-cols-2">
        <div className="flex flex-col items-center col-start-2 col-end-3 space-y-10">
          <Heading text="Aprende a tocar guitarra" />
          <p className="text-xl leading-relaxed text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            porro cum, sed fuga sunt officiis beatae accusantium numquam
            temporibus molestiae hic eveniet harum dicta neque iusto facere!
            Placeat, deleniti earum!
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
