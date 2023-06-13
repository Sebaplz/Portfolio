import "./Navbar.css";
import { BsFillMoonStarsFill, BsBrightnessHighFill } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { motion } from "framer-motion";
import { useState } from "react";
function Navbar(props) {
  const [isOn, setIsOn] = useState(false);
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
  return (
    <>
      <nav className="md:flex md:justify-between md:items-center hidden">
        <img
          src="/Logo.png"
          alt="Logo"
          className="w-8 h-8 hidden sm:block cursor-pointer"
          onClick={() => (window.location.href = "#principal")}
        />
        <ul className="flex items-center">
          <li className="px-2">
            <a
              href="#about"
              className="text-xl text-slate-400  hover:text-slate-50 hover:underline"
            >
              Sobre mí
            </a>
          </li>
          <li className="pl-2 pr-10">
            <a
              href="#proyectos"
              className="text-xl text-slate-400  hover:text-slate-50 hover:underline"
            >
              Proyectos
            </a>
          </li>
          <li className="px-2 flex items-center">
            <BsFillMoonStarsFill className="text-slate-400 dark:text-slate-50 text-xl" />
            <div className="switch mx-2" data-isOn={isOn} onClick={handleClick}>
              <motion.div
                className="handle dark:bg-slate-800"
                layout
                transition={spring}
              />
            </div>
            <BsBrightnessHighFill className="text-xl dark:text-slate-400 text-slate-50" />
          </li>
        </ul>
      </nav>
      <nav className="flex justify-between items-center md:hidden">
        <AiOutlineMenu className="text-slate-400 text-xl cursor-pointer hover:text-slate-50" />
        <div className="flex items-center px-2">
          <BsFillMoonStarsFill className="text-slate-400 dark:text-slate-50 text-xl" />
          <div className="switch mx-2" data-isOn={isOn} onClick={handleClick}>
            <motion.div
              className="handle dark:handle-dark"
              layout
              transition={spring}
            />
          </div>
          <BsBrightnessHighFill className="text-xl dark:text-slate-400 text-slate-50" />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
