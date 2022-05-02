import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProjectsPage from './projects/ProjectsPage';
import ProjectsClass from './projects/ProjectsClass';
import Clock from './Clock';

function App() {
  return (
    <div className="container">
      <Clock />
      <ProjectsPage name="Bob" />
      <ProjectsPage name="Dan" enthusiasmLevel={5} />
      <ProjectsClass name="Bob" />
    </div>
  );
}

export default App;
