//edit experiences later
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
const experiences = [
    {
      id: 0,
      img: "/gbcs.jpg",
      role: "Express Backend Software Developer Intern",
      company: "GBCS Group",
      date: "May 2025 - August 2025",
      desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "TypeScript",
        "Node JS",
        "Tailwind CSS",
        "MongoDb",
        "Redux",
        " Next Js",
      ],
    },
    {
      id: 1,
      img: "/opfin.jpg",
      role: "Data Analyst Intern",
      company: "Opfin AI",
      date: "December 2024 - April 2025",
      desc: "Designed and maintained OracleDB schemas with 15+ normalized tables and 60+ PL/SQL queries to manage and preprocess 100,000+ time-series stock records; used oracledb and SQLAlchemy in Python to pipeline historical price and volume data into mining workflows.\n\nApplied data mining techniques on stock market datasets using Python (pandas, NumPy, Scikit-Learn), including clustering (K-Means, DBSCAN), technical pattern recognition, and dimensionality reduction (UMAP) to engineer a custom stock market indicator for trend prediction and portfolio insights.",
      skills: [
        "Python",
        "OracleDB",
        "Scikit-Learn",
        "SQL",
        "SQLAlchemy",
        "Numpy",
        "pandas",
      ],
    },

];


const Experience = () => {
  return (
    <section id = "Experience" className = "py-24 px-4 relative bg-foreground">

      {/* Spline Background with Fade In/Out */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1}}
        transition={{ duration: 1 }}
      >
        <Spline scene="/solar.spline"/>
      </motion.div>
    


        


      {/* Experience Timeline */}
      <div className="relative">


        <div className="container mx-auto max-w-5xl text-center mb-16">
            <motion.h2
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ y: -100, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="text-3xl md:text-4xl font-bold mb-12 text-center text-primary-foreground"
            >
                Professional<span className="text-primary"> Experience</span>
            </motion.h2>
  
            <motion.p 
            whileInView={{ opacity: 1, y: 0 }}
              initial={{ y: -100, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            className="text-background mt-4 text-lg font-semibold">
            A collection of my work experience and the roles I have taken in
            various organizations
            </motion.p>
        </div>
        {/* Vertical line */}
        <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-primary h-[90%] hidden xl:block"></div>

        {/* Experience Entries */}
        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className={`flex flex-col sm:flex-row items-center mb-16 ${
              index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"
            }`}
          >
            {/* Timeline Circle */}
            <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 bg-gray-400 border-4 border-primary w-12 h-12 sm:w-16 sm:h-16 rounded-full justify-center items-center z-10 hidden xl:block">
              <img
                src={experience.img}
                alt={experience.company}
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Content Section */}
            <div
              className={`w-full sm:max-w-md p-4 sm:p-8 rounded-2xl shadow-2xl border border-border bg-foreground backdrop-blur-md${
                index % 2 === 0 ? "sm:ml-0" : "sm:mr-0"
              } sm:ml-44 sm:mr-44 ml-8 transform transition-transform duration-300 hover:scale-105`}
            >
              {/* Flex container for image and text */}
              <div className="flex items-center space-x-6">
                {/* Company Logo/Image */}
                <div className="w-16 h-16 bg-white rounded-md overflow-hidden">
                  <img
                    src={experience.img}
                    alt={experience.company}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Role, Company Name, and Date */}
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-white">
                      {experience.role}
                    </h3>
                    <h4 className="text-md sm:text-sm text-gray-300">
                      {experience.company}
                    </h4>
                  </div>
                  {/* Date at the bottom */}
                  <p className="text-sm text-gray-500 mt-2">{experience.date}</p>
                </div>
              </div>

              <p className="mt-4 text-gray-400">{experience.desc}</p>
              <div className="mt-4">
                <h5 className="font-medium text-white">Skills:</h5>
                <ul className="flex flex-wrap mt-2">
                  {experience.skills.map((skill, index) => (
                    <li
                      key={index}
                      className="bg-primary text-background px-4 py-1 text-xs sm:text-sm rounded-lg mr-2 mb-2 border border-gray-400 font-bold"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;