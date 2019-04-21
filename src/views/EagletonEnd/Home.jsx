// Home.jsx
console.log("Mounting Home.jsx ... <Home />");

import React from "react";
import Heading from '../../containers/EagletonEnd/Home/Heading';
import Content from '../../containers/EagletonEnd/Home/Content';
import N2KGauge from "../../containers/EagletonEnd/Gauge/N2KGauge";
import RadialGauge from "../../components/Gauge/RadialGauge";

const Home = (props) => {
     return (
        <div>
            <Heading />
            <section className="section">
                <div className="container">
                
                    <div className="tile is-ancestor">
                        <div className="tile is-parent">
                            <div className="tile is-child green post">
                                <Content />                 
                            </div>
                        </div>
                     
                        <div className="tile is-6 is-vertical is-parent">
                            <div className="tile is-child pink post">
                                <h3>SVG and React: Part 2</h3>
                                <N2KGauge />
                            </div>
                            <div className="tile is-child gold post">
                                <h3>SVG and React: Part 2</h3>
                                <N2KGauge />
                            </div>
                        </div> 
                     
                        <div className="tile is-parent">
                            <div className="tile is-child post">
                                <h3>SVG and React: Part 1</h3>
                                <RadialGauge />
                            </div>
                        </div>
                    </div>     
                </div>
            </section>    
        </div> 
    );
}

export default Home;

// eof

