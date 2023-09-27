import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { FiMail } from "react-icons/fi";

function Footer() {
  return (
    <footer className="p-5 dark:bg-slate-900 bg-slate-700 flex flex-col justify-center items-center text-slate-50 dark:text-slate-50">
      <h2 className=" pb-3">Desarrollado por Sebastián Neira 🧙‍♂️</h2>
      <div className="flex justify-between items-center gap-3">
        <a
          href="https://www.linkedin.com/in/sebastian-neira/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillLinkedin className="cursor-pointer text-slate-400 hover:text-slate-50 text-3xl" />
        </a>
        <FiMail
          className="cursor-pointer text-slate-400 hover:text-slate-50 text-3xl"
          onClick={() =>
            (window.location.href = "mailto:sebastian.h.neira@outlook.com")
          }
        />
        <a
          href="https://github.com/Sebaplz"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillGithub className="cursor-pointer text-slate-400 hover:text-slate-50 text-3xl" />
        </a>
      </div>
    </footer>
  );
}
export default Footer;
