import { AiOutlineDownload } from "react-icons/ai";
import logo from "../../assets/logo/logo.png";

const navItems = ['Home', 'About', 'Skills', 'Projects', 'Education', 'Contact']

const Navbar = () => {
  return (
    <>
      <div className="py-5 fixed w-full bg-[#21252B] z-100">
        <div className="w-[90%] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer">
            <img className="w-12" src={logo} alt="logo" />
            <span className="text-2xl text-white">Mehedi</span>
          </div>
          <div className="flex space-x-16 text-lg text-white">
            {
              navItems.map((item) => <button className="cursor-pointer">{item}</button>)
            }
          </div>
          <div>
            <button className="px-5 py-2 rounded-md text-lg bg-blue-100 flex items-center gap-2 cursor-pointer active:scale-95 duration-1000"><AiOutlineDownload className="text-2xl" /> Resume</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
