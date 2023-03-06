import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AboutMe from './AboutMe';
import Portfolio from './work'
import Contact from './Contact';
import Resume from './Resume';
import Home from './Home';

const Header = () =>
  <Router>
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="navbar-nav mr-auto">
          <li><Link to={'/'} className="nav-link"> Home </Link></li>
          <li><Link to={'/contact'} className="nav-link">Contact</Link></li>
          <li><Link to={'/about-me'} className="nav-link">About</Link></li>
          <li><Link to={'/resume'} className="nav-link">Resume</Link></li>
          <li><Link to={'/portfolio'} className="nav-link">Porfolio</Link></li>
        </ul>
      </nav>
      <hr />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about-me' element={<AboutMe />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/portfolio' element={<Portfolio />} />
      </Routes>
    </div>
  </Router>

export default Header