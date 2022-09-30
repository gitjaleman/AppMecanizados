import { useState } from "react";
import { BiAt, BiLock, BiLoaderAlt } from "react-icons/bi";
import { useForm } from "react-hook-form";
import img from "../assets/login.png";

const Login = () => {
  const [count, setCount] = useState(0);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setCount(1);
    console.log(data);
    console.log(errors.email);
  };

  return (
    <div className="bg-slate-800 w-full h-screen flex flex-row">
      <div className="w-1/2 h-full  p-8">
        <div className="w-full h-full bg-slate-700  rounded-3xl drop-shadow-2xl flex justify-center items-center">
          <img src={img} className="max-w-xl" />
        </div>
      </div>
      <div className="w-1/2 h-full  flex justify-center items-center">
        <form
          autoComplete="off"
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-sm  "
        >
          <div className="text-xl font-semibold text-white mb-6">
            Ingreso al sistema
          </div>
          <div className="relative mb-6 ">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none text-white">
              <BiAt />
            </div>
            <input
              {...register("email")}
              type="email"
              id="input-group-1"
              className="text-base bg-slate-800 border border-slate-100 text-slate-100  rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent  block w-full pl-10 p-2.5  "
              placeholder="Dirección de Correo"
            />
          </div>
          <div className="relative mb-6 ">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none text-white">
              <BiLock />
            </div>
            <input
              {...register("password")}
              type="password"
              id="input-group-2"
              className="text-base bg-slate-800 border border-slate-100 text-slate-100  rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent  block w-full pl-10 p-2.5  "
              placeholder="Contraseña"
            />
          </div>

          <div className="mb-6">
            <div className="flex items-center justify-between">
              <div>
                <label className="block text-gray-500 font-bold">
                  <input
                    className="mr-2 leading-tight bg-slate-800 border border-slate-100"
                    type="checkbox"
                    {...register("remember")}
                  />
                  <span className="text-base">Recordar</span>
                </label>
              </div>
              <div>
                <a
                  className="text-base text-slate-200 hover:text-slate-500"
                  href="#password-request"
                >
                  Olvidé mi contraseña
                </a>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className=" w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded flex justify-center items-center"
          >
            <div className="flex flex-row">
              {count === 1 && (
                <BiLoaderAlt className="animate-spin h-5 w-5 mr-3 text-white" />
              )}
              Ingresar
            </div>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
