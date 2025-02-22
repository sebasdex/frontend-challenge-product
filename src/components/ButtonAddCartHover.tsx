import { useStore } from "./../hooks/useStore";

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

interface ButtonAddCartHoverProps {
  setIsHover: (value: boolean) => void;
  setHoverIndex: (value: number | null) => void;
  index: number;
  hoverIndex: number | null;
  item: Item;
}

function ButtonAddCartHover({
  setIsHover,
  setHoverIndex,
  hoverIndex,
  index,
  item,
}: ButtonAddCartHoverProps) {

  const { counts, increment, decrement, addToCart, removeFromCart } = useStore();
  const count = counts[item.name] || 0;

  const handleMouseLeave = () => {
    setIsHover(false);
    setHoverIndex(null);
  };

  const handleAddToCart = (item: Item) => {
    increment(item.name);
    addToCart(item);
  }

  const handleDecrement = (item: Item) => {
    decrement(item.name);
    removeFromCart(item);
  }

  return (
    <div className="add-to-cart-hover" onMouseLeave={handleMouseLeave}>
      <button className="button-add-to-cart-hover" onClick={() => handleDecrement(item)}>
        <img
          src="./assets/images/icon-decrement-quantity.svg"
          alt="decrement-quantity"
        />
      </button>
      {hoverIndex === index ? count : null}
      <button className="button-add-to-cart-hover" onClick={() => handleAddToCart(item)}>
        <img
          src={"./assets/images/icon-increment-quantity.svg"}
          alt="increment-quantity"
        />
      </button>
    </div>
  );
}

export default ButtonAddCartHover;
