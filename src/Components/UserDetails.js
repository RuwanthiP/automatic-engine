import React, {useState } from 'react'
//useState with object
function UserDetails(){

    const [name,setName] = useState({firstName:'',lastName:''})
    return(
//...name- spread operator
        <form>
            <div>
            
            <input type="text" value={name.firstName}
            onChange={e =>setName({...name,firstName: e.target.value})} placeholder="First Name"/>
            </div>
            
            <input type="text" value={name.lastName}
            onChange={e =>setName({...name,lastName: e.target.value})} placeholder="Last Name"/>
            

            <table>
                <th>First Name</th>
                <th>Last Name</th>
                <tr>
                <td>{name.firstName}</td>
                <td>{name.lastName}</td>
                </tr>
            </table>
            {/*<h1>Your firstName is- {name.firstName}</h1>
            <h1>Your lastName is- {name.lastName}</h1>*/}
            <h2>{JSON.stringify(name)}</h2>

        </form>
            
    )


}

export default UserDetails