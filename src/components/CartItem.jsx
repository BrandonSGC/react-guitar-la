import { useCart } from "../hooks";
import { DeleteIcon, MinusIcon, PlusIcon } from "../assets";

export const CartItem = ({ id, imageURL, name, price, quantity }) => {
  const { removeItem, incrementQuantity, decrementQuantity } = useCart();

  return (
    <tr className="flex items-center justify-between px-2">
      <td className="flex items-center gap-2">
        <img className="w-10" src={imageURL} alt="guitar image" />
        <span className="font-medium">{name}</span>
      </td>
      <td className="flex gap-1">
        <button
          className="p-1 bg-yellow-600 rounded-[50%] size-6 text-white font-bold text-center"
          onClick={() => decrementQuantity({ id })}
        >
          <MinusIcon />
        </button>
        {quantity}
        <button
          className="p-1 bg-yellow-600 rounded-[50%] size-6 text-white font-bold text-center"
          onClick={() => incrementQuantity({ id })}
        >
          <PlusIcon />
        </button>
      </td>
      <td className="flex gap-2">
        <p>
          $<span>{price}</span>
        </p>
        <DeleteIcon
          onClick={() => removeItem({ id })}
          className="text-red-500 cursor-pointer size-6 hover:text-red-600"
        />
      </td>
    </tr>
  );
};
