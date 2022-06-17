import React from "react";
import { NavLink } from "react-router-dom";
import './index.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
const Menu = () =>{
    return(
        <>
        <div className="container-fluid nav_bg">
        <div className="row">
        <div className="col-10 mx-auto"> 
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
     <NavLink className="navbar-brand" to="/">MRKINFOSYS</NavLink>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink activeClassName="menu_active" exact className="nav-link active" aria-current="page" to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink activeClassName="menu_active" exact className="nav-link" to="/about">About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink activeClassName="menu_active" exact className="nav-link" to="/service">Service</NavLink>
          </li>
          <li className="nav-item">
            <NavLink activeClassName="menu_active" exact className="nav-link" to="/contact">Contact</NavLink>
          </li>
        </ul>
        </div>
    </div>
  </nav>
  </div>
  </div>
  </div>
        </>
    );
}
export default Menu;