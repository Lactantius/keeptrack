import { Project } from './Project'
import ProjectCard from './ProjectCard'
import ProjectForm from './ProjectForm'
import React, { useState } from 'react'

interface ProjectListProps {
    projects: Project[];
    onSave: (project: Project) => void;
}

function ProjectsList({ projects, onSave }: ProjectListProps) {
    //return <pre>{JSON.stringify(projects, null, ' ')}</pre>
    const [projectBeingEdited, setProjectBeingEdited] = useState({});
    const handleEdit = (project: Project) => {
        setProjectBeingEdited(project);
    };
    const cancelEditing = () => {
        setProjectBeingEdited({});
    };

    return (
        <ul className="row">
            {projects.map((project) => (
                <div key={project.id} className="cols-sm">
                    {project === projectBeingEdited ? (
                        <ProjectForm onCancel={cancelEditing} onSave={onSave} />
                    ): (
                        <ProjectCard project={project} onEdit={handleEdit} />
                    )}
                </div>
            ))}
        </ul>
    );
}

export default ProjectsList;
