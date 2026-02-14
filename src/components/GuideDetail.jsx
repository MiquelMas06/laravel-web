import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const GuideDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [topic, setTopic] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/data/guide.json')
      .then(res => res.json())
      .then(data => {
        const found = data.find(t => t.id === parseInt(id));
        if (found) {
          setTopic(found);
        } else {
          navigate('/not-found');
        }
        setLoading(false);
      });
  }, [id, navigate]);

  if (loading) return <div>Carregant...</div>;

  return (
    <div>
      <h1>{topic.title}</h1>
      <p>{topic.content}</p>
      <button onClick={() => navigate('/guia')}>Tornar a la guia</button>
    </div>
  );
};

export default GuideDetail;