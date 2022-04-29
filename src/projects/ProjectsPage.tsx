import React from 'react';
import { MOCK_PROJECTS } from './MockProjects'
import ProjectsList from './ProjectsList';

export interface Props {
    name: string;
    enthusiasmLevel?: number;
}

function ProjectsPage({ name, enthusiasmLevel = 1 }: Props) {
    if (enthusiasmLevel <= 0) {
        throw new Error('Insufficient enthusiasm');
    }
    return (
        <>
            <h1>{ name }’s Projects{ getExclamationMarks(enthusiasmLevel)}</h1>
            <ProjectsList projects={MOCK_PROJECTS} />
        </>
    );
}

function getExclamationMarks(numChars: number) {
    return Array(numChars + 1).join('!');
}

export default ProjectsPage;
