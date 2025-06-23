import { useEffect, useState } from "react";
import logo from "../../assets/logo/logo2.png";
import Button from "../ui/Button";

const navItems = [
  {
    id: 'home',
    navItem: 'Home'
  },
  {
    id: 'about',
    navItem: 'About'
  },
  {
    id: 'skills',
    navItem: 'Skills'
  },
  {
    id: 'projects',
    navItem: 'Projects'
  },
  {
    id: 'education',
    navItem: 'Education'
  },
  {
    id: 'contact',
    navItem: 'Contact'
  },
];


const Navbar = () => {

  const [isScrolled, setIsScrolled] = useState(false)
  const [navId, setNavId] = useState<string>(window.location.hash.replace('#', '') || 'home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if(scrollY > window.innerHeight - 100){
        setIsScrolled(true)
      }else{
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll)
  }, []);
console.log(isScrolled);

  useEffect(() => {
    const handleChangeNav = () => {
      setNavId(window.location.hash.replace('#', '') || 'home')
    };

    window.addEventListener("hashchange", handleChangeNav)

    return () => {
      window.addEventListener("hashchange", handleChangeNav)
    }
  }, []);

  console.log(isScrolled);

  return (
    <>
      <div className={`py-5 fixed w-full z-100 ${isScrolled ? "bg-[#06141b85]" : "bg-transparent"} backdrop-blur-md`}>
        <div className="w-[90%] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer">
            <img className="w-12" src={logo} alt="logo" />
            <span className="text-2xl text-white">Mehedi</span>
          </div>
          <div className="flex xl:space-x-5 2xl:space-x-14 text-lg text-white">
            {
              navItems.map((item) => (
                <span className={`cursor-pointer ${(item.id === navId) && "border-b-2 border-[#FF7F50]"} px-2 pb-0.5`}><a href={`#${item.id}`}>{item.navItem}</a></span>
              ))
            }
          </div>
          <div className="flex gap-1">
            <Button
              btnTitle="Contact Me"
              className="bg-[#FF7F50]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
