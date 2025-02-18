import { useState } from "react";
import data from "../data/data.json";
import ButtonAddCartHover from "./ButtonAddCartHover";

function Deserts() {
  const [isHover, setIsHover] = useState(false);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const handleMouseEnter = (index: number) => {
    setHoverIndex(index);
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
                className={isHover && hoverIndex === index ? "image-hover" : ""}
                src={item.image.mobile}
                alt={item.name.split(" ").join("-").toLowerCase()}
              />
              <span className="item-category">{item.category}</span>
              <span className="item-name">{item.name}</span>
              <span className="item-price">${item.price.toFixed(2)}</span>

              {isHover && hoverIndex === index ? (
                <ButtonAddCartHover setIsHover={setIsHover} setHoverIndex={setHoverIndex} />
              ) : (
                <>
                  <button
                    className="button-add-to-cart"
                    onMouseEnter={() => handleMouseEnter(index)}
                  >
                    <img
                      src="./assets/images/icon-add-to-cart.svg"
                      alt="add-to-cart"
                    />
                    Add to Cart
                  </button>
                </>
              )}
            </article>

          </>
        ))}
      </section>
    </section>
  );
}

export default Deserts;
