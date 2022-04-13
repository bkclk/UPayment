import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Loading from "./Loading";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import { IInitialState } from "../types";

const Layout = () => {
  const errorMessage = useSelector(
    (state: IInitialState) => state.reducer.error
  );
  toast.error(errorMessage, { position: toast.POSITION.BOTTOM_RIGHT });
  return (
    <div className=" bg-slate-100  h-screen">
      <div className="container   px-4">
        <Navbar />
        <Loading>
          <Outlet />
        </Loading>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Layout;
