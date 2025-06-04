
import { motion } from "framer-motion";
import { FaPython, FaReact, FaNodeJs, FaGitAlt, FaLinux, FaJava, FaAws,FaDocker } from "react-icons/fa";
import {
  SiJavascript, SiC, SiHtml5, SiMysql, SiMongodb, SiNumpy,
  SiPandas, SiScikitlearn, SiJupyter, SiOracle, SiCanva,
  SiAdobephotoshop, SiSqlalchemy, SiTailwindcss
} from "react-icons/si";
import { PiBlueprint } from "react-icons/pi";

const powers = [
  { name: "Python", icon: FaPython },
  { name: "React", icon: FaReact },
  { name: "Node.js", icon: FaNodeJs },
  { name: "Java", icon: FaJava },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "JavaScript", icon: SiJavascript },
  { name: "HTML5", icon: SiHtml5 },
  { name: "C", icon: SiC },
  { name: "MySQL", icon: SiMysql },
  { name: "MongoDB", icon: SiMongodb },
  { name: "OracleDB", icon: SiOracle },
  { name: "NumPy", icon: SiNumpy },
  { name: "pandas", icon: SiPandas },
  { name: "Scikit-Learn", icon: SiScikitlearn },
  { name: "Jupyter", icon: SiJupyter },
  { name: "AWS", icon: FaAws },
  { name: "SQLAlchemy", icon: SiSqlalchemy },
  { name: "Git", icon: FaGitAlt },
  { name: "Linux", icon: FaLinux },
  { name: "Canva", icon: SiCanva },
  { name: "Photoshop", icon: SiAdobephotoshop },
  { name: "Agile Development", icon: PiBlueprint },
  { name: "Docker", icon: FaDocker },
];

const icons = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
});

const Skills = () => {
  return (
    <section id="Skills" className="py-24 px-4 relative overflow-hidden bg-black">
      

      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-primary-foreground"
        >
          My<span className="text-primary"> Skills</span>
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-6">
          {powers.map(({ name, icon: Icon }) => (
            <motion.div
              key={name}
              initial="initial"
              animate="animate"
              variants={icons(2 + Math.random())}
              className="bg-primary p-4 rounded-2xl border-4 shadow-xs card-hover flex flex-col items-center"
            >
              <Icon className="text-6xl text-primary-foreground" />
              <span className="font-bold text-glow mt-2 text-sm text-primary-foreground">{name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
