import { HiChevronDown } from "react-icons/hi";
import { IInitialState } from "../types";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators } from "../store";
import { bindActionCreators } from "redux";
import { useEffect } from "react";

const CategoryMenu = () => {
  const dispatch = useDispatch();

  const { selectCategory, getCategories } = bindActionCreators(
    actionCreators,
    dispatch
  );
  const categories = useSelector(
    (state: IInitialState) => state.reducer.categories
  );
  useEffect(() => {
    getCategories();
  }, []);
  return (
    <div className="relative">
      <select
        onChange={(e) => selectCategory(e.target.value)}
        className="form-select form-select-sm
                appearance-none
                block
                w-40
                px-2
                py-2
                text-sm
                font-normal
                text-gray-700
                bg-white bg-clip-padding bg-no-repeat
                border border-solid border-gray-300
                shadow-2xl
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-black focus:outline-none"
        aria-label=".form-select-sm example"
      >
        <option defaultValue="Categories"> Categories</option>
        {categories?.map((category) => (
          <option key={category.id} value={category.name}>
            {category.name}
          </option>
        ))}
      </select>
      <HiChevronDown className="absolute right-2 top-2 text-xl" />
    </div>
  );
};

export default CategoryMenu;
