import { FaDatabase, FaLock, FaMobileAlt, FaServer } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";
import { HiArrowUpRight } from "react-icons/hi2";

const internalProjects = [
  "Aplicación de monitoreo de tractores.",
  "Chatbot de pedidos con automatización de ERP y correos.",
  "Chatbot para Oliver con integración al ERP y correos.",
  "Aplicación de seguimiento de ventas.",
  "Inserción masiva de viáticos.",
  "Aplicación Android de geolocalización y hoja de ruta de tractores.",
];

const otherProjects = [
  { title: "API REST Full Stack", description: "APIs con Node.js, documentación en Swagger y pruebas con Postman. Desarrollo de servicios e integración de sistemas." },
  { title: "Aplicación Android", description: "Desarrollo con Flutter y Dart, interfaz Material Design e integración directa con el ERP. Generación de APK de producción." },
  { title: "Administración de redes", description: "Infraestructura con Windows Server 2022, servicios de red, protocolos TCP/IP y políticas de seguridad." },
];

const Projects = () => (
  <section id="projects" className="section">
    <div className="container">
      <div className="section-heading">
        <div><span className="eyebrow">01 / Trabajo seleccionado</span><h2>Del problema al producto.</h2></div>
        <a className="text-link" href="https://github.com/cufablangetti" target="_blank" rel="noopener noreferrer">Mi perfil de GitHub <HiArrowUpRight aria-hidden="true" /></a>
      </div>
      <div className="project-grid">
        <article className="project">
          <a className="project-visual maul-visual" href="https://www.maul.com.ar/" target="_blank" rel="noopener noreferrer" aria-label="Visitar el sitio público de MAUL">
            <span className="maul-wordmark" aria-hidden="true">maul<span>Packs sorpresa.<br />Ofertas cerca tuyo.</span></span>
            <img src="/maul-preview.png" alt="Vista promocional de la app MAUL publicada en su sitio web" width="373" height="670" loading="lazy" />
          </a>
          <div className="project-meta"><span>Desarrollo frontend</span><span>Sitio en producción <HiArrowUpRight aria-hidden="true" /></span></div>
          <h3>MAUL</h3>
          <p>Seis meses desarrollando el frontend en React de una aplicación móvil y la landing page corporativa. Interfaces responsivas para conectar negocios y personas.</p>
          <div className="tags">{["React", "JavaScript", "CSS", "UI/UX"].map((tag) => <span key={tag}>{tag}</span>)}</div>
          <a className="text-link" href="https://www.maul.com.ar/" target="_blank" rel="noopener noreferrer">Visitar sitio <HiArrowUpRight aria-hidden="true" /></a>
          <details><summary>Alcance del proyecto</summary><p>Frontend completo de la futura aplicación y desarrollo de la web pública. La aplicación es confidencial; la imagen es el recurso promocional disponible en el sitio público de MAUL.</p></details>
        </article>
        <article className="project">
          <div className="project-visual erp-visual">
            <div className="erp-title"><strong>SOFTLAND</strong><FaDatabase aria-hidden="true" /></div>
            <div className="erp-flow" aria-label="Integraciones entre datos, servicios y aplicaciones">
              <span><FaDatabase aria-hidden="true" /> Datos</span><HiArrowRight aria-hidden="true" /><span><FaServer aria-hidden="true" /> Servicios</span><HiArrowRight aria-hidden="true" /><span><FaMobileAlt aria-hidden="true" /> Apps</span>
            </div>
            <span className="erp-caption">Integración de sistemas, automatización de procesos y herramientas para la operación diaria.</span>
          </div>
          <div className="project-meta"><span>Sistemas & automatización</span><span><FaLock aria-hidden="true" /> Proyecto interno</span></div>
          <h3>Un ERP, múltiples soluciones.</h3>
          <p>Configuración y personalización de SOFTLAND. Consultas avanzadas, reportes e integraciones para resolver necesidades concretas del negocio.</p>
          <div className="tags">{["T-SQL", "Python", "APIs", "Android", "SOFTLAND"].map((tag) => <span key={tag}>{tag}</span>)}</div>
          <details><summary>Ver las integraciones desarrolladas</summary><ul>{internalProjects.map((project) => <li key={project}>{project}</li>)}</ul><p>Código y pantallas no publicados por confidencialidad de los datos de la empresa.</p></details>
        </article>
      </div>
      <div className="other-projects" aria-label="Otros proyectos">
        {otherProjects.map((project, index) => (
          <article className="project-row" key={project.title}><span>0{index + 3}</span><h3>{project.title}</h3><p>{project.description}</p></article>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;