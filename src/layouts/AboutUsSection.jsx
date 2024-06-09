import { Heading, Container } from "../components";

export const AboutUsSection = () => {
  return (
    <section className="py-20">
      <Heading text="Nosotros" />
      <Container className="grid gap-10 lg:grid-cols-2">
        <div className="flex items-center justify-center">
          <img src="/img/nosotros.jpg" alt="about us image" />
        </div>
        <div className="flex flex-col items-center justify-center gap-4 text-xl">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            dignissimos architecto autem beatae quidem, libero inventore labore
            incidunt tempora consectetur harum, praesentium quasi facere?
            Placeat dolores quidem cumque ratione animi.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ea
            voluptatem debitis cumque quas sunt eligendi, dicta quasi fuga quis?
            Laudantium quod nostrum corporis sequi nesciunt placeat maiores
            eligendi sapiente.
          </p>
        </div>
      </Container>
    </section>
  );
};
