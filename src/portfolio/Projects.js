import React from 'react';

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2 className="title">Projects</h2>
      <div className="content">
        <a href="https://github.com/Ahmad-Khallaf05/recipe-page.git">
          <div className="project-card">
            <div className="project-image">
              <img src="/images/project1.png" alt="Recipe Page" />
            </div>
            <div className="project-info">
              <p className="project-category">Frontendmentor Challenge</p>
              <strong className="project-title"><span style={{ color: '#2D4356' }}>Recipe page</span></strong>
            </div>
          </div>
        </a>

        <a href="https://www.figma.com/design/qhXC7ILh1TyUoLoYTiTAg1/Untitled?node-id=1-176&t=48Cnq7YRfV1NkR6p-0">
          <div className="project-card">
            <div className="project-image">
              <img src="/images/project2.png" alt="Netflix Design" />
            </div>
            <div className="project-info">
              <p className="project-category">Figma Design</p>
              <strong className="project-title"><span style={{ color: '#2D4356' }}>Netflix</span></strong>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}

export default Projects;
