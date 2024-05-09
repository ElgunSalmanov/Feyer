import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Home from "../src/pages/home/Home.jsx";
import About from "../src/pages/about/About.jsx";
import Values from "../src/pages/our-values/Values.jsx";
import Contact from "../src/pages/contact/Contact.jsx";
import Shop from "../src/pages/shop/Shop.jsx";
import Shipping from "../src/pages/shipping/Shipping.jsx";
import Privacy from "../src/pages/privacy/Privacy.jsx";
import Guide from "../src/pages/guide/Guide.jsx";
import Terms from "../src/pages/terms/Terms.jsx";
import Jackets from "../src/pages/jackets/Jackets.jsx";
import Hats from "../src/pages/hats/Hats.jsx";
import Buy from "../src/pages/buy/Buy.jsx";
import store from "./redux/store.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import NotFound from "./pages/notFound/NotFound.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<App />}>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/about" element={<About />} />
            <Route path="/ourvalues" element={<Values />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/shipping" element={<Shipping />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/guide" element={<Guide />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/jackets" element={<Jackets />} />
            <Route path="/hats" element={<Hats />} />
            <Route path="/buy" element={<Buy />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
