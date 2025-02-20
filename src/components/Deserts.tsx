import { useEffect, useState } from "react";
import data from "../data/data.json";
import ButtonAddCartHover from "./ButtonAddCartHover";

interface Item {
  name: string;
  category: string;
  price: number;
  image: {
    thumbnail: string;
    mobile: string;
    tablet: string;
    desktop: string;
  };
  quantity: number;
}

function Deserts() {
  const [isHover, setIsHover] = useState(false);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [currentSizeScreen, setCurrentSizeScreen] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setCurrentSizeScreen(window.innerWidth);
    });
  }, []);

  const handleMouseEnter = (index: number) => {
    setHoverIndex(index);
    setIsHover(true);
  };

  return (
    <section className="desserts-container">
      <h1 className="title">Desserts</h1>
      <section className="items-container">
        {data.map((item, index) => (
          <article className="item" key={index}>
            <img
              className={isHover && hoverIndex === index ? "image-hover" : ""}
              src={
                currentSizeScreen >= 800
                  ? item.image.desktop
                  : item.image.mobile
              }
              alt={item.name.split(" ").join("-").toLowerCase()}
            />
            <div className="item-info-container">
              <span className="item-category">{item.category}</span>
              <span className="item-name">{item.name}</span>
              <span className="item-price">${item.price.toFixed(2)}</span>
            </div>

            {isHover && hoverIndex === index ? (
              <ButtonAddCartHover
                setIsHover={setIsHover}
                setHoverIndex={setHoverIndex}
                hoverIndex={hoverIndex}
                index={index}
                item={item as Item}
              />
            ) : (
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
            )}
          </article>
        ))}
      </section>
    </section>
  );
}

export default Deserts;
