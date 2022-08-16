import "./categories-preview.styles.scss";
import { useContext } from 'react';
import { CategoriesContext } from '../../components/contexts/categories.context';
import CategoryPreview from '../../components/category-preview/category-preview.component';
import { Fragment } from 'react';

const CategoriesPreview = ({ title, products }) => {
  const { categoriesMap } = useContext(CategoriesContext);
  
  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview
            products={products}
            key={title}
            title={title}
          ></CategoryPreview>
        );
      })}
    </Fragment>
  );
};

export default CategoriesPreview;
