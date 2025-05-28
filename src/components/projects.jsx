import { useState } from "react";
import ProjectCard from "./ProjectCard";


const Projects = () => {
  const [activeTab, setActiveTab] = useState("projects");

  const work = [
    { title: "Project 1", description: "This is project 1", imgUrl: "/prop_model_r.jpg"},
    { title: "Project 1", description: "This is project 1", imgUrl: "/prop_model_r.jpg"},
    { title: "Project 1", description: "This is project 1", imgUrl: "/prop_model_r.jpg"},
    { title: "Project 1", description: "This is project 1", imgUrl: "/prop_model_r.jpg"},
    { title: "Project 1", description: "This is project 1", imgUrl: "/prop_model_r.jpg"},
    { title: "Project 1", description: "This is project 1", imgUrl: "/prop_model_r.jpg"},
  ];

  const research = [
    { title: "Cost-Sensitive Learning: Propensity Modeling Optimization", description: "#Python #Scikit-Learn #ML", imgUrl: "/prop_model_r.jpg", url: "https://www.linkedin.com/in/vparekhinfo/details/projects/343267436/multiple-media-viewer/?profileId=ACoAADLKqvEBxeGRTptNKOI22SgKFr17oUha0Fc&treasuryMediaId=1735510055966" },
    { title: "Marijuana and the Effects on the Young Adult", description: "#Healthcare", imgUrl: "/weed.jpg", url: "https://www.linkedin.com/in/vparekhinfo/details/projects/351239392/multiple-media-viewer/?profileId=ACoAADLKqvEBxeGRTptNKOI22SgKFr17oUha0Fc&treasuryMediaId=1748402929164" },
  ];

  const data = activeTab === "projects" ? work : research;

  return (
    <section id="projects" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Personal <span className="text-primary">Work</span>
        </h2>
        <p className="mb-10 text-muted-foreground">Come take a look at some of my projects and research samples!</p>

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
