
function OrderConfirmed() {
    return (
        <section className="order-confirmed-container">
            <article className="order-confirmed-card">
                <img src="./assets/images/icon-order-confirmed.svg" alt="order-confirmed" />
                <h1>Order Confirmed</h1>
                <p>We hope you enjoy your food!</p>
                <div className="order-items-container">
                    <div className="order-price">
                        <span className="order-price-text">Order total</span>
                        <span className="order-price-value">$100.00</span>
                    </div>
                </div>
                <button className="order-button">Start New Order</button>
            </article>
        </section>
    )
}

export default OrderConfirmed