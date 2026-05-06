import {useState} from 'react'
import ProjectList from './components/ProjectList';
import SearchBar from "./components/SearchBar";
import ProjectForm from "./components/ProjectForm";

function App() {

    const [projects,setProjects] = useState(
        [
    
  ]
    );
const [searchTerm, setSearchTerm] = useState("");

  // Add new project
  const addProject = (project) => {
    setProjects([project, ...projects]);
  };

  // Filter projects
  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
const deleteProject = (id) => {
  setProjects(projects.filter((project) => project.id !== id));
};
  
    return (
  <div className="app">
    
    <header className="header">
      <h1>Creative Portfolio</h1>
      <SearchBar setSearchTerm={setSearchTerm} />
    </header>

    <section className="form-section">
      <ProjectForm addProject={addProject} />
    </section>

    <section className="grid-section">
      <ProjectList projects={filteredProjects}
      deleteProject={deleteProject}
      />
    </section>

  </div>

  );
}

export default App
