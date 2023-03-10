import { useState } from "react";

import classes from "./LightBox.module.css";

function LightBox(props) {
  const [num, setNum] = useState(props.num);

  const hideLighthouseHandler = () => {
    props.onhideLighthouse();
  };

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

  return (
    <>
      <div className={classes.backdrop} onClick={hideLighthouseHandler}></div>
      <div className={classes.outer}>
        <div className={classes.container}>
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
          <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
            <path
              d="m2 1 8 8-8 8"
              stroke="#1D2026"
              strokeWidth="3"
              fill="none"
              fillRule="evenodd"
            />
          </svg>
        </div>
        <div className={classes.previous} onClick={previousHandler}>
          <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M11 1 3 9l8 8"
              stroke="#1D2026"
              strokeWidth="3"
              fill="none"
              fillRule="evenodd"
            />
          </svg>
        </div>
        <div className={classes.close} onClick={hideLighthouseHandler}>
          <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
            <path
              d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
              fill="#fff"
              fillRule="evenodd"
            />
          </svg>
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
    </>
  );
}

export default LightBox;
