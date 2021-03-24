import './App.css';
import React from 'react';
import Home from './components/pages/Home';
import Aboutus from './components/pages/Aboutus';
import Contact from './components/pages/Contact';
import Navbar from './components/inc/Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Footer from './components/inc/Footer';
import State from './components/pages/Statemanaging';
import API from './components/pages/Api';


function App() {
  return (
    <Router>

    <div className="App">
    <Navbar/>
      <Switch>
      <Route exact path="/">
      <Home/>
      </Route>

      <Route path="/about">
      <Aboutus/>
      </Route>

      <Route path="/contact">
      <Contact/>
      </Route>

      <Route path="/state">
      <State/>
      </Route>

      <Route path="/api">
      <API/>
      </Route>
      
      </Switch>
    <Footer/>

    </div>
    </Router>
  );
}

export default App;
