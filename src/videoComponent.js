
import React, { Component } from 'react';

import light from"/Users/tagtag/Desktop/tagwa html/PROJECT/React/Crystal house consultants/crystal/src/video/light.mp4"


class videoComponent extends Component{
	state={
		pause:true
	}
	render() {
		return (

			<div className="videoContanier">
				 {/* The video  */}
				<video autoPlay muted loop id="myVideo">
				<source src={light} type="video/mp4"/>
				</video>

				 {/* Optional: some overlay text to describe the video  */}
				<div className="content">

				<p>Our customers typically have a 40% to 55% reduction in their utility and maintenance costs
				 within a reasonably short-period of time</p>
				 {/* Use a button to pause/play the video with JavaScript  */}
				<button id="myBtn" onClick={this.myFunction}>Pause</button>
				</div>

    	</div>

	 	);}

		myFunction=() =>{
		// Get the video
		var video = document.getElementById("myVideo");

		// Get the button
		var btn = document.getElementById("myBtn");

		// Pause and play the video, and change the button text

			if (video.paused) {
				video.play();
				btn.innerHTML = "Pause";
				this.setState({pause:false});
			} else {
				video.pause();
				btn.innerHTML = "Play";
				this.setState({pause:true});
			}
		}


}


export default videoComponent;
