import React from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Contact from './components/Contact';

// React apps typically have a single App component at the very top that can reference other React components.
// This component, `App`, is our main component that is importing `Hello` and rendering it in the return method.
function App() {
  return (
    <div>
      <Header />
      <AboutMe />
      <Resume />
      <Projects />
      <Contact />
    </div>  
  );      
}

export default App;
