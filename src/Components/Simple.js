import React, {useContext} from 'react'
import {MyContext} from '../App'
import Simple2 from './Simple2';

function Simple (props) {
 const simpleContext=useContext(MyContext);
    return (
        <React.Fragment>
        <div>
          <button onClick={()=>{simpleContext.setCount(15)}}>
            Count Increment
          </button>
          <Simple2/>
        </div>
        </React.Fragment>
    );
}
export default Simple;