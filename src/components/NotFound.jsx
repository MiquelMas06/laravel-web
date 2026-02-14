import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <h1>404 - Pàgina no trobada</h1>
      <p>Ho sentim, la pàgina que cerques no existeix.</p>
      <Link to="/">Torna a l'inici</Link>
    </div>
  );
};

export default NotFound;