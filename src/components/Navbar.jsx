import { BsFillMoonStarsFill } from "react-icons/bs";
function Navbar(props) {
  const handleClick = () => {
    // eslint-disable-next-line react/prop-types
    props.handleToggleDarkMode();
  };
  return (
    <nav className="flex justify-around items-center md:justify-between">
      <img src="/Logo.png" alt="Logo" className="w-8 h-8 hidden sm:block" />
      <ul className="flex text-slate-50 items-center">
        <li className="px-2">
          <a
            href="#proyectos"
            className="text-xl text-slate-400  hover:text-slate-50 hover:underline font-sans"
          >
            Proyectos
          </a>
        </li>
        <li className="px-2">
          <a
            href="#about"
            className="text-xl text-slate-400  hover:text-slate-50 hover:underline font-sans"
          >
            Sobre mí
          </a>
        </li>
        <li className="px-2">
          <a
            href="#"
            className="text-xl text-slate-400 hover:text-slate-50 hover:underline font-sans"
          >
            Contacto
          </a>
        </li>
        <li className="px-2">
          <BsFillMoonStarsFill
            onClick={handleClick}
            className="cursor-pointer dark:text-slate-400 text-xl  hover:underline"
          />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
