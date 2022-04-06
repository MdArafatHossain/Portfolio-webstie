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
    <div>
        <ScreenHeading 
        title= {'Testimonial'}
        subHeading = {'What my professor say about me. '}
        />

        <section className='testimonial-section fade-in' id = {props.id || ""}>
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
                                     I am flattered by MD's work. When he take a task he finsih it on time. He would make
                                    sure the task is well complete as well. He is an honest person and punctual.
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
                                <h5>Nelly Fazio</h5>
                                <p>Associate Professor</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-12'>
                        <div className='testi-item'>
                            <div className='testi-comment'>
                                <p>
                                    <i className='fa fa-quote-left'/>
                                    He is a hard-working student. I am flattered by MD's work. 
                                    When he take a task he finsih it on time. He would make sure the task is well complete as well.
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
                                <h5>Erik K. Grimmelmann</h5>
                                <p>PRESIDENT, NY TECH ALLIANCE</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-12'>
                        <div className='testi-item'>
                            <div className='testi-comment'>
                                <p>
                                    <i className='fa fa-quote-left'/>
                                    He is an honest person and punctual.I am flattered by MD's work. When he take a task he finsih it on time. 
                                    He would make sure the task is well complete as well. 
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
                                <h5>Ronak Etemadpour</h5>
                                <p> Professor</p>
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