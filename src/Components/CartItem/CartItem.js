import React, { useContext } from "react";
import PropTypes from "prop-types";

import { PhotosContext } from "../../context/context.js";

import "./cartItem.css";

function CartItem(props) {
  const { removeImageFromCart } = useContext(PhotosContext);

  const deleteIcon = (
    <i
      className="ri-delete-bin-line ri-fw ri-xl delete-icon"
      onClick={() => removeImageFromCart(props.cartItemImg.id)}
    ></i>
  );

  return (
    <div className="cart-item">
      <div className="cart-img-container">
        {deleteIcon}
        <img
          className="cart-item-img"
          src={props.cartItemImg.url}
          alt="chosen photos by customer"
        />
      </div>
      <div className="price">$5.99</div>
    </div>
  );
}

CartItem.propTypes = {
  cartItemImg: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }),
};

export default CartItem;
