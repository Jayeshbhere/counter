import React from "react"
import {useState} from "react"
const Test=()=>{
const [count,setCount]=useState(0);
return (
    <h1 style={{display:"flex",alignItems:"center",flexDirection:"column"}}>
      <h1>{count}</h1>
      <button onClick={()=>{
        setCount(count+1)
      }}>Update</button>
    </h1>
  );
}
export default Test;