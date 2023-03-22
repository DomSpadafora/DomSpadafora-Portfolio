import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import AboutMe from './AboutMe';
import Portfolio from './Portfolio/Portfolio'
import Contact from './Contact';
import Resume from './Resume/Resume';
import Home from './Home';
import '../styles/Header.css'
import logo from '../images/domspadafora.PNG'
import { Navbar, Nav, } from 'react-bootstrap';


const Header = () =>


  <BrowserRouter>
    <div>
      <Navbar expand="lg" collapseOnSelect>
        <Navbar.Brand>
          <img src={logo} className="img-responsive rounded" alt="" />
        </Navbar.Brand>

        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav>
            <Nav.Link eventKey="2" as={Link} to='/DomSpadafora-Portfolio' style={{color:"#333533"}}> Home </Nav.Link>
            <Nav.Link eventKey="2" as={Link} to='/about-me' style={{color:"#333533"}}>About</Nav.Link>
            <Nav.Link eventKey="2" as={Link} to='/resume' style={{color:"#333533"}}>Resume</Nav.Link>
            <Nav.Link eventKey="2" as={Link} to='/portfolio' style={{color:"#333533"}}>Portfolio</Nav.Link>
            <Nav.Link eventKey="2" as={Link} to='/contact'style={{color:"#333533"}}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>


      </Navbar>
      <div>
        <Routes>
          <Route exact path='/DomSpadafora-Portfolio' element={<Home />} />
          <Route path='/about-me' element={<AboutMe />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
    </div>
  </BrowserRouter>


export default Header