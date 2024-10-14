import './Skinmate.css';
import './App.css';
import { Link } from "react-router-dom";
import photo1 from './assets/capstoneScreenshot1.png';
import photo2 from './assets/capstoneScreenshot2.png';
import photo5 from './assets/capstoneScreenshot5.png';

function Skinmate() {
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
                            SKINMATE IOS APPLICATION
                        </div>

                        <div className = "mainPhoto">
                            <img src = {photo1} className = "singularPhoto" alt = "sign up screen of skinmate ios application"/>

                            <img src = {photo2} className = "singularPhoto" alt = "product suggestion page of skinmate ios application"/>

                            <img src = {photo5} className = "singularPhoto" alt = "facial image capture screen page of skinmate ios application"/>
                        </div>

                        <div className = "infoAndParagraph">
                            <div className = "info">
                                <div className = "contribution">
                                    <div className = "infoTitle">
                                        Contribution
                                    </div>

                                    <div className = "infoFullText">
                                        <div className = "infoSubText">
                                            Coding in Xcode with Swift 
                                        </div>

                                        <div className = "infoSubText">
                                            User Interface creation 
                                        </div>

                                        <div className = "infoSubText">
                                            Database Management through Google Firebase
                                        </div>

                                        <div className = "infoSubText">
                                            Mining information using ParseHub
                                        </div>

                                        <div className = "infoSubText">
                                            Designing the logo with Adobe Illustrator
                                        </div>
                                    </div>
                                </div>

                                <div className = "collaborator">
                                    <div className = "infoTitle">
                                        Collaborator
                                    </div>

                                    <div className = "infoFullText">
                                        <div className = "infoSubText">
                                            Fadime Tokmak
                                        </div>

                                        <div className = "infoSubText">
                                            Burcu Özer
                                        </div>

                                        <div className = "infoSubText">
                                            Eren Ege Özol
                                        </div>
                                    </div>
                                </div>

                                <div className = "supervisor">
                                    <div className = "infoTitle">
                                        Supervisor
                                    </div>

                                    <div className = "infoFullText">
                                        <div className = "infoSubText">
                                            Prof. Dr. Çiğdem Gündüz Demir
                                        </div>
                                    </div>
                                </div>

                                <div className = "links">
                                    <div className = "infoTitle">
                                        Links
                                    </div>

                                    <div className = "infoFullText">
                                        <div className = "infoSubText">
                                            <a href = "https://drive.google.com/file/d/1s3wRORKIWn5ID1-YOpBUF5m7QKy5i326/view" target = "_blank" className = "singularLink">Video</a>
                                        </div>

                                        <div className = "infoSubText">
                                            <a href = "https://github.com/eozol17/comp491" target = "_blank" className = "singularLink">GitHub</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className = "projectParagraph">
                                This iOS application, developed as our capstone project by a team of four, allows users to seamlessly manage their 
                                skincare routine. Upon creating an account, users can capture a picture of their face within the application. The app 
                                then analyzes the facial image to identify the user&apos;s skin type and what kind of acne they have. Based on this analysis, 
                                personalized morning and night skincare routines are suggested, complete with specific product recommendations tailored 
                                to the user&apos;s unique needs. Furthermore, the application features a page showcasing the user&apos;s last two pictures for easy 
                                visual comparison. This section highlights the progress by indicating which acne has diminished and which areas may still 
                                require attention.
                            </div>  
                        </div>

                        <div className = "moreImages">
                            <div className = "projectText">

                            </div>

                            <div className = "projectImage">

                            </div>

                            <div className = "projectImage">

                            </div>

                            <div className = "projectText">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skinmate