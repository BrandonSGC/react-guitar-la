import { Link } from "react-router-dom";
import { Image } from "./";

export const GuitarCard = ({ id, imageURL, name, price, description }) => {
  return (
    <div className="flex">
      <div className="flex items-center justify-center">
        <Image src={imageURL} alt={`${name} image`} loading="lazy"/>
      </div>
      <div className="flex flex-col justify-center gap-3">
        <h3 className="text-xl font-black">{name}</h3>
        <p className="line-clamp-3">{description}</p>
        <span className="text-5xl font-black text-yellow-600">${price}</span>
        <Link
          to={`/store/guitar/${id}`}
          className="block px-8 py-2 text-sm font-bold text-center uppercase border-2 border-yellow-600 hover:bg-yellow-600 hover:text-white"
        >
          Ver Producto
        </Link>
      </div>
    </div>
  );
};
