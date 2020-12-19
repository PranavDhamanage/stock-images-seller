import React, { useContext } from "react";
import PropTypes from "prop-types";

import { PhotosContext } from "../../context/context.js";
import useHover from "../../hooks/useHover.js";

import "./image.css";

function Image(props) {
  const [imageContainer, isHovered] = useHover();

  const {
    toggleFavourite,
    addImageToCart,
    cartItems,
    removeImageFromCart,
  } = useContext(PhotosContext);

  function displayHeartIcon() {
    if (props.photo.isFavorite) {
      return (
        <i
          className="ri-heart-fill ri-xl favourite-icon"
          onClick={() => toggleFavourite(props.photo.id)}
        ></i>
      );
    } else if (isHovered) {
      return (
        <i
          className="ri-heart-line ri-xl favourite-icon"
          onClick={() => toggleFavourite(props.photo.id)}
        ></i>
      );
    }
  }

  function displayCartIcon() {
    const imageAlreadyInCart = cartItems.some(
      (image) => image.id === props.photo.id
    );

    if (imageAlreadyInCart) {
      return (
        <i
          className="ri-shopping-cart-fill ri-xl added-to-cart-icon"
          onClick={() => removeImageFromCart(props.photo.id)}
        ></i>
      );
    } else if (isHovered) {
      return (
        <i
          className="ri-add-circle-line ri-xl cartadd-icon"
          onClick={() => addImageToCart(props.photo)}
        ></i>
      );
    }
  }

  return (
    <div className={`${props.className} image-container`} ref={imageContainer}>
      <img className="image" src={props.photo.url} alt="random pics" />
      {displayHeartIcon()}
      {displayCartIcon()}
    </div>
  );
}

Image.propTypes = {
  className: PropTypes.string,
  photo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool,
  }),
};

export default Image;
