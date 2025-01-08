import React from 'react';
import { FaReact, FaJsSquare, FaHtml5, FaCss3Alt, FaBootstrap, FaPython, FaDatabase } from 'react-icons/fa';

const Skills = () => {
  return (
    <section className="skills-section container py-5" id="skills">
      <h2 className="text-center mb-4">My Skills</h2>
      <div className="row">
        
        {/* Frontend Skills */}
        <div className="col-md-4 col-sm-6 skill-column">
          <h4 className="text-center mb-3">Frontend</h4>
          <ul className="list-unstyled">
            <li className="d-flex align-items-center mb-3">
              <FaReact size={30} className="mr-3 skill-icon" />
              <span>ReactJS</span>
            </li>
            <li className="d-flex align-items-center mb-3">
              <FaJsSquare size={30} className="mr-3 skill-icon" />
              <span>JavaScript</span>
            </li>
            <li className="d-flex align-items-center mb-3">
              <FaHtml5 size={30} className="mr-3 skill-icon" />
              <span>HTML5</span>
            </li>
            <li className="d-flex align-items-center mb-3">
              <FaCss3Alt size={30} className="mr-3 skill-icon" />
              <span>CSS3</span>
            </li>
            <li className="d-flex align-items-center mb-3">
              <FaBootstrap size={30} className="mr-3 skill-icon" />
              <span>Bootstrap</span>
            </li>
          </ul>
        </div>

        {/* Backend Skills */}
        <div className="col-md-4 col-sm-6 skill-column">
          <h4 className="text-center mb-3">Backend</h4>
          <ul className="list-unstyled">
            <li className="d-flex align-items-center mb-3">
              <FaPython size={30} className="mr-3 skill-icon" />
              <span>Python</span>
            </li>
            <li className="d-flex align-items-center mb-3">
              <FaDatabase size={30} className="mr-3 skill-icon" />
              <span>Django</span>
            </li>
          </ul>
        </div>

        {/* Database Skills */}
        <div className="col-md-4 col-sm-6 skill-column">
          <h4 className="text-center mb-3">Databases</h4>
          <ul className="list-unstyled">
            <li className="d-flex align-items-center mb-3">
              <FaDatabase size={30} className="mr-3 skill-icon" />
              <span>MySQL</span>
            </li>
            <li className="d-flex align-items-center mb-3">
              <FaDatabase size={30} className="mr-3 skill-icon" />
              <span>SQLite</span>
            </li>
          </ul>
        </div>
        
      </div>
    </section>
  );
};

export default Skills;
