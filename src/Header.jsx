import React from 'react';
import logo from './Image/logo.jpg';
const Header =()=>{
    return(
        <div className='header'>
        <img src={logo} alt="logo" height="50px" width="70px"></img>
        <h1>MRK KEEP</h1>
        </div>
    );
}
export default Header;