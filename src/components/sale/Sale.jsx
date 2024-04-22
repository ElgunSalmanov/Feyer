import { useEffect, useState } from "react";
import SaleItem from "../saleItem/SaleItem";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../../utils/config.js";
import "./sale.scss";

function Sale() {
  const [sales, setSales] = useState([]);
  const navigate = useNavigate();

  const fetchSale = async () => {
    const response = await fetch(`${BASE_URL}/products`);
    const data = await response.json();
    setSales(data);
  };

  const handleClick = (id) => {
    navigate(`/buy`, { state: { id: id } });
  };

  useEffect(() => {
    fetchSale();
  }, []);

  return (
    <div className="sales">
      <div className="sales-contain">
        {sales
          .filter((item) => item.sale === true)
          .map((sale) => (
            <SaleItem onClick={handleClick} key={sale.id} sale={sale} />
          ))}
      </div>
      <Link to="/shop" className="sales-navigate">
        All products
      </Link>
    </div>
  );
}

export default Sale;
