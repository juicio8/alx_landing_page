import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="p-3 mt-5 min-h-[50vh]">
      <motion.h2
        className="text-2xl font-bold text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 3 }}
      >
        About
      </motion.h2>
      <motion.div
        className="text-md mt-3"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 3, delay: 0.5 }}
      >
        This Project was inspired by{" "}
        <a className="text-purple-500 font-medium">Scrimba</a>.
        <p>
          I love to watch movies with family and friends, then talk about it.
          This project was done Solo and is expected to be bigger than this with
          great ideas being implemented.
        </p>
      </motion.div>
      <motion.div
        className="mt-5 flex justify-center gap-3"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 3, delay: 0.5 }}
      >
        <a
          href="https://www.linkedin.com/in/
denioch"
          target="_blank"
        >
          <FaLinkedin size={24} className="hover:text-purple-500" />
        </a>
        <a href="https://github.com/juicio8" target="_blank">
          <FaGithub size={24} className="hover:text-purple-500" />
        </a>
      </motion.div>
    </section>
  );
};

export default About;
