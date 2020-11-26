import React, { useState, useEffect } from 'react';

import axios from 'axios';

function App() {
  const [user, setUser] = useState(null)

  const instance = axios.create({
    baseURL: "https://randomuser.me/api",
    headers: {
      "Content-Type": "text/html; charset=UTF-8",
    }
  });
  useEffect(async () => {
    const config = {
      'method': 'get',
      'url': '/?results=10'
    };
    const res = await instance.request(config);
    console.log(res)
    setUser(res.data.results[0])
  }, [user]);

  async function get() {
    const config = {
      'method': 'get',
      'url': '/?gender=female'
    };
    const res = await instance.request(config);
    console.log(res)
  }
  return (
    <div align="center">
      {
        user &&
        <div align="center">
          
          <h2>YourName is = {user.name.title + '  ' + user.name.first +'  ' + user.name.last}</h2>
          <h2>Your City is = {user.location.city}</h2>
          <h2>Your gender is = {user.gender}</h2>
          <h2>Your Age is = {user.dob.age}</h2>
          <h2>Your Email is={user.email}</h2>
          <img
            src={user.picture.medium} alt="ddd" />

         
        </div>
  
      }
    )

}



export default App;