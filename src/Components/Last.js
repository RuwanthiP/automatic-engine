import React, { useState,useEffect } from 'react';
import axios from 'axios';


function Last() {
    const [user, setUser] = useState([{
        id:1,
        name:{
            title: 'Mr',
            first:'Brad',
            last:'Gibson',
        },
        
        location:{
            city:'kilcole'
        },
        
        email:'BroadcastChannel.git@SpeechGrammarList.com',
        
        dob:{
            date:'1996-05-02',
            age:24,
        },
        picture:{
                medium:'https://randomuser.me/api/portraits/med/men/0.jpg'
                },
    }]);
    
    useEffect(() => {
      axios.get("https://randomuser.me/api/?results=20").then((Response) => {
        if (Response.data) {
          
            setUser(Response.data.results);
            console.log(Response.data.results);
        
        } else {
            alert("not found");
        }
      });
    }, [setUser]);

    
    const display = user.map((user) => {
      
      return (
      <div>
      <p key={user.name.first}>{`${user.name.title} ${user.name.first}  ${user.name.last}`}</p>
      <p key={user.gender}>{user.gender}</p>
      <p key={user.email}>{user.email}</p>
      <p key={user.dob.date}>{user.dob.date}</p>
      <p key={user.location.city}>{user.location.city}</p>
      
      <img class="img-fluid" width="60" src={user.picture.medium}/>
      <hr/>
      
      </div>

      )
    });
  
    return (
        <React.Fragment>
            <div>{display}</div>
           
        </React.Fragment>
    );
  }
  
  export default Last;