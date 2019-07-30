
import React, { Component } from 'react';
import energy from './img/energy1.jpeg'



class ImgComponent extends Component{
	render() {
		return (
   						<div className='home'>


								{/*<div className="homeImg">*/}
								<img  className="img-responsive img-fluid rounded-circle mx-auto d-block " src={energy} alt="energy" style={{padding:"10%"}}/>
						  	{/*</div> */}

								<p className="text h3 .lead text-center"> Crystal House has a diverse team of highly qualified engineers with extensive experience in
								leading and executing energy conservation and auditing projects</p>
							</div>
	 	);}

}


export default ImgComponent;
