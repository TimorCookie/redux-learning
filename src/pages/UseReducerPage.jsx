import React, { useReducer } from 'react';
import { countReducer } from '../store'
const UseReducerPage = () => {
  const init = initArgs => {
    return initArgs - 0
  }
  const [state, dispatch] = useReducer(countReducer,'0', init)
  return (
    <div>
      <p>你现在看到的state：{state}</p>
      <button onClick={()=>dispatch({type: 'ADD'})}>useReducer add</button>
    </div>
  );
}
export default UseReducerPage;