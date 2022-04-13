import CategoryMenu from "./CategoryMenu";
import SearchForm from "./SearchForm";

const Categories = () => {
  return (
    <>
      <div className="flex flex-row justify-between my-8">
        <SearchForm />
        <CategoryMenu />
      </div>
    </>
  );
};

export default Categories;
