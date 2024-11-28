import { useDispatch, useSelector } from "react-redux"
import { changeColor} from "./colorSlice";
import { useState } from "react";

const App=()=>{
  const bgcolor = useSelector((state)=>state.bgcolor.color);
  const dispatch=useDispatch();
  const [val,setVal]=useState("");
  return(
    <>
    <h4 style={{marginTop:"30px"}}>welcome to toolkit Example</h4>
    Enter color: <input type="txet" value={val} onChange={(e)=>{setVal(e.target.value)}}/>
    <button onClick={()=>dispatch(changeColor(val))}>change color</button>
    <br /><br />
    <div style={{width:"400px",height:"300px",backgroundColor:bgcolor}}>

    </div>
    </>
  )
}
export default App;

