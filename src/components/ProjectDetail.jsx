import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/data/projects.json')
      .then(res => res.json())
      .then(data => {
        const found = data.find(p => p.id === parseInt(id));
        if (found) {
          setProject(found);
        } else {
          navigate('/not-found');
        }
        setLoading(false);
      });
  }, [id, navigate]);

  if (loading) return <div>Carregant...</div>;

  return (
    <div>
      <h1>{project.title}</h1>
      <p><strong>Objectiu:</strong> {project.objective}</p>
      <p><strong>Mòduls implicats:</strong> {project.modules.join(', ')}</p>
      <p><strong>Stack:</strong> {project.stack}</p>
      <p><strong>Dificultat:</strong> {project.difficulty}</p>
      {project.image && <img src={project.image} alt={project.title} />}
      <button onClick={() => navigate('/projectes')}>Tornar</button>
    </div>
  );
};

export default ProjectDetail;