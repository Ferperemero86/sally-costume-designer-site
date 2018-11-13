import React, { Component } from 'react';

class Home extends Component {
    constructor (props) {
       super(props)
       this.state = {
           image: `src/images/1.jpg`
       }
       this.pos = 2;      
    }

   componentDidMount() {  
       this.interval = setInterval(() => { 
           this.setState({
               image: `src/images/${this.pos}.jpg`
           })
           if(this.pos === 8) {
               this.pos = 1
           } else {
               this.pos++;
            }
           
        }, 3000);
   }

   componentWillUnmount() {
       clearInterval(this.interval);
   }

    render() {
        return (
            <div>

                 <div className="slider">
                     <img src={this.state.image}/>
                 </div>
                 <div className="project-link">
                     <a href="/work"> View more ...</a>
                 </div>
                 
            </div>
           
        )
    }
}

export default Home;