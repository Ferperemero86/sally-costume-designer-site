import React, { Component } from 'react';

class PhotoGallery extends Component {
    constructor(props) {
        super(props)
        this.state = {
       }     
    }

   render() {
      
           return(
               <div className = "container-photo-gallery">
                   <div className = "close-image">
                       <i className = "fas fa-times-circle" onClick={this.props.hideGallery}></i>
                   </div> 
                   <div className = "image-photo-gallery">
                       <div className = "photo-arrows">
                       <i className = "fas fa-chevron-circle-left" onClick={this.props.previousImage}></i>
                       <i className = "fas fa-chevron-circle-right" onClick={this.props.nextImage}></i>
                       </div>
                       <img src = {`./src/images/${this.props.currentImage}.jpg`}/>
                   </div>
               </div>
           )  
   }
}

export default PhotoGallery
