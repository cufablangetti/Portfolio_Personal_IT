const Experience = () => (
  <section id="experience" className="section">
    <div className="container">
      <div className="section-heading">
        <div><span className="eyebrow">03 / Experiencia & formación</span><h2>Aprender. Aplicar. Evolucionar.</h2></div>
        <p>Experiencia práctica y formación continua, con foco en resolver problemas reales.</p>
      </div>
      <div className="experience-list">
        <article className="experience-entry">
          <div className="experience-period">Actualmente<span>Sistemas empresariales</span></div>
          <div>
            <h3>Consultor ERP - Analista técnico funcional y desarrollador</h3>
            <p>Trabajo con ERP SOFTLAND, conectando las necesidades del negocio con soluciones tecnológicas.</p>
            <ul>
              <li>Gestión de bases de datos, integridad de información y optimización con T-SQL.</li>
              <li>Configuración del ERP y desarrollo de automatizaciones internas.</li>
              <li>Testing funcional, validación de implementaciones y mejora de procesos.</li>
              <li>Soporte técnico y capacitación a usuarios finales.</li>
            </ul>
          </div>
        </article>
        <article className="experience-entry">
          <div className="experience-period">Proyecto de 6 meses<span>MAUL</span></div>
          <div><h3>Desarrollo Frontend</h3><p>Desarrollo del frontend en React para una aplicación móvil y de la landing corporativa en producción, con foco en diseño responsivo y experiencia de usuario.</p></div>
        </article>
        <article className="experience-entry">
          <div className="experience-period">Último año en curso<span>Formación académica</span></div>
          <div><h3>Ingeniería en Sistemas</h3><p>Desarrollo de software, arquitectura de sistemas, bases de datos y gestión de proyectos tecnológicos.</p></div>
        </article>
        <article className="experience-entry">
          <div className="experience-period">En aprendizaje<span>Formación complementaria</span></div>
          <div><h3>Redes & ciberseguridad</h3><p>Administración de infraestructura y protocolos TCP/IP. Introducción a pentesting, evaluación de vulnerabilidades y herramientas de Kali Linux.</p></div>
        </article>
      </div>
    </div>
  </section>
);

export default Experience;