import Signup from "./Component/SignUp/Signup";
import Home from "./Component/Home";
import Login from "./Component/Login/Login";
import Error from "./Component/Error";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Product from "./Component/ProductRelated/Product";
import "./App.css";
import Cart from "./Component/Cart";
import Checkout from "./Component/checkout/Checkout.js";
import UserProfile from "./Component/UserProfile/UserProfile";
import ProductDetail from "./Component/ProductRelated/ProductDetail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/product" element={<Product />} />
          <Route exact path="/productdetail/:id" element={<ProductDetail />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/checkout" element={<Checkout />} />
          <Route exact path="/userprofile" element={<UserProfile />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
