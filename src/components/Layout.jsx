import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <header>
        <nav>
          <Link to="/">Inici</Link>
          <Link to="/guia">Guia Laravel</Link>
          <Link to="/receptes">Cookbook</Link>
          <Link to="/projectes">Projectes</Link>
          <Link to="/glossari">Glossari</Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>© 2025 - Web divulgativa sobre Laravel</footer>
    </div>
  );
};

export default Layout;