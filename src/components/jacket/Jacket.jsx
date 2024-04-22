import { useEffect, useState } from "react";
import { BASE_URL } from "../../utils/config";
import JacketItem from "../jacketItem/JacketItem";
import "./jacket.scss";
import { useNavigate } from "react-router-dom";

function Jacket() {
  const [jackets, setJackets] = useState([]);
  const navigate = useNavigate();

  const fetchJackets = async () => {
    const response = await fetch(`${BASE_URL}/products`);
    const data = await response.json();
    setJackets(data);
  };

  const handleClick = (id) => {
    navigate(`/buy`, { state: { id: id } });
  };

  useEffect(() => {
    fetchJackets();
  }, []);

  return (
    <div className="jacket">
      <h1 className="jacket-title">Jackets</h1>
      <div className="jacket-contain">
        {jackets
          .filter((item) => item.category === "jacket")
          .map((jacket) => (
            <JacketItem
              onClick={handleClick}
              key={jacket.id}
              jacket={jacket}
              className={jacket.sale ? "product-sale" : ""}
            />
          ))}
      </div>
    </div>
  );
}

export default Jacket;
