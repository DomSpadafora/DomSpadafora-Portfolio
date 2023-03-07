import './portfolio.css'
import apps from '../../utils/apps.json';
import ProjectCard from './Project'

const Portfolio = () => {
return (
  <div id='appsDiv'>
    <h2>Applications</h2>

    <main id='apps'>

      {apps.map(({ name, image, github, deploy, key }) => (
        <div key={key}>
          
          <ProjectCard 
          name={name}
          image={image}
          github={github}
          deploy={deploy}
        />

        </div>)
      )}
    </main>

  </div>
  )}

export default Portfolio
