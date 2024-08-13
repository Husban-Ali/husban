import React from "react";
import Typewriter from 'typewriter-effect';

export default function TypingEffect() {
  return (
    <div className="h1"> 
      <Typewriter
       
        onInit={(typewriter) => {
          typewriter
            .typeString('Hello, My Name is Hamiz Muzaffer')
            .callFunction(() => {
            })
            .pauseFor(4000)
            .callFunction(() => {
            })
            .start();
        }}
      />
    </div>
  );
}
