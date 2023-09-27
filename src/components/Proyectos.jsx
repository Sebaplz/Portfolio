import { AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

Proyectos.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  deploy: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

function Proyectos({ src, alt, href, deploy, title, description }) {
  return (
    <motion.div
      className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 relative"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <img className="rounded-t-lg" src={src} alt={alt} />
      <div className="p-5 mb-10">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <div className="absolute bottom-4 flex gap-2">
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="text-slate-800 dark:text-slate-50 dark:bg-[#087ea4] bg-slate-700 rounded-xl font-sans font-semibold p-2"
          >
            <AiFillGithub className="cursor-pointer text-slate-50 text-3xl" />
          </a>
          <a
            href={deploy}
            target="_blank"
            rel="noreferrer"
            className="text-slate-50 dark:bg-[#087ea4] bg-slate-700 rounded-xl font-sans font-semibold p-2 h-12 flex items-center"
          >
            Ver Deploy
          </a>
        </div>
      </div>
    </motion.div>
  );
}
export default Proyectos;
