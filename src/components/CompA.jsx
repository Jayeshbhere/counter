import React from 'react'
import { createContext } from "react";
import CompB from "./CompB"
const firt_name=createContext();
const second_name=createContext();
const CompA=()=>{
    return(
        <>
        <firt_name.Provider value={"Jayesh"}>
          <second_name.Provider value={"Bhere"}>
            <CompB></CompB>
          </second_name.Provider>
        </firt_name.Provider>
        </>
    );
};
export default CompA;
export {firt_name,second_name};