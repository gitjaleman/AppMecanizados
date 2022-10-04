import { Link } from "react-router-dom";
import { FaPowerOff } from "react-icons/fa";
import NavAdmin from "./NavAdmin";
const Navbar = () => {
  return (
    <div className="w-[50px] h-full  bg-slate-800 flex flex-col">
      <div className="w-[50px] h-[calc(100%-50px)]  pt-2">
        <NavAdmin />
      </div>
      <div className="w-[50px] h-[50px]">
        <Link
          to="/salir"
          className="w-[50px] h-[50px] mb-3  flex items-center justify-center  text-slate-600 hover:text-slate-50 cursor-pointer"
        >
          <FaPowerOff className="w-[26px] h-[26px]" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
