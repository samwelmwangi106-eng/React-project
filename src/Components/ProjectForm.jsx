import {useState} from 'react'

function ProjectForm({addProject}) {
    const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
const handleSubmit = (e) => {
    e.preventDefault();

    const newProject = {
      id: Date.now(),
      title,
      description,
      image: "https://via.placeholder.com/150"
    };

    addProject(newProject);

    setTitle("");
    setDescription("");
  };
  return (
    
      <form onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Project title"
        required
      />
      <input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        required
      />
      <button type="submit">Add Project</button>
    </form>
    
  )
}

export default ProjectForm
