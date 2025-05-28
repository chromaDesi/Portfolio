import { 
    FaPython,
    FaReact,
    FaNodeJs,
    FaGitAlt,
    FaLinux,
    FaJava,
    FaAws
 } from "react-icons/fa";

import {
  SiJavascript, SiC, SiHtml5, SiMysql,
  SiMongodb, SiNumpy, SiPandas, SiScikitlearn,
  SiJupyter, SiOracle, SiCanva, SiAdobephotoshop, SiSqlalchemy, SiTailwindcss
} from "react-icons/si";


//Keep adding more icons as needed
//https://react-icons.github.io/react-icons/icons/si/

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
  { name: "Photoshop", icon: SiAdobephotoshop }
];


const Skills = () => {
    return (

        <section id = "Skills" className = "py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My<span className="text-primary"> Skills</span>
                </h2>


                {/* This section will be used to display the skills 
                it takes the map above to generate the list of skills*/}
                <div className="flex flex-wrap justify-center gap-6">
                    {powers.map(({ name, icon: Icon }) => (
                        <div key={name} className="bg-card p-4 rounded-2xl border-4 shadow-xs card-hover flex flex-col items-center">
                        <Icon className="text-6xl text-primary-foreground" />
                        <span className=" font-bold text-glow mt-2 text-sm text-primary-foreground">{name}</span>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};


export default Skills;

/* 

<div className=" flex-wrap flex grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-card p-4 rounded-2xl border-4 shadow-xs card-hover">
                        <FaPython className="text-7xl text-primary-foreground"/>
                    </div>

                </div>*/