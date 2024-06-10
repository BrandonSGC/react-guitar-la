import { findItemById, updateItemQuantity, calculateTotals } from "../helpers";

export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM": {
      const existingItem = findItemById(state.items, action.payload.id);

      // Updates the item quantity and return the items.
      const updatedItems = existingItem
        ? updateItemQuantity(state.items, existingItem.id, 1)
        : [...state.items, { ...action.payload, quantity: 1 }];

      // Calculate total items, total price and return them.
      const { totalItems, totalPrice } = calculateTotals(updatedItems);

      return { ...state, items: updatedItems, totalItems, totalPrice };
    }

    case "INCREMENT_QUANTITY": {
      const updatedItems = updateItemQuantity(state.items, action.payload.id, 1);
      const { totalItems, totalPrice } = calculateTotals(updatedItems);
      return { ...state, items: updatedItems, totalItems, totalPrice };
    }

    case "DECREMENT_QUANTITY":{
      const existingItem = findItemById(state.items, action.payload.id);
      
      // Delete item if quantity is 1.
      if (existingItem.quantity === 1) {
        const updatedItems = state.items.filter(item => item.id !== action.payload.id);
        const { totalItems, totalPrice } = calculateTotals(updatedItems);
        return { ...state, items: updatedItems, totalItems, totalPrice };
      }

      const updatedItems = updateItemQuantity(state.items, action.payload.id, -1);
      const { totalItems, totalPrice } = calculateTotals(updatedItems);
      return { ...state, items: updatedItems, totalItems, totalPrice };
    }

    case "REMOVE_ITEM":{
      const updatedItems = state.items.filter(item => item.id !== action.payload.id);
      const { totalItems, totalPrice } = calculateTotals(updatedItems);
      return { ...state, items: updatedItems, totalItems, totalPrice };
    }

    default:
      return state;
  }
};
