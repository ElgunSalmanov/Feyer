import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCard } from "../../redux/slice";
import "./basket.scss";

function Basket({ active, setClose }) {
  const card = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleRemoveFromCard = (id) => {
    dispatch(
      removeFromCard({
        id: id,
      })
    );
  };

  return (
    <div className={`basket ${active ? "active" : ""}`}>
      <div className="basket-container">
        <IoMdClose
          onClick={() => setClose(!active)}
          className="basket-container-close"
        />
        <h1 className="basket-container-title">Products:</h1>
      </div>
      <div className="basket-container-list">
        {card["name"].card.map((item, index) => (
          <div key={index} className="basket-container-list-item">
            <img
              className="basket-container-list-item-image"
              src={item.image}
              alt="product"
            />
            <div className="basket-container-list-item-info">
              <h1 className="basket-container-list-item-info-title">
                {item.title}
              </h1>
              {item.category == "hat" ? (
                "One Size"
              ) : (
                <h3 className="basket-container-list-item-info-size">
                  Size:{" "}
                  <span className="basket-container-list-item-info-size-text">
                    {item.selectedSize}
                  </span>
                </h3>
              )}
              <h3 className="basket-container-list-item-info-count">
                Count: {item.count}
              </h3>
              <h3 className="basket-container-list-item-info-price">
                Price: {`$${item.price * item.count}`}
              </h3>
              <button
                className="basket-container-list-item-delete"
                onClick={() => handleRemoveFromCard(item.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Basket;
