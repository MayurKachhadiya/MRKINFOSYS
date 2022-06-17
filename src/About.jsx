import React from "react";
import Common from "./Common";
import logo from "../src/Image/logo5.png";

const About = ()=>{
    return (
<>
        <Common name="Welcome to About page" imgsrc={logo} visit="/contact" btname="Contact Now"/>
    </>
    );
}
export default About;