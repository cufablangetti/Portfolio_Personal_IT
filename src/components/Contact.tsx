import { useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";
import { HiArrowRight, HiCheck, HiPaperAirplane } from "react-icons/hi";

const socials = [
  { name: "LinkedIn", icon: FaLinkedinIn, href: "https://www.linkedin.com/in/facundo-blangetti-a58ba0233" },
  { name: "GitHub", icon: FaGithub, href: "https://github.com/cufablangetti" },
  { name: "Instagram", icon: FaInstagram, href: "https://www.instagram.com/facu_blangetti" },
];

const Contact = () => {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "sending") return;
    const form = event.currentTarget;
    setStatus("sending");
    try {
      await emailjs.sendForm("service_bzly5n5", "template_ve4q2pe", form, "Dw8hMcg2H6Jj2tsDO");
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container contact-layout">
        <div className="contact-copy">
          <span className="eyebrow">05 / Contacto</span>
          <h2>Tu próximo proyecto.<br /><span>Hablemos.</span></h2>
          <p>Abierto a oportunidades laborales, proyectos freelance y conversaciones sobre tecnología. Contame qué tenés en mente.</p>
          <a className="contact-email" href="mailto:facublangettit@gmail.com">facublangettit@gmail.com <HiArrowRight aria-hidden="true" /></a>
          <div className="contact-socials">{socials.map((social) => <a key={social.name} className="icon-button" href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.name} title={social.name}><social.icon aria-hidden="true" /></a>)}</div>
          <div className="contact-location">Maipú, Mendoza, Argentina</div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit} aria-busy={status === "sending"} onChange={() => { if (status !== "sending") setStatus("idle"); }}>
          <div className="form-row">
            <div className="field"><label htmlFor="contact-name">Nombre</label><input id="contact-name" name="from_name" autoComplete="name" placeholder="Tu nombre" required maxLength={120} disabled={status === "sending"} /></div>
            <div className="field"><label htmlFor="contact-email">Email</label><input id="contact-email" type="email" name="reply_to" autoComplete="email" placeholder="tu@email.com" required maxLength={254} disabled={status === "sending"} /></div>
          </div>
          <div className="field"><label htmlFor="contact-subject">Asunto</label><input id="contact-subject" name="subject" placeholder="¿En qué podemos trabajar juntos?" required maxLength={200} disabled={status === "sending"} /></div>
          <div className="field"><label htmlFor="contact-message">Mensaje</label><textarea id="contact-message" name="message" placeholder="Contame sobre tu proyecto..." rows={5} required maxLength={5000} disabled={status === "sending"} /></div>
          <button className="button" type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Enviando..." : status === "success" ? "Mensaje enviado" : "Enviar mensaje"}
            {status === "success" ? <HiCheck aria-hidden="true" /> : <HiPaperAirplane aria-hidden="true" />}
          </button>
          <p className={`form-status ${status === "error" ? "is-error" : ""}`} role="status" aria-live="polite" aria-atomic="true">
            {status === "success" && "Gracias por escribir. Tu mensaje se envió correctamente."}
            {status === "error" && "No se pudo enviar. Intentá nuevamente o escribime por email."}
          </p>
        </form>
      </div>
    </section>
  );
};

export default Contact;