
import React,{useState} from 'react'
const HookCountt=()=>{

  const intialCount=0;
  const [count,setCount] = useState(intialCount)
  
    return(
      <div>
        count:{count}
        <button onClick={()=>setCount(intialCount)}>Reset</button>
        <button onClick={()=>setCount(prevCount=>prevCount+1)}>+</button>
        <button onClick={()=>setCount(prevCount=>prevCount-1)}>-</button>
        
      </div>
    );

  }
  

export default HookCountt;