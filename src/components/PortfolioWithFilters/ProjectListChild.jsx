export default function ProjectListChild(props) {
  const { projects, animate } = props;

  return (
    <ul className="project-list">
      <li className={`project-item ${animate ? "animate show" : ""}`}>
        {projects.map((project, index) => (
          <img key={index} className="project-list-item" src={project.img} alt={project.description || ""} data-category={project.category} />
        ))}
      </li>
    </ul>
  );
}
