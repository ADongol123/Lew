import React,{useState} from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Middles from './Components/Second_Component/Middle';
import Bottom from "./Components/Third_Component/Bottom" 
import Navbar from './Components/First_Component/Homepage/Navbar';
import Aboutpage from './Components/First_Component/AboutUs/Aboutpage';
import Homepage from './Components/First_Component/Homepage/Homepage';
import Contact from './Components/Second_Component/Contacts/Contact';
import Footer from './Components/First_Component/Homepage/Footer';
import Cards from './Components/Second_Component/Shopping/Cards';
function App() {
 
  return (
    <div className="App">
    
      <Router> 
      <Navbar/>
    <Switch>
        <Route path="/" exact component={Homepage}  />
        <Route path="/about" component={Aboutpage}>
          <Aboutpage/>
          </Route>
          <Route path="/contact" component={Contact}>
          <Contact/>
          </Route>
           <Route path="/shop" component={Cards}>
          <Cards/>
          </Route>
      </Switch>
      <Footer/>
      </Router>
    
    </div>
  );
}

export default App;
