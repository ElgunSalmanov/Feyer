import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import GetItem from "../getItem/GetItem";
import "./get.scss";
import { BASE_URL } from "../../utils/config";

function Get() {
  const [getItem, setGetItem] = useState([]);
  const location = useLocation();

  const fetchGetItem = async () => {
    const response = await fetch(`${BASE_URL}/products`);
    const data = await response.json();
    setGetItem(data);
  };

  useEffect(() => {
    fetchGetItem();
  });

  return (
    <div className="get">
      {getItem
        .filter((item) => item.id == location.state.id)
        .map((item) => (
          <GetItem key={item.id} item={item} />
        ))}
    </div>
  );
}

export default Get;
