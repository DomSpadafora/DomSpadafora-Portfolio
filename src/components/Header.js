import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AboutMe from './AboutMe';
import Portfolio from './Portfolio/Portfolio'
import Contact from './Contact';
import Resume from './Resume';
import Home from './Home';
import '../styles/Header.css'


const Header = () =>
  <Router>
    <div>
      <nav>
          <li><Link to={'/'} > Home </Link></li>
          <li><Link to={'/contact'} >Contact</Link></li>
          <li><Link to={'/about-me'} >About</Link></li>
          <li><Link to={'/resume'} >Resume</Link></li>
          <li><Link to={'/portfolio'} >Porfolio</Link></li>
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