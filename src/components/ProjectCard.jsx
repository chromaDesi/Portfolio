const ProjectCard = ({ title, description, skills, imgUrl, url}) => {
  const CardContent = (
    <div className="group relative block bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 card-hover overflow-hidden">
      <img
        src={imgUrl}
        alt={title}
        className="w-full h-40 object-cover rounded-md mb-4"
      />
      <h4 className="text-xl font-bold mb-2 text-primary">{title}</h4>
      <p className="text-black font-medium">{description}</p>

      <div className="mt-4">
                <h5 className="font-medium text-black">Skills:</h5>
                <ul className="flex flex-wrap mt-2">
                  {skills.map((skill, index) => (
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
  );

  return url ? (
    <a href={url} target="_blank" rel="noopener noreferrer">
      {CardContent}
    </a>
  ) : (
    CardContent
  );
};

export default ProjectCard;
