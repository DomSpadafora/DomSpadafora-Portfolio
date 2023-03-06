import React, {Component} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import Navigation from './Navigation';
import AboutMe from './AboutMe';
import Portfolio from './Portfolio'
import Contact from './Contact';
import Resume from './Resume';
import Home from './Home';

class Header extends Component {
  render() {
    return (
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
              <Route exact path='/' component={Home} />
              <Route path='/contact' component={Contact} />
              <Route path='/about-me' component={AboutMe} />
              <Route path='/resume' component={Resume} />
              <Route path='/portfolio' component={Portfolio} />
          </Routes>
        </div>
      </Router>
    );
  }
}
export default Header