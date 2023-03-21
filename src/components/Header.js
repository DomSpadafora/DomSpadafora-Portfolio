import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AboutMe from './AboutMe';
import Portfolio from './Portfolio/Portfolio'
import Contact from './Contact';
import Resume from './Resume/Resume';
import Home from './Home';
import '../styles/Header.css'
import logo from '../images/domspadafora.PNG'


const Header = () =>
  <Router>
    <div>
      <nav className="navbar navbar-expand  p-1">
      <img src={logo} className="img-responsive rounded" alt=""/>
          
        
        <ul className="navbar-nav navbar-collapse ">
          <li><Link to={'/DomSpadafora-Portfolio'} className= 'nav-link' > Home </Link></li>
          <li><Link to={'/about-me'} className= 'nav-link'>About</Link></li>
          <li><Link to={'/resume'} className= 'nav-link'>Resume</Link></li>
          <li><Link to={'/portfolio'} className= 'nav-link'>Portfolio</Link></li>
          <li><Link to={'/contact'} className= 'nav-link'>Contact</Link></li>
        </ul>
      </nav>
      
      <Routes>
        <Route exact path='/DomSpadafora-Portfolio' element={<Home />} />
        <Route path='/about-me' element={<AboutMe />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  </Router>

export default Header