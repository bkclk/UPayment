import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../store";
import { IInitialState } from "../../types";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

const DetailedProduct = () => {
  const { id } = useParams<{ id?: string }>();
  const dispatch = useDispatch();
  const { getProduct } = bindActionCreators(actionCreators, dispatch);
  const product = useSelector(
    (state: IInitialState) => state.reducer.activeProduct
  );
  const navigate = useNavigate();

  useEffect(() => {
    getProduct(id);
  }, []);

  return (
    <div className=" container mx-auto  px-18 py-6 " style={{ height: "65vh" }}>
      <div className=" flex flex-row border-b-4 border-gray-400 pb-3">
        <div className="bg-white p-3 rounded-lg shadow-lg w-48 h-60 flex justify-center items-center px-5">
          <img
            className="object-contain  hover:scale-110 duration-300 "
            src={product?.avatar}
            alt="Not Found"
          />
        </div>
        <div className="pl-4 flex flex-col justify-between  h-60">
          <h1 className="text-4xl font-bold tracking-wide">{product?.name}</h1>
          <h1 className="text-2xl font-semibold">$ {product?.price}</h1>
        </div>
      </div>
      <br />
      <div className="">
        <h1 className="font-semibold text-xl "> Decription</h1>
        <p>{product?.description}</p>
      </div>
      <BsFillArrowLeftCircleFill
        className="fixed left-4 bottom-4 text-6xl cursor-pointer"
        onClick={() => navigate("/")}
      />
    </div>
  );
};

export default DetailedProduct;
