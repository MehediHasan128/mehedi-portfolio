import { AiOutlineDownload } from "react-icons/ai";
import logo from "../../assets/logo/logo.png";

const navItems = ['Home', 'About', 'Skills', 'Projects', 'Contact']

const Navbar = () => {
  return (
    <>
      <div className="p-10 bg-transparent fixed z-10 w-full">
        <div className="w-[90%] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer">
            <img className="w-10" src={logo} alt="logo" />
            <span className="text-2xl text-white font-bold">Mehedi</span>
          </div>
          <div className="flex space-x-16 text-lg font-semibold text-white">
            {
              navItems.map((item) => <button className="cursor-pointer">{item}</button>)
            }
          </div>
          <div>
            <button className="px-5 py-2 rounded-md text-lg font-medium bg-white flex items-center gap-2 cursor-pointer active:scale-95 duration-1000"><AiOutlineDownload className="text-2xl" /> Resume</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
