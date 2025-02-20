
import { useStore } from "./../hooks/useStore";

function Cart() {
  const { cartItems } = useStore();
  return (
    <section className="cart-container">
      <div className="cart-card">
        <h2 className="cart-title">
          Your Cart <span className="cart-count">({cartItems.length})</span>
        </h2>
        {cartItems.length === 0 ? (
          <>
            <img
              src="./assets/images/illustration-empty-cart.svg"
              alt="empty-cart"
              className="cart-img"
            />
            <p>Your added items will appear here</p>
          </>
        ) : (
          <section className="">
            {cartItems.map((item, index) => (
              <div className="" key={index}>
                <span className="">{item.name}</span>
                <span className="">{item.quantity}</span>
                <span className="">${item.price.toFixed(2)}</span>
              </div>
            ))}
            <div>
              <span>Order Total:</span>
              <span>$0.00</span>
            </div>
            <div>
              <p>This is a <strong>carbon-neutral delivery</strong></p>
            </div>
            <button className="">Checkout</button>
          </section>
        )}
      </div>
    </section>
  );
}

export default Cart;
