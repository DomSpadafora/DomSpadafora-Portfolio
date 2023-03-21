import headshot from '../images/dom_headshot.jfif'
import '../styles/AboutMe.css'

const AboutME = () => {
  return (

    <div className='container' id='about-me-container'>
      <div className='row'>
        <div className='col m-5'>
          <h2 id='about-me'>About Me</h2>
          <hr></hr>
          <img className='rounded-circle' id='headshot' src={headshot} alt="Dom Spadafora" />
        </div>
        <div className='col'>
          <p id='about-text'>
          Growing up baseball was my life, not only baseball, but sports in general. Each team that I have ever been on has impacted my life in some way. The dream of playing baseball for a living has diminished but the desire to be around people and build new teams has not.
          </p>
          <p id='about-text'>
          Currently a Full-Stack Web Developer holding a Bachelor of Arts in Sports Management and a minor Public Relations. Recently earned a certificate in Full Stack Development from the University of Central Florida, developing skill sets in JavaScript, CSS, React.js, responsive web design, and more. Strengths include: problem solver, strong leader, team player, & personable.  
          </p>
        </div>
      </div>

    </div>




  )
}

export default AboutME
