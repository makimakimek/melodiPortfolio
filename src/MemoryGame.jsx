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
                            </div>
                            
                            <div className = "projectParagraph">
                                This 6x6 grid game features 36 cards with numbers 1-18, each appearing twice, randomly distributed across the board. 
                                Players test their memory by flipping cards to find matching pairs. Successful matches remove the cards from the grid, 
                                while mismatched pairs are hidden again. Key features include card reveal animations, match recognition, and a timer-based 
                                reveal/hide mechanism for non-matching pairs. The project also incorporates game state management, tracking matched pairs 
                                and game completion. This project was done using HTML, CSS, JavaScript, and DOM.
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

export default MemoryGame