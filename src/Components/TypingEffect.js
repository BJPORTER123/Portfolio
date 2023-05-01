import React from "react";
import Typewriter from 'typewriter-effect'

const TypingEffect = () => {
    return ( 
        <Typewriter
        options={{
            autoStart: true,
            loop: true
        }}
        onInit={(typewriter) =>{
            typewriter.start()
            typewriter.typeString("Hello, I'm a Softw")
            typewriter.pauseFor(1000)
            typewriter.deleteChars(5)
            typewriter.pauseFor(800)
            typewriter.typeString(" Junior Software Developer")
            typewriter.deleteAll()
            typewriter.pauseFor(100)
            typewriter.typeString(" Welcome to my E-Portfolio!")
            typewriter.pauseFor(1000)
          
        }}/>
     );
}
 
export default TypingEffect;