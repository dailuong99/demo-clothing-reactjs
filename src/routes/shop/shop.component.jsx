import "./shop.styles.scss";
import { useContext } from "react";
import { ProductContext } from "../../components/contexts/product.context";
import ProductCard from "../../components/product-cart/product-card.component";

export const Shop = () => {
  const { products } = useContext(ProductContext);

  return (
    <div className="product-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product}></ProductCard>
      ))}
    </div>
  );
};

export default Shop;
