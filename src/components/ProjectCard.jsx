const ProjectCard = ({ title, description, imgUrl, url }) => {
  const CardContent = (
    <div className="group relative block bg-card p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 card-hover overflow-hidden">
      <img
        src={imgUrl}
        alt={title}
        className="w-full h-40 object-cover rounded-md mb-4"
      />
      <h4 className="text-xl font-semibold mb-2 text-primary">{title}</h4>
      <p className="text-primary-foreground">{description}</p>
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
