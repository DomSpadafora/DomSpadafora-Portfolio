import './portfolio.css'
import apps from './apps.json';
import Projects from './Project'

const Portfolio = () =>
  <div id='appsDiv'>
    <h2>Applications</h2>

    <main id='apps'>

      {apps.map(({ key, name, image, github, deploy, info }) =>
        <div className='card' key={key}>
          <img src={image} alt='app' />

          <div>
            <h2>{name}</h2>
            <h4>{info}</h4>
          </div>
        </div>)}
    </main>

  </div>

export default Portfolio
