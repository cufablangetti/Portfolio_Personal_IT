import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaJava,
  FaNodeJs,
  FaPython,
  FaAndroid,
  FaDatabase,
  FaGitAlt,
  FaWindows,
  FaLinux,
} from "react-icons/fa";
import {
  SiTypescript,
  SiPostgresql,
  SiMysql,
  SiPostman,
  SiSwagger,
} from "react-icons/si";
import { HiServer, HiChartBar } from "react-icons/hi";

const TechStack = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const categories = [
    {
      title: "Frontend",
      icon: "🎨",
      color: "from-cyan-400 to-blue-500",
      borderColor: "border-cyan-500/20",
      techs: [
        { name: "HTML5", icon: FaHtml5, color: "#E34F26", level: 90 },
        { name: "CSS3", icon: FaCss3Alt, color: "#1572B6", level: 85 },
        { name: "JavaScript", icon: FaJs, color: "#F7DF1E", level: 85 },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6", level: 70 },
        { name: "React", icon: FaReact, color: "#61DAFB", level: 80 },
      ],
    },
    {
      title: "Backend",
      icon: "⚙️",
      color: "from-purple-400 to-pink-500",
      borderColor: "border-purple-500/20",
      techs: [
        { name: "Java", icon: FaJava, color: "#ED8B00", level: 80 },
        { name: "Node.js", icon: FaNodeJs, color: "#43853D", level: 75 },
        { name: "Python", icon: FaPython, color: "#3776AB", level: 70 },
        { name: "API REST", icon: HiServer, color: "#009688", level: 85 },
      ],
    },
    {
      title: "Bases de Datos",
      icon: "🗄️",
      color: "from-green-400 to-cyan-500",
      borderColor: "border-green-500/20",
      techs: [
        { name: "MySQL", icon: SiMysql, color: "#4479A1", level: 80 },
        { name: "PostgreSQL", icon: SiPostgresql, color: "#336791", level: 75 },
        { name: "T-SQL", icon: FaDatabase, color: "#CC2927", level: 85 },
      ],
    },
    {
      title: "Mobile",
      icon: "📱",
      color: "from-yellow-400 to-orange-500",
      borderColor: "border-yellow-500/20",
      techs: [
        { name: "Android Studio", icon: FaAndroid, color: "#3DDC84", level: 70 },
        { name: "Android SDK", icon: FaAndroid, color: "#3DDC84", level: 70 },
      ],
    },
    {
      title: "Herramientas",
      icon: "🛠️",
      color: "from-pink-400 to-red-500",
      borderColor: "border-pink-500/20",
      techs: [
        { name: "Git", icon: FaGitAlt, color: "#F05032", level: 85 },
        { name: "Postman", icon: SiPostman, color: "#FF6C37", level: 80 },
        { name: "Swagger", icon: SiSwagger, color: "#85EA2D", level: 80 },
        { name: "QlikView", icon: HiChartBar, color: "#009848", level: 70 },
        { name: "Win Server", icon: FaWindows, color: "#0078D6", level: 75 },
        { name: "Kali Linux", icon: FaLinux, color: "#557C94", level: 60 },
      ],
    },
  ];

  const skills = {
    technical: [
      "Desarrollo Full Stack",
      "Arquitectura de APIs REST",
      "Administración de Servidores",
      "Gestión de Bases de Datos",
      "Desarrollo Mobile Android",
      "Testing de APIs",
      "Business Intelligence",
      "ERP SOFTLAND",
    ],
    soft: [
      "Pensamiento analítico",
      "Orientación a resultados",
      "Aprendizaje rápido",
      "Trabajo en equipo",
      "Adaptabilidad",
      "Comunicación efectiva",
      "Disciplina",
      "Proactividad",
    ],
  };

  return (
    <section id="tech" className="section-padding relative" ref={ref}>
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="section-container relative z-10"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <span className="inline-block text-cyan-400 font-mono text-sm tracking-widest uppercase mb-4">
            {"<TechStack />"}
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
            <span className="text-white">Stack </span>
            <span className="gradient-text">Tecnológico</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        {/* Tech Categories */}
        <div className="space-y-8 mb-16">
          {categories.map((cat, catIndex) => (
            <motion.div key={catIndex} variants={itemVariants}>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{cat.icon}</span>
                <h3 className="text-xl font-bold text-white">{cat.title}</h3>
                <div className={`flex-1 h-[1px] bg-gradient-to-r ${cat.color} opacity-20`} />
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
                {cat.techs.map((tech, techIndex) => (
                  <motion.div
                    key={techIndex}
                    whileHover={{
                      y: -8,
                      scale: 1.05,
                      boxShadow: `0 10px 40px ${tech.color}20`,
                    }}
                    whileTap={{ scale: 0.95 }}
                    className={`glass-card p-4 text-center group cursor-pointer tech-card border ${cat.borderColor} hover:border-opacity-50`}
                    style={{ ['--glow-color' as string]: tech.color }}
                  >
                    <div className="relative mb-3">
                      <tech.icon
                        className="text-3xl mx-auto transition-all duration-300 group-hover:scale-110"
                        style={{ color: tech.color }}
                      />
                      {/* Glow effect */}
                      <div
                        className="absolute inset-0 blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-full"
                        style={{ backgroundColor: tech.color }}
                      />
                    </div>
                    <span className="text-gray-300 text-xs font-medium group-hover:text-white transition-colors block">
                      {tech.name}
                    </span>
                    {/* Skill Level Bar */}
                    <div className="mt-2 w-full h-1 rounded-full bg-white/5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${tech.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: 0.5 + techIndex * 0.1 }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: tech.color }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div variants={itemVariants}>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Technical Skills */}
            <div className="glass-card p-6">
              <div className="flex items-center gap-3 mb-6">
                <FaDatabase className="text-xl text-cyan-400" />
                <h3 className="text-xl font-bold text-white">
                  Habilidades <span className="text-cyan-400">Técnicas</span>
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.technical.map((skill, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.8 + i * 0.05 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="px-3 py-1.5 text-sm rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-300 hover:bg-cyan-500/10 hover:border-cyan-500/40 transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div className="glass-card p-6">
              <div className="flex items-center gap-3 mb-6">
                <FaDatabase className="text-xl text-purple-400" />
                <h3 className="text-xl font-bold text-white">
                  Habilidades <span className="text-purple-400">Blandas</span>
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.soft.map((skill, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.8 + i * 0.05 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="px-3 py-1.5 text-sm rounded-full border border-purple-500/20 bg-purple-500/5 text-purple-300 hover:bg-purple-500/10 hover:border-purple-500/40 transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default TechStack;
