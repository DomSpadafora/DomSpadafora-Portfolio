import './portfolio.css'
import apps from '../../utils/apps.json';
import ProjectCard from './Project'

const Portfolio = () => {
return (
  <div id='appsDiv' >
    <h2 className='container' id='portfolio'>Portfolio Applications</h2>
    
    <div className='cards'>
      {apps.map(({ name, image, github, deploy, key, info }) => (
        
          <ProjectCard 
          key={key}
          name={name}
          image={image}
          info={info}
          github={github}
          deploy={deploy}/>
        )
      )}
    </div>

  </div>
  )}

export default Portfolio
