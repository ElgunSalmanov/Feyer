import { useEffect, useState } from "react";
import "./counter.scss";

function Counter({ item, selectedSize, onCounter }) {
  const [count, setCount] = useState(1);

  useEffect(() => {
    setCount(1);
  }, [selectedSize]);

  useEffect(() => {
    onCounter(count);
  }, [count, onCounter]);

  const handleIncrement = () => {
    const selectedStock = item.sizes ? item.sizes[selectedSize] : null;
    const stock = item.stock;
    if (count === selectedStock || count === stock) {
      return;
    } else {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count === 1) {
      return;
    } else {
      setCount(count - 1);
    }
  };

  return (
    <div className="counter">
      <button onClick={handleDecrement} className="counter-button">
        -
      </button>
      <div className="counter-container"> {count} </div>
      <button
        onClick={handleIncrement}
        className={
          (item.sizes && count === item.sizes[selectedSize]) ||
          (!item.sizes && count === item.stock)
            ? "counter-button background"
            : "counter-button"
        }
        disabled={
          (item.sizes && count === item.sizes[selectedSize]) ||
          (!item.sizes && count === item.stock)
        }
      >
        +
      </button>
    </div>
  );
}

export default Counter;
