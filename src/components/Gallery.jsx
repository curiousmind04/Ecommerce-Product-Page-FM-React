import classes from "./Gallery.module.css";

function Gallery() {
  return (
    <div className={classes.container}>
      <img src="/images/image-product-1.jpg" alt="product image 1" />
      <div className={classes.next}>
        <img src="/images/icon-next.svg" alt="next icon" />
      </div>
      <div className={classes.previous}>
        <img src="/images/icon-previous.svg" alt="previous icon" />
      </div>
    </div>
  );
}

export default Gallery;
