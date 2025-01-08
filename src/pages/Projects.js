import React from 'react';
import ProjectCard from '../components/ProjectCard';
import mysql from '../images/casestudy.jpg'
import expense from '../images/image.png'
import bus from '../images/hq.jpg'
import student from '../images/student form.JPG'
import coffee from '../images/coffee.jpeg'
import portfo from '../images/portfolio.jpeg'




const Projects = () => {
  const projects = [
    { title: 'Project 1', description: 'Anime-database Management(MySQL)', link: 'https://github.com/sathya03r/My-SQL-case-study', image: mysql },
    { title: 'Project 2', description: ' Expense Tracker(HTML,CSS,Javascript)', link: 'https://github.com/sathya03r/Expense-Tracker', image: expense },
    // Add more projects here
    {
      title: 'Project 3',
      description: 'Student-Details (HTML,CSS,Javascript)',
      link: 'https://github.com/sathya03r/student_details',
      image: student,
    },
    {
      title: 'Project 4',
      description: 'Coffee-Junction(Python with Django)',
      link: 'https://github.com/sathya03r/Coffee-Junction',
      image: portfo,
    },   
    {
      title: 'Project 5',
      description: 'Bus reservation system (Python)',
      link: 'https://github.com/sathya03r/Bus-ticket-booking',
      image: bus,
    },
    {
      title: 'Project 6',
      description: 'Portfolio (ReactJS)',
      link: 'https://github.com/sathya03r/Bus-ticket-booking',
      image:coffee,
    },

 
  ];

  return (
    <section className="container py-5">
      <h2 className="text-center mb-4">My Projects</h2>
      <div className="row">
        {projects.map((project, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
