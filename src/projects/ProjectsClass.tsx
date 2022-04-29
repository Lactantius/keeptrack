import React, { SyntheticEvent } from 'react';
import { MOCK_PROJECTS } from './MockProjects'

export interface Props {
    name: string;
    enthusiasmLevel?: number;
}

interface State {
    currentEnthusiasm: number;
}

class ProjectsClass extends React.Component<Props, State> {
    state = { currentEnthusiasm: this.props.enthusiasmLevel || 1 };

    onIncrement = (event: SyntheticEvent) => {
        console.log(event);
        this.updateEnthusiasm(1);
    };
    onDecrement = (event: SyntheticEvent) => {
        console.log(event.target);
        this.updateEnthusiasm(-1);
    };

    render() {
        const { name } = this.props;

        if (this.state.currentEnthusiasm <= 0) {
            throw new Error('Insufficient enthusiasm');
        }

        return (
            <>
                <h1>{ name }’s Projects{ getExclamationMarks(this.state.currentEnthusiasm)}</h1>
                <button onClick={this.onDecrement}>-</button>
                <button onClick={this.onIncrement}>+</button>
                <pre>{JSON.stringify(MOCK_PROJECTS, null, ' ')}</pre>
            </>
        );
    }

    updateEnthusiasm(change: number) {
        this.setState((currentState) => {
            return { currentEnthusiasm: currentState.currentEnthusiasm + change };
        });
    }
}

function getExclamationMarks(numChars: number) {
    return Array(numChars + 1).join('!');
}

export default ProjectsClass;
