import { useState } from 'react';
import './App.css'
import { Link } from "react-router-dom";
import skinMateProjectImage from './assets/mainPhotos/skinmate.png';
import countdownTimerProjectImage from './assets/mainPhotos/CountdownTimer2.png';
import innoPromooProjectImage from './assets/mainPhotos/innopromoo2.png';
import wordleProjectImage from './assets/mainPhotos/wordle2.png';
import memoryGameProjectImage from './assets/mainPhotos/memoryGame2.png';
import etchASketchProjectImage from './assets/mainPhotos/etchASketch2.png';
import shoppingListProjectImage from './assets/mainPhotos/shoppingList3.png';

function App() {
    const [mobileNavOpen, setMobileNavOpen] = useState(false);

    const toggleMobileNav = () => {
        setMobileNavOpen(!mobileNavOpen);
    };

    const NavigationContent = () => (
        <>
          <div className="name">Melodi Ezgi Keskin</div>

          <div className="navigationTab">
            <div className="nodes">NODES</div>

            <div className="menu">
              <Link to="/">
                <div className="menuItem">index</div>
              </Link>

              <div className="menuItem">
                <div className="dropdownProjects">
                  <div className="dropdownTitle">projects +</div>

                  <div className="dropdownContent">
                    <Link to="/Skinmate" className="dropdownItem">
                      SkinMate iOS Application
                    </Link>
                    <Link to="/InnoPromoo" className="dropdownItem">
                      InnoPromoo
                    </Link>
                    <Link to="/CountdownTimer" className="dropdownItem">
                      Countdown Timer
                    </Link>
                    <Link to="/Wordle" className="dropdownItem">
                      Wordle
                    </Link>
                    <Link to="/MemoryGame" className="dropdownItem">
                      Memory Game
                    </Link>
                    <Link to="/EtchASketch" className="dropdownItem">
                      Etch-A-Sketch
                    </Link>
                    <Link to="/ShoppingList" className="dropdownItem">
                      Shopping List
                    </Link>
                  </div>
                </div>
              </div>

              <div className="menuItem">
                <div className="dropdownProjects">
                  <div className="dropdownTitle">about me</div>

                  <div className="dropdownContent">
                    <a
                      href="https://www.linkedin.com/in/melodi-keskin-059007211/"
                      className="dropdownItem"
                      target="_blank"
                    >
                      LinkedIn
                    </a>
                    <a
                      href="https://github.com/makimakimek"
                      className="dropdownItem"
                      target="_blank"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>

              <a href="https://www.google.com" className="link">
                <div className="menuItem">resume</div>
              </a>
            </div>
          </div>
        </>
    );

    return (
        <>
            <div className = "page">
                <div className = "navAndProjects">
                    <div className = "navigationAndName">
                        <NavigationContent />
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
                                            <img src = {skinMateProjectImage} className = "subImage" alt = "an image of SkinMate project"/>
                                        </div>

                                        <div className = "projectTitle">
                                            SkinMate iOS Application
                                        </div>
                                    </div>
                                </Link>

                                <Link to = "/InnoPromoo">
                                    <div className = "projectContainer">
                                        <div className = "projectImage">
                                            <img src = {innoPromooProjectImage} className = "subImage" alt = "an image of InnoPromoo project"/>
                                        </div>

                                        <div className = "projectTitle">
                                            InnoPromoo
                                        </div>
                                    </div>
                                </Link>
                                
                                <Link to = "/CountdownTimer">
                                    <div className = "projectContainer">
                                        <div className = "projectImage">
                                            <img src = {countdownTimerProjectImage} className = "subImage" alt = "an image of Countdown Timer project"/>
                                        </div>

                                        <div className = "projectTitle">
                                            Countdown Timer
                                        </div>
                                    </div>
                                </Link>
                            </div>

                            <div className = "projectsRow">
                                <Link to = "/Wordle">
                                    <div className = "projectContainer">
                                        <div className = "projectImage">
                                            <img src = {wordleProjectImage} className = "subImage" alt = "an image of FloraPod project"/>
                                        </div>

                                        <div className = "projectTitle">
                                            Wordle
                                        </div>
                                    </div>
                                </Link>

                                <Link to = "/MemoryGame">
                                    <div className = "projectContainer">
                                        <div className = "projectImage">
                                            <img src = {memoryGameProjectImage} className = "subImage" alt = "an image of FloraPod project"/>
                                        </div>

                                        <div className = "projectTitle">
                                            Memory Game
                                        </div>
                                    </div>
                                </Link>
                                
                                <Link to = "/EtchASketch">
                                    <div className = "projectContainer">
                                        <div className = "projectImage">
                                            <img src = {etchASketchProjectImage} className = "subImage" alt = "an image of FloraPod project"/>
                                        </div>

                                        <div className = "projectTitle">
                                            Etch-A-Sketch
                                        </div>
                                    </div>
                                </Link>
                            </div>

                            <div className = "projectsRow">
                                <Link to = "/ShoppingList">
                                    <div className = "projectContainer">
                                        <div className = "projectImage">
                                            <img src = {shoppingListProjectImage} className = "subImage" alt = "an image of FloraPod project"/>
                                        </div>

                                        <div className = "projectTitle">
                                            Shopping List
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="mobileNavButton" onClick={toggleMobileNav}>
                    Menu
                </button>

                <div className={`mobileNav ${mobileNavOpen ? 'active' : ''}`}>
                    <NavigationContent />
                </div>
            </div>
        </>
    )
}

export default App