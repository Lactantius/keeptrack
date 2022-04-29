import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProjectsPage from './projects/ProjectsPage';

function App() {
  return (
    <div className="container">
      <ProjectsPage name="Bob" />
      <ProjectsPage name="Dan" enthusiasmLevel={5} />
    </div>
  );
}

export default App;
