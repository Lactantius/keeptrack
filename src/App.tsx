import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProjectsPage from './projects/ProjectsPage';
import ProjectsClass from './projects/ProjectsClass';

function App() {
  return (
    <div className="container">
      <ProjectsPage name="Bob" />
      <ProjectsPage name="Dan" enthusiasmLevel={5} />
      <ProjectsClass name="Bob" />
    </div>
  );
}

export default App;
