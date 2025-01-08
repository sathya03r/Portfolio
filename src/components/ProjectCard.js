import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="card h-100">
      <img src={project.image} className="card-img-top" alt={project.title} width='500px' height='300px' />
      <div className="card-body">
        <h5 className="card-title">{project.title}</h5>
        <p className="card-text">{project.description}</p>
      </div>
      <div className="card-footer">
        <a href={project.link} className="btn btn-primary" target="_blank" rel="noopener noreferrer">View Project</a>
      </div>
    </div>
  );
};

export default ProjectCard;
