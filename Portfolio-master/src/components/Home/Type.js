import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "#secret do not watch all sections in my Webpage , im a beginner not expert!!",
          "AI & ML researcher  ",
          "Software Developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 70,
      }}
    />
  );
}

export default Type;
