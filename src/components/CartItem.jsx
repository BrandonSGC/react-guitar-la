import { useCart } from "../hooks";
import { DeleteIcon, MinusIcon, PlusIcon } from "../assets";

export const CartItem = ({ id, imageURL, name, price, quantity }) => {
  const { removeItem, incrementQuantity, decrementQuantity } = useCart();

  return (
    <tr className="border-b border-yellow-600">
      <td className="px-5 py-2">
        <div className="flex items-center gap-2">
          <img className="w-10" src={imageURL} alt="guitar image" />
          <span className="font-medium">{name}</span>
        </div>
      </td>

      <td className="px-8 py-2">
        <div className="flex items-center justify-center gap-2">
          <button
            className="p-1 bg-yellow-600 rounded-[50%] size-6 text-white font-bold text-center hover:bg-yellow-700"
            onClick={() => decrementQuantity({ id })}
          >
            <MinusIcon />
          </button>
          {quantity}
          <button
            className="p-1 bg-yellow-600 rounded-[50%] size-6 text-white font-bold text-center hover:bg-yellow-700"
            onClick={() => incrementQuantity({ id })}
          >
            <PlusIcon />
          </button>
        </div>
      </td>

      <td className="px-5 py-2">
        <div className="flex items-center justify-center gap-2">
          <p>
            $<span>{price}</span>
          </p>
          <DeleteIcon
            onClick={() => removeItem({ id })}
            className="text-red-500 cursor-pointer size-6 hover:text-red-600"
          />
        </div>
      </td>
    </tr>
  );
};
