import './Skinmate.css';
import './App.css';
import { Link } from "react-router-dom";
import photo1 from './assets/memoryGame1.png';
import photo2 from './assets/memoryGame3.png';
import photo3 from './assets/memoryGame2.png';

function MemoryGame() {
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
                                <Link to = "/Featured">
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
                                
                                <a href = "https://www.google.com" className = "link">
                                    <div className = "menuItem">
                                        about me
                                    </div>
                                </a>
                            </div> 
                        </div>
                    </div>

                    <div className = "projectCollection">
                        <div className = "mainTitle">
                            MEMORY GAME
                        </div>

                        <div className = "mainPhoto">
                            <img src = {photo1} className = "singularPhoto" alt = "initial screen of memory game"/>

                            <img src = {photo2} className = "singularPhoto" alt = "mid-screen of memory game while being played"/>

                            <img src = {photo3} className = "singularPhoto" alt = "mid-screen of memory game while being played"/>
                        </div>

                        <div className = "infoAndParagraph">
                            <div className = "info">
                                <div className = "links">
                                    <div className = "infoTitle">
                                        Links
                                    </div>

                                    <div className = "infoFullText">
                                        <div className = "infoSubText">
                                            <a href = "https://makimakimek.github.io/memoryGame/" target = "_blank" className = "singularLink">Live Preview</a>
                                        </div>

                                        <div className = "infoSubText">
                                            <a href = "https://github.com/makimakimek/memoryGame" target = "_blank" className = "singularLink">GitHub</a>
                                        </div>
                                    </div>
                                </div>

                                <div className = "contribution">
                                    <div className = "infoTitle">
                                        Contribution
                                    </div>

                                    <div className = "infoFullText">
                                        <div className = "infoSubText">
                                            done by me
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className = "projectParagraph">
                                This iOS application, developed as our capstone project by a team of four, allows users to seamlessly manage their 
                                skincare routine. Upon creating an account, users can capture a picture of their face within the application. The app 
                                then analyzes the facial image to identify the user's skin type and what kind of acne they have. Based on this analysis, 
                                personalized morning and night skincare routines are suggested, complete with specific product recommendations tailored 
                                to the user's unique needs. Furthermore, the application features a page showcasing the user's last two pictures for easy 
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

                <div className = "linkContainer">
                    <Link to = "/Featured">
                        <div className = "indexLink">index</div>
                    </Link>
                    <a href = "https://www.google.com" className = "nextLink">next</a>
                </div>
            </div>
        </>
    )
}

export default MemoryGame