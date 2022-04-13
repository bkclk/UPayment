import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="py-10">
      <div
        className="flex flex-row justify-between p-3 border-2 shadow-2xl 
            rounded-lg bg-slate-50  font-medium "
      >
        <Link to="/" className="italic">
          UPayments Store
        </Link>
        <Link to="#">Register</Link>
      </div>
    </div>
  );
};

export default Navbar;
