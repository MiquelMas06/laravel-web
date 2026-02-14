import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const GuideList = () => {
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/data/guide.json')
      .then(res => res.json())
      .then(data => {
        setTopics(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Carregant guia...</div>;

  return (
    <div>
      <h1>Guia Laravel</h1>
      <ul>
        {topics.map(topic => (
          <li key={topic.id}>
            <Link to={`/guia/${topic.id}`}>{topic.title}</Link>
            <p>{topic.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GuideList;