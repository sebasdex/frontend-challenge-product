interface ButtonAddCartHoverProps {
  setIsHover: (value: boolean) => void;
  setHoverIndex: (value: number | null) => void;
  count: number;
  setCount: (newCount: number) => void;
  index: number;
  hoverIndex: number | null;
}

function ButtonAddCartHover({
  setIsHover,
  setHoverIndex,
  count,
  setCount,
  hoverIndex,
  index,
}: ButtonAddCartHoverProps) {
  const handleMouseLeave = () => {
    setIsHover(false);
    setHoverIndex(null);
  };

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count === 0) return;
    setCount(count - 1);
  };

  return (
    <div className="add-to-cart-hover" onMouseLeave={handleMouseLeave}>
      <button className="button-add-to-cart-hover" onClick={handleDecrement}>
        <img
          src="./assets/images/icon-decrement-quantity.svg"
          alt="decrement-quantity"
        />
      </button>
      {hoverIndex === index ? count : null}
      <button className="button-add-to-cart-hover" onClick={handleIncrement}>
        <img
          src={"./assets/images/icon-increment-quantity.svg"}
          alt="increment-quantity"
        />
      </button>
    </div>
  );
}

export default ButtonAddCartHover;
