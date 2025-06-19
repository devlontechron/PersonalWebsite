import React from 'react';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import Home   from './pages/homePage.jsx';
import ProjectsPage from './pages/projectsPage.jsx';

export default function App() {
  return (
    <HashRouter>
      <nav>
        <Link to="/">Home</Link> ·
        <Link to="/projects">Projects</Link> ·
        <Link to="/media">media</Link>
      </nav>

      <Routes>
        <Route path="/"          element={<Home />} />
        <Route path="/projects"  element={<ProjectsPage />} />
      </Routes>
    </HashRouter>
  );
}
