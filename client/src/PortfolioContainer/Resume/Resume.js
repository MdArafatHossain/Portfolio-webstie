import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  //here is the skills
  const programmingSkillsDetails = [
              {skill: "Python", ratingPercentage: 85}, 
              {skill: "React Js", ratingPercentage: 89}, 
              {skill: "JavaScript", ratingPercentage: 80}, 
              {skill: "Node Js", ratingPercentage: 85}, 
              {skill: "Express Js", ratingPercentage: 80}, 
              {skill: "HTML", ratingPercentage: 95}, 
              {skill: "CSS", ratingPercentage: 85}, 
              {skill: "Mongo Db", ratingPercentage: 70}, 
              {skill: "MySQL", ratingPercentage: 85}, 
          ];

  const projectsDetails = [
    {
        title:"Personal Portfolio Website",
        duration:{fromDate: "2021", toDate: "2022"},
        description: "A Personal Portfolio website to showcase all my details and projects at one place.",
        subHeading: "Technologies Used: React JS, Bootsrap",
    },
    {
        title:"FoodNation Website",
        duration:{fromDate: "2021", toDate: "2021"}, 
        description: " This project connects the restaurant, charity organization, and people. Instead of throwing unsold food away, restaurant can donate the food to charity o rganization. Restaurant can gain good public relation by donating food. ",
        subHeading: "Technologies Used: React.js, Material UI and Firebase",
    },
    {
        title:"Photo-Share App",
        duration:{fromDate: "2020", toDate: "2021"},
        description: "A social media application such as instagram where people can share their pictures, give comments, like on it etc.",
        subHeading: "Technologies Used: Django framework.",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
           <ResumeHeading 
              heading = {"The City College of New York, New York"}
              subHeading = {"BACHELOR OF SCIENCE IN COMPUTER SCIENCE"}
              fromDate = {"2017"}
              toDate = {"2022"}
              />
              <ResumeHeading
             heading={"High School "}
            subHeading={"School For Claasic High School"}
            fromDate={"2014"}
            toDate={"2017"}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
      <ResumeHeading
                 heading = {"IvyScope"}
                 subHeading = {"Web developer"}
                 fromDate = {"2021"}
                 toDate = {"2021"}
            />
            <div className="experience-description">
                <span className="resume-description-text">
                Worked with frontend and Backend teams.
                </span>
            </div>
            <div className="experience-description">
                <span className="resume-description-text">
                 - Web development life cycle from start to finish, debug, and add new features in a timely manner,
                  Implement UI designer's wireframes.
                </span>
                <br />
                <span className="resume-description-text">
                - Designed the database, Wrote HTML, CSS from the Figma design file, developed front-end React code with clean 
                    architecture.{" "}
                </span>
                <br />
    
            </div>
            <ResumeHeading
                 heading = {"Research Foundation Cuny"}
                 subHeading = {"Tech Support Intern"}
                 fromDate = {"2020"}
                 toDate = {"2021"}
            />
            <div className="experience-description">
                <span className="resume-description-text">
                -Setting up new computer equipment in classrooms and offices Installing software.
                </span>
            </div>
            <div className="experience-description">
                <span className="resume-description-text">
                 - Troubleshooting hardware and software problems in conjunction with DOE Help Center and borough technology staff. {""}Configuring wireless devices to access DOE network.
                </span>
                <br />
                 
            </div>
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
       <ResumeHeading
            heading = 'Sports'
            description = 'I love playing cricket. I call myself an All-rounder. But I always prefer to known as a batsman.'
            
            />
            <ResumeHeading
                heading="Music"
                description="Listening to soothing music is something i can never compromise with, skimming through Spotify's pop songs charts is at times the best stress reliever that i can get my hands on."
            />
            <ResumeHeading
            heading="Competitive Gaming"
        description="I like to challenge my reflexes a lot while competing in football games, pushing the rank and having interactive gaming sessions excites me the most."
        />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreen = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

return (
        <div className='= resume-container screen-container fade-in' id ={props.id || ""}>
            <div className='resume-content'>
                <ScreenHeading title = {'Resume'} subHeading = {'My formal Bio Details'}/>
                <div className='resume-card'>
                    <div className='resume-bullets'>
                        <div className='bullet-container'>
                            <div className='bullet-icons'></div>
                            <div className='bullets'>{getBullets()}</div>
                        </div>
                    </div>
                    <div className='resume-bullet-details'>{getResumeScreen()}</div>
                </div>
            </div>
    
    
        </div>
      )
};

export default Resume;

// import React, { useState, useEffect } from "react";
// import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
// import ScrollService from "../../utilities/ScrollService";
// import Animations from "../../utilities/Animations";
// import "./Resume.css";


// const  Resume = (props) => {

//     const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
//     const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({}); 
//     let fadeInScreenHandler = (screen) =>{
//         if (screen.fadeScreen !== props.id)
//         return;
//         Animations.animations.fadeInScreen(props.id);
//       }
//       const fadeInSubscription =
//        ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

//     const ResumeHeading = (props) => {
//         return (
//           <div className="resume-heading">
//             <div className="resume-main-heading">
//               <div className="heading-bullet"></div>
//               <span>{props.heading ? props.heading : ""}</span>
//               {props.fromDate && props.toDate ? (
//                 <div className="heading-date">
//                   {props.fromDate + "-" + props.toDate}
//                 </div>
//               ) : (
//                 <div></div>
//               )}
//             </div>
//             <div className="resume-sub-heading">
//               <span>{props.subHeading ? props.subHeading : ""}</span>
//             </div>
//             <div className="resume-heading-description">
//               <span>{props.description ? props.description : ""}</span>
//             </div>
//           </div>
//         );
//       };
    
//       const resumeBullets = [
//         { label: "Education", logoSrc: "education.svg" },
//         { label: "Work History", logoSrc: "work-history.svg" },
//         { label: "Programming Skills", logoSrc: "programming-skills.svg" },
//         { label: "Projects", logoSrc: "projects.svg" },
//         { label: "Interests", logoSrc: "interests.svg" },
//       ];
//       const programmingSkillsDetails = [
//           {skill: "Python", ratingPercentage: 85}, 
//           {skill: "React Js", ratingPercentage: 89}, 
//           {skill: "JavaScript", ratingPercentage: 80}, 
//           {skill: "Node Js", ratingPercentage: 85}, 
//           {skill: "Express Js", ratingPercentage: 80}, 
//           {skill: "HTML", ratingPercentage: 95}, 
//           {skill: "CSS", ratingPercentage: 85}, 
//           {skill: "Mongo Db", ratingPercentage: 70}, 
//           {skill: "MySQL", ratingPercentage: 85}, 
//       ];
//       const projectDetails = [
        //   {
        //       title:"Personal Portfolio Website",
        //       duration:{fromDate: "2021", toDate: "2022"},
        //       description: "A Personal Portfolio website to showcase all my details and projects at one place.",
        //       subHeading: "Technologies Used: React JS, Bootsrap",
        //   },
        //   {
        //       title:"FoodNation Website",
        //       duration:{fromDate: "2021", toDate: "2021"}, 
        //       description: " This project connects the restaurant, charity organization, and people. Instead of throwing unsold food away, restaurant can donate the food to charity o rganization. Restaurant can gain good public relation by donating food. ",
        //       subHeading: "Technologies Used: React.js, Material UI and Firebase",
        //   },
        //   {
        //       title:"Photo-Share App",
        //       duration:{fromDate: "2020", toDate: "2021"},
        //       description: "A social media application such as instagram where people can share their pictures, give comments, like on it etc.",
        //       subHeading: "Technologies Used: Django framework.",
        //   },
          

//       ];

//       const resumeDetails = [
//           <div className='resume-screen-container' key = "education">
    //           <ResumeHeading 
    //           heading = {"The City College of New York, New York"}
    //           subHeading = {"BACHELOR OF SCIENCE IN COMPUTER SCIENCE"}
    //           fromDate = {"2017"}
    //           toDate = {"2022"}
    //           />
    //           <ResumeHeading
    //          heading={"High School "}
    //         subHeading={"School For Claasic High School"}
    //         fromDate={"2014"}
    //         toDate={"2017"}
    //   />
//           </div>,
     
//             <div className="resume-screen-container" key="work-experience">
//             <div className="experience-container">
            // <ResumeHeading
            //      heading = {"IvyScope"}
            //      subHeading = {"Web developer"}
            //      fromDate = {"2021"}
            //      toDate = {"2021"}
            // />
            // <div className="experience-description">
            //     <span className="resume-description-text">
            //     Worked with frontend and Backend teams.
            //     </span>
            // </div>
            // <div className="experience-description">
            //     <span className="resume-description-text">
            //      - Web development life cycle from start to finish, debug, and add new features in a timely manner,
            //       Implement UI designer's wireframes.
            //     </span>
            //     <br />
            //     <span className="resume-description-text">
            //     - Designed the database, Wrote HTML, CSS from the Figma design file, developed front-end React code with clean 
            //         architecture.{" "}
            //     </span>
            //     <br />
            //     <span className="resume-description-text">
            //     - I stretch my mental capacity to develope UI as per the given
            //     designs.
            //     </span>
            //     <br />
            // </div>
            // <ResumeHeading
            //      heading = {"Research Foundation Cuny"}
            //      subHeading = {"Tech Support Intern"}
            //      fromDate = {"2020"}
            //      toDate = {"2021"}
            // />
            // <div className="experience-description">
            //     <span className="resume-description-text">
            //     Setting up new computer equipment in classrooms and offices Installing software.
            //     </span>
            // </div>
            // <div className="experience-description">
            //     <span className="resume-description-text">
            //      - Troubleshooting hardware and software problems in conjunction with DOE Help Center and borough technology staff
            //     </span>
            //     <br />
            //     <span className="resume-description-text">
            //     - Configuring wireless devices to access DOE network.{" "}
            //     </span>
            //     <br />
            //     <span className="resume-description-text">
            //     - Ensuring that LCD projectors, smart boards, and other related audio/video equipment are functioning.
            //     </span>
            //     <br />
            // </div>
//             </div>
//         </div>,
//               <div className='resume-screen-container programming-skills-container'
//                     key = "programming-skills">
//                         {programmingSkillsDetails.map((skill, index) => (
//                             <div className='skill-parent' key = {index}>
//                                 <div className='heading-bullet'> </div>
//                                 <span>{skill.skill} </span>
//                                 <div className='skill-percentage'>
//                                     <div style = {{width: skill.ratingPercentage + "%"}} 
//                                     className= 'active-percentage'> 

//                                     </div>
//                                 </div>
//                             </div>

//                         ))}
//                     </div>,

//               <div className='resume-screen-container' key = "projects">
//                   {projectDetails.map ((projectDetails, index) => (
//                       <ResumeHeading
//                       key ={index}
//                       heading = {projectDetails.title}
//                       subHeading = {projectDetails.subHeading}
//                       description = {projectDetails.description}
//                       fromDate = {projectDetails.duration.fromDate}
//                       toDate = {projectDetails.duration.toDate}
//                       />
//                   ))}
//               </div>,
//               <div className='resume-screen-contaienr' key = "interest">
//                   <ResumeHeading
//                   heading = 'Sports'
//                   description = 'I love playing cricket. I call myself an All-rounder. But I always prefer batting.'
                  
//                   />
//                    <ResumeHeading
//                      heading="Music"
//                      description="Listening to soothing music is something i can never compromise with, skimming through Spotify's pop songs charts is at times the best stress reliever that i can get my hands on."
//                  />
//                  <ResumeHeading
//                  heading="Competitive Gaming"
//                 description="I like to challenge my reflexes a lot while competing in football games, pushing the rank and having interactive gaming sessions excites me the most."
//                 />
//               </div>
          
//        ];
//        const handleCarousal = (index) => {
//            let offsetHeight = 300;
//            let newCarousalOffset = {
//                style: {transform: "translateY(" + index * offsetHeight *  -1 + "px)"},
//            };
//            setCarousalOffSetStyle(newCarousalOffset);
//            setSelectedBulletIndex(index);
//        };
//        const getBullets = () => {
//         return resumeBullets.map((bullet, index) => (
//           <div
//             onClick={() => handleCarousal(index)}
//             className={
//               index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
//             }
//             key={index}
//           >
//             <img
//               className="bullet-logo"
//               src={require(`../../assets/Resume/${bullet.logoSrc}`)}
//               alt="B"
//             />
//             <span className="bullet-label">{bullet.label}</span>
//           </div>
//         ));
//       };

//        const getResumeScreen = ()=>{
//            return (
//                <div style = {carousalOffSetStyle.style}
//                className='resume-details-carousal'
//                >
//                    {resumeDetails.map((ResumeDetail) => ResumeDetail)}

//                </div>
//            )
//        }
 
//   return (
//     <div className='= resume-container screen-container' id ={props.id || ""}>
//         <div className='resume-content'>
//             <ScreenHeading title = {'Resume'} subHeading = {'My formal Bio Details'}/>
//             <div className='resume-card'>
//                 <div className='resume-bullets'>
//                     <div className='bullet-container'>
//                         <div className='bullet-icons'></div>
//                         <div className='bullets'>{getBullets()}</div>
//                     </div>
//                 </div>
//                 <div className='resume-bullet-details'>{getResumeScreen()}</div>
//             </div>
//         </div>


//     </div>
//   )
// }
// export default Resume;