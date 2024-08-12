import React from "react";
import Typewriter from 'typewriter-effect';

export default function TypingEffect() {
  return (
    <div className="h1"> 
      <Typewriter
        options={{
          loop: true,
        }}
        onInit={(typewriter) => {
          typewriter
            .typeString('Hello, My Name is Hamiz Muzaffer')
            .callFunction(() => {
              console.log('String typed out!');
            })
            .pauseFor(4000)
            .deleteAll() 
            .callFunction(() => {
              console.log('All strings were deleted');
            })
            .start();
        }}
      />
    </div>
  );
}
