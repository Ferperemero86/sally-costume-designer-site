import React, { Component } from 'react';
import PhotoGallery from './photogallery';
import ReactPlayer from 'react-player'

class Work extends Component {
    constructor(props) {
        super(props)
        this.state = {
            photoGallery: 'false',
            currentImage: ''
        }
        this.showGallery = this.showGallery.bind(this);
        this.hideGallery = this.hideGallery.bind(this);
        this.nextImage = this.nextImage.bind(this);
        this.previousImage = this.previousImage.bind(this);

        this.array = ["2","3","4","5","6","7","8","1"];
        this.currentImage = '';
        this.closeGallery = '';
    }

    showGallery(e) {
        this.currentImage = e.currentTarget.id;
        this.setState({
            photoGallery: 'true',
        })
    }

    hideGallery() {
        this.setState({
            photoGallery: 'false'
        })
    }

    nextImage() {
       this.currentImage = parseInt(this.currentImage) + 1;
       this.currentImage = this.currentImage.toString();
       this.setState({
           currentImage: this.currentImage
       })
       console.log(typeof this.currentImage);
       if (this.currentImage === "9") {
           this.currentImage = "1";
       } 
    }

    previousImage() {
        this.currentImage = parseInt(this.currentImage) - 1;
        this.currentImage = this.currentImage.toString();
        this.setState({
            currentImage: this.currentImage
        })
        if (this.currentImage === "0") {
            this.currentImage = "8";
        } 
    }

    render() {
        if(this.state.photoGallery === 'false') {
            let images = this.array.map((image) => {
                return (
                    <div className = "image-div" id = {image} key = {image} onClick = {this.showGallery}>
                        <img  src = {`./src/images/${image}.jpg`}/>
                    </div>
                )
                
             });
             return (
                <div className = "gallery">
                    <div className = 'player-wrapper'>
                        <ReactPlayer
                            className = 'react-player'
                            url = './src/images/sallyvideo.MP4'
                            width = '100%'
                            height ='100%'
                            controls = {true}
                        />
                    </div>
                    {images}
                </div>
             )
            
        } else {
            return (   
                <PhotoGallery 
                    currentImage = {this.currentImage} 
                    hideGallery = {this.hideGallery}
                    nextImage = {this.nextImage}
                    previousImage = {this.previousImage}
                />
             )
        }
        
    }
}

export default Work