import { useState } from "react";

function Cart() {
  const [isEmpty, setIsEmpty] = useState(true);
  return (
    <section className="cart-container">
      <div className="cart-card">
        <h2 className="cart-title">
          Your Cart <span className="cart-count">(0)</span>
        </h2>
        {isEmpty ? (
          <>
            <img
              src="./assets/images/illustration-empty-cart.svg"
              alt="empty-cart"
            />
            <p>Your cart is empty</p>
          </>
        ) : (
          <p>Your cart is not empty</p>
        )}
      </div>
    </section>
  );
}

export default Cart;
