import Brand from "../../components/brand/Brand";
import Navigation from "../../components/navigation/Navigation";
import Order from "../../components/order/Order";
import Sale from "../../components/sale/Sale";

function Home() {
  return (
    <>
      <Brand />
      <Sale />
      <Order />
      <Navigation />
    </>
  );
}

export default Home;
