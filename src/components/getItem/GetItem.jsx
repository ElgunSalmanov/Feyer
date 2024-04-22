import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCard } from "../../redux/slice";
import Counter from "../counter/Counter";
import Size from "../size/Size";
import "./getItem.scss";

function GetItem({ item }) {
  const [selectedSize, setSelectedSize] = useState("s");
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();

  const handleAddToCard = () => {
    if (item.category === "hat") {
      dispatch(
        addToCard({
          id: item.id,
          title: item.title,
          category: item.category,
          price: item.price,
          image: item.image,
          count,
        })
      );
    } else {
      dispatch(
        addToCard({
          id: item.id,
          title: item.title,
          selectedSize: selectedSize,
          category: item.category,
          price: item.price,
          image: item.image,
          count,
        })
      );
    }
  };

  return (
    <div className="item">
      <img className="item-image" src={item.image} alt="product" />
      <div className="item-info">
        <h1 className="item-info-title">{item.title}</h1>
        {item.sizes ? (
          <>
            <h3 className="item-info-sizes">Size:</h3>
            <Size onSelectSize={setSelectedSize} />
          </>
        ) : (
          <h2 className="item-info-sizes">One size</h2>
        )}
        <span className="item-info-price">
          {item.oldprice && (
            <span className="item-info-price-original">{`$${item.oldprice}`}</span>
          )}
          <span className="item-info-price-discounted">{`$${item.price}`}</span>
        </span>
        <div className="item-info-stock">
          <Counter
            onCounter={setCount}
            item={item}
            selectedSize={selectedSize}
          />
          {item.sizes && item.sizes[selectedSize] !== undefined ? (
            <p className="item-info-stock-availability">
              {item.sizes[selectedSize]} in stock
            </p>
          ) : (
            item.stock !== undefined && (
              <p className="item-info-stock-availability">
                {item.stock} in stock
              </p>
            )
          )}
        </div>
        <button className="item-info-button" onClick={handleAddToCard}>
          Add to bag
        </button>
        <div className="item-info-container">
          <p className="item-info-description">{item.description}</p>
          <p className="item-info-material">Material: {item.material}</p>
          <p className="item-info-color">Color: {item.color}</p>
          {item.fit && <p className="item-info-fit">Fit: {item.fit}</p>}
        </div>
      </div>
    </div>
  );
}

export default GetItem;
