import React from 'react';

const Education = () => {
  return (
    <section className="cards" id="education">
      <h2 className="title">Education</h2>
      <div className="third-div">
        <img id="cs-gif" src="https://codebysarah001.github.io/Project1/images/picture.png" alt="study" />
        <div className="all-div">
          <p className="paragraph-header">Computer Science / Artificial Intelligence</p>
          <p className="paragraph-sub">Aqaba University of Technology – Aqaba, Jordan</p>
          <p className="paragraph-subsub">October 2023 – under graduate</p>
          <ul id="ul-info">
            <li>I took the Conversation course "Access" offered by the US Embassy</li><br />
            <li>Attended some lectures in Gaming Lab</li><br />
            <li>Currently, I am a student at the Orange Coding Academy</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Education;
