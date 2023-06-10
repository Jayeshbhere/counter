import React from 'react'
import {firt_name,second_name} from "./CompA" 
import { useContext } from 'react'

const CompC=()=>{
    const fname=useContext(firt_name);
    const lname=useContext(second_name);
    return(
        <div>
            <h1>My first name is {fname}</h1>
            <h1>My last name is  {lname}</h1>
        </div>
    );
}
export default CompC;
