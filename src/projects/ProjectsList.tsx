import { Project } from './Project'

interface ProjectListProps {
    projects: Project[];
}

function ProjectsList({ projects }: ProjectListProps) {
    return <pre>{JSON.stringify(projects, null, ' ')}</pre>
}

export default ProjectsList;
