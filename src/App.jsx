import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import { AiFillLinkedin, AiFillHtml5, AiFillGithub } from "react-icons/ai";
import { DiReact, DiJsBadge, DiCss3 } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import { BsBootstrapFill, BsFillArrowUpCircleFill } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { motion } from "framer-motion";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <>
      <div className={darkMode ? "dark" : ""}>
        <header className="p-5 dark:bg-slate-800 bg-slate-700 max-h-[8vh] fixed w-full z-50">
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
                <h1 className="text-4xl sm:text-5xl md:text-6xl 2xl:text-7xl font-bold">
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
                  src="/hero.svg"
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
                  href="#"
                  className="dark:text-slate-50 text-slate-800 bg-[#087ea4] p-3 rounded-full font-semibold lg:text-xl"
                >
                  Descargar CV
                </a>
              </motion.div>
              <div className="flex mt-5 justify-center items-center">
                <AiFillLinkedin
                  className="cursor-pointer text-slate-700 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-50 text-5xl"
                  onClick={() =>
                    (window.location.href =
                      "https://www.linkedin.com/in/sebastian-neira/")
                  }
                />
                <FiMail
                  className="cursor-pointer text-slate-700 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-50 text-5xl"
                  onClick={() =>
                    (window.location.href =
                      "mailto:sebastian.h.neira@outlook.com")
                  }
                />
                <AiFillGithub
                  className="cursor-pointer text-slate-700 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-50 text-5xl"
                  onClick={() =>
                    (window.location.href = "https://github.com/Sebaplz")
                  }
                />
              </div>
            </motion.div>
          </section>
          <section
            className="min-h-[30vh] pt-20 p-4 w-full md:w-3/4 xl:w-1/2 mx-auto"
            id="about"
          >
            <h2 className="text-slate-800 dark:text-slate-50 text-center text-2xl md:text-3xl lg:text-4xl font-bold">
              Sobre Mí
            </h2>
            <p className="text-slate-800 dark:text-slate-50 text-justify mt-4 font-medium">
              Hola! Soy Sebastián Neira, Ingeniero en Informática, en busca de
              oportunidades laborales que me permitan adquirir conocimientos y
              seguir desarrollando mis habilidades como desarrollador. Soy un
              apasionado de la tecnología, siempre busco aprender y aplicar
              soluciones que puedan ayudar a las personas a mejorar su día a
              día.
            </p>
            <p className="text-slate-800 dark:text-slate-50 text-center font-medium">
              Mi lema es{" "}
              <span className="italic">
                &quot;El conocimiento así como la felicidad, es mejor cuando se
                comparte&quot;.
              </span>
            </p>
          </section>
          <section className="min-h-screen pt-20" id="proyectos">
            <h2 className="text-slate-800 dark:text-slate-50 text-center text-2xl md:text-3xl mb-4 font-bold">
              Proyectos
            </h2>
            <div className="flex flex-col items-center gap-10 lg:flex-row md:px-10 xl:px-20">
              <article
                className="border-2 border-slate-800 dark:border-slate-400 w-3/4 md:w-full transition ease-in-out delay-150 blur-[1px] hover:blur-none cursor-pointer rounded-lg"
                onClick={() =>
                  (window.location.href =
                    "https://github.com/Sebaplz/weatherApi")
                }
              >
                <img
                  src="/WeatherApi.png"
                  alt="Weather Api"
                  className="rounded-t-lg md:rounded-none mx-auto xl:h-[40rem]"
                />
                <div className="flex justify-center items-center p-2">
                  <DiReact className="cursor-pointer text-slate-700 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-50 text-5xl" />
                  <DiJsBadge className="cursor-pointer text-slate-700 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-50 text-5xl" />
                  <AiFillHtml5 className="cursor-pointer text-slate-700 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-50 text-5xl" />
                  <SiTailwindcss className="cursor-pointer text-slate-700 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-50 text-5xl" />
                </div>
              </article>
              <article
                className="border-2 border-slate-800 dark:border-slate-400 w-3/4 md:w-full cursor-pointer rounded-lg"
                onClick={() =>
                  (window.location.href =
                    "https://github.com/Sebaplz/ip-address-tracker")
                }
              >
                <img
                  src="/IpTracker.png"
                  alt="Ip Tracker"
                  className="rounded-t-lg md:rounded-none mx-auto xl:h-[40rem]"
                />
                <div className="flex justify-center items-center p-2">
                  <DiReact className="cursor-pointer text-slate-700 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-50 text-5xl" />
                  <DiJsBadge className="cursor-pointer text-slate-700 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-50 text-5xl" />
                  <AiFillHtml5 className="cursor-pointer text-slate-700 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-50 text-5xl" />
                  <SiTailwindcss className="cursor-pointer text-slate-700 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-50 text-5xl" />
                </div>
              </article>
              <article
                className="border-2 border-slate-800 dark:border-slate-400 w-3/4 md:w-full transition ease-in-out delay-150 blur-[1px] hover:blur-none cursor-pointer rounded-lg"
                onClick={() =>
                  (window.location.href =
                    "https://github.com/Sebaplz/ip-address-tracker")
                }
              >
                <img
                  src="/DigiApi.png"
                  alt="Ip Tracker"
                  className="rounded-t-lg md:rounded-none mx-auto xl:h-[40rem]"
                />
                <div className="flex justify-center items-center p-2">
                  <DiJsBadge className="cursor-pointer text-slate-700 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-50 text-5xl" />
                  <AiFillHtml5 className="cursor-pointer text-slate-700 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-50 text-5xl" />
                  <DiCss3 className="cursor-pointer text-slate-700 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-50 text-5xl" />
                  <BsBootstrapFill className="cursor-pointer text-slate-700 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-50 text-5xl" />
                </div>
              </article>
            </div>
            <motion.div
              className="flex justify-center mt-10"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <a
                href="https://github.com/Sebaplz?tab=repositories"
                className="text-slate-800 dark:text-slate-50 bg-[#087ea4] p-3 rounded-full font-sans font-semibold lg:text-xl"
              >
                Ver todos los Proyectos 👀
              </a>
            </motion.div>
          </section>
          <div className="flex justify-end p-5">
            <BsFillArrowUpCircleFill
              className="animate-bounce cursor-pointer text-slate-800 dark:text-slate-400 dark:hover:text-slate-50 text-5xl"
              onClick={() => (window.location.href = "#principal")}
            />
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
