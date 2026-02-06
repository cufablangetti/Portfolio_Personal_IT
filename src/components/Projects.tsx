import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaGithub, FaExternalLinkAlt, FaFolder, FaLock } from "react-icons/fa";

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
        "Aplicación móvil multiplataforma desarrollada con Flutter y Dart para Android. Integración directa con el sistema ERP de la empresa, interfaz Material Design, manejo de estado con setState y navegación con Navigator. Compilada en Windows, genera APK de producción (v1.10.45+53).",
      tags: ["Flutter", "Dart", "Android", "Material Design", "ERP", "VS Code"],
      github: "https://github.com/cufablangetti",
      color: "#10b981",
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

          {/* ERP SOFTLAND - Custom Card */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="glass-card p-5 sm:p-8 relative overflow-hidden group"
          >
            {/* Top accent */}
            <div
              className="absolute top-0 left-0 right-0 h-[2px] opacity-60 group-hover:opacity-100 transition-opacity"
              style={{
                background: `linear-gradient(90deg, transparent, #f59e0b, transparent)`,
              }}
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column - Description */}
              <div>
                <span className="text-xs font-mono text-amber-400 tracking-widest uppercase mb-2 block">
                  Proyecto Destacado
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 group-hover:text-amber-400 transition-colors">
                  Sistema ERP SOFTLAND
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Configuración, personalización y automatización del sistema ERP de la empresa.
                  Desarrollo de consultas avanzadas en T-SQL, generación de reportes, integración
                  de módulos y creación de soluciones internas para optimizar procesos empresariales.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["T-SQL", "ERP SOFTLAND", "Automatización", "Reportes", "APIs", "Python", "Android"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-mono rounded-full border transition-colors border-amber-500/30 text-amber-300 hover:bg-amber-500/10"
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>
              </div>

              {/* Right Column - Internal Projects */}
              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-5 sm:p-6">
                <h4 className="text-sm font-mono text-amber-400 tracking-widest uppercase mb-4 flex items-center gap-2">
                  <FaFolder className="text-amber-400" />
                  Proyectos Internos Desarrollados
                </h4>
                <ul className="space-y-3">
                  {[
                    "App de monitoreo de tractores",
                    "Chat Bot de pedidos / Automatización de ERP y Mails",
                    "Chat Bot empresa Oliver / Automatización de ERP y Mails",
                    "App de trackeo de ventas",
                    "Automatización para inserción masiva de viáticos",
                    "App Android para rastro y geolocalización de tractores (hoja de ruta)",
                  ].map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-gray-300 text-sm"
                    >
                      <span className="mt-1 min-w-[6px] h-[6px] rounded-full bg-amber-400/80" />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Confidentiality Notice */}
                <div className="mt-5 pt-4 border-t border-white/10 flex items-start gap-3">
                  <FaLock className="text-amber-400/70 mt-0.5 shrink-0" />
                  <p className="text-xs text-gray-400 italic leading-relaxed">
                    Estos proyectos son confidenciales debido a que son trabajos internos de la
                    empresa y exponen datos privados.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* FRONT END MAUL - Custom Card */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="glass-card p-5 sm:p-8 relative overflow-hidden group"
          >
            {/* Top accent */}
            <div
              className="absolute top-0 left-0 right-0 h-[2px] opacity-60 group-hover:opacity-100 transition-opacity"
              style={{
                background: `linear-gradient(90deg, transparent, #3b82f6, transparent)`,
              }}
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column - Description */}
              <div>
                <span className="text-xs font-mono text-blue-400 tracking-widest uppercase mb-2 block">
                  Proyecto Destacado
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                  Desarrollo Front End — MAUL
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Durante 6 meses desarrollé en React todo el Front End de una futura aplicación
                  de Play Store para la empresa MAUL. El proyecto incluye una interfaz moderna,
                  responsiva y optimizada para la mejor experiencia de usuario. Además, realicé
                  la landing page de la empresa que actualmente se encuentra en producción.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["React", "JavaScript", "CSS", "Responsive Design", "UI/UX", "Landing Page"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-mono rounded-full border transition-colors border-blue-500/30 text-blue-300 hover:bg-blue-500/10"
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>
              </div>

              {/* Right Column - Details & Link */}
              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-5 sm:p-6 flex flex-col justify-between">
                <div>
                  <h4 className="text-sm font-mono text-blue-400 tracking-widest uppercase mb-4 flex items-center gap-2">
                    <FaFolder className="text-blue-400" />
                    Detalles del Proyecto
                  </h4>
                  <ul className="space-y-3">
                    {[
                      "Front End completo de aplicación móvil (futura app en Play Store)",
                      "Landing page corporativa en producción",
                      "Desarrollo con React durante 6 meses",
                      "Diseño responsivo y experiencia de usuario optimizada",
                    ].map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-gray-300 text-sm"
                      >
                        <span className="mt-1 min-w-[6px] h-[6px] rounded-full bg-blue-400/80" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Landing page link */}
                <div className="mt-5 pt-4 border-t border-white/10 flex flex-col gap-3">
                  <a
                    href="http://maul.com.ar/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-mono transition-colors"
                  >
                    <FaExternalLinkAlt className="text-xs" />
                    maul.com.ar — Landing Page en producción
                  </a>
                  <div className="flex items-start gap-3">
                    <FaLock className="text-blue-400/70 mt-0.5 shrink-0" />
                    <p className="text-xs text-gray-400 italic leading-relaxed">
                      La aplicación completa es confidencial. A futuro estará disponible
                      dentro de la misma landing page.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

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
