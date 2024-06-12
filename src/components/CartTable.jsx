import { CartItem } from "./";

export const CartTable = ({ items }) => {
  return (
    <table className="w-full">
      <thead>
        <tr className="text-xl">
          <th className="px-2">Producto</th>
          <th className="px-2">Cantidad</th>
          <th className="px-2">Precio</th>
        </tr>
      </thead>
      <tbody>
        {items.length === 0 && (
          <tr>
            <td colSpan="3" className="py-4 text-center">
              No hay artículos en el carrito en este momento...
            </td>
          </tr>
        )}

        {items.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </tbody>
    </table>
  );
};
