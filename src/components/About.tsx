import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaCode, FaShieldAlt, FaServer } from "react-icons/fa";
import { HiAcademicCap, HiLightningBolt } from "react-icons/hi";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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

  const stats = [
    { label: "Tecnologías", value: "15+", icon: FaCode },
    { label: "Años Estudiando", value: "5+", icon: HiAcademicCap },
    { label: "Proyectos", value: "10+", icon: HiLightningBolt },
  ];

  const interests = [
    {
      icon: FaCode,
      title: "Desarrollo Full Stack",
      description: "Frontend con React y Backend con Java/Node.js. APIs REST y arquitectura de sistemas.",
      gradient: "from-cyan-400 to-blue-500",
    },
    {
      icon: FaShieldAlt,
      title: "Ciberseguridad",
      description: "Pentesting básico, evaluación de vulnerabilidades y herramientas con Kali Linux.",
      gradient: "from-purple-400 to-pink-500",
    },
    {
      icon: FaServer,
      title: "Sistemas ERP",
      description: "Análisis técnico con ERP SOFTLAND, automatizaciones internas con VS Code, T-SQL y optimización de procesos empresariales.",
      gradient: "from-green-400 to-cyan-500",
    },
  ];

  return (
    <section id="about" className="section-padding relative" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="section-container relative z-10"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <motion.span
            className="inline-block text-cyan-400 font-mono text-sm tracking-widest uppercase mb-4"
          >
            {"<SobreMí />"}
          </motion.span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
            <span className="text-white">Conoce mi </span>
            <span className="gradient-text">Historia</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
          {/* Left - Text */}
          <motion.div variants={itemVariants} className="space-y-6">
            {/* Code Block Style */}
            <div className="glass-card p-4 sm:p-6 font-mono text-xs sm:text-sm overflow-x-auto">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-2 text-gray-500 text-xs">about.ts</span>
              </div>
              <div className="space-y-1 text-gray-300">
                <p>
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-cyan-400">facundo</span>{" "}
                  <span className="text-white">=</span> {"{"}
                </p>
                <p className="pl-4">
                  <span className="text-green-400">ubicación</span>:{" "}
                  <span className="text-yellow-300">"Maipú, Mendoza, AR"</span>,
                </p>
                <p className="pl-4">
                  <span className="text-green-400">rol</span>:{" "}
                  <span className="text-yellow-300">"Analista Técnico en Sistemas"</span>,
                </p>
                <p className="pl-4">
                  <span className="text-green-400">educación</span>:{" "}
                  <span className="text-yellow-300">"Ing. en Sistemas"</span>,
                </p>
                <p className="pl-4">
                  <span className="text-green-400">aprendiendo</span>: [
                  <span className="text-yellow-300">"Ciberseguridad"</span>,{" "}
                  <span className="text-yellow-300">"Pentesting"</span>],
                </p>
                <p className="pl-4">
                  <span className="text-green-400">mindset</span>:{" "}
                  <span className="text-yellow-300">"Aprendizaje continuo"</span>
                </p>
                <p>{"}"}</p>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed text-lg">
              Soy estudiante de <span className="text-cyan-400 font-semibold">Ingeniería en Sistemas</span> y 
              actualmente trabajo como <span className="text-purple-400 font-semibold">Analista Técnico en Sistemas</span>.
              Mi enfoque está en el desarrollo de software y recientemente he comenzado a adentrarme en el
              mundo de la <span className="text-pink-400 font-semibold">ciberseguridad</span>.
            </p>

            <p className="text-gray-400 leading-relaxed">
              Combino mi formación académica con disciplina personal, buscando siempre expandir
              mis conocimientos técnicos y aplicarlos en proyectos reales. Me adapto rápidamente
              a nuevas tecnologías y metodologías de trabajo.
            </p>
          </motion.div>

          {/* Right - Interest Cards */}
          <motion.div variants={itemVariants} className="space-y-4">
            {interests.map((interest, i) => (
              <motion.div
                key={i}
                whileHover={{ x: 10, scale: 1.02 }}
                className="glass-card p-6 flex items-start gap-5 group cursor-pointer tech-card"
              >
                <div
                  className={`p-3 rounded-xl bg-gradient-to-br ${interest.gradient} bg-opacity-10 shrink-0`}
                  style={{ background: `linear-gradient(135deg, ${interest.gradient.includes('cyan') ? 'rgba(0,217,255,0.1)' : interest.gradient.includes('purple') ? 'rgba(168,85,247,0.1)' : 'rgba(16,185,129,0.1)'}, transparent)` }}
                >
                  <interest.icon className={`text-2xl ${interest.gradient.includes('cyan') ? 'text-cyan-400' : interest.gradient.includes('purple') ? 'text-purple-400' : 'text-green-400'}`} />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-1 group-hover:text-cyan-400 transition-colors">
                    {interest.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {interest.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-3xl mx-auto"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5, scale: 1.05 }}
              className="glass-card p-6 text-center group"
            >
              <stat.icon className="text-2xl text-cyan-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-3xl font-display font-bold gradient-text mb-1">
                {stat.value}
              </h3>
              <p className="text-gray-500 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
