import { useState, useEffect } from 'react';

const Glossary = () => {
  const [terms, setTerms] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('/data/glossary.json')
      .then(res => res.json())
      .then(data => {
        setTerms(data);
        setFiltered(data);
      });
  }, []);

  useEffect(() => {
    if (!search) {
      setFiltered(terms);
    } else {
      const lowerSearch = search.toLowerCase();
      setFiltered(terms.filter(item =>
        item.term.toLowerCase().includes(lowerSearch) ||
        item.definition.toLowerCase().includes(lowerSearch)
      ));
    }
  }, [search, terms]);

  return (
    <div>
      <h1>Glossari Laravel</h1>
      <input
        type="text"
        placeholder="Cerca un terme..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <dl>
        {filtered.map((item, index) => (
          <div key={index}>
            <dt>{item.term}</dt>
            <dd>{item.definition}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
};

export default Glossary;