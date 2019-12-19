import React from 'react';
//import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Component/Home';
import Contact from './Component/DashBoard';
import Login from './Component/Login';

import { Route, Link, BrowserRouter as Router,Switch } from 'react-router-dom';

import WeatherDetails from './Component/Weather/WeatherDetails';
//import Switch from "react-switch-dom";
class App extends React.Component {
  
  
  render() {
    
    return (
    
      <Router>    
      <div className="container">    
        <nav className="navbar navbar-expand-lg navheader">    
          <div className="collapse navbar-collapse" >    
            <ul className="navbar-nav mr-auto">    
              <li className="nav-item">    
                   
              </li>    
              <li className="nav-item">    
             
              </li>      
            </ul>    
          </div>    
        </nav> <br />    
        <Switch>    
          <Route exact path='/Login' component={Login} />    
          <Route path='/Signup' component={Home} />    
           <Route exact path='/' component={Login} />  
           <Route exact path='/Weather' component={WeatherDetails} />    
           
        </Switch>    
        <Switch>  
        <Route path='/Dashboard' component={Contact} />    
        </Switch>  
      </div>    
    </Router>   
    
     );
  }
};



export default App;
