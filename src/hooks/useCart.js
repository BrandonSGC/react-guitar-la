import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export const useCart = () => {
  const { state, dispatch } = useContext(CartContext);

  const addItem = (item) => {
    dispatch({ type: "ADD_ITEM", payload: item });
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  const incrementQuantity = (id) => {
    dispatch({ type: "INCREMENT_QUANTITY", payload: id });
  };

  const decrementQuantity = (id) => {
    dispatch({ type: "DECREMENT_QUANTITY", payload: id });
  };

  return {
    ...state,
    cart: state,
    addItem,
    removeItem,
    incrementQuantity,
    decrementQuantity,
  };
};
