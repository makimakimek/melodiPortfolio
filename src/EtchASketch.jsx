import './Skinmate.css';
import './App.css';
import { Link } from "react-router-dom";
import photo1 from './assets/etchASketch1.png';
import photo2 from './assets/etchASketch2.png';
import photo3 from './assets/etchASketch3.png';

function EtchASketch() {
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
                                            <Link to = "/TwoArmRobotProject" className = "dropdownItem">Using a Two-Arm Robot System to Write Initials</Link>
                                            <Link to = "/InvertedPendulum" className = "dropdownItem">Inverted Pendulum System Modelling</Link>
                                            <Link to = "/BallBalancer" className = "dropdownItem">Ball Balancer System Control Modelling</Link>
                                            <Link to = "/BridgeCable" className = "dropdownItem">Structural Analysis of a Bridge Cable</Link>
                                            <Link to = "/FluidFlowSimulation" className = "dropdownItem">Fluid Flow Simulation Through an Expanding Pipe</Link>
                                            <Link to = "/AirCompressorModelling" className = "dropdownItem">3D Modelling of an Air Compressor</Link>
                                            <Link to = "/FloraPod" className = "dropdownItem">Climate Controlled Portable Greenhouse System</Link>
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
                            ETCH-A-SKETCH
                        </div>

                        <div className = "mainPhoto">
                            <img src = {photo1} className = "singularPhoto" alt = "initial screen of etch-a-sketch website"/>

                            <img src = {photo2} className = "singularPhoto" alt = "mid-screen of sketching"/>

                            <img src = {photo3} className = "singularPhoto" alt = "mid-screen of sketching"/>
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
                                This website offers an interactive sketching experience where users can create drawings using their mouse as they navigate 
                                over a grid of squares. Users have the option to choose their preferred colors, and there is an option for a random color 
                                each time they pass over a square. The grid size is customizable, allowing users to select any number between 0 and 100. 
                                Users can also enable a "Shading Effect", creating shades as they move over pre-filled squares. The canvas can be easily 
                                cleared with the "Clear" button. I created this website's layout and design using flexbox, utilizing HTML, CSS, and JS. 
                                I used DOM to implement most features.
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

export default EtchASketch