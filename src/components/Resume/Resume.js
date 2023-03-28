import React from 'react'

import '../../styles/Resume.css'

const samplePDF = 'https://docs.google.com/document/d/1GknG1WKRqvlZKbxfbxfDp01aK2AIzZpdjmPKo3Esg9k/edit?usp=sharing'

const Resume = () => {
  return (
    
       <embed src={samplePDF}></embed>

  )

}

export default Resume
