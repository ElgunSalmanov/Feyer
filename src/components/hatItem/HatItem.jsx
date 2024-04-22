import "../../style/_card.scss";

function HatItem({ hat, className, onClick }) {
  const handleClick = () => {
    onClick(hat.id);
  };

  return (
    <div onClick={handleClick} className="product">
      <img className="product-image" src={hat.image} alt="product" />
      <h2 className="product-title">{hat.title}</h2>
      {hat.sale && <p className={className}>Sale</p>}
      <span className="product-price">
        {hat.oldprice && (
          <span className="product-price-original">{`$${hat.oldprice}`}</span>
        )}
        <span className="product-price-discounted">{`$${hat.price}`}</span>
      </span>
    </div>
  );
}

export default HatItem;
