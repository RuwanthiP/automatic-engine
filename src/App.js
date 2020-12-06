import React, {createContext,useReducer}from 'react'
import Simple from './Components/Simple';


export const MyContext = createContext();
const initialState=0;
const reducer=(state,action)=>{
    switch (action) {
        case 'increment':
            return state+1
        case 'decrement':
            return state-1
        case 'reset':
            return initialState
        default:
            return state
    }
};
function App() {
   const [count,dispatch]=useReducer(reducer,initialState);
  return (
      <MyContext.Provider value={{countState:count,countDispatch:dispatch}}>
    <div className="App">
    <header className="App-header">
        {count}
        <Simple/>
      </header>
    </div>
      </MyContext.Provider>
  );


  }

export default App;