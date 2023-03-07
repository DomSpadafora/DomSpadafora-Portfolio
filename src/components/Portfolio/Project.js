import React from 'react';
import './portfolio.css'

// Individual Cards of Projects
function ProjectCard(props) {
  return (
    <div className="card" >
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <p className="project-title">{props.name}</p>
        <p className="icons-container">
          <a href={props.github}><img className="project-icon" src="https://img.icons8.com/fluent/48/000000/github.png" alt="GitHub Repo" /></a>
          <a href={props.deploy}><img className="project-icon" src="https://img.icons8.com/fluent/48/000000/domain.png" alt="Live Application" /></a>
        </p>
      </div>
    </div>
  );
}

export default ProjectCard;