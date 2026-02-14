import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const CookbookDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/data/cookbook.json')
      .then(res => res.json())
      .then(data => {
        const found = data.find(r => r.id === parseInt(id));
        if (found) {
          setRecipe(found);
        } else {
          navigate('/not-found');
        }
        setLoading(false);
      });
  }, [id, navigate]);

  if (loading) return <div>Carregant...</div>;

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      <h2>Passos</h2>
      <ol>
        {recipe.steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
      <h2>Codi</h2>
      <pre>
        <code>{recipe.code}</code>
      </pre>
      <button onClick={() => navigate('/receptes')}>Tornar</button>
    </div>
  );
};

export default CookbookDetail;