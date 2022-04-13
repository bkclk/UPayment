import { FunctionComponent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../store";
import { IInitialState } from "../types";
import { HiChevronDown } from "react-icons/hi";

interface CreateProductProps {
  setValue: (value: string) => void;
}
const CategoryForm: FunctionComponent<CreateProductProps> = (props) => {
  const dispatch = useDispatch();
  const { getCategories } = bindActionCreators(actionCreators, dispatch);
  const categories = useSelector(
    (state: IInitialState) => state.reducer.categories
  );
  useEffect(() => {
    getCategories();
  }, []);
  return (
    <div className="relative">
      <select
        onChange={(e) => props.setValue(e.target.value)}
        className="form-select form-select-sm
                appearance-none
                block
                w-full
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
                cursor-pointer
                focus:text-gray-700 focus:bg-white focus:border-black focus:outline-none"
        aria-label=".form-select-sm example"
      >
        <option defaultValue={undefined}> Select Category</option>
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

export default CategoryForm;
