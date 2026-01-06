import React from 'react'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import './AboutMe.css'
import ScrollService from '../../utilities/ScrollService'
import Animations from '../../utilities/Animations'
export default function AboutMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
   const SCREEN_CONSTSANTS = {
      description:"Almost 4 years of experience in web development as an Application Developer with expertise in the Software Development Life Cycle. Proficient in developing Single Page Applications (SPA) using React.JS and designing applications utilizing HTML5, CSS3, JavaScript, as well as backend technologies such as C# and ASP.NET Core. Experienced in Agile methodologies and committed to delivering high-quality, scalable applications.",
      highlights:{
        bullets:[
                  "Full Stack Web & Mobile Development (React.JS, ASP.NET Core)",
                  "Agile/Scrum Master with team leadership experience",
                  "Single Page Applications (SPA) development",
                  "Database Management (SQL Server, MongoDB, MySQL)",
                  "Version Control & DevOps (Git, GitHub, Jira)",
                  "Cross-browser compliant UI/UX development",
                  "Software Development Life Cycle (SDLC)",
                  "Performance Optimization & Bug Tracking",
        ],
        heading: "Core Competencies & Technical Expertise"
      }
   }

  const renderHighlight = () => {
    return SCREEN_CONSTSANTS.highlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob">
          <i className="fa fa-check"></i>
        </div>
        <span>{value}</span>
      </div>
    ));
  };

  const stats = [
    { number: "4+", label: "Years Experience" },
    { number: "20+", label: "Projects Completed" },
    { number: "100%", label: "Client Satisfaction" }
  ];


  return (
    <div
    className="about-me-container screen-container fade-in"
    id={props.id || ""}
  >
      <div className='about-me-parent'>
        <ScreenHeading title = {'About Me'} subHeading ={'Why Choose Me?'}/>
        
        <div className='profile-section'>
          <div className='profile-image-container'>
            <div className='profile-image'></div>
            <div className='stats-overlay'>
              {stats.map((stat, index) => (
                <div key={index} className='stat-card'>
                  <span className='stat-number'>{stat.number}</span>
                  <span className='stat-label'>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className='content-section'>
          <div className='intro-card'>
            <h2 className='intro-title'>Hello, I'm Hossain</h2>
            <p className='intro-description'>{SCREEN_CONSTSANTS.description}</p>
          </div>

          <div className='skills-section'>
            <h3 className='skills-title'>{SCREEN_CONSTSANTS.highlights.heading}</h3>
            <div className='skills-grid'>
              {renderHighlight()}
            </div>
          </div>

          <div className='action-buttons'>
            <button className='btn-primary modern-btn'
              onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            >
              <i className="fa fa-handshake-o"></i>
              Hire Me
            </button>
            <a href = '/Updated_Resume_2026.pdf' download= 'MD_Hossain_Resume.pdf'>
              <button className = "btn-secondary modern-btn">
                <i className="fa fa-download"></i>
                Download Resume
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
