import React from 'react';
import {BrowserRouter, Route,Switch} from 'react-router-dom';
import Home from './Components/Home';
import AboutUs  from './Components/AboutUs';
import UseMe from './Components/UseMe';
import Navbar from './Components/Navbar';

function App() {

return(

  
          <div>
            <BrowserRouter>
              <Navbar/>
              <Switch>
              <Route path="/about">
                  <AboutUs/>
              </Route>
              <Route path="/useme">
                  <UseMe/>
              </Route>
              <Route path="/">
                  <Home/>
              </Route>
              </Switch>
              
              
            </BrowserRouter>
          </div>

     
  
)

}

export default App;