import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import UserDetails from './Components/UserDetails';
import Hookforms from './Components/Hookforms';

ReactDOM.render(
  <React.StrictMode>
    
    <UserDetails/>
    <Hookforms/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
