import "./Navbar.css";
import { BsFillMoonStarsFill, BsBrightnessHighFill } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { motion } from "framer-motion";
import { useState } from "react";
function Navbar(props) {
  const [isOn, setIsOn] = useState(false);
  const [menu, setMenu] = useState(false);
  const handleClick = () => {
    // eslint-disable-next-line react/prop-types
    props.handleToggleDarkMode();
    setIsOn(!isOn);
  };

  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 80,
  };

  const toggleMenu = () => {
    setMenu(!menu);
  };
  return (
    <>
      <img
        src="images/Logo.png"
        alt="Logo"
        className="w-8 h-8 hidden md:block cursor-pointer"
        onClick={() => (window.location.href = "#principal")}
      />
      <AiOutlineMenu
        className="text-slate-400 text-xl cursor-pointer hover:text-slate-50 flex md:hidden"
        onClick={toggleMenu}
      />
      <div className="flex">
        <nav className="hidden md:flex">
          <ul className="flex justify-center items-center">
            <li className="px-2">
              <a
                href="#about"
                className="text-xl text-slate-400  hover:text-slate-50 hover:underline"
              >
                Sobre mí
              </a>
            </li>
            <li className="md:pl-2 md:pr-10 py-2">
              <a
                href="#proyectos"
                className="text-xl text-slate-400  hover:text-slate-50 hover:underline"
              >
                Proyectos
              </a>
            </li>
          </ul>
        </nav>
        <div className="flex items-center justify-center">
          <BsFillMoonStarsFill className="text-slate-400 dark:text-slate-50 text-xl" />
          <div className="switch mx-4" data-isOn={isOn} onClick={handleClick}>
            <motion.div
              className="handle dark:bg-slate-800"
              layout
              transition={spring}
            />
          </div>
          <BsBrightnessHighFill className="text-xl dark:text-slate-400 text-slate-50" />
        </div>
      </div>
      <nav
        className={`w-full flex-nowrap justify-center items-center dark:bg-slate-800 bg-slate-700 md:hidden rounded-xl overflow-hidden transition-all ease-in-out flex ${
          menu ? "h-[13vh] opacity-1" : "h-[0vh] opacity-0"
        }`}
      >
        <ul className="flex-col">
          <li className="md:px-2 pt-6">
            <a
              href="#about"
              className="text-xl text-slate-400  hover:text-slate-50 hover:underline"
            >
              Sobre mí
            </a>
          </li>
          <li className="md:pl-2 md:pr-10 py-4">
            <a
              href="#proyectos"
              className="text-xl text-slate-400  hover:text-slate-50 hover:underline"
            >
              Proyectos
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
