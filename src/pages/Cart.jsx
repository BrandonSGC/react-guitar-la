import { CartForm, CartTable, Container, Heading, Modal } from "../components";
import { useCart, useModal } from "../hooks";

export const Cart = () => {
  const { items, totalPrice, totalItems } = useCart();
  const { showModal, toggleModal } = useModal();

  return (
    <section>
      <Container className="py-20 ">
        <Heading text="Confirmar Compra" />
        <div>
          <CartTable items={items} />
          <div className="flex items-center justify-between mt-5">
            <div>
              <p className="text-xl font-bold">
                Total items: <span className="font-normal">{totalItems}</span>
              </p>
              <p className="text-xl font-bold">
                Monto total: <span className="font-normal">${totalPrice}</span>
              </p>
            </div>

            <button
              onClick={toggleModal}
              className="px-10 py-2 font-bold text-white uppercase bg-yellow-600 hover:bg-yellow-700"
            >
              Comprar
            </button>
          </div>
        </div>
      </Container>

      {/* Modal */}
      {showModal && (
        <Modal toggleModal={toggleModal}>
          <CartForm />
        </Modal>
      )}
    </section>
  );
};
