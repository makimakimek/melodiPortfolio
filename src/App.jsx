import './App.css'
import { Link } from "react-router-dom";
import projectImage from './assets/skinmate.png';

function App() {
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
                                            <Link to = "/Skinmate" className = "dropdownItem">Countdown Timer</Link>
                                            <Link to = "/Skinmate" className = "dropdownItem">InnoPromoo</Link>
                                            <Link to = "/Skinmate" className = "dropdownItem">Wordle</Link>
                                            <Link to = "/Skinmate" className = "dropdownItem">Memory Game</Link>
                                            <Link to = "/Skinmate" className = "dropdownItem">Etch-A-Sketch</Link>
                                            <Link to = "/Skinmate" className = "dropdownItem">Shopping List</Link>
                                            <Link to = "/Skinmate" className = "dropdownItem">Cat Adoption</Link>
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
                            COLLECTION OF MY PROJECTS
                        </div>

                        <div className = "projectsFull">
                            <div className = "projectsRow">
                                <Link to = "/Skinmate">
                                    <div className = "projectContainer">
                                        <div className = "projectImage">
                                            <img src = {projectImage} className = "subImage" alt = "an image of FloraPod project"/>
                                        </div>

                                        <div className = "projectTitle">
                                            SkinMate iOS Application
                                        </div>
                                    </div>
                                </Link>
                                
                                <Link to = "/Skinmate">
                                    <div className = "projectContainer">
                                        <div className = "projectImage">
                                            <img src = {projectImage} className = "subImage" alt = "an image of FloraPod project"/>
                                        </div>

                                        <div className = "projectTitle">
                                            Countdown Timer
                                        </div>
                                    </div>
                                </Link>

                                <Link to = "/Skinmate">
                                    <div className = "projectContainer">
                                        <div className = "projectImage">
                                            <img src = {projectImage} className = "subImage" alt = "an image of FloraPod project"/>
                                        </div>

                                        <div className = "projectTitle">
                                            InnoPromoo
                                        </div>
                                    </div>
                                </Link>
                            </div>

                            <div className = "projectsRow">
                                <Link to = "/Skinmate">
                                    <div className = "projectContainer">
                                        <div className = "projectImage">
                                            <img src = {projectImage} className = "subImage" alt = "an image of FloraPod project"/>
                                        </div>

                                        <div className = "projectTitle">
                                            Wordle
                                        </div>
                                    </div>
                                </Link>

                                <Link to = "/Skinmate">
                                    <div className = "projectContainer">
                                        <div className = "projectImage">
                                            <img src = {projectImage} className = "subImage" alt = "an image of FloraPod project"/>
                                        </div>

                                        <div className = "projectTitle">
                                            Memory Game
                                        </div>
                                    </div>
                                </Link>
                                
                                <Link to = "/Skinmate">
                                    <div className = "projectContainer">
                                        <div className = "projectImage">
                                            <img src = {projectImage} className = "subImage" alt = "an image of FloraPod project"/>
                                        </div>

                                        <div className = "projectTitle">
                                            Etch-A-Sketch
                                        </div>
                                    </div>
                                </Link>
                            </div>

                            <div className = "projectsRow">
                                <Link to = "/Skinmate">
                                    <div className = "projectContainer">
                                        <div className = "projectImage">
                                            <img src = {projectImage} className = "subImage" alt = "an image of FloraPod project"/>
                                        </div>

                                        <div className = "projectTitle">
                                            Shopping List
                                        </div>
                                    </div>
                                </Link>

                                <Link to = "/Skinmate">
                                    <div className = "projectContainer">
                                        <div className = "projectImage">
                                            <img src = {projectImage} className = "subImage" alt = "an image of FloraPod project"/>
                                        </div>

                                        <div className = "projectTitle">
                                            Cat Adoption
                                        </div>
                                    </div>
                                </Link>

                                <Link to = "/Skinmate">
                                    <div className = "projectContainer">
                                        <div className = "projectImage">
                                            <img src = {projectImage} className = "subImage" alt = "an image of FloraPod project"/>
                                        </div>

                                        <div className = "projectTitle">
                                            Dice Roller
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className = "linkContainer">
                    <Link to = "/">
                        <div className = "indexLink">index</div>
                    </Link>
                    <Link to = "/Skinmate">
                        <div className = "nextLink">next</div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default App