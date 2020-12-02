import React from 'react';
import {BrowserRouter, Route,Switch,Link} from 'react-router-dom';
import Home from './Components/Home';
import AboutUs  from './Components/AboutUs';
import UseMe from './Components/UseMe';


function App() {

return(

  
          <div>
            <BrowserRouter>

            <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/useme">Users</Link>
            </li>
          </ul>
        </nav>
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