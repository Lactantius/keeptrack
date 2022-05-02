import { Project } from './Project'

interface ProjectCardProps {
    project: Project;
}

function ProjectCard(props: ProjectCardProps) {
    const { project } = props;
    const handleEditClick = (projectBeingEdited: Project) => {
        console.log(projectBeingEdited);
    };
    return (
        <div className="card" key={project.id}>
            <img src={project.imageUrl} alt={project.name} />
            <section className="section dark">
                <h5 className="strong">
                    <strong>{project.name}</strong>
                </h5>
                <p>{formatDescription(project.description)}</p>
                <p>${project.budget.toLocaleString()}</p>
                <button className="bordered"
                    onClick={() => {
                        handleEditClick(project)
                    }}>
                    <span className="icon-edit"></span>
                    Edit
                </button>
            </section>
        </div>
    );
}

function formatDescription(description: string): string {
    return description.substring(0, 60) + '...';
}

export default ProjectCard;
