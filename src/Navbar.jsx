import React from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    return(
        <div className="container-fluid bg_color">
            <div className="row">
                <div className="col-10 m-auto"> 
                <nav className="navbar navbar-expand-lg navbar-light">
                
                <NavLink className="navbar-brand"  to="/">Lush </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <NavLink className="nav-link" exact activeClassName="menu-active" aria-current="page" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName="menu-active"  to="/about">About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName="menu-active" to="/services">Services</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName="menu-active" to="/contact">Contact</NavLink>
                    </li>                    
                    </ul>                    
                </div>               
            </nav>
      </div>
    </div>
    </div>
    );
}
export default Navbar;