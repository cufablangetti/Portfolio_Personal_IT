import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";
import { HiDownload } from "react-icons/hi";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -left-20 w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -40, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] rounded-full bg-purple-500/10 blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 20, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-pink-500/5 blur-[100px]"
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 pt-24 text-center">
        {/* Name with Glitch */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-lg sm:text-xl text-gray-400 font-light mb-3 tracking-widest uppercase font-mono">
            {"// Hola, soy"}
          </h2>
          <h1
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-black mb-6 glitch"
            data-text="Facundo Blangetti"
          >
            <span className="gradient-text">Facundo</span>
            <br />
            <span className="text-white">Blangetti</span>
          </h1>
        </motion.div>

        {/* Typing Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-8"
        >
          <div className="text-base sm:text-xl md:text-2xl lg:text-3xl font-mono text-gray-300">
            <span className="text-cyan-400">{">"}</span>{" "}
            <TypeAnimation
              sequence={[
                "Analista Técnico en Sistemas",
                2000,
                "Desarrollador Full Stack",
                2000,
                "Estudiante de Ing. en Sistemas",
                2000,
                "Incursionando en Ciberseguridad",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-white"
            />
            <span className="animate-pulse text-cyan-400 ml-1">_</span>
          </div>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Construyendo soluciones tecnológicas desde{" "}
          <span className="text-cyan-400">Maipú, Mendoza</span>. Apasionado por
          el desarrollo de software, la ciberseguridad y la arquitectura de
          sistemas.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 mb-12"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0,217,255,0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full text-white font-semibold text-base sm:text-lg overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Ver Proyectos
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 sm:px-8 sm:py-4 border border-white/20 rounded-full text-white font-semibold text-base sm:text-lg hover:border-cyan-400/50 hover:bg-white/5 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <HiDownload className="text-cyan-400" />
            Descargar CV
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="flex justify-center gap-4"
        >
          {[
            {
              icon: FaLinkedinIn,
              href: "https://www.linkedin.com/feed/",
              color: "hover:bg-blue-600/20 hover:border-blue-500/50 hover:text-blue-400",
            },
            {
              icon: FaInstagram,
              href: "https://www.instagram.com/facu_blangetti",
              color: "hover:bg-pink-600/20 hover:border-pink-500/50 hover:text-pink-400",
            },
            {
              icon: FaGithub,
              href: "https://github.com/",
              color: "hover:bg-gray-600/20 hover:border-gray-500/50 hover:text-white",
            },
          ].map((social, i) => (
            <motion.a
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, y: -3 }}
              whileTap={{ scale: 0.9 }}
              className={`p-3.5 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm text-gray-400 transition-all duration-300 ${social.color}`}
            >
              <social.icon size={22} />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
