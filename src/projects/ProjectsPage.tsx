import React from 'react';
import { MOCK_PROJECTS } from './MockProjects'

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
            <pre>{JSON.stringify(MOCK_PROJECTS, null, ' ')}</pre>
        </>
    );
}

function getExclamationMarks(numChars: number) {
    return Array(numChars + 1).join('!');
}

export default ProjectsPage;
