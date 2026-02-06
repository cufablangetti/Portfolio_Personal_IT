import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaGithub, FaExternalLinkAlt, FaFolder } from "react-icons/fa";

interface Project {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  live?: string;
  image?: string;
  featured?: boolean;
  color: string;
}

const Projects = () => {
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

  // Placeholder projects - these will be replaced with actual projects
  const projects: Project[] = [
    {
      title: "Sistema ERP SOFTLAND",
      description:
        "Configuración, personalización y optimización de sistema ERP empresarial. Gestión de bases de datos con T-SQL y diseño de procesos empresariales.",
      tags: ["T-SQL", "ERP", "Análisis", "SQL Server"],
      featured: true,
      color: "#00d9ff",
    },
    {
      title: "Portfolio Personal",
      description:
        "Portfolio web interactivo con efectos visuales avanzados, partículas 3D, animaciones fluidas y diseño glassmorphism. Construido con React, Three.js y Framer Motion.",
      tags: ["React", "TypeScript", "Three.js", "Framer Motion", "Tailwind"],
      github: "https://github.com/cufablangetti",
      live: "#",
      featured: true,
      color: "#a855f7",
    },
    {
      title: "API REST Full Stack",
      description:
        "Desarrollo de APIs REST genéricas con documentación en Swagger, testing con Postman y arquitectura escalable.",
      tags: ["Node.js", "API REST", "Swagger", "Postman"],
      github: "https://github.com/cufablangetti",
      featured: true,
      color: "#ec4899",
    },
    {
      title: "App Android",
      description:
        "Aplicación móvil Android nativa desarrollada con Android Studio y Java, integrando APIs REST y base de datos local.",
      tags: ["Android", "Java", "Android Studio", "SQLite"],
      github: "https://github.com/cufablangetti",
      color: "#10b981",
    },
    {
      title: "Dashboard Business Intelligence",
      description:
        "Tableros de análisis de datos empresariales con QlikView para visualización de KPIs y métricas de negocio.",
      tags: ["QlikView", "BI", "Datos", "Dashboard"],
      color: "#3b82f6",
    },
    {
      title: "Administración de Redes",
      description:
        "Configuración de infraestructura de red con Windows Server 2022. Gestión de servicios, políticas de seguridad y protocolos TCP/IP.",
      tags: ["Windows Server", "Redes", "TCP/IP", "Seguridad"],
      color: "#f59e0b",
    },
  ];

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="section-padding relative" ref={ref}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-purple-500/5 blur-[150px]" />
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] rounded-full bg-cyan-500/5 blur-[120px]" />
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
            {"<Proyectos />"}
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
            <span className="text-white">Mis </span>
            <span className="gradient-text">Proyectos</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full" />
          <p className="text-gray-400 mt-6 max-w-xl mx-auto">
            Una selección de los proyectos en los que he trabajado, demostrando 
            mi experiencia en diferentes tecnologías y áreas.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="space-y-8 mb-16">
          {featuredProjects.map((project, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="glass-card p-5 sm:p-8 relative overflow-hidden group"
            >
              {/* Top accent */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px] opacity-60 group-hover:opacity-100 transition-opacity"
                style={{
                  background: `linear-gradient(90deg, transparent, ${project.color}, transparent)`,
                }}
              />

              {/* Corner glow */}
              <div
                className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-3xl"
                style={{ backgroundColor: project.color }}
              />

              <div className="relative z-10">
                <div className="flex flex-col sm:flex-row items-start justify-between gap-3 mb-4">
                  <div>
                    <span
                      className="text-xs font-mono tracking-wider uppercase mb-2 inline-block"
                      style={{ color: project.color }}
                    >
                      Proyecto Destacado
                    </span>
                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <div className="flex gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors p-2"
                      >
                        <FaGithub size={20} />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-cyan-400 transition-colors p-2"
                      >
                        <FaExternalLinkAlt size={18} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-gray-300 leading-relaxed mb-6 max-w-3xl">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="px-3 py-1 text-xs font-mono rounded-full border"
                      style={{
                        borderColor: `${project.color}30`,
                        color: project.color,
                        backgroundColor: `${project.color}08`,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <motion.div variants={itemVariants}>
          <h3 className="text-xl font-bold text-white text-center mb-8">
            Otros Proyectos <span className="text-gray-500">Notables</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {otherProjects.map((project, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8, scale: 1.02 }}
                className="glass-card p-6 group cursor-pointer relative overflow-hidden"
              >
                <div
                  className="absolute top-0 left-0 w-full h-[1px] opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${project.color}, transparent)`,
                  }}
                />

                <div className="flex items-center justify-between mb-4">
                  <FaFolder
                    className="text-2xl transition-colors"
                    style={{ color: project.color }}
                  />
                  <div className="flex gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-white transition-colors"
                      >
                        <FaGithub size={18} />
                      </a>
                    )}
                  </div>
                </div>

                <h4 className="text-white font-semibold mb-2 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="text-xs text-gray-500 font-mono"
                    >
                      {tag}
                      {j < project.tags.length - 1 && " •"}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div variants={itemVariants} className="text-center mt-12">
          <p className="text-gray-500 mb-4 font-mono text-sm">
            // Más proyectos próximamente...
          </p>
          <motion.a
            href="https://github.com/cufablangetti"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 border border-cyan-500/30 text-cyan-400 rounded-full hover:bg-cyan-500/10 transition-all"
          >
            <FaGithub /> Ver más en GitHub
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
