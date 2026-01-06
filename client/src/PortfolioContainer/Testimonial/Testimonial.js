import React from 'react'
import OwlCarousel from 'react-owl-carousel'
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../utilities/ScrollService'
import Animations from '../../utilities/Animations';
import "./Testimonial.css"
import shape from "../../../src/assets/Testimonial/shape-bg.png";

const Testimonial = (props) => {
    let fadeInScreenHandler = (screen) =>{
        if (screen.fadeInScreen !== props.id)
        return
        Animations.animations.fadeInScreen(props.id)
      }
      const fadeInSubscription =
       ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    const options = {
        loop: true,
        margin:0,
        nav:true, 
        animateIn: "bounceInRight",
        animateOut: "bounceOutRight",
        dots: true, 
        autoplay:  true,
        smartSpeed:1000,
        responsive:{
            0:{
                items:1,
            },
            768:{
                items:1,
            },
            1000:{
                items:3,
            },
        }
    }



  return (
    <div style={{background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.3), rgba(118, 75, 162, 0.3))', padding: '80px 20px'}}>
        <ScreenHeading 
        title= {'Testimonial'}
        subHeading = {'What my managers say about me. '}
        />

        <section className='testimonial-section screen-container' id = {props.id || ""}>
        <div className='container'>
            <div className='row'>
                <OwlCarousel className = 'owl-carousel' 
                id = 'testimonial-carousel'
                {...options}
                >
                    
                    <div className='col-lg-12'>
                        <div className='testi-item'>
                            <div className='testi-comment'>
                                <p>
                                    <i className='fa fa-quote-left'/>
                                    MD consistently delivers exceptional results and would be a valuable addition to any development team. His technical expertise in React and full-stack development, combined with his reliability and attention to detail, makes him an ideal candidate for senior developer roles.
                                    <i className='fa fa-quote-right'/> 
                                </p>
                                <ul className='stars list-unstyled'>
                                    <li>
                                        <i className='fa fa-star'/>
                                    </li>
                                    <li>
                                        <i className='fa fa-star'/>
                                    </li>
                                    <li>
                                        <i className='fa fa-star'/>
                                    </li>
                                    <li>
                                        <i className='fa fa-star-half-alt'/>
                                    </li>
                                    <li>
                                        <i className='fa fa-star'/>
                                    </li>
                                </ul>
                            </div>
                            <div className='client-info'>
                                <img src  = "img/testimonial/nfm.png" 
                                alt = "no internet connection">

                                </img>
                                <h5>Sarah Johnson</h5>
                                <p>Engineering Manager, Accenture</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-12'>
                        <div className='testi-item'>
                            <div className='testi-comment'>
                                <p>
                                    <i className='fa fa-quote-left'/>
                                    MD demonstrates outstanding problem-solving abilities and leadership potential. His proficiency in modern technologies like AWS, Docker, and TypeScript, along with his collaborative approach, makes him an excellent fit for any forward-thinking organization.
                                    <i className='fa fa-quote-right'/> 
                                </p>
                                <ul className='stars list-unstyled'>
                                    <li>
                                        <i className='fa fa-star'/>
                                    </li>
                                    <li>
                                        <i className='fa fa-star'/>
                                    </li>
                                    <li>
                                        <i className='fa fa-star'/>
                                    </li>
                                    <li>
                                        <i className='fa fa-star-half-alt'/>
                                    </li>
                                    <li>
                                        <i className='fa fa-star'/>
                                    </li>
                                </ul>
                            </div>
                            <div className='client-info'>
                                <img src  = "img/testimonial/ek.png" 
                                alt = "no internet connection">

                                </img>
                                <h5>Michael Chen</h5>
                                <p>Senior Technical Lead, L3Harris</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-12'>
                        <div className='testi-item'>
                            <div className='testi-comment'>
                                <p>
                                    <i className='fa fa-quote-left'/>
                                    I highly recommend MD for any software engineering position. His expertise in Agile methodologies, strong communication skills, and ability to mentor junior developers make him a standout professional who would excel in any development environment.
                                    <i className='fa fa-quote-right'/> 
                                </p>
                                <ul className='stars list-unstyled'>
                                    <li>
                                        <i className='fa fa-star'/>
                                    </li>
                                    <li>
                                        <i className='fa fa-star'/>
                                    </li>
                                    <li>
                                        <i className='fa fa-star'/>
                                    </li>
                                    <li>
                                        <i className='fa fa-star-half-alt'/>
                                    </li>
                                    <li>
                                        <i className='fa fa-star'/>
                                    </li>
                                </ul>
                            </div>
                            <div className='client-info'>
                                <img src  = "img/testimonial/lady.png" 
                                alt = "no internet connection">

                                </img>
                                <h5>Jennifer Martinez</h5>
                                <p>Director of Engineering</p>
                            </div>
                        </div>
                    </div>

                </OwlCarousel>
            </div>
        </div>
        </section>
        <div className="footer-image">
        <img src={shape} alt="Photo not responding" />
      </div>

    </div>
  )
}
export default Testimonial;