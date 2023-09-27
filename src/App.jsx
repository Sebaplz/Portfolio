import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { motion } from "framer-motion";
import Footer from "./components/Footer";
import Proyectos from "./components/Proyectos";
import data from "../data.json";
import About from "./components/About";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <>
      <div className={darkMode ? "dark" : ""}>
        <header className="p-5 dark:bg-slate-800 bg-slate-700 max-h-[7vh] fixed w-full z-50 flex flex-row flex-wrap md:flex-nowrap justify-between items-center">
          <Navbar handleToggleDarkMode={toggleDarkMode} />
        </header>
        <main className="dark:bg-gradient-to-t dark:from-[#1e293b] dark:to-[#0f172a] bg-slate-200">
          <section className="min-h-[92vh]" id="principal">
            <div className="flex flex-col items-center pt-48 md:pt-36 lg:pt-72 xl:pt-60 lg:flex-row lg:justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
                className="text-slate-800 dark:text-slate-50 px-4"
              >
                <h1 className="text-4xl md:text-6xl 2xl:text-7xl font-bold">
                  Sebastián Neira
                </h1>
                <h2 className="text-2xl md:text-3xl lg:text-4xl text-center lg:text-left">
                  Full Stack Developer
                </h2>
              </motion.div>
              <motion.div
                initial={{ x: 1000 }}
                animate={{ x: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
                className="lg:w-2/5"
              >
                <img
                  src="images/hero.svg"
                  alt="Hero"
                  className="p-5 md:w-3/4 lg:w-4/5 mx-auto"
                />
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              className="flex flex-col justify-center items-center lg:mt-5 2xl:mt-10"
            >
              <motion.div
                className="my-5"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <a
                  href="SebastianNeiraCV.pdf"
                  download="SebastianNeiraCV.pdf"
                  className="text-slate-50 bg-slate-700 dark:bg-[#087ea4] p-3 rounded-full font-semibold lg:text-xl"
                >
                  Descargar CV
                </a>
              </motion.div>
              <div className="flex mt-5 justify-center items-center">
                <a
                  href="https://www.linkedin.com/in/sebastian-neira/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillLinkedin className="cursor-pointer text-slate-700 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-50 text-5xl" />
                </a>
                <FiMail
                  className="cursor-pointer text-slate-700 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-50 text-5xl"
                  onClick={() =>
                    (window.location.href =
                      "mailto:sebastian.h.neira@outlook.com")
                  }
                />
                <a
                  href="https://github.com/Sebaplz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillGithub className="cursor-pointer text-slate-700 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-50 text-5xl" />
                </a>
              </div>
            </motion.div>
          </section>
          <About />
          <section className="min-h-[90%] pt-20" id="proyectos">
            <h2 className="text-slate-800 dark:text-slate-50 text-center text-2xl md:text-3xl mb-4 font-bold">
              Proyectos
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 p-8 justify-items-center">
              {data.map((proyecto) => (
                <li key={proyecto.id} className="flex">
                  <Proyectos
                    src={proyecto.src}
                    alt={proyecto.alt}
                    href={proyecto.href}
                    deploy={proyecto.deploy}
                    title={proyecto.title}
                    description={proyecto.description}
                  />
                </li>
              ))}
            </ul>
            <div className="flex justify-center pt-10">
              <motion.a
                href="https://github.com/Sebaplz?tab=repositories"
                target="_blank"
                rel="noreferrer"
                className="text-slate-50 bg-slate-700 dark:bg-[#087ea4] p-3 rounded-full font-sans font-semibold lg:text-xl"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Ver todos los Proyectos 👀
              </motion.a>
            </div>
          </section>
          <div className="flex justify-end px-5 pb-2">
            <BsFillArrowUpCircleFill
              className="animate-bounce cursor-pointer text-slate-800 dark:text-slate-400 dark:hover:text-slate-50 text-5xl"
              onClick={() => (window.location.href = "#principal")}
            />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
