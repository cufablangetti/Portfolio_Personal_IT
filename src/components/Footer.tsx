import { HiArrowUp } from "react-icons/hi";

const Footer = () => (
  <footer className="site-footer">
    <div className="container footer-inner">
      <span>© {new Date().getFullYear()} Facundo Blangetti</span>
      <span>Desarrollo de software, desde Mendoza.</span>
      <a href="#hero">Volver al inicio <HiArrowUp aria-hidden="true" /></a>
    </div>
  </footer>
);

export default Footer;