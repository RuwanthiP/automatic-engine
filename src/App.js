import React, {createContext,useState}from 'react'
import Simple from './Components/Simple';


export const MyContext = createContext();

function App() {
//    const [count,dispatch]=useReducer(reducer,initialState);
const [count,setCount]=useState(0);
  return (
      <MyContext.Provider value={{count:count,setCount:setCount}}>
    <div className="App">
        <Simple/>
    </div>
      </MyContext.Provider>
  );

}



export default App;