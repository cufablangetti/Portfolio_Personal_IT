import { HiArrowRight } from "react-icons/hi";

const About = () => (
  <section id="about" className="section about-section">
    <div className="container about-layout">
      <div>
        <span className="eyebrow">02 / Sobre mí</span>
        <h2>Entender el contexto.<br />Construir la solución.</h2>
        <a className="text-link" href="#contact">Conversemos <HiArrowRight aria-hidden="true" /></a>
      </div>
      <div className="about-copy">
        <p>Soy Facundo, <strong>consultor ERP, analista técnico funcional y desarrollador</strong> en Maipú, Mendoza. Combino el desarrollo de software con el trabajo sobre sistemas empresariales y sus procesos.</p>
        <p>Estoy cursando el último año de <strong>Ingeniería en Sistemas</strong>. Mi experiencia va desde interfaces en React hasta APIs, bases de datos y automatizaciones con SOFTLAND.</p>
        <p>Me interesa entender cómo funcionan las cosas y cómo hacerlas mejor. Hoy también estoy ampliando mi formación en redes y ciberseguridad.</p>
        <dl className="about-facts">
          <div><dt>Base</dt><dd>Mendoza, Argentina</dd></div>
          <div><dt>Enfoque</dt><dd>Software & procesos de negocio</dd></div>
          <div><dt>Formación</dt><dd>Ingeniería en Sistemas</dd></div>
          <div><dt>Forma de trabajar</dt><dd>Análisis, desarrollo y validación</dd></div>
        </dl>
      </div>
    </div>
  </section>
);

export default About;