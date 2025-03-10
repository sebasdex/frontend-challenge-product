
import { useStore } from "./../hooks/useStore";

function Cart() {
  const { cartItems, deleteItem, setOrderCard } = useStore();
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const handleRemoveItem = (name: string) => {
    deleteItem(name);
  }
  const handleConfirmOrder = () => {
    setOrderCard(true);
  }
  return (
    <section className="cart-container">
      <div className="cart-card">
        <h2 className="cart-title">
          Your Cart <span className="cart-count">({totalItems})</span>
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
          <section className="cart-item-container">
            {cartItems.map((item, index) => (
              <div className="cart-item" key={index}>
                <section className="cart-item-info">
                  <span className="cart-item-name">{item.name}</span>
                  <div className="cart-item-div">
                    <span className="cart-item-quantity">{item.quantity}{'x'}</span>
                    <span className="cart-item-price-one">{'@'}{item.price.toFixed(2)}</span>
                    <span className="cart-item-price-total">${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                </section>
                <button className="cart-item-icon-span" onClick={() => handleRemoveItem(item.name)}>
                  <img src="./assets/images/icon-remove-item.svg" alt="remove-from-cart" />
                </button>
              </div>
            ))}
            <div className="cart-total">
              <span className="cart-total-text">Order Total:</span>
              <span className="cart-total-price">${cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}</span>
            </div>
            <div className="cart-message">
              <img src="./assets/images/icon-carbon-neutral.svg" alt="message" />
              <p>This is a <strong>carbon-neutral</strong> delivery</p>
            </div>
            <button className="cart-button" onClick={handleConfirmOrder}>Confirm Order</button>
          </section>
        )}
      </div>
    </section>
  );
}

export default Cart;
