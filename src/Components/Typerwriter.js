import React from "react";
import TypewriterEffect  from "typewriter-effect";

const Typerwriter = () => {
  return (
    <TypewriterEffect
    onInit={(typewriter) =>{
        typewriter.typeString("Hello")
        .start()
    }}
    />
  );
};

export default Typerwriter;
