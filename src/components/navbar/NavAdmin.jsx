import { Link } from "react-router-dom";
import {
  FaEdit,
  FaBoxOpen,
  FaMoneyBillWaveAlt,
  FaChartBar,
  FaUsersCog,
  FaFileAlt,
  FaRegUser,
  FaGlobeAmericas,
  FaTools,
} from "react-icons/fa";

const NavAdmin = () => {
  return (
    <>
      <Link
        to="/perfil"
        className="w-[50px] h-[40px] mb-3  flex items-center justify-center  text-slate-600 hover:text-slate-50 cursor-pointer"
      >
        <FaRegUser className="w-[26px] h-[26px]" />
      </Link>
      <Link
        to="/registro"
        className="w-[50px] h-[40px] mb-3  flex items-center justify-center  text-slate-600 hover:text-slate-50 cursor-pointer"
      >
        <FaEdit className="w-[26px] h-[26px]" />
      </Link>
      <Link
        to="/inventario"
        className="w-[50px] h-[40px] mb-3  flex items-center justify-center  text-slate-600 hover:text-slate-50 cursor-pointer"
      >
        <FaBoxOpen className="w-[26px] h-[26px]" />
      </Link>
      <Link
        to="/finanzas"
        className="w-[50px] h-[40px] mb-3  flex items-center justify-center  text-slate-600 hover:text-slate-50 cursor-pointer"
      >
        <FaMoneyBillWaveAlt className="w-[26px] h-[26px]" />
      </Link>
      <Link
        to="/reportes"
        className="w-[50px] h-[40px] mb-3  flex items-center justify-center  text-slate-600 hover:text-slate-50 cursor-pointer"
      >
        <FaChartBar className="w-[26px] h-[26px]" />
      </Link>
      <Link
        to="/documentos"
        className="w-[50px] h-[40px] mb-3  flex items-center justify-center  text-slate-600 hover:text-slate-50 cursor-pointer"
      >
        <FaFileAlt className="w-[26px] h-[26px]" />
      </Link>
      <Link
        to="/personal"
        className="w-[50px] h-[40px] mb-3  flex items-center justify-center  text-slate-600 hover:text-slate-50 cursor-pointer"
      >
        <FaUsersCog className="w-[26px] h-[26px]" />
      </Link>

      <Link
        to="/proyectos"
        className="w-[50px] h-[40px] mb-3  flex items-center justify-center  text-slate-600 hover:text-slate-50 cursor-pointer"
      >
        <FaTools className="w-[26px] h-[26px]" />
      </Link>
      <Link
        to="/web"
        className="w-[50px] h-[40px] mb-3  flex items-center justify-center  text-slate-600 hover:text-slate-50 cursor-pointer"
      >
        <FaGlobeAmericas className="w-[26px] h-[26px]" />
      </Link>
    </>
  );
};

export default NavAdmin;
