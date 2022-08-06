import CategoryItem from "../category-item/category-item.component";
import "./directory.style.scss";

const Directory = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map((categorie) => (
        <CategoryItem categorie={categorie} key={categorie.id} />
      ))}
    </div>
  );
};

export default Directory;
