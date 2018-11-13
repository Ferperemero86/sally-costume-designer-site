import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div className="about-main-div">

                <div className="about-first-div">

                    <div className="about-first-div-image">
                        <img src="src/images/sally-1.jpg"/>
                    </div>
                    <div className="about-first-div-text">
                        <h3>"Love,Laugh,Learn"</h3>
                        <h4>I am Jieun Ko</h4>
                    </div>

                </div>

                <div className="about-second-div">

                    <div className="about-second-div-image">
                        <img src="src/images/sally-2.jpg"/>
                    </div>
                    <div className="about-second-div-text">
                       <p> 
                            Costume Designer and writer who likes to imagine
                            everything from nature and likes to make funny points.  
                       </p>
                       <p> 
                            I love what i do, it is my passion and i try to be
                            the best professional i can be.
                       </p>
                       <p>
                            I am a traveller, food lover and love making new friends!!. See you soon!
                       </p>
                    </div>

                </div> 

            </div>
        )
    }
}

export default About;