import './Skinmate.css';
import './App.css';
import { Link } from "react-router-dom";
import photo1 from './assets/wordle1.png';
import photo2 from './assets/wordle2.png';
import photo3 from './assets/wordle3.png';

function Wordle() {
    return (
        <>
            <div className = "page">
                <div className = "navAndProjects">
                    <div className = "navigationAndName">
                        <div className = "name">
                            Melodi Keskin
                        </div>

                        {/*<div className = "mood">
                            mood:
                        </div>*/}

                        <div className = "navigationTab">
                            <div className = "nodes">
                                NODES
                            </div>

                            <div className = "menu">
                                <Link to = "/">
                                    <div className = "menuItem">
                                        index
                                    </div>
                                </Link>
                                
                                <div className = "menuItem">
                                    <div className = "dropdownProjects">
                                        <div className = "dropdownTitle">
                                            projects +
                                        </div>

                                        <div className = "dropdownContent">
                                            <Link to = "/Skinmate" className = "dropdownItem">SkinMate iOS Application</Link>
                                            <Link to = "/CountdownTimer" className = "dropdownItem">Countdown Timer</Link>
                                            <Link to = "/InnoPromoo" className = "dropdownItem">InnoPromoo</Link>
                                            <Link to = "/Skinmate" className = "dropdownItem">Wordle</Link>
                                            <Link to = "/MemoryGame" className = "dropdownItem">Memory Game</Link>
                                            <Link to = "/EtchASketch" className = "dropdownItem">Etch-A-Sketch</Link>
                                            <Link to = "/Skinmate" className = "dropdownItem">Shopping List</Link>
                                            <Link to = "/CatAdoption" className = "dropdownItem">Cat Adoption</Link>
                                            <Link to = "/Skinmate" className = "dropdownItem">Dice Roller</Link>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className = "menuItem">
                                    <div className = "dropdownProjects">
                                        <div className = "dropdownTitle">
                                            about me
                                        </div>

                                        <div className = "dropdownContent">
                                            <a href = "https://www.linkedin.com/in/melodi-keskin-059007211/" className = "dropdownItem" target = "_blank">LinkedIn</a>
                                            <a href = "https://github.com/makimakimek" className = "dropdownItem" target = "_blank">GitHub</a>
                                        </div>
                                    </div>
                                </div>

                                <a href = "https://www.google.com" className = "link">
                                    <div className = "menuItem">
                                        resume
                                    </div>
                                </a>
                            </div> 
                        </div>
                    </div>

                    <div className = "projectCollection">
                        <div className = "mainTitle">
                            WORDLE
                        </div>

                        <div className = "mainPhoto">
                            <img src = {photo1} className = "singularPhoto" alt = "sign up screen of skinmate ios application"/>

                            <img src = {photo2} className = "singularPhoto" alt = "product suggestion page of skinmate ios application"/>

                            <img src = {photo3} className = "singularPhoto" alt = "product suggestion page of skinmate ios application"/>
                        </div>

                        <div className = "infoAndParagraph">
                            <div className = "info">
                                <div className = "links">
                                    <div className = "infoTitle">
                                        Links
                                    </div>

                                    <div className = "infoFullText">
                                        <div className = "infoSubText">
                                            <a href = "https://makimakimek.github.io/wordle/" target = "_blank" className = "singularLink">Live Preview</a>
                                        </div>

                                        <div className = "infoSubText">
                                            <a href = "https://github.com/makimakimek/wordle/" target = "_blank" className = "singularLink">GitHub</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className = "projectParagraph">
                                I developed a web-based clone of the popular word game Wordle, challenging players to guess a secret five-letter 
                                word within six attempts. This project showcases my ability to create interactive web applications and work with 
                                APIs, featuring dynamic gameplay where users receive instant color-coded feedback on their guesses—green for correct 
                                letters in the right position, yellow for correct letters in the wrong position, and grey for incorrect letters. The 
                                application integrates external APIs to fetch daily words and validate user guesses against a dictionary, while intelligently 
                                handling repeated letters. Additionally, it tracks remaining guesses and determines win/loss conditions, all within a responsive 
                                and user-friendly interface. This project highlights my proficiency in frontend development, API integration, and creating 
                                engaging user experiences.
                            </div>  
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Wordle