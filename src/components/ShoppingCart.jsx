import { useState } from "react";
import { CartIcon } from "../assets";
import { useCart, useHome, useOutsideClick } from "../hooks";
import { CartItem } from "./";
import { Link } from "react-router-dom";

export const ShoppingCart = () => {
  const { isHome } = useHome();
  const [showCart, setShowCart] = useState(false);
  const cartRef = useOutsideClick(() => setShowCart(false));
  const { items, totalPrice, totalItems } = useCart();

  return (
    <div className="relative" ref={cartRef}>
      <CartIcon
        onClick={() => setShowCart(!showCart)}
        className={`block mx-auto size-10 hover:cursor-pointer text-yellow-600 hover:text-yellow-700 
        ${
          isHome &&
          "md:bg-black md:p-1 md:backdrop-blur md:rounded-full md:bg-opacity-40"
        }`}
      />
      {showCart && (
        <>
          {/* Shopping cart for tablets and desktops */}
          <table className="absolute right-0 hidden p-4 text-black bg-white rounded shadow md:block">
            <thead>
              <tr className="flex items-center justify-between gap-2 w-96">
                <th className="px-4 py-2">Producto</th>
                <th className="px-4 py-2">Cantidad</th>
                <th className="px-4 py-2">Precio</th>
              </tr>
            </thead>
            <tbody>
              {items.length === 0 && (
                <tr>
                  <td className="w-full py-2 text-center">
                    <p>No hay artículos en el carrito en este momento...</p>
                  </td>
                </tr>
              )}

              {items.map((item) => (
                <CartItem key={item.id} {...item} />
              ))}

              <tr className="flex py-2 font-bold border-t border-yellow-600">
                <td className="w-full font-bold text-right">
                  Total: $<span className="font-normal">{totalPrice}</span>
                </td>
              </tr>
            </tbody>
          </table>

          {/* Shopping cart for mobile */}
          <div className="p-4 text-black bg-white rounded shadow md:hidden">
            <div className="flex justify-between my-2">
              <p className="font-bold">
                Total: <span className="font-normal">${totalPrice}</span>
              </p>
              <p className="font-bold">
                Items: <span className="font-normal">{totalItems}</span>
              </p>
            </div>
            <Link
              to="/cart"
              className="block px-8 py-2 text-sm font-bold text-center uppercase border-2 border-yellow-600 hover:bg-yellow-600 hover:text-white"
            >
              Ver Carrito
            </Link>
          </div>
        </>
      )}
    </div>
  );
};
