import Navbar from "../components/navbar/Navbar";

const AppTemplate = ({ children }) => {
  return (
    <div className="w-full h-screen  flex flex-row">
      <Navbar />
      <div className="w-[calc(100%-50px)] h-full bg-gray-900 ">{children}</div>
    </div>
  );
};

export default AppTemplate;
