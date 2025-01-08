import React from 'react';
// import profileImage from '../images/profile.jpg'; // Replace with the actual path to your profile image

const About = () => {
  return (
    <section className="container py-5">
      <div className="row align-items-center">
        <div className="col-md-4 text-center">
          <img
            src={""}
            alt="Sathya R"
            className="img-fluid rounded-circle"
            style={{ maxWidth: '200px' }}
          />
        </div>
        <div className="col-md-8">
          <h2>About Me</h2>
          <p>
            Hello! I'm <strong>Sathya R</strong>, a dedicated and passionate full-stack web developer. 
            I have expertise in creating dynamic, responsive, and user-friendly web applications using 
            technologies like <strong>ReactJS</strong>, <strong>Django</strong>, and <strong>JavaScript</strong>.
          </p>
          <p>
            With a strong foundation in both frontend and backend development, I strive to deliver
            high-quality solutions that meet client requirements and exceed expectations. I'm always
            eager to learn new technologies and improve my skills to stay ahead in the ever-evolving
            tech industry.
          </p>
          <p>
            Beyond coding, I enjoy exploring new tools and collaborating on exciting projects.
            Feel free to check out my portfolio or reach out for opportunities!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
