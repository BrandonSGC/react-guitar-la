import { Container, GuitarCard, Heading } from "../components";
import { guitars } from "../data/guitars";

export const StoreSection = () => {
  return (
    <main className="py-12">
      <Container>
        <Heading text="Nuestra Colección" />

        <div className="grid gap-2 md:grid-cols-2 md:gap-5 lg:grid-cols-3">
          {guitars.map((guitar) => (
            <GuitarCard key={guitar.id} {...guitar} />
          ))}
        </div>
      </Container>
    </main>
  );
};
