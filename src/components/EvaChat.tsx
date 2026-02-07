import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiX, HiPaperAirplane } from "react-icons/hi";

/* ═══════════════════════════════════════════════
   Knowledge base — everything about Facundo
   ═══════════════════════════════════════════════ */
const KNOWLEDGE = {
  nombre: "Facundo Blangetti",
  ubicacion: "Maipú, Mendoza, Argentina",
  titulo: "Analista Técnico en Sistemas",
  carrera: "Ingeniería en Sistemas (último año en curso)",
  universidad: "UTN (Universidad Tecnológica Nacional) / IES",
  experiencia_laboral:
    "Trabajo como Analista Técnico en Sistemas en una empresa, donde gestiono el ERP SOFTLAND, desarrollo automatizaciones internas con VS Code y T-SQL, gestiono bases de datos, hago testing funcional, soporte técnico, capacitación a usuarios finales y optimización de procesos empresariales.",
  erp: "Trabajo con ERP SOFTLAND: configuración, personalización, automatización, consultas avanzadas en T-SQL, generación de reportes, integración de módulos. He desarrollado múltiples proyectos internos: App de monitoreo de tractores, Chat Bot de pedidos con automatización de ERP y Mails, Chat Bot empresa Oliver con automatización de ERP y Mails, App de trackeo de ventas, Automatización para inserción masiva de viáticos, App Android para rastro y geolocalización de tractores (hoja de ruta).",
  frontend_maul:
    "Durante 6 meses desarrollé en React todo el Front End de una futura aplicación de Play Store para la empresa MAUL. También realicé la landing page corporativa que está en producción: maul.com.ar",
  tecnologias:
    "React, TypeScript, JavaScript, Node.js, Java, Python, Flutter, Dart, T-SQL, HTML, CSS, Tailwind CSS, Framer Motion, Three.js. Herramientas: VS Code, Git, GitHub, Postman, Swagger, Android Studio, Kali Linux.",
  ciberseguridad:
    "Estoy incursionando en ciberseguridad: pentesting básico, evaluación de vulnerabilidades, administración de redes, protocolos TCP/IP, y familiarización con herramientas de Kali Linux.",
  proyectos:
    "API REST Full Stack (Node.js, Swagger, Postman), App Android con Flutter/Dart integrada con ERP, Administración de Redes con Windows Server 2022, Front End para empresa MAUL en React, y múltiples proyectos internos confidenciales en la empresa.",
  redes:
    "Configuración de infraestructura de red con Windows Server 2022, gestión de servicios, políticas de seguridad y protocolos TCP/IP.",
  github: "https://github.com/cufablangetti",
  linkedin:
    "https://www.linkedin.com/in/facundo-blangetti-a58ba0233",
  instagram: "https://www.instagram.com/facu_blangetti",
  email: "facundoblangetti03@gmail.com",
  intereses:
    "Desarrollo Full Stack, Ciberseguridad, Sistemas ERP, automatización de procesos, arquitectura de sistemas.",
  stats: "Más de 15 tecnologías dominadas, 5+ años estudiando, 10+ proyectos realizados.",
  idioma: "Español nativo.",
  disponibilidad: "Disponible para nuevos proyectos y oportunidades laborales.",
  cv: "Podés descargar mi CV desde el botón 'Descargar CV' en la sección principal del portfolio.",
};

/* ─── Intent matching ─── */
interface QA {
  keywords: RegExp;
  answer: string;
}

const QA_PAIRS: QA[] = [
  {
    keywords: /nombre|quien|quién|sos|llamás|llamar|presentat/i,
    answer: `Soy ${KNOWLEDGE.nombre}, ${KNOWLEDGE.titulo}. Estoy cursando el último año de ${KNOWLEDGE.carrera}. Vivo en ${KNOWLEDGE.ubicacion}. 😊`,
  },
  {
    keywords: /edad|años|viejo|cumpleaños/i,
    answer: `No tengo esa información exacta, pero Facundo lleva 5+ años estudiando sistemas y tiene amplia experiencia profesional. 🎓`,
  },
  {
    keywords: /donde|dónde|viv[eio]|ubicaci|ciudad|pais|país|mendoza|maipu|maipú/i,
    answer: `Facundo vive en ${KNOWLEDGE.ubicacion}. 📍`,
  },
  {
    keywords: /estudi|carrera|universidad|facultad|ingenier|titulo|título|utn|ies/i,
    answer: `Facundo es ${KNOWLEDGE.titulo} y está cursando ${KNOWLEDGE.carrera}. 🎓`,
  },
  {
    keywords: /trabaj|empleo|empresa|laboral|experiencia|puesto|cargo/i,
    answer: `${KNOWLEDGE.experiencia_laboral} 💼`,
  },
  {
    keywords: /erp|softland|t-sql|tsql|base.?de.?datos|sql|automatiz|reportes/i,
    answer: `${KNOWLEDGE.erp} 🏢`,
  },
  {
    keywords: /maul|landing|play.?store|front.?end/i,
    answer: `${KNOWLEDGE.frontend_maul} 🚀`,
  },
  {
    keywords: /tecnolog|stack|lenguaj|herramienta|framework|programa/i,
    answer: `Las tecnologías que maneja Facundo: ${KNOWLEDGE.tecnologias} ⚡`,
  },
  {
    keywords: /react|typescript|javascript|node|java(?!script)|python|flutter|dart/i,
    answer: `Sí, Facundo trabaja con esa tecnología. Su stack completo incluye: ${KNOWLEDGE.tecnologias} 💻`,
  },
  {
    keywords: /ciber|seguridad|pentest|kali|hack|vulnerab/i,
    answer: `${KNOWLEDGE.ciberseguridad} 🔐`,
  },
  {
    keywords: /proyecto|portfolio|app|aplicaci|desarroll/i,
    answer: `${KNOWLEDGE.proyectos} 🛠️`,
  },
  {
    keywords: /red|network|server|windows.?server|tcp|infraestructura/i,
    answer: `${KNOWLEDGE.redes} 🌐`,
  },
  {
    keywords: /github|git|repositorio|código|codigo/i,
    answer: `Podés encontrar los repositorios de Facundo en GitHub: ${KNOWLEDGE.github} 📂`,
  },
  {
    keywords: /linkedin|linked/i,
    answer: `El LinkedIn de Facundo: ${KNOWLEDGE.linkedin} 🔗`,
  },
  {
    keywords: /instagram|ig|insta|red.?social/i,
    answer: `El Instagram de Facundo: ${KNOWLEDGE.instagram} 📸`,
  },
  {
    keywords: /contacto|contactar|email|mail|correo|escrib|hablar|mensaje/i,
    answer: `Podés contactar a Facundo por email: ${KNOWLEDGE.email}, o a través de la sección "Contacto" del portfolio. También en LinkedIn y Instagram. 📧`,
  },
  {
    keywords: /cv|curriculum|hoja.?de.?vida|descargar/i,
    answer: `${KNOWLEDGE.cv} 📄`,
  },
  {
    keywords: /disponib|contrat|freelance|nuevo.?proyecto|oportunidad/i,
    answer: `${KNOWLEDGE.disponibilidad} No dudes en contactarlo. 🤝`,
  },
  {
    keywords: /interes|pasion|gusta|motiva|objetivo/i,
    answer: `Los intereses de Facundo: ${KNOWLEDGE.intereses} 🎯`,
  },
  {
    keywords: /hola|hey|buenas|buen.?d[ií]a|buen.?tarde|buen.?noche|saludos/i,
    answer: `¡Hola! 👋 Soy EVA, la asistente virtual de Facundo. Preguntame lo que quieras sobre él: experiencia, tecnologías, proyectos, contacto, ¡lo que sea!`,
  },
  {
    keywords: /gracias|thx|thanks|genial|excelente|crack|groso/i,
    answer: `¡De nada! 😄 Si tenés más preguntas sobre Facundo, preguntame con confianza.`,
  },
  {
    keywords: /chau|adios|adiós|bye|nos.?vemos/i,
    answer: `¡Hasta luego! 👋 Fue un gusto ayudarte. ¡No olvides revisar el portfolio completo!`,
  },
  {
    keywords: /android|mobile|movil|móvil|apk|flutter/i,
    answer: `Facundo desarrolló una App Android con Flutter y Dart, integrada directamente con el ERP de la empresa. Usa Material Design, setState para estado y Navigator para navegación. Genera APK de producción (v1.10.45+53). 📱`,
  },
  {
    keywords: /api|rest|swagger|postman|backend/i,
    answer: `Facundo desarrolló APIs REST Full Stack con documentación en Swagger, testing con Postman y arquitectura escalable usando Node.js. ⚙️`,
  },
  {
    keywords: /stat|estadístic|número|cuant/i,
    answer: `${KNOWLEDGE.stats} 📊`,
  },
];

const getAnswer = (input: string): string => {
  const trimmed = input.trim().toLowerCase();
  if (!trimmed) return "Escribime algo y te respondo. 😊";

  for (const qa of QA_PAIRS) {
    if (qa.keywords.test(trimmed)) return qa.answer;
  }

  return `No tengo información específica sobre eso, pero te puedo ayudar con:\n\n• Experiencia laboral\n• Tecnologías y stack\n• Proyectos realizados\n• Estudios y carrera\n• Ciberseguridad\n• Contacto y redes\n• CV para descargar\n\n¡Preguntame sobre cualquiera de estos temas! 😊`;
};

/* ═══════════════════════════════════════════════
   Chat Component
   ═══════════════════════════════════════════════ */
interface Message {
  text: string;
  isUser: boolean;
}

const EvaChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showBubble, setShowBubble] = useState(true);
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "¡Hola! 👋 Soy EVA, la asistente virtual de Facundo. Preguntame lo que quieras sobre él: experiencia, proyectos, tecnologías, contacto... ¡lo que necesites!",
      isUser: false,
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  const handleSend = () => {
    const text = input.trim();
    if (!text) return;

    setMessages((prev) => [...prev, { text, isUser: true }]);
    setInput("");
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const answer = getAnswer(text);
      setMessages((prev) => [...prev, { text: answer, isUser: false }]);
      setIsTyping(false);
    }, 400 + Math.random() * 400);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const openChat = () => {
    setIsOpen(true);
    setShowBubble(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9998]">
      {/* Chat bubble message */}
      <AnimatePresence>
        {showBubble && !isOpen && (
          <motion.button
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            onClick={openChat}
            className="absolute bottom-16 right-0 bg-[#111827] border border-sky-500/30 text-white px-4 py-2.5 rounded-2xl rounded-br-sm shadow-lg shadow-sky-500/10 cursor-pointer hover:border-sky-400/50 transition-colors max-w-[220px] text-left"
          >
            <p className="text-sm leading-relaxed">
              <span className="text-sky-400 font-semibold">EVA:</span> ¡Hola! ¿En qué puedo ayudarte? 👋
            </p>
            <div className="absolute -bottom-1 right-3 w-3 h-3 bg-[#111827] border-r border-b border-sky-500/30 rotate-45" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Toggle button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={openChat}
            className="w-14 h-14 rounded-full bg-gradient-to-br from-sky-400 to-cyan-600 text-white shadow-lg shadow-sky-500/30 flex items-center justify-center text-2xl hover:shadow-sky-500/50 transition-shadow"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="absolute bottom-0 right-0 w-[340px] sm:w-[380px] h-[480px] bg-[#0d1117] border border-white/10 rounded-2xl shadow-2xl shadow-black/50 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-sky-500/10 to-cyan-500/10 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-sky-400 to-cyan-500 flex items-center justify-center text-white text-sm font-bold shadow-md">
                  E
                </div>
                <div>
                  <h4 className="text-white text-sm font-semibold leading-none">EVA — Asistente Virtual</h4>
                  <p className="text-sky-400 text-xs mt-0.5">Preguntame sobre Facundo</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/10"
              >
                <HiX size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 scrollbar-thin">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`flex ${msg.isUser ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-line ${
                      msg.isUser
                        ? "bg-sky-500/20 text-sky-100 rounded-br-sm border border-sky-500/20"
                        : "bg-white/5 text-gray-200 rounded-bl-sm border border-white/10"
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-white/5 border border-white/10 rounded-2xl rounded-bl-sm px-4 py-3 flex gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-sky-400/60 animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-2 h-2 rounded-full bg-sky-400/60 animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-2 h-2 rounded-full bg-sky-400/60 animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick suggestions (only show at start) */}
            {messages.length <= 1 && (
              <div className="px-4 pb-2 flex flex-wrap gap-1.5">
                {["¿Qué tecnologías maneja?", "Experiencia laboral", "¿Cómo contactarlo?", "Proyectos"].map(
                  (q) => (
                    <button
                      key={q}
                      onClick={() => {
                        setInput(q);
                        setTimeout(() => {
                          setMessages((prev) => [...prev, { text: q, isUser: true }]);
                          setInput("");
                          setIsTyping(true);
                          setTimeout(() => {
                            setMessages((prev) => [...prev, { text: getAnswer(q), isUser: false }]);
                            setIsTyping(false);
                          }, 400 + Math.random() * 400);
                        }, 50);
                      }}
                      className="px-3 py-1.5 text-xs bg-sky-500/10 text-sky-300 border border-sky-500/20 rounded-full hover:bg-sky-500/20 transition-colors"
                    >
                      {q}
                    </button>
                  )
                )}
              </div>
            )}

            {/* Input */}
            <div className="p-3 border-t border-white/10 bg-[#0a0e17]">
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-3 py-2 focus-within:border-sky-500/40 transition-colors">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Escribí tu pregunta..."
                  className="flex-1 bg-transparent text-white text-sm placeholder-gray-500 outline-none"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim()}
                  className="text-sky-400 hover:text-sky-300 disabled:text-gray-600 transition-colors p-1"
                >
                  <HiPaperAirplane size={18} className="rotate-90" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EvaChat;
