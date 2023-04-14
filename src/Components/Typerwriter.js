import React, {useState, useEffect} from "react";
import {useTypewriter} from 'react-simple-typewriter'

const Typewriter = () => {
    cosnt [currentText, setCurrentText] = useState("")
    useEffect(()=>{
        setCurrentText((Value)=> )
    },[])

    return ( 
        <>
        <span>{currentText}</span>
        </>
    );
}

 
export default Typewriter;