import Gallery from "../components/Gallery";
import Header from "../components/Header";
import Product from "../components/Product";

import classes from "./ProductPage.module.css";

function ProductPage() {
  return (
    <>
      <Header />
      <main>
        <Gallery />
        <Product />
      </main>
    </>
  );
}

export default ProductPage;
