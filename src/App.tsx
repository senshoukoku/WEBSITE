import { Facebook, Instagram, Linkedin, Figma, Code, Pen } from '@boxicons/react';
import profileimg from './img/profile.jpg';
import './index.css';
import { ProjectImages } from './images';
import { useState, useEffect } from 'react';
import EmailForm from './Components/EmailForm';
import logoImg from './img/KSB 2026-ico.png';

type Project = {
  id: string;
  image: string;
  title: string;
  desc: string;
  link?: string;
};

const roles = ["Web Developer", "Graphic Designer", "Media Editor"];
const previewProjectCount = 3;
const projectsPerPage = 6;

const projects: Project[] = [
  { id: "project-1", image: ProjectImages.Project1, title: "Animal Kingdom UI/UX Webpage", desc: "This project was made during the MSICONNECT CRASH COURSE FOR FIGMA UI/UX DESIGN." },
  { id: "project-2", image: ProjectImages.Project2, title: "Discord Server News and Updates", desc: "This project was an idea for people who want to check the updates related to the server, though it was not published." },
  { id: "project-3", image: ProjectImages.Project3, title: "Discord Server News and Updates", desc: "This was the log-in/register section of the page designed in Figma." },
  { id: "project-4", image: ProjectImages.Project4, title: "Portfolio Website", desc: "This website was built to showcase my skills & projects, provide more information about me, and how you can reach out to me." },
  {
    id: "project-5",
    image: ProjectImages.Project5,
    title: "The Student Information System",
    desc: "This system was developed by TEAM ABSALOM. As the team leader, I supervised the project and created the initial functionalities, followed by the work of our Database Specialist, Bryxz Jaspher L. Legaspi.",
    link: "http://sisdatabase2026.somee.com/"
  },
  { id: "project-6", image: ProjectImages.Project6, title: "The Cover Page for a School Organization Post", desc: "This cover page was made through Figma for a school organization post, The Core Techs." },
  { id: "project-7", image: ProjectImages.Project7, title: "Tarpaulin Design for Achievements", desc: "This design was made with Figma for a school organization celebratory display, The Core Techs." },
  {
    id: "project-8",
    image: ProjectImages.Project8,
    title: "PrimeLayout Graphics",
    desc: "This Logo was made for my startup local business.",
    link: "https://web.facebook.com/PrimeLayoutPH"
  },
  { id: "project-9", image: ProjectImages.Project9, title: "Logo Design: Pemela Learning Center", desc: "This logo was made by a request from the client. Made through Figma." },
  { id: "project-10", image: ProjectImages.Project10, title: "Logo Design: Nexit Construction", desc: "This logo was made by a request from the client. Made through Figma." },
  { id: "project-11", image: ProjectImages.Project11, title: "Logo Design: Firm Foundation Academy", desc: "This logo was made by a request from the client. Made through Figma." },
  { id: "project-12", image: ProjectImages.Project12, title: "Logo Design: Bakers Kitchen", desc: "This logo was made by a request from the client. Made through Figma." },
  { id: "project-13", image: ProjectImages.Project13, title: "Logo Design: Zina Logistics", desc: "This logo was made by a request from the client. Made through Figma." },
  { id: "project-14", image: ProjectImages.Project14, title: "Logo Design: Young Stars Football Club", desc: "This logo was made by a request from the client. Made through Figma." },
  { id: "project-15", image: ProjectImages.Project8, title: "NOTINO", desc: "...Coming Soon..." },  
];
  
function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showProjectsModal, setShowProjectsModal] = useState(false);
  const [isProjectsModalClosing, setIsProjectsModalClosing] = useState(false);
  const [projectsPage, setProjectsPage] = useState(1);

  // Typing animation
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const ticker = setTimeout(() => {
      const i = loopNum % roles.length;
      const fullText = roles[i];
      const updatedText = isDeleting
        ? fullText.substring(0, displayText.length - 1)
        : fullText.substring(0, displayText.length + 1);

      setDisplayText(updatedText);

      if (isDeleting) setTypingSpeed(prev => prev / 2);

      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setTypingSpeed(2000);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(prev => prev + 1);
        setTypingSpeed(150);
      }
    }, typingSpeed);

    return () => clearTimeout(ticker);
  }, [displayText, isDeleting, loopNum, typingSpeed]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const totalProjectsPages = Math.ceil(projects.length / projectsPerPage);
  const paginatedProjects = projects.slice(
    (projectsPage - 1) * projectsPerPage,
    projectsPage * projectsPerPage
  );

  const openProjectsModal = () => {
    setProjectsPage(1);
    setIsProjectsModalClosing(false);
    setShowProjectsModal(true);
  };

  const closeProjectsModal = () => setIsProjectsModalClosing(true);

  const renderProjectCard = (project: Project) => (
    <div className="project-card" key={project.id}>
      <img src={project.image} alt={project.title} />
      <h3>{project.title}</h3>
      <p>{project.desc}</p>
      {project.link ? (
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn">
          View Project
        </a>
      ) : null}
    </div>
  );


  return (
    <div>
      <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />

      <header className="header">
        <a href="#home" className="logo">
    <img src={logoImg} alt="KSB 2026 Logo" style={{ height: '50px', width: 'auto', objectFit: 'contain' }} />
  </a>

        <i className={`bx ${isMenuOpen ? 'bx-x' : 'bx-menu'}`} id="menu-icon" onClick={toggleMenu}></i>

        <nav className={`navbar ${isMenuOpen ? 'active' : ''}`}>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#expertise" onClick={closeMenu}>Expertise</a>
          <a href="#education" onClick={closeMenu}>Education</a>
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>

        <a href="#contact" className='gradient-btn'>CONTACT ME</a>
      </header>

      {/* --- HOME SECTION --- */}
      <section className="home" id="home">
        <div className="home-content">
          <h1>Hi, It's <span>Kurt</span></h1>
          {/* UPDATED HEADER WITH TYPING ANIMATION */}
          <h3>I'm a <span>{displayText}</span><span className="cursor">|</span></h3>
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
          <h2 className='heading'>About <span>Me</span></h2>
          <p>I have a passion for creating innovative and user-friendly digital experiences. I strive to bridge the gap between aesthetics and functionality.</p>
          <a href="#" className='btn'>Read More</a>
        </div>
      </section>

      {/* --- TECHNICAL EXPERTISE SECTION --- */}
      <section className="expertise" id="expertise">
        <h2 className="heading">Technical <span>Expertise</span></h2>
        <div className="expertise-container">
          {[
            {
              category: "Web & Software Development",
              skills: ["ReactJS", "TypeScript", "JavaScript", "HTML5", "CSS3", "Java", "C++", "Vite", "TailwindCSS", "Visual Basic", "NodeJS", "Vite", "Git", "Typescript"]
            },
            {
              category: "Design & Creative",
              skills: ["UI/UX Design", "Figma", "Graphic Design", "Logo Design", "Graphical Media Editing", "2D Animation", "Digital Storytelling"]
            },
            {
              category: "Technical Tools",
              skills: ["Git & GitHub", "Vercel", "EmailJS", "Boxicons", "Responsive Design", "Visual Studio Code", "Figma", "Robotics - Arduino"]
            }
          ].map((item, index) => (
            <div className="expertise-box" key={index}>
              <h3>{item.category}</h3>
              <div className="skills-list">
                {item.skills.map((skill, i) => (
                  <span key={i} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- EDUCATION SECTION --- */}
      <section className="education" id="education">
        <h2 className="heading">My <span>Journey</span></h2>
        <div className="education-row">
          <div className="education-column">
            <h3 className="title">Education</h3>
            <div className="education-box">
              <div className="education-content">
                <div className="content">
                  <div className="year"><i className='bx bxs-buildings'></i>2026 - Present</div>
                  <h3>Bachelor of Science in Information Technology</h3>
                  <p>Currently pursuing my degree, focusing on web technologies, database management, and system architecture.</p>
                </div>
              </div>
              <div className="education-content">
                <div className="content">
                  <div className="year"><i className='bx bxs-buildings'></i> 2024-2026</div>
                  <h3>Senior High School</h3>
                  <p>Graduated at <span>Calumpit National High School</span> with a focus on Information and Communications Technology (ICT).</p>
                </div>
              </div>
              <div className="education-content">
                <div className="content">
                  <div className="year"><i className='bx bxs-group'></i> 2025-2026</div>
                  <h3>Executive Secretary - The Core Techs</h3>
                  <p>Social Media Manager at the School Organization. Led the organization and managed its social media presence.</p>
                </div>
              </div>
              <div className="education-content">
                <div className="content">
                  <div className="year"><i className='bx bxs-medal'></i> 2024</div>
                  <h3>UI/UX Design Certification</h3>
                  <p>Completed the <span>MSICONNECT</span> Crash Course for Figma UI/UX Design.</p>
                </div>
              </div>
              <div className="education-content">
                <div className="content">
                  <div className="year"><i className='bx bxs-buildings'></i> 2019-2023</div>
                  <h3>Junior High School</h3>
                  <p>Graduated at <span>La Verdad Christian College - Apalit</span> with interest on ICT.</p>
                </div>
              </div>
              <div className="education-content">
                <div className="content">
                  <div className="year"><i className='bx bxs-buildings'></i> 2016-2019</div>
                  <h3>Elementary School</h3>
                  <p>Graduated at <span>San Marcos Elementary School</span> with interest on Program and Computer Technologies.</p>
                </div>
              </div>
            </div>
          </div>
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
          {projects.slice(0, previewProjectCount).map(renderProjectCard)}
        </div>

        {projects.length > previewProjectCount && (
          <div className="projects-actions">
            <button className="btn" onClick={openProjectsModal}>See More</button>
          </div>
        )}

        <div className="projects-portfolio-action">
          <a
            className="btn"
            href="https://www.figma.com/deck/0KkT9ugI956ANgWTsZmyVv/PORTFOLIO-2025?node-id=1-27&viewport=-4364%2C-705%2C1.43&t=B77O47oYObT2ZgDl-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Portfolio
          </a>
        </div>
      </section>

      <EmailForm onSuccess={() => setShowModal(true)} />

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-icon"><i className="bx bx-check-circle"></i></div>
            <h3>Success!</h3>
            <p>Your message has been sent successfully. I'll get back to you soon!</p>
            <button className="btn" onClick={() => setShowModal(false)}>OK</button>
          </div>
        </div>
      )}

      {showProjectsModal && (
        <div className="modal-overlay" onClick={closeProjectsModal}>
          <div
            className={`projects-modal-content ${isProjectsModalClosing ? 'closing' : ''}`}
            onClick={(e) => e.stopPropagation()}
            onAnimationEnd={() => {
              if (isProjectsModalClosing) {
                setShowProjectsModal(false);
                setIsProjectsModalClosing(false);
              }
            }}
          >
            <h3>All Projects</h3>

            <div className="projects-box projects-modal-box">
              {paginatedProjects.map(renderProjectCard)}
            </div>

            <div className="projects-pagination">
              <button
                className="btn"
                onClick={() => setProjectsPage(prev => Math.max(prev - 1, 1))}
                disabled={projectsPage === 1}
              >
                Previous
              </button>

              <span>Page {projectsPage} of {totalProjectsPages}</span>

              <button
                className="btn"
                onClick={() => setProjectsPage(prev => Math.min(prev + 1, totalProjectsPages))}
                disabled={projectsPage === totalProjectsPages}
              >
                Next
              </button>
            </div>

            <button className="btn" onClick={closeProjectsModal}>Close</button>
          </div>
        </div>
      )}

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
        <p className="copyright">© 2026 Kurt Setriani Bognot. All rights reserved.</p>
        <p className="copyright">Developed, Written, and Designed with <span>ReactJS & Vite.</span></p>
      </footer>
    </div>
  );
}

export default App;