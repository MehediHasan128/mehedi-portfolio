import logo from "../../assets/logo/logo.png";
import Button from "../ui/Button";

const navItems = [
  "Home",
  "About",
  "Skills",
  "Projects",
  "Education",
  "Contact",
];

const Navbar = () => {
  return (
    <>
      <div className="py-5 fixed w-full z-100 bg-[#21252b9c] backdrop-blur-md">
        <div className="w-[90%] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer">
            <img className="w-12" src={logo} alt="logo" />
            <span className="text-2xl text-white">Mehedi</span>
          </div>
          <div className="flex space-x-16 text-lg text-white">
            {navItems.map((item) => (
              <button className="cursor-pointer">{item}</button>
            ))}
          </div>
          <div>
            <Button
              btnTitle="Contact Me"
              className="bg-blue-100"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
