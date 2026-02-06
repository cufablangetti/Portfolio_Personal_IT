import { motion } from "framer-motion";
import {
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
  FaHeart,
  FaChevronUp,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5 bg-[#050508]">
      {/* Back to Top */}
      <div className="flex justify-center -mt-6">
        <motion.a
          href="#hero"
          whileHover={{ y: -5, scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-shadow"
        >
          <FaChevronUp size={16} />
        </motion.a>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
          {/* Logo */}
          <div>
            <a href="#hero" className="inline-block">
              <span className="text-xl font-display font-bold tracking-wider">
                <span className="text-white">{"<"}</span>
                <span className="gradient-text">FB</span>
                <span className="text-white">{" />"}</span>
              </span>
            </a>
            <p className="text-gray-500 text-sm mt-2">
              Analista Técnico en Sistemas
            </p>
          </div>

          {/* Center - Quick Links */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {["Inicio", "Sobre Mí", "Stack", "Proyectos", "Contacto"].map(
              (link, i) => (
                <a
                  key={i}
                  href={`#${
                    link === "Inicio"
                      ? "hero"
                      : link === "Sobre Mí"
                      ? "about"
                      : link === "Stack"
                      ? "tech"
                      : link.toLowerCase()
                  }`}
                  className="text-gray-500 hover:text-cyan-400 text-sm transition-colors"
                >
                  {link}
                </a>
              )
            )}
          </div>

          {/* Socials */}
          <div className="flex justify-center md:justify-end gap-3">
            {[
              { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/facundo-blangetti-a58ba0233?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
              {
                icon: FaInstagram,
                href: "https://www.instagram.com/facu_blangetti?igsh=MWdiMTllcDd4ajdxeg==",
              },
              { icon: FaGithub, href: "https://github.com/cufablangetti" },
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, scale: 1.1 }}
                className="p-2.5 rounded-lg border border-white/5 text-gray-500 hover:text-cyan-400 hover:border-cyan-500/20 transition-all"
              >
                <social.icon size={16} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent my-8" />

        {/* Copyright */}
        <div className="text-center">
          <p className="text-gray-600 text-sm">
            © {currentYear} Facundo Blangetti. Hecho con{" "}
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="inline-block"
            >
              <FaHeart className="inline text-red-500" size={12} />
            </motion.span>{" "}
            y mucho{" "}
            <span className="text-cyan-400 font-mono text-xs">{"<código />"}</span>
          </p>
          <p className="text-gray-700 text-xs mt-2 font-mono">
            React • TypeScript • Framer Motion • Three.js • Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
