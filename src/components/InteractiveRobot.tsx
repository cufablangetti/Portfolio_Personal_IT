import { useRef, useEffect, useCallback, useState } from "react";
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
  linkedin: "https://www.linkedin.com/in/facundo-blangetti-a58ba0233",
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
interface QA { keywords: RegExp; answer: string; }

const QA_PAIRS: QA[] = [
  { keywords: /nombre|quien|quién|sos|llamás|llamar|presentat/i, answer: `Soy ${KNOWLEDGE.nombre}, ${KNOWLEDGE.titulo}. Estoy cursando el último año de ${KNOWLEDGE.carrera}. Vivo en ${KNOWLEDGE.ubicacion}. 😊` },
  { keywords: /edad|años|viejo|cumpleaños/i, answer: `No tengo esa información exacta, pero Facundo lleva 5+ años estudiando sistemas y tiene amplia experiencia profesional. 🎓` },
  { keywords: /donde|dónde|viv[eio]|ubicaci|ciudad|pais|país|mendoza|maipu|maipú/i, answer: `Facundo vive en ${KNOWLEDGE.ubicacion}. 📍` },
  { keywords: /estudi|carrera|universidad|facultad|ingenier|titulo|título|utn|ies/i, answer: `Facundo es ${KNOWLEDGE.titulo} y está cursando ${KNOWLEDGE.carrera}. 🎓` },
  { keywords: /trabaj|empleo|empresa|laboral|experiencia|puesto|cargo/i, answer: `${KNOWLEDGE.experiencia_laboral} 💼` },
  { keywords: /erp|softland|t-sql|tsql|base.?de.?datos|sql|automatiz|reportes/i, answer: `${KNOWLEDGE.erp} 🏢` },
  { keywords: /maul|landing|play.?store|front.?end/i, answer: `${KNOWLEDGE.frontend_maul} 🚀` },
  { keywords: /tecnolog|stack|lenguaj|herramienta|framework|programa/i, answer: `Las tecnologías que maneja Facundo: ${KNOWLEDGE.tecnologias} ⚡` },
  { keywords: /react|typescript|javascript|node|java(?!script)|python|flutter|dart/i, answer: `Sí, Facundo trabaja con esa tecnología. Su stack completo incluye: ${KNOWLEDGE.tecnologias} 💻` },
  { keywords: /ciber|seguridad|pentest|kali|hack|vulnerab/i, answer: `${KNOWLEDGE.ciberseguridad} 🔐` },
  { keywords: /proyecto|portfolio|app|aplicaci|desarroll/i, answer: `${KNOWLEDGE.proyectos} 🛠️` },
  { keywords: /red|network|server|windows.?server|tcp|infraestructura/i, answer: `${KNOWLEDGE.redes} 🌐` },
  { keywords: /github|git|repositorio|código|codigo/i, answer: `Podés encontrar los repositorios de Facundo en GitHub: ${KNOWLEDGE.github} 📂` },
  { keywords: /linkedin|linked/i, answer: `El LinkedIn de Facundo: ${KNOWLEDGE.linkedin} 🔗` },
  { keywords: /instagram|ig|insta|red.?social/i, answer: `El Instagram de Facundo: ${KNOWLEDGE.instagram} 📸` },
  { keywords: /contacto|contactar|email|mail|correo|escrib|hablar|mensaje/i, answer: `Podés contactar a Facundo por email: ${KNOWLEDGE.email}, o a través de la sección "Contacto" del portfolio. También en LinkedIn y Instagram. 📧` },
  { keywords: /cv|curriculum|hoja.?de.?vida|descargar/i, answer: `${KNOWLEDGE.cv} 📄` },
  { keywords: /disponib|contrat|freelance|nuevo.?proyecto|oportunidad/i, answer: `${KNOWLEDGE.disponibilidad} No dudes en contactarlo. 🤝` },
  { keywords: /interes|pasion|gusta|motiva|objetivo/i, answer: `Los intereses de Facundo: ${KNOWLEDGE.intereses} 🎯` },
  { keywords: /hola|hey|buenas|buen.?d[ií]a|buen.?tarde|buen.?noche|saludos/i, answer: `¡Hola! 👋 Soy EVA, la asistente virtual de Facundo. Preguntame lo que quieras sobre él: experiencia, tecnologías, proyectos, contacto, ¡lo que sea!` },
  { keywords: /gracias|thx|thanks|genial|excelente|crack|groso/i, answer: `¡De nada! 😄 Si tenés más preguntas sobre Facundo, preguntame con confianza.` },
  { keywords: /chau|adios|adiós|bye|nos.?vemos/i, answer: `¡Hasta luego! 👋 Fue un gusto ayudarte. ¡No olvides revisar el portfolio completo!` },
  { keywords: /android|mobile|movil|móvil|apk|flutter/i, answer: `Facundo desarrolló una App Android con Flutter y Dart, integrada directamente con el ERP de la empresa. Usa Material Design, setState para estado y Navigator para navegación. Genera APK de producción (v1.10.45+53). 📱` },
  { keywords: /api|rest|swagger|postman|backend/i, answer: `Facundo desarrolló APIs REST Full Stack con documentación en Swagger, testing con Postman y arquitectura escalable usando Node.js. ⚙️` },
  { keywords: /stat|estadístic|número|cuant/i, answer: `${KNOWLEDGE.stats} 📊` },
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
   Message type
   ═══════════════════════════════════════════════ */
interface Message { text: string; isUser: boolean; }

/* ═══════════════════════════════════════════════
   EVA Robot + integrated chat — both move together
   ═══════════════════════════════════════════════ */
const InteractiveRobot = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const mouseScreen = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });
  const animRef = useRef<number>(0);
  const chatOpenRef = useRef(false);
  const isMobileRef = useRef(false);
  const scrollYRef = useRef(0);
  const SIZE = 120;
  const parkedPos = useRef({ x: 0, y: 0 });

  /* ─── Detect touch device ─── */
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => {
      const mobile = "ontouchstart" in window || window.innerWidth < 768;
      setIsMobile(mobile);
      isMobileRef.current = mobile;
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  /* ─── Chat state ─── */
  const [chatOpen, setChatOpen] = useState(false);
  const [showBubble, setShowBubble] = useState(true);
  const [messages, setMessages] = useState<Message[]>([
    { text: "¡Hola! 👋 Soy EVA, la asistente virtual de Facundo. Preguntame lo que quieras sobre él: experiencia, proyectos, tecnologías, contacto... ¡lo que necesites!", isUser: false },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Keep ref in sync with state
  useEffect(() => { chatOpenRef.current = chatOpen; }, [chatOpen]);

  useEffect(() => { messagesEndRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages]);
  useEffect(() => { if (chatOpen) setTimeout(() => inputRef.current?.focus(), 50); }, [chatOpen]);

  // Hide speech bubble after 3 minutes (180s)
  useEffect(() => {
    const timer = setTimeout(() => setShowBubble(false), 180000);
    return () => clearTimeout(timer);
  }, []);

  // Keyboard shortcut: press "E" to toggle chat
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      // Ignore if user is typing in an input/textarea
      const tag = (e.target as HTMLElement).tagName;
      if (tag === "INPUT" || tag === "TEXTAREA") return;
      if (e.key === "e" || e.key === "E") {
        e.preventDefault();
        setChatOpen((prev) => !prev);
        setShowBubble(false);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const handleSend = () => {
    const text = input.trim();
    if (!text) return;
    setMessages((prev) => [...prev, { text, isUser: true }]);
    setInput("");
    setIsTyping(true);
    setTimeout(() => {
      const answer = getAnswer(text);
      setMessages((prev) => [...prev, { text: answer, isUser: false }]);
      setIsTyping(false);
    }, 400 + Math.random() * 400);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); handleSend(); }
  };

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const W = canvas.width / dpr;
    const H = canvas.height / dpr;
    const cx = W / 2;
    const cy = H / 2;
    const t = performance.now() / 1000;

    // ─── Movement logic ───
    let targetX: number, targetY: number;

    if (chatOpenRef.current) {
      // Chat open → park in bottom-right (both mobile & desktop)
      targetX = parkedPos.current.x;
      targetY = parkedPos.current.y;
    } else if (isMobileRef.current) {
      // Mobile → zigzag like a spring: bounces left↔right while following scroll
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const margin = 50; // margin from screen edges
      const scrollProgress = scrollYRef.current;
      const maxScroll = document.documentElement.scrollHeight - vh;
      const scrollRatio = maxScroll > 0 ? Math.min(scrollProgress / maxScroll, 1) : 0;

      // Horizontal: sine wave that bounces from left edge to right edge
      // Uses scroll position to drive the oscillation (more scroll = more bounces)
      // Also adds time-based movement so she moves even when not scrolling
      const bouncePhase = scrollProgress * 0.008 + t * 0.5;
      const sineWave = Math.sin(bouncePhase); // -1 to 1
      targetX = margin + ((sineWave + 1) / 2) * (vw - margin * 2 - SIZE);

      // Vertical: follows scroll — EVA stays in the middle area of the viewport
      const baseY = vh * 0.3 + scrollRatio * (vh * 0.35);
      targetY = baseY + Math.sin(t * 1.5) * 8; // subtle float
    } else {
      // Desktop → follow cursor
      targetX = mouseScreen.current.x + 40;
      targetY = mouseScreen.current.y - 50;
    }

    pos.current.x += (targetX - pos.current.x) * 0.18;
    pos.current.y += (targetY - pos.current.y) * 0.18;

    // Move the wrapper div (GPU-accelerated)
    if (wrapperRef.current) {
      wrapperRef.current.style.transform = `translate(${pos.current.x - SIZE / 2}px, ${pos.current.y - SIZE / 2}px)`;
    }

    // ─── Velocity for tilt ───
    const velX = (targetX - pos.current.x) * 0.003;
    const velY = (targetY - pos.current.y) * 0.003;

    ctx.clearRect(0, 0, W, H);

    // Floating wobble
    const floatY = Math.sin(t * 2) * 3;

    ctx.save();
    ctx.translate(cx, cy + floatY);

    // Slight tilt based on movement direction
    ctx.rotate(velX * 0.5);

    const s = 0.45;

    // ═══ AMBIENT GLOW ═══
    const ambGlow = ctx.createRadialGradient(0, 0, 5 * s, 0, 0, 70 * s);
    ambGlow.addColorStop(0, "rgba(56, 189, 248, 0.08)");
    ambGlow.addColorStop(1, "rgba(0,0,0,0)");
    ctx.fillStyle = ambGlow;
    ctx.beginPath();
    ctx.arc(0, 0, 70 * s, 0, Math.PI * 2);
    ctx.fill();

    // ═══ LEFT ARM (waving) ═══
    const waveAngle = Math.sin(t * 3.5) * 0.4 + 0.6;
    ctx.save();
    ctx.translate(-52 * s, 10 * s);
    ctx.rotate(-waveAngle);
    ctx.beginPath();
    ctx.ellipse(0, -30 * s, 10 * s, 28 * s, 0, 0, Math.PI * 2);
    const armG = ctx.createLinearGradient(-10 * s, -58 * s, 10 * s, 2 * s);
    armG.addColorStop(0, "#f0f4f8");
    armG.addColorStop(1, "#d0d8e0");
    ctx.fillStyle = armG;
    ctx.shadowColor = "rgba(0,0,0,0.1)";
    ctx.shadowBlur = 6;
    ctx.shadowOffsetY = 2;
    ctx.fill();
    ctx.shadowBlur = 0;
    ctx.shadowOffsetY = 0;
    // Hand glow
    ctx.beginPath();
    ctx.arc(0, -55 * s, 5 * s, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(56, 189, 248, 0.35)";
    ctx.shadowColor = "rgba(56,189,248,0.5)";
    ctx.shadowBlur = 8;
    ctx.fill();
    ctx.shadowBlur = 0;
    ctx.restore();

    // ═══ RIGHT ARM (relaxed) ═══
    ctx.save();
    ctx.translate(52 * s, 10 * s);
    ctx.rotate(0.3 + Math.sin(t * 1.5) * 0.08);
    ctx.beginPath();
    ctx.ellipse(0, 18 * s, 10 * s, 28 * s, 0, 0, Math.PI * 2);
    const armGR = ctx.createLinearGradient(-10 * s, -10 * s, 10 * s, 46 * s);
    armGR.addColorStop(0, "#f0f4f8");
    armGR.addColorStop(1, "#d0d8e0");
    ctx.fillStyle = armGR;
    ctx.shadowColor = "rgba(0,0,0,0.1)";
    ctx.shadowBlur = 6;
    ctx.fill();
    ctx.shadowBlur = 0;
    ctx.restore();

    // ═══ BODY (egg shape) ═══
    ctx.beginPath();
    ctx.ellipse(0, 12 * s, 42 * s, 56 * s, 0, 0, Math.PI * 2);
    const bodyGrad = ctx.createRadialGradient(-12 * s, -15 * s, 3 * s, 0, 12 * s, 60 * s);
    bodyGrad.addColorStop(0, "#ffffff");
    bodyGrad.addColorStop(0.4, "#f5f7fa");
    bodyGrad.addColorStop(0.8, "#e2e8f0");
    bodyGrad.addColorStop(1, "#cbd5e1");
    ctx.fillStyle = bodyGrad;
    ctx.shadowColor = "rgba(0,0,0,0.15)";
    ctx.shadowBlur = 15;
    ctx.shadowOffsetY = 5;
    ctx.fill();
    ctx.shadowBlur = 0;
    ctx.shadowOffsetY = 0;

    // Body outline
    ctx.beginPath();
    ctx.ellipse(0, 12 * s, 42 * s, 56 * s, 0, 0, Math.PI * 2);
    ctx.strokeStyle = "rgba(148,163,184,0.2)";
    ctx.lineWidth = 0.8;
    ctx.stroke();

    // Body specular highlight
    ctx.beginPath();
    ctx.ellipse(-14 * s, -18 * s, 14 * s, 22 * s, -0.3, 0, Math.PI * 2);
    const hlGrad = ctx.createRadialGradient(-14 * s, -18 * s, 1, -14 * s, -18 * s, 20 * s);
    hlGrad.addColorStop(0, "rgba(255,255,255,0.75)");
    hlGrad.addColorStop(1, "rgba(255,255,255,0)");
    ctx.fillStyle = hlGrad;
    ctx.fill();

    // ═══ VISOR (face screen) ═══
    ctx.beginPath();
    ctx.ellipse(0, -10 * s, 33 * s, 18 * s, 0, 0, Math.PI * 2);
    const visorG = ctx.createLinearGradient(0, -28 * s, 0, 8 * s);
    visorG.addColorStop(0, "#1a1a2e");
    visorG.addColorStop(0.5, "#0a0a1a");
    visorG.addColorStop(1, "#111827");
    ctx.fillStyle = visorG;
    ctx.fill();
    ctx.strokeStyle = "rgba(100,116,139,0.25)";
    ctx.lineWidth = 1;
    ctx.stroke();

    // Visor glass reflection
    ctx.beginPath();
    ctx.ellipse(-7 * s, -18 * s, 14 * s, 5 * s, -0.2, 0, Math.PI * 2);
    const refG = ctx.createRadialGradient(-7 * s, -18 * s, 1, -7 * s, -18 * s, 12 * s);
    refG.addColorStop(0, "rgba(255,255,255,0.07)");
    refG.addColorStop(1, "rgba(255,255,255,0)");
    ctx.fillStyle = refG;
    ctx.fill();

    // ═══ EYES (follow mouse gaze) ═══
    const eyeSp = 13 * s;
    const eyeY = -12 * s;
    const eyeW = 8 * s;
    const eyeH = 10 * s;
    // Gaze direction (based on velocity to cursor)
    const gazeX = velX * 25;
    const gazeY = velY * 25;
    const maxGaze = 3.5 * s;
    const gAngle = Math.atan2(gazeY, gazeX);
    const gDist = Math.min(Math.sqrt(gazeX * gazeX + gazeY * gazeY), maxGaze);
    const pupOffX = Math.cos(gAngle) * gDist;
    const pupOffY = Math.sin(gAngle) * gDist;

    // Blink
    const blinkCycle = t % 4.5;
    let blink = 1;
    if (blinkCycle > 4.0 && blinkCycle < 4.15) blink = Math.max(0.05, 1 - (blinkCycle - 4.0) / 0.08);
    else if (blinkCycle >= 4.15 && blinkCycle < 4.3) blink = Math.min(1, (blinkCycle - 4.15) / 0.1);

    const drawEye = (ex: number) => {
      ctx.save();
      ctx.translate(ex, eyeY);
      ctx.scale(1, blink);

      // Glow
      ctx.beginPath();
      ctx.ellipse(pupOffX, pupOffY, eyeW + 4 * s, eyeH + 4 * s, 0, 0, Math.PI * 2);
      const eGlow = ctx.createRadialGradient(pupOffX, pupOffY, 1, pupOffX, pupOffY, (eyeW + 6) * 1);
      eGlow.addColorStop(0, "rgba(56,189,248,0.25)");
      eGlow.addColorStop(1, "rgba(56,189,248,0)");
      ctx.fillStyle = eGlow;
      ctx.fill();

      // Eye
      ctx.beginPath();
      ctx.ellipse(pupOffX, pupOffY, eyeW, eyeH, 0, 0, Math.PI * 2);
      const iGrad = ctx.createRadialGradient(pupOffX - 2 * s, pupOffY - 2 * s, 0.5, pupOffX, pupOffY, eyeH);
      iGrad.addColorStop(0, "#e0f7ff");
      iGrad.addColorStop(0.3, "#7dd3fc");
      iGrad.addColorStop(0.7, "#38bdf8");
      iGrad.addColorStop(1, "#0ea5e9");
      ctx.fillStyle = iGrad;
      ctx.shadowColor = "rgba(56,189,248,0.7)";
      ctx.shadowBlur = 12;
      ctx.fill();
      ctx.shadowBlur = 0;

      // Highlight
      ctx.beginPath();
      ctx.ellipse(pupOffX - 2 * s, pupOffY - 3 * s, 3 * s, 3.5 * s, -0.3, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(255,255,255,0.55)";
      ctx.fill();

      ctx.restore();
    };

    drawEye(-eyeSp);
    drawEye(eyeSp);

    // ═══ SMILE ═══
    const smW = 11 * s + Math.sin(t * 1.5) * s;
    ctx.beginPath();
    ctx.arc(0, 3 * s, smW, 0.2, Math.PI - 0.2, false);
    ctx.strokeStyle = `rgba(56,189,248,${0.4 + Math.sin(t * 2) * 0.1})`;
    ctx.lineWidth = 1.5 * s;
    ctx.lineCap = "round";
    ctx.shadowColor = "rgba(56,189,248,0.35)";
    ctx.shadowBlur = 6;
    ctx.stroke();
    ctx.shadowBlur = 0;

    // ═══ CHEST LIGHT ═══
    const cp = 0.3 + Math.sin(t * 2.5) * 0.25;
    ctx.beginPath();
    ctx.arc(0, 38 * s, 3 * s, 0, Math.PI * 2);
    const cG = ctx.createRadialGradient(0, 38 * s, 0.5, 0, 38 * s, 6 * s);
    cG.addColorStop(0, `rgba(56,189,248,${cp + 0.3})`);
    cG.addColorStop(1, "rgba(56,189,248,0)");
    ctx.fillStyle = cG;
    ctx.shadowColor = "rgba(56,189,248,0.5)";
    ctx.shadowBlur = 10;
    ctx.fill();
    ctx.shadowBlur = 0;

    ctx.restore(); // end floating transform

    animRef.current = requestAnimationFrame(draw);
  }, []);

  /* ─── Setup ─── */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = SIZE * dpr;
    canvas.height = SIZE * dpr;
    const ctx = canvas.getContext("2d");
    if (ctx) ctx.scale(dpr, dpr);

    // Initialize position
    const updateParked = () => {
      parkedPos.current.x = window.innerWidth - 80;
      parkedPos.current.y = window.innerHeight - 80;
    };
    updateParked();

    if (isMobileRef.current) {
      // Mobile: start on the right side, mid-screen
      pos.current.x = window.innerWidth - 70;
      pos.current.y = window.innerHeight * 0.35;
    } else {
      // Desktop: start at center
      pos.current.x = window.innerWidth / 2;
      pos.current.y = window.innerHeight / 2;
      mouseScreen.current.x = pos.current.x;
      mouseScreen.current.y = pos.current.y;
    }

    const handleMouse = (e: MouseEvent) => {
      mouseScreen.current.x = e.clientX;
      mouseScreen.current.y = e.clientY;
    };

    const handleScroll = () => {
      scrollYRef.current = window.scrollY;
    };

    // Desktop: mouse. Mobile: scroll.
    if (!isMobileRef.current) {
      window.addEventListener("mousemove", handleMouse);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", updateParked);

    animRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("mousemove", handleMouse);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateParked);
      cancelAnimationFrame(animRef.current);
    };
  }, [draw]);

  const openChat = () => { setChatOpen(true); setShowBubble(false); };

  return (
    <>
      {/* Wrapper follows cursor (parks when chat is open) */}
      <div
        ref={wrapperRef}
        className="fixed pointer-events-none"
        style={{ left: 0, top: 0, zIndex: 9999, willChange: "transform" }}
      >
        {/* Speech bubble — moves with EVA, above her head */}
        <AnimatePresence>
          {showBubble && !chatOpen && (
            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.9 }}
              transition={{ duration: 0.5, delay: 1.5 }}
              className="pointer-events-auto absolute cursor-pointer bg-[#111827]/95 backdrop-blur-sm border border-sky-500/30 text-white px-3 py-2 rounded-2xl rounded-br-sm shadow-lg shadow-sky-500/10 text-left"
              style={{ bottom: SIZE + 4, right: isMobile ? -20 : -60, width: isMobile ? 190 : 220 }}
              onClick={openChat}
            >
              <p className="text-[11px] leading-relaxed">
                <span className="text-sky-400 font-semibold">EVA:</span>{" "}
                {isMobile
                  ? "¡Hola! Si tenés alguna consulta sobre mí, ¡presioná el globito del chat! 💬"
                  : <>¡Hola! Si tenés alguna duda sobre mí, ¡preguntame! Presioná la tecla{" "}
                      <kbd className="inline-block px-1 py-0.5 mx-0.5 bg-sky-500/20 border border-sky-500/30 rounded text-sky-300 text-[10px] font-bold">E</kbd>{" "}
                      para abrir el chat 💬</>
                }
              </p>
              <div className="absolute -bottom-[6px] right-6 w-3 h-3 bg-[#111827]/95 border-r border-b border-sky-500/30 rotate-45" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* EVA Canvas */}
        <canvas
          ref={canvasRef}
          width={SIZE}
          height={SIZE}
          style={{ width: SIZE, height: SIZE, background: "transparent" }}
        />

        {/* Chat badge on EVA — clickable (bigger on mobile for easy tap) */}
        {!chatOpen && (
          <button
            onClick={openChat}
            className="pointer-events-auto absolute cursor-pointer group"
            style={{ bottom: isMobile ? 6 : 10, right: isMobile ? 0 : 4, width: isMobile ? 38 : 30, height: isMobile ? 38 : 30 }}
            title="Chat con EVA"
          >
            <span className="flex items-center justify-center w-full h-full rounded-full bg-gradient-to-br from-sky-400 to-cyan-600 shadow-lg shadow-sky-500/30 group-hover:shadow-sky-500/50 group-hover:scale-110 transition-all duration-200">
              <svg width={isMobile ? 18 : 14} height={isMobile ? 18 : 14} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </span>
            <span className="absolute inset-0 rounded-full bg-sky-400/20 animate-ping" />
          </button>
        )}
      </div>

      {/* ─── Chat window — fixed bottom-right when EVA parks ─── */}
      <AnimatePresence>
        {chatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-2 right-2 sm:bottom-[140px] sm:right-4 w-[calc(100vw-16px)] sm:w-[380px] h-[70vh] sm:h-[480px] bg-[#0d1117] border border-white/10 rounded-2xl shadow-2xl shadow-black/50 flex flex-col overflow-hidden"
            style={{ zIndex: 10000 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-sky-500/10 to-cyan-500/10 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-sky-400 to-cyan-500 flex items-center justify-center text-white text-sm font-bold shadow-md">E</div>
                <div>
                  <h4 className="text-white text-sm font-semibold leading-none">EVA — Asistente Virtual</h4>
                  <p className="text-sky-400 text-xs mt-0.5">Preguntame sobre Facundo</p>
                </div>
              </div>
              <button onClick={() => setChatOpen(false)} className="text-gray-400 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/10">
                <HiX size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 scrollbar-thin">
              {messages.map((msg, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }} className={`flex ${msg.isUser ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[85%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-line ${msg.isUser ? "bg-sky-500/20 text-sky-100 rounded-br-sm border border-sky-500/20" : "bg-white/5 text-gray-200 rounded-bl-sm border border-white/10"}`}>
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                  <div className="bg-white/5 border border-white/10 rounded-2xl rounded-bl-sm px-4 py-3 flex gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-sky-400/60 animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-2 h-2 rounded-full bg-sky-400/60 animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-2 h-2 rounded-full bg-sky-400/60 animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick suggestions */}
            {messages.length <= 1 && (
              <div className="px-4 pb-2 flex flex-wrap gap-1.5">
                {["¿Qué tecnologías maneja?", "Experiencia laboral", "¿Cómo contactarlo?", "Proyectos"].map((q) => (
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
                ))}
              </div>
            )}

            {/* Input */}
            <div className="p-3 border-t border-white/10 bg-[#0a0e17]">
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-3 py-2 focus-within:border-sky-500/40 transition-colors">
                <input ref={inputRef} type="text" value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={handleKeyDown} placeholder="Escribí tu pregunta..." className="flex-1 bg-transparent text-white text-sm placeholder-gray-500 outline-none" />
                <button onClick={handleSend} disabled={!input.trim()} className="text-sky-400 hover:text-sky-300 disabled:text-gray-600 transition-colors p-1">
                  <HiPaperAirplane size={18} className="rotate-90" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default InteractiveRobot;
