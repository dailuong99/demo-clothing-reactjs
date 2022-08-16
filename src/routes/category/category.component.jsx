import { useParams } from "react-router-dom";
import "./category.styles.scss";
import { CategoriesContext } from "../../components/contexts/categories.context";
import { useState, useContext, useEffect } from "react";
import ProductCard from "../../components/product-cart/product-card.component";

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <>
      <h2 className="title">{category.toUpperCase()}</h2>
      <div className="category-container">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product}></ProductCard>
          ))}
      </div>
    </>
  );
};

export default Category;
