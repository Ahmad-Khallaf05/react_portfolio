import React from 'react';

const Skills = () => {
  return (
    <section className="cards" id="skills">
      <h2 className="title">Skills</h2>
      <div className="content">
        <div className="card">
          <div className="icon"><i className="fa-brands fa-html5"></i></div>
          <div className="info"><h3>HTML</h3></div>
        </div>
        <div className="card">
          <div className="icon"><i className="fa-brands fa-css3-alt"></i></div>
          <div className="info"><h3>CSS</h3></div>
        </div>
        <div className="card">
          <div className="icon"><i className="fa-brands fa-js"></i></div>
          <div className="info"><h3>JS</h3></div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
