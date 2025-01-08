import React from 'react';
import portImage from '../images/port.jpg';


const Home = () => {
  return (
<div
  className="jumbotron jumbotron-fluid text-center text-grey"
  style={{
    backgroundImage: `url(${portImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '100px 20px',
    height:'490px'
  }}
>
      <div className="container">
        <h1 className="display-4">Welcome to My Portfolio!</h1>
        <p className="lead">Hello, I'm [Sathya R], a passionate web developer.<br></br>
        As a full-stack web developer I'm expertise in both front-end and back-end technologies.</p>
      </div>
    </div>
  );
};

export default Home;
