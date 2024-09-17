import React from 'react';

const Home = () => {
  return (
    <section className="main" id="home">
      <div className="item1">
        <h2>Hello World, I'm Ahmad Majed Khallaf<br /><span>Full Stack Developer</span></h2>
        <h3 className="ap">I'm an artificial intelligence student in Aqaba University of Technology, and a trainee in Orange Coding Academy "website development".</h3>
        <a href="./ahmad khallaf.docx" className="main-btn">Download Resume</a>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/ahmad-khallaf-15b66a2b7/" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://github.com/Ahmad-Khallaf05" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="mailto:ahmadmajedkhallaf470@gmail.com" target="_blank" rel="noreferrer">
            <i className="fa-regular fa-envelope"></i>
          </a>
        </div>
      </div>

      <div className="item2">
        <img src="" alt="" className="ahmad" />
      </div>
    </section>
  );
}

export default Home;
