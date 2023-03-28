import React from 'react'
import samplePDF from '../Resume/resume.pdf'
import '../../styles/Resume.css'

const samplePDF = 'https://docs.google.com/document/d/1GknG1WKRqvlZKbxfbxfDp01aK2AIzZpdjmPKo3Esg9k/edit?usp=sharing'

const Resume = () => {
  return (
    
       <embed src={samplePDF}></embed>

  )

}

export default Resume
