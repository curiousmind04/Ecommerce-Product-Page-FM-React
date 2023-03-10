import ProductPage from "./pages/ProductPage";
import CartProvider from "./store/CartProvider";

function App() {
  return (
    <CartProvider>
      <ProductPage />
    </CartProvider>
  );
}

export default App;
