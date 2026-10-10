import { HiArrowDown, HiArrowRight, HiDownload, HiLocationMarker } from "react-icons/hi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import cvUrl from "../../CV — Facundo Blangetti.pdf?url";

const Hero = () => (
  <section id="hero" className="hero">
    <div className="container hero-inner">
      <div className="hero-topline">
        <span className="eyebrow">Desarrollo de software & sistemas</span>
        <span className="availability"><span /> Abierto a oportunidades</span>
      </div>
      <div className="hero-title reveal">
        <h1>Facundo<br /><span>Blangetti<span className="name-period">.</span></span></h1>
        <span className="hero-index" aria-hidden="true">FB /</span>
      </div>
      <div className="hero-bottom reveal">
        <div className="hero-description">
          <p className="hero-role">Consultor ERP<br />Analista técnico funcional y desarrollador.</p>
          <p>Conecto las necesidades del negocio con software que las resuelve. Desarrollo web, integraciones y automatización de procesos.</p>
        </div>
        <div className="hero-actions">
          <a href="#projects" className="button button-primary">Explorar proyectos <HiArrowDown aria-hidden="true" /></a>
          <a href={cvUrl} download="CV_Facundo_Blangetti.pdf" className="button button-outline"><HiDownload aria-hidden="true" /> Descargar CV</a>
        </div>
      </div>
      <div className="hero-footnote">
        <span><HiLocationMarker aria-hidden="true" /> Maipú, Mendoza, Argentina</span>
        <div className="social-text-links">
          <a href="https://github.com/cufablangetti" target="_blank" rel="noopener noreferrer"><FaGithub aria-hidden="true" /> GitHub <HiArrowRight aria-hidden="true" /></a>
          <a href="https://www.linkedin.com/in/facundo-blangetti-a58ba0233" target="_blank" rel="noopener noreferrer"><FaLinkedinIn aria-hidden="true" /> LinkedIn <HiArrowRight aria-hidden="true" /></a>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;