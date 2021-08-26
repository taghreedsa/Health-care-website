import React from 'react'
import { Navbar , Button} from 'react-bootstrap'
import { Link } from "react-router-dom";
import "./Navbar.css"


  /* ===================
      Navigation to pages 
     ===================*/

     
export default function NavBar(props) {
    return (
        
       
      <nav class="navbar navbar-expand-lg navbar-light ">
      <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <Link className="navbar-brand" href="#"><span className="fs-3 fw-bold">U</span>nica 
    <i className="fa fas fa-leaf"></i>
    </Link>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">

        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>

        <li class="nav-item">
          <Link class="nav-link" to="/about">About Us</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/articles">Articles</Link>
        </li>

        
        
      </ul>
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        
        <li class="nav-item">
          <Link class="nav-link" to="/SignUp">SignUp</Link>
        </li>

        
        <li class="nav-item">
          <Link class="nav-link " to="/login"  >LogIn</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link " to="/profile"  ><i className="fa fas fa-user text-dark"></i></Link>
        </li> 
      </ul>
      
    </div>
    
     <button className ="log-btn"
            onClick={() => {
              console.log("Logging Out!");
              localStorage.removeItem("jwtToken");
              props.loginCallback();
            }}
          >
            <i class="fa fa-sign-out text-dark" ></i>
          </button>

          
  </div>
</nav>
      
    )
}
