import { Link } from "react-router-dom";
import { useState } from "react";
import Logo from "../logo/Logo";
import logoNav from "../../assets/images/brand/logo-ice-cream-and-name-row.png";
import Switcher from "../../components/darkMode/Switcher";

const navLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Products",
    path: "/products",
  },
  { name: "About Us", path: "/about-us" },
  {
    name: "Support",
    path: "/support",
  },
];
const Navbar = () => {
  const [navClasses, setNavClasses] = useState(
    "duration-500 md:static absolute md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto  w-full flex items-center px-5"
  );
  const [nameIcon, setNameIcone] = useState("menu-outline");

const handleToggleMenu = () => {
  setNameIcone(nameIcon === "menu-outline" ? "close" : "menu-outline");

  if (nameIcon === "menu-outline") {
    setNavClasses(
      "md:static md:min-h-fit duration-500 absolute min-h-[60vh] left-0 top-[9%] md:w-auto w-full flex items-center px-5"
    );
  } else {
    setNavClasses(
      "duration-500 md:static absolute md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5"
    );
  }
};



  return (
    <header>
      <nav className="flex">
        <div className="flex items-center w-[92%] justify-start">
          <div className="w-[250px] p-8">
            <Logo logo={logoNav} />
          </div>

          <div className={navClasses}>
            <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
              <li>
                <div className="pr-8">
                  <Switcher />
                </div>
              </li>
              {navLinks.map((link, index) => {
                return (
                  <li key={index}>
                    <Link
                      className=" hover:text-[#e058cc] text-white"
                      to={link.path}
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="flex items-center w-[92%] justify-end">
          <Link to="/login">
            <button className=" text-white px-5 py-2 rounded-full hover:text-[#e058cc]">
              Login
            </button>
          </Link>
          <Link to="/signup">
            <button className=" text-white px-5 py-2 rounded-full hover:text-[#e058cc]">
              Sign Up
            </button>
          </Link>

          <div className="text-3xl cursor-pointer md:hidden">
            <ion-icon onClick={handleToggleMenu} name={nameIcon}></ion-icon>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
