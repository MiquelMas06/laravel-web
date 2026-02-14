import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CookbookList = () => {
  const [recipes, setRecipes] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('Tots');
  const [allTags, setAllTags] = useState([]);

  useEffect(() => {
    fetch('/data/cookbook.json')
      .then(res => res.json())
      .then(data => {
        setRecipes(data);
        setFiltered(data);
        // Extreure tots els tags únics
        const tags = ['Tots', ...new Set(data.flatMap(r => r.tags))];
        setAllTags(tags);
      });
  }, []);

  useEffect(() => {
    let result = recipes;
    // Filtrar per tag
    if (selectedTag !== 'Tots') {
      result = result.filter(r => r.tags.includes(selectedTag));
    }
    // Filtrar per text
    if (searchTerm) {
      result = result.filter(r =>
        r.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        r.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    setFiltered(result);
  }, [searchTerm, selectedTag, recipes]);

  return (
    <div>
      <h1>Receptes Laravel</h1>
      <div>
        <input
          type="text"
          placeholder="Cerca..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select value={selectedTag} onChange={(e) => setSelectedTag(e.target.value)}>
          {allTags.map(tag => (
            <option key={tag} value={tag}>{tag}</option>
          ))}
        </select>
      </div>
      <ul>
        {filtered.map(recipe => (
          <li key={recipe.id}>
            <Link to={`/receptes/${recipe.id}`}>{recipe.title}</Link>
            <p>{recipe.description}</p>
            <div>Tags: {recipe.tags.join(', ')}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CookbookList;