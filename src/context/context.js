import React, { useEffect, useState } from "react";

import url from "../utils/imgUrl.js";

const PhotosContext = React.createContext();

function ContextProvider(props) {
  const [allPhotos, setAllPhotos] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  console.log(allPhotos);

  useEffect(() => {
    fetch(url)
      .then((result) => result.json())
      .then((jsonData) => setAllPhotos(jsonData));
  }, []);

  function toggleFavourite(id) {
    const updateAllPhotos = allPhotos.map((photo) => {
      return photo.id === id
        ? { ...photo, isFavorite: !photo.isFavorite }
        : photo;
    });
    setAllPhotos(updateAllPhotos);
  }

  function addImageToCart(newImg) {
    setCartItems((prevCartItems) => {
      return [...prevCartItems, newImg];
    });
  }

  function removeImageFromCart(imgId) {
    const updatedCartItems = cartItems.filter(
      (imgItem) => imgItem.id !== imgId
    );
    setCartItems(updatedCartItems);
  }

  function emptyCart() {
    setCartItems([]);
  }

  return (
    <PhotosContext.Provider
      value={{
        allPhotos,
        cartItems,
        toggleFavourite,
        addImageToCart,
        removeImageFromCart,
        emptyCart,
      }}
    >
      {props.children}
    </PhotosContext.Provider>
  );
}

export { ContextProvider, PhotosContext };
