import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Benvingut a Laravel Divulgatiu</h1>
      <p>
        Laravel és un framework PHP modern que facilita el desenvolupament web mitjançant una sintaxi elegant i expressiva. S'empra per crear des de petits llocs web fins a grans aplicacions empresarials.
      </p>
      <p>En aquesta web trobaràs:</p>
      <ul>
        <li>Una guia completa dels conceptes clau.</li>
        <li>Receptes pràctiques amb exemples de codi.</li>
        <li>Projectes tipus que pots realitzar.</li>
        <li>Un glossari interactiu.</li>
      </ul>
      <div className="cta-buttons">
        <Link to="/guia">Explorar Guia</Link>
        <Link to="/receptes">Veure Receptes</Link>
        <Link to="/projectes">Projectes</Link>
      </div>
    </div>
  );
};

export default Home;