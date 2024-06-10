import { useNavigate } from "react-router-dom";
import { useCart } from "../hooks";

export const GuitarDetails = ({ guitar }) => {
  const navigate = useNavigate();
  const { id, name, description, price, imageURL, characteristics } = guitar;
  const { addItem } = useCart();

  const onAddToCart = () => {
    addItem({ id, imageURL, name, price });
  };

  return (
    <div className="grid md:gap-5 md:grid-cols-2">
      <div className="flex items-center justify-center ">
        <img className="max-w-64" src={imageURL} alt="guitar" />
      </div>

      <div className="flex flex-col justify-center space-y-5">
        <h3 className="text-6xl font-black">{name}</h3>
        <p className="text-xl">{description}</p>

        {/* Characteristics List */}
        <h4 className="text-2xl font-bold">Characteristics</h4>
        <ul className="pl-8">
          {characteristics.map((characteristic, id) => (
            <li className="text-lg list-disc" key={id}>
              {characteristic}
            </li>
          ))}
        </ul>

        <span className="text-5xl font-black text-yellow-600">${price}</span>

        <div className="flex flex-col gap-2 lg:flex-row">
          <button
            className="px-6 py-2 font-semibold uppercase border border-yellow-600 hover:bg-yellow-50"
            onClick={() => navigate(-1)}
          >
            Volver
          </button>
          <button
            className="px-6 py-2 font-semibold text-white uppercase bg-yellow-600 hover:bg-yellow-700"
            onClick={() => onAddToCart()}
          >
            Agregar al Carrito
          </button>
        </div>
      </div>
    </div>
  );
};
