import React,{useState} from "react";

import { useForm} from "react-hook-form";

export default function App() {

    const [user,setUser]=useState([]);
    const { register, handleSubmit } = useForm();
    
    const onSubmit = data=> {
        var temp=(JSON.stringify(data));
        var obj = JSON.parse(temp);
    
    
    Let newUser=user;
    
    newUser.push([{
    name:obj.fname,
    Jobrole:obj.jobstate,
    comment:obj.comments,
    sport1:obj.sport1,
    sport2:obj.sport2,
    sport3:obj.sport3,
    gender:obj.gender
    }])

    }

    

    
    
       
// function displayuser(newUser[0]){
    
//     return(
        
    //     <table>
    //             <th>Name</th>
    //             <th>JobRole</th>
    //             <th>Commment</th>
    //             <th>Sport1</th>
    //             <th>Sport2</th>
    //             <th>Sport3</th>
    //             <th>Gender</th>
                
    //             <tr>
    //             <td>{newUser[0].name}</td>
    //             <td>{newUser[0].jobrole}</td>
    //             <td>{newUser[0].sport1}</td>
    //             <td>{newUser[0].sport2}</td>
    //             <td>{newUser[0].sport3}</td>
    //             <td>{newUser[0].gender}</td>
    //             </tr>
    //         </table>
    // )
// }

    
    return (
        <React.Fragment>

        <button>Add new User</button>
        <form onSubmit={handleSubmit(onSubmit)}>

            <label for="fname">Name:</label>
            <input type="name" id="name" name="fname" placeholder="Name" value="{user.fname}" ref={register}
            onChange={e =>setUser({...user,e.target.value})} />
            <br/>
            <br/>

            <label for="inputstate">Job Role:</label>
            <select id="inputState" ref={register} name="jobstate" value="{user.jobstatus}"onChange={e =>setUser({...user,e.target.value})} >
                
                <option>Student</option>
                <option>Teacher</option>
                
            </select>
            <br/>
            <br/>
           

            <label for="Comment">Comment:</label>
            <textarea id="comment" name="comments" ref={register} value="{user.comments}"onChange={e =>setUser({...user,e.target.value})} ></textarea>
            <br/>
            <br/>

            <label for="checkbox">Sports:</label>
            <input type="checkbox" id="gridCheck1" ref={register} name="sport1" value="{user.sport1}"
            onChange={e =>setUser({...user,e.target.value})} />
            <label for="gridCheck">
                Cricket
            </label>
            <input type="checkbox" id="gridCheck1" ref={register} name="sport2" value="{user.sport2}" 
            onChange={e =>setUser({...user,e.target.value})} />
            <label for="gridCheck">
                Volly Ball
            </label>
            <input type="checkbox" id="gridCheck2" ref={register} name="sport3"value="{user.sport3}" 
            onChange={e =>setUser({...user,e.target.value})} />
            <label for="gridCheck">
                Hocky
            </label>
        <br/>
        <br/>
        
        <label for="Radio">Gender:</label>
        <label for="Radio">Male</label>
        <input type="radio" id="male" name="gender" value="male" ref={register} value="{user.gender}"
        onChange={e =>setUser({...user,e.target.value})} ></input>
        <label for="Radio">Female</label>
        <input type="radio" id="female" name="gender" value="female" ref={register} value="{user.gender}"
        onChange={e =>setUser({...user,e.target.value})} ></input>
        <br/>
        <br/>
        
        <button type="submit">Add</button>

        </form>
        <div>
        <table>
                <th>Name</th>
                <th>JobRole</th>
                <th>Commment</th>
                <th>Sport1</th>
                <th>Sport2</th>
                <th>Sport3</th>
                <th>Gender</th>
                
                <tr>
                <td>{newUser[0].name}</td>
                <td>{newUser[0].jobrole}</td>
                <td>{newUser[0].sport1}</td>
                <td>{newUser[0].sport2}</td>
                <td>{newUser[0].sport3}</td>
                <td>{newUser[0].gender}</td>
                </tr>
            </table>
        </div>

        </React.Fragment>
    
    );
    
    

}
