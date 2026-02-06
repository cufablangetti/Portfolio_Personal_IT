import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaBriefcase,
  FaDatabase,
  FaCogs,
  FaUsers,
  FaCheckCircle,
  FaShieldAlt,
  FaGraduationCap,
  FaBook,
} from "react-icons/fa";

const Experience = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

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

  const tasks = [
    { icon: FaDatabase, text: "Gestión de bases de datos y optimización con Transact-SQL" },
    { icon: FaCogs, text: "Configuración y personalización del ERP SOFTLAND" },
    { icon: FaCheckCircle, text: "Testing funcional y validación de implementaciones" },
    { icon: FaUsers, text: "Soporte técnico y capacitación a usuarios finales" },
    { icon: FaBriefcase, text: "Diseño y optimización de procesos empresariales" },
    { icon: FaDatabase, text: "Trabajo con diccionarios de datos e integridad de información" },
  ];

  const cyberAreas = [
    {
      icon: FaShieldAlt,
      title: "Pentesting Básico",
      desc: "Introducción a metodologías de pruebas de penetración y evaluación de vulnerabilidades",
      color: "text-red-400",
      borderColor: "border-red-500/20",
      bgColor: "bg-red-500/5",
    },
    {
      icon: FaCogs,
      title: "Administración de Redes",
      desc: "Configuración y gestión de infraestructura, protocolos TCP/IP y servicios de red",
      color: "text-blue-400",
      borderColor: "border-blue-500/20",
      bgColor: "bg-blue-500/5",
    },
    {
      icon: FaBook,
      title: "Kali Linux",
      desc: "Familiarización con herramientas de seguridad y entornos de testing",
      color: "text-purple-400",
      borderColor: "border-purple-500/20",
      bgColor: "bg-purple-500/5",
    },
  ];

  return (
    <section id="experience" className="section-padding relative" ref={ref}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent" />
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
            {"<Experiencia />"}
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
            <span className="text-white">Mi </span>
            <span className="gradient-text">Trayectoria</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        {/* Current Role */}
        <motion.div variants={itemVariants} className="mb-16">
          <div className="glass-card p-5 sm:p-8 relative overflow-hidden">
            {/* Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500" />
            
            <div className="flex flex-col sm:flex-row items-start gap-4 mb-6">
              <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20">
                <FaBriefcase className="text-2xl text-cyan-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">
                  Analista Técnico en Sistemas
                </h3>
                <p className="text-cyan-400 font-mono text-sm mt-1">
                  ERP SOFTLAND • Actualmente
                </p>
                <p className="text-gray-400 text-sm mt-2">
                  Puente entre las necesidades del negocio y las soluciones tecnológicas
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {tasks.map((task, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="flex items-center gap-3 p-3 rounded-lg bg-white/[0.02] hover:bg-white/[0.05] transition-colors group"
                >
                  <task.icon className="text-cyan-400/70 group-hover:text-cyan-400 transition-colors shrink-0" />
                  <span className="text-gray-300 text-sm">{task.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Cybersecurity Learning */}
        <motion.div variants={itemVariants} className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-lg bg-purple-500/10 border border-purple-500/20">
              <FaShieldAlt className="text-xl text-purple-400" />
            </div>
            <h3 className="text-2xl font-bold text-white">
              Aprendiendo <span className="text-purple-400">Ciberseguridad</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {cyberAreas.map((area, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5, scale: 1.02 }}
                className={`glass-card p-6 border ${area.borderColor} group cursor-pointer`}
              >
                <div className={`p-3 rounded-xl ${area.bgColor} inline-block mb-4`}>
                  <area.icon className={`text-xl ${area.color}`} />
                </div>
                <h4 className="text-white font-semibold mb-2 group-hover:text-cyan-400 transition-colors">
                  {area.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">{area.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education */}
        <motion.div variants={itemVariants}>
          <div className="glass-card p-5 sm:p-8">
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <div className="p-3 rounded-xl bg-green-500/10 border border-green-500/20">
                <FaGraduationCap className="text-2xl text-green-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">
                  Ingeniería en Sistemas y Programación
                </h3>
                <p className="text-green-400 font-mono text-sm">En curso</p>
                <p className="text-gray-400 mt-2 text-sm leading-relaxed">
                  Formación integral en desarrollo de software, arquitectura de sistemas,
                  bases de datos y gestión de proyectos tecnológicos.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Experience;
