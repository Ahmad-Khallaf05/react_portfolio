import React from 'react';

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg fixed-top" style={{ height: '80px' }}>
        <div className="container">
          <a className="navbar-brand" href="#">A H M A D</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main" aria-controls="main" aria-expanded="false" aria-label="Toggle navigation">
            <i className="fa-sharp fa-solid fa-bars" style={{ color: '#F5EFE7' }}></i>
          </button>

          <div className="collapse navbar-collapse" id="main" style={{ justifyContent: 'end' }}>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item mx-auto active"><a className="nav-link p-3 p-lg-4" href="#home" style={{ fontSize: '1.4em' }}>Home</a></li>
              <li className="nav-item mx-auto"><a className="nav-link p-3 p-lg-4" href="#about" style={{ fontSize: '1.4em' }}>About Me</a></li>
              <li className="nav-item mx-auto"><a className="nav-link p-3 p-lg-4" href="#education" style={{ fontSize: '1.4em' }}>Education</a></li>
              <li className="nav-item mx-auto"><a className="nav-link p-3 p-lg-4" href="#skills" style={{ fontSize: '1.4em' }}>Skills</a></li>
              <li className="nav-item mx-auto"><a className="nav-link p-3 p-lg-4" href="#projects" style={{ fontSize: '1.4em' }}>Projects</a></li>
              <li className="nav-item mx-auto"><a className="nav-link p-3 p-lg-4" href="#contact" style={{ fontSize: '1.4em' }}>Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
