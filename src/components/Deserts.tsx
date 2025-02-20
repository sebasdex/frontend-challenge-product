import { useEffect, useState } from "react";
import data from "../data/data.json";
import ButtonAddCartHover from "./ButtonAddCartHover";

function Deserts() {
  const [isHover, setIsHover] = useState(false);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [currentSizeScreen, setCurrentSizeScreen] = useState(window.innerWidth);
  const [counts, setCounts] = useState<{ [key: number]: number }>({});

  useEffect(() => {
    window.addEventListener("resize", () => {
      setCurrentSizeScreen(window.innerWidth);
    });
  }, []);

  const handleMouseEnter = (index: number) => {
    setHoverIndex(index);
    setIsHover(true);
  };

  const updateCount = (index: number, newCount: number) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [index]: newCount,
    }));
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
                count={counts[index] || 0}
                setCount={(newCount) => updateCount(index, newCount)}
                hoverIndex={hoverIndex}
                index={index}
              />
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
        ))}
      </section>
    </section>
  );
}

export default Deserts;
