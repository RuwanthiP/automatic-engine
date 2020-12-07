import React, {useContext} from 'react'
import {MyContext} from '../App'

function Simple2 (props){
    const simpleContext2 = useContext(MyContext);

    return(
        <React.Fragment>
            <div>
                {simpleContext2.count}
            </div>
    
        </React.Fragment>
    )


}
export default Simple2;