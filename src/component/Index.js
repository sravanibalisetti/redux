import React from 'react';
import { increaseValue,decreaseValue } from '../redux/action-creator';
import { useSelector,useDispatch } from 'react-redux';

function Index() {
    const myState=useSelector(state=>state.ourstate.count)
    const dispatch=useDispatch()
    console.log("myState",myState)
  return (
    <div style={{
        fontSize:"18px",
        color:"crimson"
        }}>
        <h1>Sample Counter Application</h1>
        <button style={{
            color:"green",
            backgroundColor:"pink",
            padding:"10px,30px"
        }}  
        onClick={()=>dispatch(increaseValue())}>increament</button>
        <p>{myState}</p>
        <button style={{
            color:"green",
            backgroundColor:"pink",
            padding:"10px,30px"
        }}  
         onClick={()=>dispatch(decreaseValue())}>decreament</button>
    </div>
  )
}

export default Index