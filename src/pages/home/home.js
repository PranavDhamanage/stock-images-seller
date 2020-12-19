import React, { useContext } from "react";

import Image from "../../Components/Image/Image.js";
import { PhotosContext } from "../../context/context.js";
import { getClass } from "../../utils/getClass.js";

import "./home.css";

function Home() {
  const allPhotosObj = useContext(PhotosContext);

  const allImageElements = allPhotosObj.allPhotos.map((photo, index) => {
    return <Image photo={photo} key={photo.id} className={getClass(index)} />;
  });

  return <div className="photos">{allImageElements}</div>;
}

export default Home;
