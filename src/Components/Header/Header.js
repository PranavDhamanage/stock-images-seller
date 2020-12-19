import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { PhotosContext } from "../../context/context.js";

import "./header.css";

function Header() {
  const { cartItems } = useContext(PhotosContext);
  console.log("in header");
  return (
    <div className="header">
      <Link to="/">
        <h2 className="header-title">PicSome</h2>
      </Link>

      <Link to="/cart" className="cart-icon">
        {cartItems.length ? (
          <i className="ri-shopping-cart-fill ri-fw ri-2x"></i>
        ) : (
          <i className="ri-shopping-cart-line ri-fw ri-2x"> </i>
        )}
      </Link>
    </div>
  );
}

export default Header;
