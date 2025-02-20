import { useState } from "react";

interface ButtonAddCartHoverProps {
  setIsHover: (value: boolean) => void;
  setHoverIndex: (value: number | null) => void;
}

function ButtonAddCartHover({
  setIsHover,
  setHoverIndex,
}: ButtonAddCartHoverProps) {
  const [count] = useState(1);
  const handleMouseLeave = () => {
    setIsHover(false);
    setHoverIndex(null);
  };
  return (
    <div className="add-to-cart-hover" onMouseLeave={handleMouseLeave}>
      <button className="button-add-to-cart-hover">
        <img
          src="./assets/images/icon-decrement-quantity.svg"
          alt="add-to-cart"
        />
      </button>
      {count}
      <button className="button-add-to-cart-hover">
        <img
          src={"./assets/images/icon-increment-quantity.svg"}
          alt="remove-from-cart"
        />
      </button>
    </div>
  );
}

export default ButtonAddCartHover;
