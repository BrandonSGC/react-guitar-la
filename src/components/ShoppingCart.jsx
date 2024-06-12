import { useState } from "react";
import { CartIcon } from "../assets";
import { useCart, useHome, useOutsideClick } from "../hooks";
import { CartTable } from "./";
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
        className={`mx-auto size-10 hover:cursor-pointer  
        ${
          isHome
            ? "md:bg-black md:p-1 md:backdrop-blur md:rounded-full md:bg-opacity-40 text-white hover:scale-105"
            : "text-yellow-600 hover:text-yellow-700"
        }`}
      />
      {showCart && (
        <>
          {/* Shopping cart for tablets and desktops */}
          <div className="absolute right-0 hidden p-4 text-black bg-white rounded shadow-xl md:block">
            <CartTable items={items} />
            <div className="flex flex-col gap-2">
              {items.length !== 0 && (
                <Link
                  to="/store/cart"
                  className="block w-full px-8 py-2 text-sm font-bold text-center uppercase border-2 border-yellow-600 hover:bg-yellow-600 hover:text-white"
                  onClick={() => setShowCart(!showCart)}
                >
                  Confirmar
                </Link>
              )}
              <p className="text-xl font-bold text-right">
                Total: <span className="font-normal">${totalPrice}</span>
              </p>
            </div>
          </div>

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
              to="/store/cart"
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
