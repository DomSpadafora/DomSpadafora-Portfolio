import './portfolio.css'
import apps from '../../utils/apps.json';
import ProjectCard from './Project'

const Portfolio = () => {
return (
  <div id='appsDiv'>
    <h2>Portfolio Applications</h2>
    <hr></hr>
    <div className='cards'>
      {apps.map(({ name, image, github, deploy, key, info }) => (
        <div key={key}>
          <ProjectCard 
          name={name}
          image={image}
          info={info}
          github={github}
          deploy={deploy}/>
        </div>)
      )}
    </div>

  </div>
  )}

export default Portfolio
