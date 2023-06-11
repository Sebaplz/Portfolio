import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import { AiFillLinkedin, AiFillHtml5, AiFillGithub } from "react-icons/ai";
import { DiReact, DiJsBadge, DiCss3 } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import { BsBootstrapFill } from "react-icons/bs";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <>
      <div className={darkMode ? "dark" : ""}>
        <header className="p-5 bg-slate-800 max-h-[8vh]">
          <Navbar handleToggleDarkMode={toggleDarkMode} />
        </header>

        <main className="dark:bg-gradient-to-t dark:from-[#1e293b] dark:to-[#0f172a] bg-slate-400 ">
          <section className="min-h-[92vh]">
            <div className="flex flex-col items-center pt-48 md:pt-28 lg:pt-44 lg:flex-row lg:justify-center">
              <div className="text-slate-950 dark:text-slate-50">
                <h1 className="text-5xl md:text-6xl lg:text-7xl">
                  Sebastián Neira
                </h1>
                <h2 className="text-2xl md:text-3xl lg:text-4xl">
                  Full Stack Developer
                </h2>
              </div>
              <div className="lg:w-2/5">
                <img
                  src="/hero.svg"
                  alt="Hero"
                  className="p-5 md:w-3/4 lg:w-4/5 mx-auto"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center items-center lg:mt-5 2xl:mt-10">
              <a
                href="#"
                className="text-slate-300 bg-slate-500 p-3 rounded-full font-sans font-semibold hover:text-slate-50 lg:text-xl"
              >
                Descargar CV
              </a>
              <div className="flex mt-5 justify-center items-center">
                <AiFillLinkedin
                  className="cursor-pointer text-slate-400 hover:text-slate-50 text-5xl"
                  onClick={() =>
                    (window.location.href =
                      "https://www.linkedin.com/in/sebastian-neira/")
                  }
                />
                <AiFillGithub
                  className="cursor-pointer text-slate-400 hover:text-slate-50 text-5xl"
                  onClick={() =>
                    (window.location.href = "https://github.com/Sebaplz")
                  }
                />
              </div>
            </div>
          </section>
          <section
            className="min-h-[50vh] p-4 w-full md:w-3/4 xl:w-1/2 mx-auto"
            id="about"
          >
            <h2 className="text-slate-50 text-center text-2xl md:text-3xl lg:text-4xl">
              Sobre Mí
            </h2>
            <p className="text-slate-50 text-justify mt-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Similique iure quas alias deleniti ducimus saepe dolor nisi veniam
              dolorum excepturi culpa ipsam eaque, perspiciatis nihil recusandae
              minima. Sapiente error laboriosam laborum. Laboriosam architecto,
              deserunt non perspiciatis tempore dolore ea temporibus.
            </p>
          </section>
          <section className="min-h-screen" id="proyectos">
            <h2 className="text-slate-50 text-center text-2xl md:text-3xl mb-4">
              Proyectos
            </h2>
            <div className="flex flex-col items-center gap-10 lg:flex-row md:px-10 xl:px-20">
              <article
                className="border-2 border-slate-400 w-3/4 md:w-full transition ease-in-out delay-150 blur-sm hover:blur-none cursor-pointer rounded-lg"
                onClick={() =>
                  (window.location.href =
                    "https://github.com/Sebaplz/weatherApi")
                }
              >
                <img
                  src="/WeatherApi.png"
                  alt="Weather Api"
                  className="rounded-t-lg mx-auto xl:h-[40rem]"
                />
                <div className="flex justify-center items-center p-2">
                  <DiReact className="cursor-pointer text-slate-400 hover:text-slate-50 text-5xl" />
                  <DiJsBadge className="cursor-pointer text-slate-400 hover:text-slate-50 text-5xl" />
                  <AiFillHtml5 className="cursor-pointer text-slate-400 hover:text-slate-50 text-5xl" />
                  <SiTailwindcss className="cursor-pointer text-slate-400 hover:text-slate-50 text-5xl" />
                </div>
              </article>
              <article
                className="border-2 border-slate-400 w-3/4 md:w-full transition ease-in-out delay-150 blur-sm hover:blur-none cursor-pointer rounded-lg"
                onClick={() =>
                  (window.location.href =
                    "https://github.com/Sebaplz/ip-address-tracker")
                }
              >
                <img
                  src="/IpTracker.png"
                  alt="Ip Tracker"
                  className="rounded-t-lg mx-auto xl:h-[40rem]"
                />
                <div className="flex justify-center items-center p-2">
                  <DiReact className="cursor-pointer text-slate-400 hover:text-slate-50 text-5xl" />
                  <DiJsBadge className="cursor-pointer text-slate-400 hover:text-slate-50 text-5xl" />
                  <AiFillHtml5 className="cursor-pointer text-slate-400 hover:text-slate-50 text-5xl" />
                  <SiTailwindcss className="cursor-pointer text-slate-400 hover:text-slate-50 text-5xl" />
                </div>
              </article>
              <article
                className="border-2 border-slate-400 w-3/4 md:w-full transition ease-in-out delay-150 blur-sm hover:blur-none cursor-pointer rounded-lg"
                onClick={() =>
                  (window.location.href =
                    "https://github.com/Sebaplz/ip-address-tracker")
                }
              >
                <img
                  src="/DigiApi.png"
                  alt="Ip Tracker"
                  className="rounded-t-lg mx-auto xl:h-[40rem]"
                />
                <div className="flex justify-center items-center p-2">
                  <DiJsBadge className="cursor-pointer text-slate-400 hover:text-slate-50 text-5xl" />
                  <AiFillHtml5 className="cursor-pointer text-slate-400 hover:text-slate-50 text-5xl" />
                  <DiCss3 className="cursor-pointer text-slate-400 hover:text-slate-50 text-5xl" />
                  <BsBootstrapFill className="cursor-pointer text-slate-400 hover:text-slate-50 text-5xl" />
                </div>
              </article>
            </div>
            <div className="flex justify-center mt-10">
              <a
                href="https://github.com/Sebaplz?tab=repositories"
                className="text-slate-300 bg-slate-500 p-3 rounded-full font-sans font-semibold hover:text-slate-50 lg:text-xl"
              >
                Ver todos los Proyectos 👀
              </a>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
