function About() {
  return (
    <section
      className="min-h-[30vh] pt-20 p-4 w-full md:w-3/4 xl:w-1/2 mx-auto"
      id="about"
    >
      <h2 className="text-slate-800 dark:text-slate-50 text-center text-2xl md:text-3xl lg:text-4xl font-bold">
        Sobre mí
      </h2>
      <p className="text-slate-800 dark:text-slate-50 text-justify mt-4 font-medium">
        Hola! Soy Sebastián Neira, Ingeniero en Informática, en busca de
        oportunidades laborales que me permitan adquirir conocimientos y seguir
        desarrollando mis habilidades como desarrollador. Soy un apasionado de
        la tecnología, siempre busco aprender y aplicar soluciones que puedan
        ayudar a las personas a mejorar su día a día.
      </p>
      <p className="text-slate-800 dark:text-slate-50 text-center font-medium pt-4">
        Mi lema es{" "}
        <span className="italic">
          &quot;El conocimiento así como la felicidad, es mejor cuando se
          comparte&quot;.
        </span>
      </p>
    </section>
  );
}
export default About;
