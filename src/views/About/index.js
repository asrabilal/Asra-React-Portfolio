import React from "react";
import "./style.css";

function About() {

    return (
        <div className="viewThree" id="about">
            <div className="row">
                <div className="col-md">
                    <h3 className="viewTitle" id="aboutTitle">ABOUT</h3>
                    <div className="row align-self-center bioText">
                        <p className="bio">I'm a junior fullstack web developer. My passion for coding has comes from my love of problem solving and design - the joy in that moment when I find a solution to something that's been bugging me, whether it's working on creating something from scratch such as arts and craft. All about creativity, collaboration, and learning new things.</p>
                        <p className="bio"><span className="skillHeader">Some skills I bring to the table:</span>
                            <ul className=" skillList text-center">
                           
                                <li className="skill">JavaScript</li>
                                <li className="skill">ReactJS</li>
                                <li className="skill">HTML & CSS</li>
                                <li className="skill">Node</li>
                                <li className="skill">Express</li>
                                <li className="skill">SQL</li>
                                <li className="skill">Logo & Web Design</li>
                            </ul>
                        </p>
                        <p className="bio">I look forward to working with you!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;