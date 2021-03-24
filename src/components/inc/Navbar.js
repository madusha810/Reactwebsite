import React from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
    return (
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
   
    <Link to="/" class="navbar-brand">Madusha methsiri</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse float-right" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
         
          <Link to="/" class="nav-link active">Home</Link>
        </li>
        <li class="nav-item">
          
          <Link to="/about"class="nav-link">Aboutus</Link>
        </li>

        <li class="nav-item">
          
          <Link to="/contact"class="nav-link">Contact</Link>
        </li>

        <li class="nav-item">
          
          <Link to="/state"class="nav-link">State manging</Link>
        </li>

        
        <li class="nav-item">
          
          <Link to="/api"class="nav-link">API</Link>
        </li>
        
      </ul>
    
    </div>
  </div>
</nav>
    );


}

export default Navbar;