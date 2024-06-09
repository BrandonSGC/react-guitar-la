import { useParams } from "react-router-dom";
import { guitars } from "../data";
import { Container, GuitarDetails } from "../components";

export const Guitar = () => {
  const { id } = useParams();
  const guitar = guitars.find((guitar) => guitar.id === parseInt(id));

  if (!guitar)
    return (
      <h1 className="text-6xl font-black text-center py-36">
        No se encontró la guitarra...
      </h1>
    );

  return (
    <Container className="py-10">
      <GuitarDetails guitar={guitar} />
    </Container>
  );
};
