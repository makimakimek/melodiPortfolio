import { useState } from 'react';
import './Skinmate.css';
import './App.css';
import { Link } from "react-router-dom";
import photo1 from './assets/shoppingList2.png';
import photo2 from './assets/shoppingList3.png';
import photo3 from './assets/shoppingList4.png';
import circleMenu from './assets/circleMenu.png';

function ShoppingList() {
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

                    <div className = "projectCollectionInside">
                        <div className = "mainTitle">
                            SHOPPING LIST
                        </div>

                        <div className = "mainPhoto">
                            <img src = {photo1} className = "singularPhoto" alt = "shopping list website with already added items"/>

                            <img src = {photo2} className = "singularPhoto" alt = "shopping list website with one item strikedthrough"/>

                            <img src = {photo3} className = "singularPhoto" alt = "showing shopping list website's search bar and how it fetches words/items from an API"/>
                        </div>

                        <div className = "infoAndParagraph">
                            <div className = "info">
                                <div className = "links">
                                    <div className = "infoTitle">
                                        Links
                                    </div>

                                    <div className = "infoFullText">
                                        <div className = "infoSubText">
                                            <a href = "https://makimakimek.github.io/shoppingList/" target = "_blank" className = "singularLink">Live Preview</a>
                                        </div>

                                        <div className = "infoSubText">
                                            <a href = "https://github.com/makimakimek/shoppingList" target = "_blank" className = "singularLink">GitHub</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className = "projectParagraph">
                                I developed a dynamic shopping list application using HTML, CSS, and JavaScript that enhances the grocery shopping experience. 
                                The app features a responsive search functionality that suggests items as the user types, leveraging a debounced API call to 
                                efficiently fetch partial matches. Users can easily add items to their list by clicking on suggestions or entering custom items. 
                                The interface allows for intuitive item management, including the ability to check off purchased items with a stylish strikethrough 
                                effect and delete unwanted entries. To prevent redundant API requests, I implemented a 500ms debounce on the search input, optimizing 
                                performance and reducing unnecessary server load.
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

export default ShoppingList