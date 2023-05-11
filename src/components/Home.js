import React from 'react'
import '../styles/Home.css'
import javascript from '../images/javascript-39395.png'

const Home = () => {
  return (
    <div className='home-background'>
      <div className="banner">
        <h1>Dom Spadafora</h1>
        <p>Full Stack Web Developer</p>
        <q>If you can let go of passion and follow your curiosity, your curiosity just might lead you to your passion.</q>
      </div>

      <section>
        <img src= {javascript} alt=''/>
      </section>
    </div>

  )
}

export default Home

