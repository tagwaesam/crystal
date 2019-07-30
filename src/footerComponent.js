import React, { Component } from 'react';
import './App.css';






class Footer extends Component {
  render() {
    return (
        <div className="footer">
          {/* Footer */}
          <footer className="page-footer font-small blue pt-4">

              {/* Footer Links */}
              <div className="container-fluid text-center text-md-left">

                {/* Grid row */}
                <div className="row">

                  {/* Grid column */}
                  <div className="col-md-6 mt-md-0 mt-3">

                    {/* Content */}
                    <h5 className="text-secondary text-uppercase">Quick link</h5>
                    {/* <p>Here you can use rows and columns here to organize your footer content.</p>*/}

                      {/* Links */}


                      <ul className=" footer-custom list-unstyled">
                        <li>
          							 <a className="text-secondary" href="/"   >Home</a>
          						  </li>
          	            <li>
          	              <a className="text-secondary" href="/AboutUs"   >About Us</a>
          	            </li>
          							<li>
          								<a className="text-secondary" href="/OurValues"   >Our Values in Action</a>
          							</li>
          							<li>
          								<a className="text-secondary" href="/FixingIssues"   >Fixing Critical Issues</a>
          							</li>
          							<li>
          								<a className="text-secondary" href="/Solutions"   >Commercial & Residential Solutions</a>
          							</li>
          							<li>
          								<a className="text-secondary" href="/Careers"   >Careers</a>
          							</li>

          	            <li>
          	              <a   className="text-secondary" href="/ContactUs">Contact Us</a>
          	            </li>
                      </ul>

                    </div>

                </div>
                {/* Grid row */}

              </div>
              {/* Footer Links */}

              {/* Copyright */}
              <div className="text-secondary footer-copyright text-center py-3">© 2019 Copyright:
                <a className="text-secondary" href="https://mdbootstrap.com/education/bootstrap/"> CRYSTALHOUSECONSULTANTS.com</a>
              </div>
              {/* Copyright */}

            </footer>
            {/* Footer */}



          </div>


        );
        }
        }

export default Footer;
