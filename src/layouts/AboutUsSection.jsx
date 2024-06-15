import { Heading, Container } from "../components";

export const AboutUsSection = () => {
  return (
    <section className="py-20">
      <Heading text="Nosotros" />
      <Container className="grid gap-10 lg:grid-cols-2">
        <div className="flex items-center justify-center">
          <img src="/img/nosotros.jpg" alt="imagen sobre nosotros" />
        </div>
        <div className="flex flex-col items-center justify-center gap-4 text-xl">
          <p>
            Guitar LA es tu destino principal para todo lo relacionado con
            guitarras. Ubicados en el corazón de Los Ángeles, nos enorgullecemos
            de ofrecer una selección diversa de guitarras de las marcas más
            reconocidas en la industria. Ya sea que seas un principiante
            buscando tu primera guitarra o un profesional experimentado en busca
            de un instrumento de alta gama, tenemos algo para satisfacer las
            necesidades de cada músico.
          </p>
          <p>
            Nuestra tienda cuenta con una amplia gama de guitarras acústicas,
            eléctricas y bajos, así como accesorios, amplificadores y más.
            También ofrecemos clases de guitarra, reparaciones y ajustes
            personalizados para asegurar que tu instrumento suene lo mejor
            posible. Visítanos hoy y deja que nuestro personal experto te guíe
            en tu viaje musical.
          </p>
        </div>
      </Container>
    </section>
  );
};
