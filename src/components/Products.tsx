import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../store";
import { IInitialState } from "../types";
import ProductCard from "./ProductCard";

const Products = () => {
  const dispatch = useDispatch();
  const { getProducts } = bindActionCreators(actionCreators, dispatch);
  const products = useSelector(
    (state: IInitialState) => state.reducer.products
  );
  const searchInput = useSelector(
    (state: IInitialState) => state.reducer.searchInput
  );
  const selectedCategory = useSelector(
    (state: IInitialState) => state.reducer.selectedCategory
  );

  useEffect(() => {
    getProducts();
  }, [searchInput, selectedCategory]);

  return (
    <div className="container mx-auto  px-18 py-6 ">
      <div
        className="grid grid-cols-4 gap-2  overflow-y-auto"
        style={{ height: "65vh" }}
      >
        {products?.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default Products;
