import { MOCK_PROJECTS } from './MockProjects'
import ProjectsList from './ProjectsList';
import { Project } from './Project';

export interface Props {
    name: string;
    enthusiasmLevel?: number;
}

function ProjectsPage({ name, enthusiasmLevel = 1 }: Props) {

    const saveProject = (project: Project) => {
        console.log('Saving project: ', project);
    };

    if (enthusiasmLevel <= 0) {
        throw new Error('Insufficient enthusiasm');
    }
    return (
        <>
            <h1>{ name }’s Projects{ getExclamationMarks(enthusiasmLevel)}</h1>
            <ProjectsList projects={MOCK_PROJECTS} onSave={saveProject} />
        </>
    );
}

function getExclamationMarks(numChars: number) {
    return Array(numChars + 1).join('!');
}

export default ProjectsPage;
