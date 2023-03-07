import './portfolio.css'
import apps from '../../utils/apps.json';
import ProjectCard from './Project'

const Portfolio = () => {
return (
  <div id='appsDiv'>
    <h2>Applications</h2>

    <div>
      {apps.map(({ name, image, github, deploy, key }) => (
        <div key={key}>
          <ProjectCard 
          name={name}
          image={image}
          github={github}
          deploy={deploy}/>
        </div>)
      )}
    </div>

  </div>
  )}

export default Portfolio
