import { useState } from "react";

function Cart() {
  const [isEmpty,] = useState(true);
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
              className="cart-img"
            />
            <p>Your added items will appear here</p>
          </>
        ) : (
          <p>Your cart is not empty</p>
        )}
      </div>
    </section>
  );
}

export default Cart;
