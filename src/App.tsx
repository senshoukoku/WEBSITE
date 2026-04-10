import { Facebook, Instagram, Linkedin, Figma, Code, Pen } from '@boxicons/react';
import profileimg from './img/profile.jpg';
import './index.css';
import { ProjectImages } from './images';
import { useState } from 'react';
import EmailForm from './Components/EmailForm';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // NEW: State for the Success Modal
  const [showModal, setShowModal] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div>
      <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />

      <header className="header">
        <a href="#home" className="logo">
          Kurt <span>Setriani Bognot</span>
        </a>

        <i 
          className={`bx ${isMenuOpen ? 'bx-x' : 'bx-menu'}`} 
          id="menu-icon" 
          onClick={toggleMenu}
        ></i>

        <nav className={`navbar ${isMenuOpen ? 'active' : ''}`}>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>

        <button className="gradient-btn">CONTACT ME</button>
      </header>

      {/* --- HOME SECTION --- */}
      <section className="home" id="home">
        <div className="home-content">
          <h1>Hi, It's <span>Kurt</span></h1>
          <h3>I'm a <span>Web Developer, Graphic Designer, & Media Editor</span></h3>
          <p>
            I am a passionate web developer with a knack for creating visually stunning and user-friendly websites. 
            With a strong background in graphic design and media editing, I bring a unique blend of creativity and 
            technical expertise to every project I undertake.
          </p>

          <div className="social-icons">
            <a href="https://www.facebook.com/kurtsetriani.bognot" target='blank'><Facebook /></a>
            <a href="https://www.instagram.com/_luna.senclipse/" target='blank'><Instagram /></a>
            <a href="https://www.linkedin.com/in/kurt-setriani-bognot-11b05331a/" target='blank'><Linkedin /></a>
          </div>

          <div className="btn-group">
            <a href="#contact" className="btn">Let's Chat?</a>
          </div>
        </div>

        <div className="home-img">
          <img src={profileimg} alt="Profile" />
        </div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section className="about" id="about">
        <div className="about-img">
          <img src={profileimg} alt="Profile" />
        </div>
        <div className="about-content">
          <h2>About <span>Me</span></h2>
          <p>I have a passion for creating innovative and user-friendly digital experiences...</p>
          <a href="#" className='btn'>Read More</a>
        </div>
      </section>

      {/* --- SERVICES SECTION --- */}
      <section className="services" id="services">
        <h2 className="heading">Services</h2>
        <div className="services-container">
          {[
            { Icon: Figma, title: "UI/UX Designing", description: "Crafting intuitive and visually stunning user interfaces." },
            { Icon: Code, title: "Web Development", description: "Building responsive, high-performance websites." },
            { Icon: Code, title: "System Development", description: "Developing robust application systems." },
            { Icon: Pen, title: "Graphic Designing", description: "Creating unique brand identities and logos." }
          ].map((service, index) => (
            <div className="service-box" key={index}>
              <div className="service-info">
                <div className="ico"><service.Icon /></div>
                <h4>{service.title}</h4>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- PROJECTS SECTION --- */}
      <section className="projects" id="projects">
        <h2 className="heading">Projects</h2>
        <div className="projects-box">
          {[
            { image: ProjectImages.Project1, title: "Animal Kingdom UI/UX Webpage", desc: "Made during the MSICONNECT CRASH COURSE." },
            { image: ProjectImages.Project5, title: "The Student Information System", desc: "Developed by TEAM ABSALOM.", link: "http://sisdatabase2026.somee.com/" },
            { image: ProjectImages.Project8, title: "PrimeLayout Graphics", desc: "Logo made for my startup local business.", link: "https://web.facebook.com/PrimeLayoutPH" },
            // Add other projects as needed
          ].map((project, index) => (
            <div className="project-card" key={index}>
              <img src={project.image} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn">View Project</a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      {/* Updated: Pass the setShowModal function to the form */}
      <EmailForm onSuccess={() => setShowModal(true)} />

      {/* --- SUCCESS MODAL --- */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-icon"><i className='bx bx-check-circle'></i></div>
            <h3>Success!</h3>
            <p>Your message has been sent successfully. I'll get back to you soon!</p>
            <button className="btn" onClick={() => setShowModal(false)}>OK</button>
          </div>
        </div>
      )}

      {/* --- FOOTER --- */}
      <footer className="footer">
        <div className="social-icons">
          <a href="#"><Facebook /></a>
          <a href="#"><Instagram /></a>
          <a href="#"><Linkedin /></a>
        </div>
        <ul className="list">
          <li><a href="#">FAQ</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#about">About Me</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <p className='copyright'>© 2023 Kurt Setriani Bognot. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;