import DirectoryItem from "../directory-item/directory-item.component";
import "./directory.style.scss";

const Directory = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map((categorie) => (
        <DirectoryItem categorie={categorie} key={categorie.id} />
      ))}
    </div>
  );
};

export default Directory;
