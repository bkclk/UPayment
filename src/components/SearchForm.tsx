import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../store";
import { IInitialState } from "../types";

const SearchForm = () => {
  const dispatch = useDispatch();
  const { setSearchInput } = bindActionCreators(actionCreators, dispatch);
  const searchFromInput = useSelector(
    (state: IInitialState) => state.reducer.searchInput
  );
  const products = useSelector(
    (state: IInitialState) => state.reducer.products
  );

  return (
    <div>
      <input
        type="search"
        value={searchFromInput}
        onChange={(event) => setSearchInput(event.currentTarget.value)}
        className="form-input  w-80            
                px-3
                py-2
                text-sm
                font-normal
                text-gray-700
                bg-white bg-clip-padding bg-no-repeat
                border border-solid border-gray-300
                shadow-2xl
                rounded
                placeholder-opacity-50
                tracking-wide"
        placeholder={
          products?.map((product) => product.name).join(", ") + " ..."
        }
      />
    </div>
  );
};

export default SearchForm;
