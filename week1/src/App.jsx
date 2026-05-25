import { useState, useEffect } from 'react'; // 1. Added useEffect
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/skills';
import Contact from './pages/contact';
import './App.css';

export default function App() {
  // 2. Read from localStorage on initial load. If empty, default to 'home'
  const [currentPage, setCurrentPage] = useState(() => {
    return localStorage.getItem('savedPage') || 'home';
  });

  // 3. Keep localStorage updated whenever currentPage changes
  useEffect(() => {
    localStorage.setItem('savedPage', currentPage);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} />;
      case 'projects':
        return <Projects />;
      case 'skills':
        return <Skills />;
      case 'contact':
        return <Contact />;
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="app">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="main-content">{renderPage()}</main>
      <Footer />
    </div>
  );
}
