import React from 'react'
import './Footer.css'
export default function Footer(props) {
  return (
    <div className='footer-container' id={props.id || ''}>
        <div className='footer-content'>
            <div className='footer-section'>
                <h3 className='footer-title'>MD Hossain</h3>
                <p className='footer-text'>Full Stack Developer specializing in React, Node.js, and modern web technologies.</p>
            </div>
            
            <div className='footer-section'>
                <h4 className='footer-heading'>Quick Links</h4>
                <div className='footer-links'>
                    <a href='#Home'>Home</a>
                    <a href='#AboutMe'>About</a>
                    <a href='#Resume'>Resume</a>
                    <a href='#ContactMe'>Contact</a>
                </div>
            </div>
            
            <div className='footer-section'>
                <h4 className='footer-heading'>Connect</h4>
                <div className='footer-social'>
                    <a href='https://www.linkedin.com/in/md-hossain-5104a1189/' target='_blank' rel='noopener noreferrer'>
                        <i className='fa fa-linkedin'></i>
                    </a>
                    <a href='https://github.com/hossn75' target='_blank' rel='noopener noreferrer'>
                        <i className='fa fa-github'></i>
                    </a>
                    <a href='https://www.facebook.com/arafat.ayan.37468' target='_blank' rel='noopener noreferrer'>
                        <i className='fa fa-facebook'></i>
                    </a>
                    <a href='https://www.instagram.com/_ayan75/' target='_blank' rel='noopener noreferrer'>
                        <i className='fa fa-instagram'></i>
                    </a>
                </div>
            </div>
        </div>
        
        <div className='footer-bottom'>
            <p>&copy; 2024 MD Hossain. All rights reserved.</p>
        </div>
    </div>
  )
}
