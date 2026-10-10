import { useEffect, useRef, useState } from "react";
import { HiArrowUpRight } from "react-icons/hi2";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const navItems = [
  { name: "Proyectos", href: "#projects" },
  { name: "Sobre mí", href: "#about" },
  { name: "Experiencia", href: "#experience" },
  { name: "Stack", href: "#tech" },
  { name: "Contacto", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const menuButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const updateSection = () => {
      const current = [...navItems].reverse().find((item) => {
        const section = document.querySelector(item.href);
        return section && section.getBoundingClientRect().top <= 180;
      });
      setActiveSection(current?.href ?? "");
    };
    updateSection();
    window.addEventListener("scroll", updateSection, { passive: true });
    return () => window.removeEventListener("scroll", updateSection);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        menuButton.current?.focus();
      }
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [isOpen]);

  return (
    <header className="site-header">
      <div className="container nav-inner">
        <a href="#hero" className="brand" aria-label="Facundo Blangetti, inicio" onClick={() => setIsOpen(false)}>
          <img src="/IMAGEN_PARA_VENTANA.png" alt="" width="48" height="48" />
          <span>Facundo Blangetti<span className="brand-subtitle">Consultor ERP</span></span>
        </a>
        <button ref={menuButton} className="icon-button menu-toggle" type="button" aria-label={isOpen ? "Cerrar menú" : "Abrir menú"} aria-expanded={isOpen} aria-controls="main-navigation" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
        <nav id="main-navigation" aria-label="Navegación principal" className={`navigation ${isOpen ? "is-open" : ""}`}>
          {navItems.map((item) => (
            <a key={item.href} href={item.href} aria-current={activeSection === item.href ? "location" : undefined} onClick={() => setIsOpen(false)}>
              {item.name}{item.href === "#contact" && <HiArrowUpRight aria-hidden="true" />}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;