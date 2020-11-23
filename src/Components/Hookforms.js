import React,{useState} from "react";

import { useForm} from "react-hook-form";

export default function App() {

    const [user,setUser]=useState([]);

    const[data,setData]=useState({fname:'',jobState:'',comment:'',sport1:'',sport2:'',sport3:'',gender:''})
    
    const addUser=(e)=>{ 
        e.preventDefault();
        setUser([...user,{fname:data.fname,jobState:data.jobState,comment:data.comment,sport1:data.sport1,sport2:data.sport2,sport3:data.sport3,gender:data.gender}]) 
        
    }

    const { register, handleSubmit } = useForm();
    
    const onSubmit = data=> {
        var temp=(JSON.stringify(data));
        var obj = JSON.parse(temp);
    }
    
    return (
        <React.Fragment>

            
            <form onSubmit={handleSubmit(onSubmit)}>

                <label for="fname">Name:</label>
                <input type="name" id="fname" name="fname" placeholder="Name" value={data.fname} ref={register}
                onChange={e =>setData({...data,fname:e.target.value})} />
                <br/>
                <br/>

                <label for="jobState">JobState:</label>
                <select id="jobState" ref={register} name="jobState" value= {data.jobState} onChange={e =>setData({...data,jobState:e.target.value})} >
                    
                    <option>Student</option>
                    <option>Teacher</option>
                    
                </select>
                <br/>
                <br/>
            

                <label for="Comment">Comment:</label>
                <textarea id="comment" name="comment" ref={register} value={data.comment}onChange={e =>setData({...data,comment:e.target.value})} ></textarea>
                <br/>
                <br/>

                <label for="checkbox">Sports:</label>
                <input type="checkbox" id="cricket" ref={register} name="sport1" value={data.sport1}
                onChange={e =>setData({...data,sport1:e.target.id})} />
                <label for="gridCheck">
                    Cricket
                </label>
                <input type="checkbox" id="vollyball" ref={register} name="sport2" value={data.sport2}
                onChange={e =>setData({...data,sport2:e.target.id})} />
                <label for="gridCheck">
                    Volly Ball
                </label>
                <input type="checkbox" id="hocky" ref={register} name="sport3"value={data.sport3} 
                onChange={e =>setData({...data,sport3:e.target.id})} />
                <label for="gridCheck">
                    Hocky
                </label>
                <br/>
                <br/>
                
                <label for="Radio">Gender:</label>
                <label for="Radio">Male</label>
                <input type="radio" id="male" name="gender" ref={register} value={data.gender}
                onChange={e =>setData({...data,gender:e.target.id})} ></input>
                <label for="Radio">Female</label>
                <input type="radio" id="female" name="gender" ref={register} value={data.gender}
                onChange={e =>setData({...data,gender:e.target.id})} ></input>
                <br/>
                <br/>
                
                <button onClick={addUser}>Add</button>

            </form>
            
            
            <div>
            
            <table border="2">
                <tr>
                    <th>Name</th>
                    <th>JobRole</th>
                    <th>Comment</th>
                    <th>Sport1</th>
                    <th>Sport2</th>
                    <th>Sport3</th>
                    <th>Gender</th>
                </tr>
                    {
                        user.map(newUser => (
                        <tr>
                            <td>{newUser.fname}</td>
                            <td>{newUser.jobState}</td>
                            <td>{newUser.comment}</td>
                            <td>{newUser.sport1}</td>
                            <td>{newUser.sport2}</td>
                            <td>{newUser.sport3}</td>
                            <td>{newUser.gender}</td>
                        </tr>
                        ))
                    } 
        
            </table>
            <h4>Your Name is = { data.fname}</h4>
            <h4>Your Job Role is = { data.jobState}</h4>
            <h4>Your comment is = { data.comment}</h4>
            <h4>Your Sport1 is = { data.sport1}</h4>
            <h4>Your Sport2 is = { data.sport2}</h4>
            <h4>Your Sport3 is = { data.sport3}</h4>
            <h4> Gender  =  { data.gender}</h4> 
            

            
            </div>

        </React.Fragment>
    
    );

                }

