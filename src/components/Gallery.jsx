import { useState } from "react";

import classes from "./Gallery.module.css";
import Lighthouse from "./Lighthouse";

function Gallery() {
  const [num, setNum] = useState(1);
  const [showLighthouse, setShowLighthouse] = useState(false);

  const nextHandler = () => {
    if (num < 4) {
      setNum(num + 1);
    } else {
      setNum(1);
    }
  };

  const previousHandler = () => {
    if (num > 1) {
      setNum(num - 1);
    } else {
      setNum(4);
    }
  };

  const switchHandler = (e) => {
    if (e.target.alt === "thumbnail 1") {
      setNum(1);
    }
    if (e.target.alt === "thumbnail 2") {
      setNum(2);
    }
    if (e.target.alt === "thumbnail 3") {
      setNum(3);
    }
    if (e.target.alt === "thumbnail 4") {
      setNum(4);
    }
  };

  const showLighthouseHandler = () => {
    setShowLighthouse(true);
  };

  const onhideLighthouse = () => {
    setShowLighthouse(false);
  };

  return (
    <div>
      <div className={classes.outer}>
        <div className={classes.container} onClick={showLighthouseHandler}>
          {num === 1 && (
            <img src="/images/image-product-1.jpg" alt="product image 1" />
          )}
          {num === 2 && (
            <img src="/images/image-product-2.jpg" alt="product image 2" />
          )}
          {num === 3 && (
            <img src="/images/image-product-3.jpg" alt="product image 3" />
          )}
          {num === 4 && (
            <img src="/images/image-product-4.jpg" alt="product image 4" />
          )}
        </div>
        <div className={classes.next} onClick={nextHandler}>
          <img src="/images/icon-next.svg" alt="next icon" />
        </div>
        <div className={classes.previous} onClick={previousHandler}>
          <img src="/images/icon-previous.svg" alt="previous icon" />
        </div>
      </div>

      <div className={classes.thumbnails}>
        <div
          className={num === 1 ? classes.chosen : classes.thumbnail}
          onClick={switchHandler}
        >
          <img src="/images/image-product-1-thumbnail.jpg" alt="thumbnail 1" />
        </div>
        <div
          className={num === 2 ? classes.chosen : classes.thumbnail}
          onClick={switchHandler}
        >
          <img src="/images/image-product-2-thumbnail.jpg" alt="thumbnail 2" />
        </div>
        <div
          className={num === 3 ? classes.chosen : classes.thumbnail}
          onClick={switchHandler}
        >
          <img src="/images/image-product-3-thumbnail.jpg" alt="thumbnail 3" />
        </div>
        <div
          className={num === 4 ? classes.chosen : classes.thumbnail}
          onClick={switchHandler}
        >
          <img src="/images/image-product-4-thumbnail.jpg" alt="thumbnail 4" />
        </div>
      </div>
      {showLighthouse && (
        <Lighthouse onhideLighthouse={onhideLighthouse} num={num} />
      )}
    </div>
  );
}

export default Gallery;
