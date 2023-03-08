import React from 'react'
import samplePDF from '../Resume/resume.pdf'
import '../../styles/Resume.css'
import PDFViewer from "./pdfViewer"

const Resume = () => {
  return (
    <div className='resume'>
      <h2>Resume</h2>
      <hr />
      <div className="all-page-container">
        <PDFViewer pdf={samplePDF} />
      </div>

      

    </div>

  )

}

export default Resume
