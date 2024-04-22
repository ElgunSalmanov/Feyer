import "../../style/_card.scss";

function JacketItem({ jacket, className, onClick }) {
  const handleClick = () => {
    onClick(jacket.id);
  };

  return (
    <div onClick={handleClick} className="product">
      <img className="product-image" src={jacket.image} alt="product" />
      <h2 className="product-title">{jacket.title}</h2>
      {jacket.sale && <p className={className}>Sale</p>}
      <span className="product-price">
        {jacket.oldprice && (
          <span className="product-price-original">{`$${jacket.oldprice}`}</span>
        )}
        <span className="product-price-discounted">{`$${jacket.price}`}</span>
      </span>
    </div>
  );
}

export default JacketItem;
