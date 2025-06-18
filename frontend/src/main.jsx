import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/layout.css';
import './styles/theme.css';
import Home from './Pages/Home';
import About from './Pages/About';
import GrandMenage from './Pages/GrandMenage';
import Residentiel from './Pages/Residentiel';
import Franchise from './Pages/Franchise';
import Contact from './Pages/Contact';
import NettoyageCommercial from './Pages/NettoyageCommercial';
import NettoyageBureau from './Pages/NettoyageBureau';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/apropos' element={<About/>} />
        <Route path='/grand-menage' element={<GrandMenage/>} />
        <Route path='/residentiel' element={<Residentiel/>} />
        <Route path='/nettoyage-commercial' element={<NettoyageCommercial/>} />
        <Route path='/nettoyage-bureau' element={<NettoyageBureau/>} />
        <Route path='/franchise' element={<Franchise/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
    </Router>
  </StrictMode>,
)
