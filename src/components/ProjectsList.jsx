import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ProjectsList = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/data/projects.json')
      .then(res => res.json())
      .then(data => {
        setProjects(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Carregant projectes...</div>;

  return (
    <div>
      <h1>Projectes tipus Laravel</h1>
      <div className="projects-grid">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.objective}</p>
            <p><strong>Dificultat:</strong> {project.difficulty}</p>
            <Link to={`/projectes/${project.id}`}>Veure detall</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsList;
