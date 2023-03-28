import React from 'react'
import samplePDF from '../Resume/resume.pdf'
import '../../styles/Resume.css'



const Resume = () => {
  return (
    
       <embed src={samplePDF}></embed>

  )

}

export default Resume
