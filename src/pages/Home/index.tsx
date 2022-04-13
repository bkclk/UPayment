import Categories from "../../components/Categories";
import Products from "../../components/Products";
import { useNavigate } from "react-router-dom";
import { AiFillPlusCircle } from "react-icons/ai";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Categories />
      <Products />
      <AiFillPlusCircle
        className="fixed right-4 bottom-4 text-6xl cursor-pointer"
        onClick={() => navigate("/product/create")}
      />
    </div>
  );
};

export default Home;
