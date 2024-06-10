export const findItemById = (items, id) => items.find((item) => item.id === id);

// Updates the item quantity and return the items.
export const updateItemQuantity = (items, id, quantityChange) =>
  items.map((item) =>
    item.id === id
      ? { ...item, quantity: item.quantity + quantityChange }
      : item
  );

// Calculate total items, total price and return them.
export const calculateTotals = (items) =>
  items.reduce(
    (totals, item) => {
      totals.totalItems += item.quantity;
      totals.totalPrice += item.quantity * item.price;
      return totals;
    },
    { totalItems: 0, totalPrice: 0 }
  );
