import "../../style/_card.scss";

function CardItem({ product, className, onClick }) {
  const handleClick = () => {
    onClick(product.id);
  };

  return (
    <div onClick={handleClick} className="product">
      <img className="product-image" src={product.image} alt="product" />
      <h2 className="product-title">{product.title}</h2>
      {product.sale && <p className={className}>Sale</p>}
      <span className="product-price">
        {product.oldprice && (
          <span className="product-price-original">{`$${product.oldprice}`}</span>
        )}
        <span className="product-price-discounted">{`$${product.price}`}</span>
      </span>
    </div>
  );
}

export default CardItem;
