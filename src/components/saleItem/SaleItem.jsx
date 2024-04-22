import "../../style/_card.scss";

function SaleItem({ sale, onClick }) {
  const handleClick = () => {
    onClick(sale.id);
  };

  return (
    <div onClick={handleClick} className="product">
      <img className="product-image" src={sale.image} alt="product" />
      <p className="product-sale">Sale</p>
      <h2 className="product-title">{sale.title}</h2>
      <span className="product-price">
        <span className="product-price-original">{`$${sale.oldprice}`}</span>
        <span className="product-price-discounted">{`$${sale.price}`}</span>
      </span>
    </div>
  );
}

export default SaleItem;
