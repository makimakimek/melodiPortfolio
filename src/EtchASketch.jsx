import { useState } from 'react';
import './Skinmate.css';
import './App.css';
import { Link } from "react-router-dom";
import photo1 from './assets/etchASketch1.png';
import photo2 from './assets/etchASketch2.png';
import photo3 from './assets/etchASketch3.png';
import circleMenu from './assets/circleMenu.png';

function EtchASketch() {
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

              <a href="https://drive.google.com/file/d/1PLNrcUW4ZcFcPKzh4y9TMuLTDZFYP0GV/view?usp=sharing" className="link" target="_blank">
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

                    <div className = "projectCollectionInside">
                        <div className = "mainTitle">
                            ETCH-A-SKETCH
                        </div>

                        <div className = "mainPhoto-skinmate">
                            <img src = {photo1} className = "singularPhoto-skinmate" alt = "initial screen of etch-a-sketch website"/>

                            <img src = {photo2} className = "singularPhoto-skinmate" alt = "mid-screen of sketching"/>

                            <img src = {photo3} className = "singularPhoto-skinmate" alt = "mid-screen of sketching"/>
                        </div>

                        <div className = "infoAndParagraph">
                            <div className = "info">
                                <div className = "links">
                                    <div className = "infoTitle">
                                        Links
                                    </div>

                                    <div className = "infoFullText">
                                        <div className = "infoSubText">
                                            <a href = "https://makimakimek.github.io/etchASketch/" target = "_blank" className = "singularLink">Live Preview</a>
                                        </div>

                                        <div className = "infoSubText">
                                            <a href = "https://github.com/makimakimek/etchASketch" target = "_blank" className = "singularLink">GitHub</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className = "projectParagraph">
                                This website offers an interactive sketching experience where users can create drawings using their mouse as they navigate 
                                over a grid of squares. Users have the option to choose their preferred colors, and there is an option for a random color 
                                each time they pass over a square. The grid size is customizable, allowing users to select any number between 0 and 100. 
                                Users can also enable a &quot;Shading Effect&quot;, creating shades as they move over pre-filled squares. The canvas can be easily 
                                cleared with the &quot;Clear&quot; button. I created this website&apos;s layout and design using flexbox, utilizing HTML, CSS, and JS. 
                                I used DOM to implement most features.
                            </div>  
                        </div>
                    </div>
                </div>
                <button className="mobileNavButton" onClick={toggleMobileNav}>
                  <img src = {circleMenu} />
                </button>

                <div className={`mobileNav ${mobileNavOpen ? 'active' : ''}`}>
                    <NavigationContent />
                </div>
            </div>
        </>
    )
}

export default EtchASketch