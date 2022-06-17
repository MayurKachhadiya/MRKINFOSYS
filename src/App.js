import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Contact from './Contact';
import Menu from './Menu';
import About from './About';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Service from './Service';
import Home from './Home';
import Footer from './Footer';
const App = () =>{
  return(
    <>
    <Menu/>
    {/* <About/>
    <Contact/> */}
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/service' component={Service} />        
      <Route exact path='/contact' component={Contact} />
    </Switch>
    <Footer/>
        <Redirect path='/'></Redirect>
    </> 
  );
 };
 export default App;
