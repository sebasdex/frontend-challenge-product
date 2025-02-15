import { useState } from "react";
import data from "../data/data.json";
import ButtonAddCartHover from "./ButtonAddCartHover";

function Deserts() {
  const [isHover, setIsHover] = useState(false);
  const handleMouseEnter = () => {
    setIsHover(true);
  };

  return (
    <section className="desserts-container">
      <h1 className="title">Desserts</h1>
      <section className="items-container">
        {data.map((item, index) => (
          <>
            <article className="item" key={index}>
              <img
                src={item.image.mobile}
                alt={item.name.split(" ").join("-").toLowerCase()}
              />
              <span className="item-category">{item.category}</span>
              <span className="item-name">{item.name}</span>
              <span className="item-price">${item.price.toFixed(2)}</span>
            </article>
            {isHover ? (
              <ButtonAddCartHover setIsHover={setIsHover} />
            ) : (
              <>
                <button
                  className="button-add-to-cart"
                  onMouseEnter={handleMouseEnter}
                >
                  <img
                    src="./assets/images/icon-add-to-cart.svg"
                    alt="add-to-cart"
                  />
                  Add to Cart
                </button>
              </>
            )}
          </>
        ))}
      </section>
    </section>
  );
}

export default Deserts;
