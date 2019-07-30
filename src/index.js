
import React from 'react';
import ReactDOM from 'react-dom';
import { Route,  BrowserRouter as Router, Switch } from 'react-router-dom'
import { HashRouter } from 'react-router-dom'
import './index.css';
import './App.css';
import App from './App.js';
import NavComponent from './NavComponent.js'
import OurStory from './OurStory.js'
import OurValuesInAction from './OurValuesInAction.js'
import FixingCriticalIssues from './FixingCriticalIssues.js'
import CommercialAndResidentialSolutions from './CommercialAndResidentialSolutions.js'
import Careers from './Careers.js'
import ContactUs from './ContactUs.js'
import Notfound from './Notfound.js'
import Footer from './footerComponent.js'
import * as serviceWorker from './serviceWorker';


const routing = (
  <HashRouter>
    <div>
      <NavComponent/>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/AboutUs" component={OurStory} />
        <Route path="/OurValues" component={OurValuesInAction} />
        <Route path="/FixingIssues" component={FixingCriticalIssues} />
        <Route path="/Solutions" component={CommercialAndResidentialSolutions} />
        <Route path="/Careers" component={Careers} />
        <Route path="/ContactUs" component={ContactUs} />
        <Route component={Notfound} />
      </Switch>
      <Footer/>
    </div>
  </HashRouter>
)
ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
