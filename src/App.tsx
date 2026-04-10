import { Facebook, Instagram, Linkedin, Figma, Code, Pen } from '@boxicons/react';
import profileimg from './img/profile.jpg';
import './index.css';
import { ProjectImages } from './images';
import { useState } from 'react';
import EmailForm from './Components/EmailForm';

function App() {
  // 1. STATE FOR MOBILE MENU
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // 2. HELPER TO CLOSE MENU WHEN A LINK IS CLICKED
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div>
      {/* Boxicons CSS - Better to put this in index.html, but fine here for now */}
      <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />

      <header className="header">
        <a href="#home" className="logo">
          Kurt <span>Setriani Bognot</span>
        </a>

        {/* 3. DYNAMIC ICON CLASS based on state */}
        <i 
          className={`bx ${isMenuOpen ? 'bx-x' : 'bx-menu'}`} 
          id="menu-icon" 
          onClick={toggleMenu}
        ></i>

        {/* 4. DYNAMIC NAVBAR CLASS based on state */}
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
            technical expertise to every project I undertake. Whether it's crafting responsive layouts, optimizing user experience, 
            or designing eye-catching graphics, I am dedicated to delivering high-quality results that exceed client expectations.
          </p>

          <div className="social-icons">
            <a href="https://www.facebook.com/kurtsetriani.bognot" target='blank'><Facebook /></a>
            <a href="https://www.instagram.com/_luna.senclipse/" target='blank'><Instagram /></a>
            <a href="https://www.linkedin.com/in/kurt-setriani-bognot-11b05331a/" target='blank'><Linkedin /></a>
          </div>

          <div className="btn-group">
            <a href="#" className="btn">Hire</a>
            <a href="#contact" className="btn">Contact</a>
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
          <p>I have a passion for creating innovative and user-friendly digital experiences. 
            With a strong foundation in both design and development, 
            I strive to bridge the gap between aesthetics and functionality to deliver solutions that not only look great 
            but also perform exceptionally well.</p>
          <a href="#" className='btn'>Read More</a>
        </div>
      </section>

{/* --- SERVICES SECTION --- */}
<section className="services" id="services">
  <h2 className="heading">Services</h2>
  <div className="services-container">
    {[
      { 
        Icon: Figma, 
        title: "UI/UX Designing", 
        description: "Crafting intuitive and visually stunning user interfaces with a focus on user experience and modern design principles." 
      },
      { 
        Icon: Code, 
        title: "Web Development", 
        description: "Building responsive, high-performance websites using the latest technologies like React, TypeScript, and basic HTML, JS, & CSS." 
      },
      { 
        Icon: Code, 
        title: "System Development", 
        description: "Developing robust application / form systems ensure your needs are scalable, secure, and efficient." 
      },
      { 
        Icon: Pen, 
        title: "Graphic Designing", 
        description: "Creating unique brand identities, logos, and digital assets that capture your brand's essence and stand out." 
      }
    ].map((service, index) => (
      <div className="service-box" key={index}>
        <div className="service-info">
          <div className="ico">
            <service.Icon />
          </div>
          <h4>{service.title}</h4>
          {/* Use the dynamic description from the object instead of hardcoded text */}
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
      { image: ProjectImages.Project1, title: "Animal Kingdom UI/UX Webpage", desc: "This project was made during the MSICONNECT CRASH COURSE FOR FIGMA UI/UX DESIGN." },
      { image: ProjectImages.Project2, title: "Discord Server News and Updates", desc: "This project was an idea for people who want to check the updates related to the server, though it was not published." },
      { image: ProjectImages.Project3, title: "Discord Server News and Updates", desc: "This was the log-in/register section of the page designed in Figma." },
      { image: ProjectImages.Project4, title: "Portfolio Website", desc: "*This* website was built to showcase my skills & projects, more information about me, and how you can reach out to me." },
      { image: ProjectImages.Project5, title: "Project Five", desc: "Detailed description for project 5." },
      { image: ProjectImages.Project6, title: "Project Six", desc: "Detailed description for project 6." },
      { image: ProjectImages.Project7, title: "Project Seven", desc: "Detailed description for project 7." },
      { image: ProjectImages.Project8, title: "Project Eight", desc: "Detailed description for project 8." },
      { image: ProjectImages.Project9, title: "Project Nine", desc: "Detailed description for project 9." },
      { image: ProjectImages.Project10, title: "Project Ten", desc: "Detailed description for project 10." },
      { image: ProjectImages.Project11, title: "Project Eleven", desc: "Detailed description for project 11." },
      { image: ProjectImages.Project12, title: "Project Twelve", desc: "Detailed description for project 12." },
      { image: ProjectImages.Project13, title: "Project Thirteen", desc: "Detailed description for project 13." },
      { image: ProjectImages.Project14, title: "Project Fourteen", desc: "Detailed description for project 14." },
    ].map((project, index) => (
      <div className="project-card" key={index}>
        <img src={project.image} alt={project.title} />
        <h3>{project.title}</h3>
        <p>{project.desc}</p>
        {/*<div className="btn">View Project</div>*/}
      </div>
    ))}
  </div>
</section>

      {/* --- CONTACT SECTION --- */}
      {/* Refactored Contact Section into a separate component for better organization */}
      <EmailForm />

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