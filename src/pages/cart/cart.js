import React, { useContext, useState } from "react";

import { PhotosContext } from "../../context/context.js";
import CartItem from "../../Components/CartItem/CartItem.js";

import "./cart.css";

function Cart() {
  const [buttonText, setButtonText] = useState("Place Order");
  const { cartItems, emptyCart } = useContext(PhotosContext);
  const pricePerImg = 5.99;
  const totalCost = cartItems.length * pricePerImg;

  const totalCostToDisplay = totalCost.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  const cartItemsArray = cartItems.map((cartItemImg) => (
    <CartItem key={cartItemImg.id} cartItemImg={cartItemImg} />
  ));

  const buttonTextToDisplay = () => {
    setButtonText("Ordering...");
    setTimeout(() => {
      console.log("order placed!");
      emptyCart();
    }, 2500);
  };

  return (
    <div className="cart-page">
      {cartItemsArray.length ? (
        <>
          {cartItemsArray}
          <div className="cost-grid-container">
            <p className="total-cost">Total Cost : {totalCostToDisplay}</p>
          </div>
          <button className="order-btn" onClick={() => buttonTextToDisplay()}>
            {buttonText}
          </button>
        </>
      ) : (
        <h1 className="check-out"> Add items to your cart!!!</h1>
      )}
    </div>
  );
}

export default Cart;
