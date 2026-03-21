import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar   from './components/Navbar';
import Footer   from './components/Footer';

import HomePage   from './pages/HomePage';
import MediaPage  from './pages/MediaPage';
import AboutPage  from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

import './styles/global.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <main>
        <Routes>
          <Route path="/"        element={<HomePage />}   />
          <Route path="/media"   element={<MediaPage />}  />
          <Route path="/about"   element={<AboutPage />}  />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
