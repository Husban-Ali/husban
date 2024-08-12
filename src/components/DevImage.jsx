import React from "react";
import Lottie from "lottie-react";
import animationData from "../../public/hero/Animation - 1723456785880.json";

export const DevImage = ({ containerStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      <Lottie animationData={animationData} loop={true} />
    </div>
  );
}
