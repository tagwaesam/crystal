
// source: https://www.w3schools.com/bootstrap4/bootstrap_navbar.asp

import React, { Component } from 'react';
import logo from "./img/logo.jpeg"



class NavComponent extends Component{
	render() {
		return (

	      <nav className="navbar navbar-expand-md bg-dark navbar-dark ">
	        {/*  Brand */ }
	        <a href="/" className="navbar-brand" >
						<img src={logo} alt="Logo" style={{width:'40px'}}/>
	          Crystal House Consultants
	        </a>

	         {/* Toggler/collapsibe Button*/ }
	        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
	          <span className="navbar-toggler-icon"></span>
	        </button>

	         {/* Navbar links */ }
	        <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
	          <ul className="navbar-nav ">
							<li className="nav-item">
							 <a href="/" className="nav-link" >Home</a>
						  </li>
	            <li className="nav-item">
	              <a href="/AboutUs" className="nav-link" >About Us</a>
	            </li>
							<li className="nav-item">
								<a href="/OurValues" className="nav-link" >Our Values</a>
							</li>
							<li className="nav-item">
								<a href="/FixingIssues" className="nav-link" >Fixing Issues</a>
							</li>
							<li className="nav-item">
								<a href="/Solutions" className="nav-link" >Solutions</a>
							</li>
							<li className="nav-item">
								<a href="/Careers" className="nav-link" >Careers</a>
							</li>
	            <li className="nav-item">
	              <a href="/ContactUs" className="nav-link" >Contact Us</a>
	            </li>
	          </ul>
	        </div>
	      </nav>

	 	);}

}


export default NavComponent;
