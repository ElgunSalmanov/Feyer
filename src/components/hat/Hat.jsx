import { useEffect, useState } from "react";
import { BASE_URL } from "../../utils/config";
import { useNavigate } from "react-router-dom";
import HatItem from "../hatItem/HatItem";
import "./hat.scss";

function Hat() {
  const [hats, setHats] = useState([]);
  const navigate = useNavigate();

  const fetchHats = async () => {
    const response = await fetch(`${BASE_URL}/products`);
    const data = await response.json();
    setHats(data);
  };

  const handleClick = (id) => {
    navigate(`/buy`, { state: { id: id } });
  };

  useEffect(() => {
    fetchHats();
  }, []);

  return (
    <div className="hat">
      <h1 className="hat-title">Hats</h1>
      <div className="hat-contain">
        {hats
          .filter((item) => item.category === "hat")
          .map((hat) => (
            <HatItem
              onClick={handleClick}
              key={hat.id}
              hat={hat}
              className={hat.sale ? "product-sale" : ""}
            />
          ))}
      </div>
    </div>
  );
}

export default Hat;
