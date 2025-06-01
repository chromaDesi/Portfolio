import { useState } from "react";
import ProjectCard from "./ProjectCard";
import {motion} from 'framer-motion';

//update projects
const Projects = () => {
  const [activeTab, setActiveTab] = useState("projects");
  //add projects
  const work = [
    {title: "ISA GMU Official Website – Modern Club Platform ", description: "Designed and developed ISA GMU’s official website using React, TypeScript, and Framer Motion to boost student engagement and modernize the club’s digital presence.", skills: ['React.js', 'TailwindCSS', 'Vite', 'Framer Motion'], imgUrl:'isa.png', url:'https://isa-website-nine.vercel.app/'},
    { title: "FrequentFlier Rewards Android Application Tool ", description: "Created an Android app to allow easy access a custom database made in Oracle.", skills: ["Java", "OracleDB", "SQL", "Android", "JDBC API"], imgUrl: "/jdbc.jpg"},
    { title: "Animated Digital Greeting Card ", description: "Hosted on AWS S3, a cute greeting card", skills: ["AWS S3", "JavaScript", "HTML5", "CSS"], imgUrl: "/vday.jpg", url: "https://surprisenia.s3.us-east-1.amazonaws.com/index.html"},
    { title: "ZAKU Task Manager", description: "Implemented a custom task manager within Unix with chaining, dual processing, and file redirection", skills: ["C", "Unix"], imgUrl: "/zaku.jpg"},
    { title: "Binary Sentiment Classification Model", description: "Evaluated product reviews to conduct sentiment analysis", skills: ["Python", "Scikit-Learn", "NLTK", "NumPy", "Pandas"], imgUrl: "/dm.png"},
    { title: "Modified Tetris", description: "Recreated tetris with new mechanics", skills: ["Java", "OOP"], imgUrl: "/tetris.jpg"},
  ];

  const research = [
    { title: "Cost-Sensitive Learning: Propensity Modeling Optimization", description: "Evaluated and optimized various models to best model population propensity", skills: ["Python", "Scikit-learn", "NumPy", "Pandas"], imgUrl: "/prop_model_r.jpg", url: "https://www.linkedin.com/in/vparekhinfo/details/projects/343267436/multiple-media-viewer/?profileId=ACoAADLKqvEBxeGRTptNKOI22SgKFr17oUha0Fc&treasuryMediaId=1735510055966" },
    { title: "Marijuana and the Effects on the Young Adult", description: "Research Proposal on evaluating the effects of Marijuana on Young Adults", skills: ["Healthcare"], imgUrl: "/weed.jpg", url: "https://www.linkedin.com/in/vparekhinfo/details/projects/351239392/multiple-media-viewer/?profileId=ACoAADLKqvEBxeGRTptNKOI22SgKFr17oUha0Fc&treasuryMediaId=1748402929164" },
  ];

  const data = activeTab === "projects" ? work : research;

  return (
    <section id="Projects" className="py-24 px-4 relative bg-foreground">
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
            className={`cosmic-button ${activeTab === "projects" ? "bg-primary text-white" : "bg-white text-primary"}`}
            onClick={() => setActiveTab("projects")}
          >
            Projects
          </button>
          <button
            className={`cosmic-button ${activeTab === "research" ? "bg-primary text-white" : "bg-white text-primary"}`}
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
