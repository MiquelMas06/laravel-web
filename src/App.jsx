import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import GuideList from './components/GuideList';
import GuideDetail from './components/GuideDetail';
import CookbookList from './components/CookbookList';
import CookbookDetail from './components/CookbookDetail';
import ProjectsList from './components/ProjectsList';
import ProjectDetail from './components/ProjectDetail';
import Glossary from './components/Glossary';
import NotFound from './components/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="guia" element={<GuideList />} />
          <Route path="guia/:id" element={<GuideDetail />} />
          <Route path="receptes" element={<CookbookList />} />
          <Route path="receptes/:id" element={<CookbookDetail />} />
          <Route path="projectes" element={<ProjectsList />} />
          <Route path="projectes/:id" element={<ProjectDetail />} />
          <Route path="glossari" element={<Glossary />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
