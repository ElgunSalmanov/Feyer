import Header from "./shared/header/Header";
import Footer from "./shared/footer/Footer";
import { Outlet } from "react-router-dom";
import "./App.scss";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
