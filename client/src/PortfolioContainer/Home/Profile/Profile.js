import React from 'react'
import "./Profile.css"
import Typical from 'react-typical'
import ScrollService from "../../../utilities/ScrollService";
export default function Profile() {
  return (
    <div className='profile-container'>
        <div className='profile-parent'>
            <div className='profile-details'>
                <div className='colz'>
                    <div className='colz-icon'>
                        <a href = 'https://www.facebook.com/arafat.ayan.37468'>
                            <i className='fa fa-facebook-square'></i>
                            </a>
                        <a href = 'https://www.instagram.com/_ayan75/'>
                            <i className='fa fa-instagram'></i>
                            </a>
                        <a href = 'https://www.linkedin.com/in/md-hossain-5104a1189/'>
                            <i className='fa fa-linkedin-square'></i>
                            </a>
                        <a href = 'https://github.com/hossn75'>
                            <i className='fa fa-github-square'></i>
                            </a>
                    </div>
                    </div>
                    <div className='profile-details-name'>
                        <span className='primary-text'>
                            {" "}
                            Hello, I'M <span className="highlighted-text">MD Hossain</span>
                            </span>
                 </div>
                 <div className='profile-details-role'>
                     <span className='primary-text'>
                         {" "}
                         <h1>
                            <Typical className="typical"
                            loop = {Infinity}
                            steps = {[
                                "Front-end Web Dev 😎",
                                1000, 
                                "MERN stack Web Dev 📱",
                                1000,
                                "Full-stack Web Dev💻",
                                1000,
                                "React/React Native Dev 🌐",
                                1000,

                            ]}
                            />
                         </h1>
                         <span className='profile-role-tagline'>
                             Knack of building applications with front and back end operations.
                             </span>
                         </span>
                     </div>
                     <div className='profile-options'>
                         <button className='btn-primary-btn' 
                         onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
                         >
                             {""}
                             
                             Hire Me
                             </button>
                             <a href = 'Hossain_MD_Resume.pdf' download= 'Hossain_MD_Resume.pdf'>
                                 <button className = "btn highlighted-btn">
                                     Download Resume
                                 </button>
                             </a>
                         </div>
                </div> 
                <div className='profile-picture'>
                    <div className='profile-picture-background'>

                    </div>
                </div>
                
            </div>
    </div>
  )
}

