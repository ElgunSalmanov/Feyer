import { useEffect, useState } from "react";
import { BASE_URL } from "../../utils/config";
import { useNavigate } from "react-router-dom";
import CardItem from "../cardItem/CardItem";
import "./card.scss";

function Card() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const fetchProducts = async () => {
    const response = await fetch(`${BASE_URL}/products`);
    const data = await response.json();
    setProducts(data);
  };

  const handleClick = (id) => {
    navigate(`/buy`, { state: { id: id } });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="card">
      <h1 className="card-title">All products</h1>
      <div className="card-contain">
        {products.map((product) => (
          <CardItem
            onClick={handleClick}
            key={product.id}
            product={product}
            className={product.sale ? "product-sale" : ""}
          />
        ))}
      </div>
    </div>
  );
}

export default Card;
