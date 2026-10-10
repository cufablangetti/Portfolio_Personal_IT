import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaJava, FaNodeJs, FaPython, FaAndroid, FaDatabase, FaGitAlt, FaWindows, FaLinux, FaServer } from "react-icons/fa";
import { SiTypescript, SiPostgresql, SiMysql, SiPostman, SiSwagger, SiFlutter, SiDart } from "react-icons/si";

const categories = [
  { title: "01 / Frontend", techs: [{ name: "React", icon: FaReact }, { name: "TypeScript", icon: SiTypescript }, { name: "JavaScript", icon: FaJs }, { name: "HTML5", icon: FaHtml5 }, { name: "CSS3", icon: FaCss3Alt }] },
  { title: "02 / Backend", techs: [{ name: "Node.js", icon: FaNodeJs }, { name: "Java", icon: FaJava }, { name: "Python", icon: FaPython }, { name: "API REST", icon: FaServer }] },
  { title: "03 / Datos & ERP", techs: [{ name: "T-SQL", icon: FaDatabase }, { name: "MySQL", icon: SiMysql }, { name: "PostgreSQL", icon: SiPostgresql }, { name: "SOFTLAND", icon: FaServer }] },
  { title: "04 / Mobile", techs: [{ name: "Flutter", icon: SiFlutter }, { name: "Dart", icon: SiDart }, { name: "Android Studio / SDK", icon: FaAndroid }] },
  { title: "05 / Herramientas", techs: [{ name: "Git", icon: FaGitAlt }, { name: "Postman", icon: SiPostman }, { name: "Swagger", icon: SiSwagger }] },
  { title: "06 / Infraestructura", techs: [{ name: "Windows Server", icon: FaWindows }, { name: "Kali Linux", icon: FaLinux }, { name: "Redes TCP/IP", icon: FaServer }] },
];

const TechStack = () => (
  <section id="tech" className="section stack-section">
    <div className="container">
      <div className="section-heading"><div><span className="eyebrow">04 / Tecnologías</span><h2>Mi caja de herramientas.</h2></div><p>Del frontend a los datos, las tecnologías con las que desarrollo y sigo aprendiendo.</p></div>
      <div className="stack-grid">
        {categories.map((category) => (
          <div className="stack-group" key={category.title}>
            <h3>{category.title}</h3>
            <div className="stack-items">{category.techs.map((tech) => <span key={tech.name}><tech.icon aria-hidden="true" />{tech.name}</span>)}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TechStack;