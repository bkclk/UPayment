import { FunctionComponent } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { bindActionCreators } from "redux";
import { actionCreators } from "../store";
import { ProductType } from "../types";

interface ProductsProps {
  product: ProductType;
}

const ProductCard: FunctionComponent<ProductsProps> = (props) => {
  const navigate = useNavigate();
  const disatch = useDispatch();
  const { deleteProduct } = bindActionCreators(actionCreators, disatch);

  return (
    <div className="flex flex-col mx-4 my-4  w-32">
      <div
        className="bg-white p-3 rounded-lg shadow-lg cursor-pointer"
        onClick={() => navigate(`/product/${props.product.id}`)}
      >
        <img
          className="object-contain h-36 w-28 hover:scale-110 duration-300 overflow-hidden"
          src={props.product.avatar}
          alt="Not Found"
        />
      </div>
      <h4 className="font-semibold text-center mt-1">{props.product.name}</h4>
      <h4 className="font-semibold text-center"> $ {props.product.price}</h4>
      <button
        className="bg-red-600  text-white p-1 rounded-lg shadow-lg"
        onClick={() => deleteProduct(props.product.id)}
      >
        Remove
      </button>
    </div>
  );
};

export default ProductCard;
