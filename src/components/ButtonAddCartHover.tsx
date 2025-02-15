import { useState } from "react";

interface ButtonAddCartHoverProps {
  setIsHover: (value: boolean) => void;
}

function ButtonAddCartHover({ setIsHover }: ButtonAddCartHoverProps) {
  const [count, setCount] = useState(1);
  const handleMouseLeave = () => {
    setIsHover(false);
  };
  return (
    <div className="add-to-cart-hover" onMouseLeave={handleMouseLeave}>
      <button className="button-add-to-cart-hover">
        <img
          src="./assets/images/icon-decrement-quantity.svg"
          alt="remove-from-cart"
        />
      </button>
      {count}
      <button className="button-add-to-cart-hover">
        <img
          src="./assets/images/icon-increment-quantity.svg"
          alt="remove-from-cart"
        />
      </button>
    </div>
  );
}

export default ButtonAddCartHover;
