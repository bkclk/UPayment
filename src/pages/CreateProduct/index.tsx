import { useState } from "react";
import SubmitForm from "../../components/SubmitForm";
import CategoryForm from "../../components/CategoryForm";
import { ProductType } from "../../types";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../store";
import { useNavigate } from "react-router-dom";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

const CreateProduct = () => {
  const [productName, setProductName] = useState<string>("");
  const [userEmail, setUserEmail] = useState<string>("");
  const [productDescription, setProductDescription] = useState<string>("");
  const [productAvatarUrl, setProductAvatarUrl] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [productPrice, setProductPrice] = useState<string>("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { addProduct } = bindActionCreators(actionCreators, dispatch);
  const handleClick = () => {
    const newProduct: ProductType = {
      createdAt: new Date(),
      name: productName,
      avatar: productAvatarUrl,
      id: "",
      price: productPrice,
      category: selectedCategory,
      description: productDescription,
      developerEmail: userEmail,
    };
    addProduct(newProduct, navigate);
  };
  console.log(selectedCategory);
  return (
    <div
      className="container  min-w-80 max-w-2xl px-28 flex flex-col justify-around "
      style={{ height: "75vh" }}
    >
      <h1 className="text-4xl text-center font-bold ">Create Product</h1>
      <div className="h-[75%] flex flex-col   justify-between pb-20">
        <SubmitForm
          name={"Product Name"}
          setValue={setProductName}
          value={productName}
        />
        <SubmitForm name={"Email"} setValue={setUserEmail} value={userEmail} />
        <SubmitForm
          name="Description"
          setValue={setProductDescription}
          value={productDescription}
        />
        <SubmitForm
          name="Image URL"
          setValue={setProductAvatarUrl}
          value={productAvatarUrl}
        />
        <CategoryForm setValue={setSelectedCategory} />
        <SubmitForm
          name="Price"
          setValue={setProductPrice}
          value={productPrice}
        />
        <button
          className=" w-full           
                    p-3
                    text-sm
                    font-bold
                    text-gray-700
                    bg-white bg-clip-padding bg-no-repeat
                    border border-solid border-gray-300
                    shadow-2xl
                    rounded
                    tracking-wide"
          disabled={
            !productName ||
            !userEmail ||
            !productDescription ||
            !productAvatarUrl ||
            !selectedCategory ||
            selectedCategory === "Select Category" ||
            !productPrice
              ? true
              : false
          }
          onClick={() => handleClick()}
        >
          SUBMIT
        </button>
        <h2
          className={
            !productName ||
            !userEmail ||
            !productDescription ||
            !productAvatarUrl ||
            !selectedCategory ||
            selectedCategory === "Select Category" ||
            !productPrice
              ? ""
              : "hidden"
          }
        >
          Please Fill the Blanks and Select a Category
        </h2>
      </div>
      <BsFillArrowLeftCircleFill
        className="fixed left-4 bottom-4 text-6xl cursor-pointer"
        onClick={() => navigate("/")}
      />
    </div>
  );
};

export default CreateProduct;
