import { useState } from "react";
import ProjectCard from "./ProjectCard";
import {motion} from 'framer-motion';
import Spline from '@splinetool/react-spline';
//update projects
const Projects = () => {
  const [activeTab, setActiveTab] = useState("projects");
  //add projects
  const work = [
    { title: "Project 1", description: "This is project 1", skills: [], imgUrl: "/prop_model_r.jpg"},
    { title: "Project 1", description: "This is project 1", skills: [], imgUrl: "/prop_model_r.jpg"},
    { title: "Project 1", description: "This is project 1", skills: [], imgUrl: "/prop_model_r.jpg"},
  ];

  const research = [
    { title: "Cost-Sensitive Learning: Propensity Modeling Optimization", description: "#Python #Scikit-Learn #ML", skills: [], imgUrl: "/prop_model_r.jpg", url: "https://www.linkedin.com/in/vparekhinfo/details/projects/343267436/multiple-media-viewer/?profileId=ACoAADLKqvEBxeGRTptNKOI22SgKFr17oUha0Fc&treasuryMediaId=1735510055966" },
    { title: "Marijuana and the Effects on the Young Adult", description: "#Healthcare", skills: [], imgUrl: "/weed.jpg", url: "https://www.linkedin.com/in/vparekhinfo/details/projects/351239392/multiple-media-viewer/?profileId=ACoAADLKqvEBxeGRTptNKOI22SgKFr17oUha0Fc&treasuryMediaId=1748402929164" },
  ];

  const data = activeTab === "projects" ? work : research;

  return (
    <section id="Projects" className="py-24 px-4 relative bg-secondary/30">
      

      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1}}
        transition={{ duration: 1 }}
      >
        <Spline scene="/space.spline"/>
      </motion.div>
      <div className="container mx-auto max-w-5xl text-center z-10 relative">
        <motion.h2 
        whileInView={{ opacity: 1, y: 0 }}
              initial={{ y: -100, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
        className="text-3xl md:text-4xl font-bold mb-2 text-primary-foreground">
          Personal <span className="text-primary">Work</span>
        </motion.h2>
        <motion.p
        whileInView={{ opacity: 1, y: 0 }}
              initial={{ y: -100, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }} 
        className="text-primary-foreground mt-4 text-lg font-semibold mb-10">
            Come take a look at some of my projects and research samples!
            </motion.p>
        <div className="flex justify-center mb-8 gap-4">
          <button
            className={`cosmic-button ${activeTab === "projects" ? "bg-primary text-white" : "bg-card text-primary"}`}
            onClick={() => setActiveTab("projects")}
          >
            Projects
          </button>
          <button
            className={`cosmic-button ${activeTab === "research" ? "bg-primary text-white" : "bg-card text-primary"}`}
            onClick={() => setActiveTab("research")}
          >
            Research
          </button>
        </div>
        {/*This adds all the cards to the website */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {data.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
