import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import emailjs from "@emailjs/browser";
import {
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(false);

    emailjs
      .sendForm(
        "service_bzly5n5",
        "template_ve4q2pe",
        formRef.current!,
        "Dw8hMcg2H6Jj2tsDO"
      )
      .then(
        () => {
          setIsSubmitting(false);
          setSubmitted(true);
          setFormData({ name: "", email: "", subject: "", message: "" });
          setTimeout(() => setSubmitted(false), 5000);
        },
        () => {
          setIsSubmitting(false);
          setError(true);
          setTimeout(() => setError(false), 5000);
        }
      );
  };

  const socials = [
    {
      icon: FaLinkedinIn,
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/facundo-blangetti-a58ba0233?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      color: "#0077B5",
      desc: "Conectemos profesionalmente",
    },
    {
      icon: FaInstagram,
      name: "Instagram",
      href: "https://www.instagram.com/facu_blangetti?igsh=MWdiMTllcDd4ajdxeg==",
      color: "#E4405F",
      desc: "@facu_blangetti",
    },
    {
      icon: FaGithub,
      name: "GitHub",
      href: "https://github.com/cufablangetti",
      color: "#ffffff",
      desc: "Mi código open source",
    },
    {
      icon: FaEnvelope,
      name: "Email",
      href: "mailto:facublangettit@gmail.com",
      color: "#D14836",
      desc: "facublangettit@gmail.com",
    },
  ];

  return (
    <section id="contact" className="section-padding relative" ref={ref}>
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 5, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -right-40 w-[600px] h-[600px] rounded-full bg-cyan-500/5 blur-[150px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -5, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 -left-40 w-[500px] h-[500px] rounded-full bg-purple-500/5 blur-[120px]"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="section-container relative z-10"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <span className="inline-block text-cyan-400 font-mono text-sm tracking-widest uppercase mb-4">
            {"<Contacto />"}
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
            <span className="text-white">¿Hablamos? </span>
            <span className="gradient-text">Conectemos</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full" />
          <p className="text-gray-400 mt-6 max-w-xl mx-auto">
            Estoy abierto a nuevas oportunidades, colaboraciones y conversaciones 
            sobre tecnología y desarrollo de software.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Contact Info */}
          <motion.div variants={itemVariants} className="space-y-6">
            {/* Location */}
            <div className="glass-card p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20">
                  <FaMapMarkerAlt className="text-xl text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Ubicación</h3>
                  <p className="text-gray-400 text-sm">Maipú, Mendoza, Argentina</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="grid grid-cols-1 xs:grid-cols-2 gap-3">
              {socials.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="glass-card p-5 group cursor-pointer relative overflow-hidden"
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300"
                    style={{ backgroundColor: social.color }}
                  />
                  <social.icon
                    className="text-2xl mb-3 transition-colors duration-300"
                    style={{ color: social.color }}
                  />
                  <h4 className="text-white font-semibold text-sm mb-1 group-hover:text-cyan-400 transition-colors">
                    {social.name}
                  </h4>
                  <p className="text-gray-500 text-xs">{social.desc}</p>
                </motion.a>
              ))}
            </div>

            {/* Availability */}
            <div className="glass-card p-6 border border-green-500/20">
              <div className="flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-400"></span>
                </span>
                <div>
                  <h3 className="text-green-400 font-semibold">Disponible</h3>
                  <p className="text-gray-400 text-sm">
                    Abierto a ofertas laborales y proyectos freelance
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div variants={itemVariants}>
            <form ref={formRef} onSubmit={handleSubmit} className="glass-card p-5 sm:p-8 space-y-5">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-2 text-gray-500 text-xs font-mono">
                  contact-form.tsx
                </span>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-400 text-sm mb-2 font-mono">
                    {"// Nombre"}
                  </label>
                  <input
                    type="text"
                    name="from_name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 focus:outline-none transition-all"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-2 font-mono">
                    {"// Email"}
                  </label>
                  <input
                    type="email"
                    name="reply_to"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 focus:outline-none transition-all"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-400 text-sm mb-2 font-mono">
                  {"// Asunto"}
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 focus:outline-none transition-all"
                  placeholder="¿De qué quieres hablar?"
                />
              </div>

              <div>
                <label className="block text-gray-400 text-sm mb-2 font-mono">
                  {"// Mensaje"}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 focus:outline-none transition-all resize-none"
                  placeholder="Escribe tu mensaje..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(0,217,255,0.2)" }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-3 transition-all duration-300 ${
                  submitted
                    ? "bg-green-500/20 border border-green-500/30 text-green-400"
                    : error
                    ? "bg-red-500/20 border border-red-500/30 text-red-400"
                    : "bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:shadow-lg hover:shadow-cyan-500/20"
                }`}
              >
                {isSubmitting ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-6 h-6 border-2 border-white border-t-transparent rounded-full"
                  />
                ) : submitted ? (
                  <>✓ Mensaje Enviado</>
                ) : error ? (
                  <>✗ Error al enviar, intenta de nuevo</>
                ) : (
                  <>
                    <FaPaperPlane /> Enviar Mensaje
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
