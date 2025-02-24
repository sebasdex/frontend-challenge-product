import { useStore } from "./../hooks/useStore";
function OrderConfirmed() {
    const { setOrderCard, reset, cartItems } = useStore();
    const handleNewOrder = () => {
        setOrderCard(false);
        reset();
    }
    return (
        <section className="order-confirmed-container">
            <article className="order-confirmed-card">
                <img src="./assets/images/icon-order-confirmed.svg" alt="order-confirmed" />
                <h1>Order Confirmed</h1>
                <p>We hope you enjoy your food!</p>
                <div className="order-items-container">
                    {cartItems.map((item, index) => (
                        <div className="order-item" key={index}>
                            <div className="order-item-div">
                                <span className="order-item-icon-span">
                                    <img src={item.image.thumbnail} alt={item.name} />
                                </span>
                                <div className="order-item-info">
                                    <h2>{item.name}</h2>
                                    <div className="order-item-div">
                                        <p>{item.quantity}x</p>
                                        <p>@{item.price.toFixed(2)}</p>
                                    </div>
                                </div>
                            </div>
                            <span className="order-item-total">${(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                    ))}
                    <div className="order-price">
                        <span className="order-price-text">Order total</span>
                        <span className="order-price-value">${cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}</span>
                    </div>
                </div>
                <button className="order-button" onClick={handleNewOrder}>Start New Order</button>
            </article>
        </section>
    )
}

export default OrderConfirmed