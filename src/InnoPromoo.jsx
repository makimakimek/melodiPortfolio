import { useState } from 'react';
import './Skinmate.css';
import './App.css';
import { Link } from "react-router-dom";
import photo1 from './assets/innopromoo1.png';
import photo2 from './assets/innopromoo2.png';
import photo4 from './assets/innopromoo4.png';
import circleMenu from './assets/circleMenu.png';

function InnoPromoo() {
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
                            INNOPROMOO
                        </div>

                        <div className = "mainPhoto">
                            <img src = {photo1} className = "singularPhoto" alt = "home page of innopromoo"/>

                            <img src = {photo2} className = "singularPhoto" alt = "one of the product pages of innopromoo"/>

                            <img src = {photo4} className = "singularPhoto" alt = "one of the product pages of innopromoo"/>
                        </div>

                        <div className = "infoAndParagraph">
                            <div className = "info">
                                <div className = "links">
                                    <div className = "infoTitle">
                                        Links
                                    </div>

                                    <div className = "infoFullText">
                                        <div className = "infoSubText">
                                            <a href = "https://innopromoo.com/" target = "_blank" className = "singularLink">Live Preview</a>
                                        </div>

                                        <div className = "infoSubText">
                                            <a href = "https://github.com/makimakimek/inno" target = "_blank" className = "singularLink">GitHub</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className = "projectParagraph">
                                I independently designed and developed a website for InnoPromoo, a real company, 
                                handling all aspects from gathering client requirements to deployment. This website 
                                allows them to showcase their various products to a wider audience. Built with React.js 
                                and CSS, the website is fully functional and responsive, ensuring a seamless viewing 
                                experience on both desktop and mobile devices, regardless of screen orientation. 
                                Additionally, I implemented a language toggle for English and Turkish translations, 
                                considering the company&apos;s Turkish origin. To make the website accessible to the public, 
                                the client bought a domain where I deployed the code, integrating it into the domain&apos;s 
                                public HTML.
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

export default InnoPromoo