import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
function HorizontalBar({ heading, rate }) {
  return (
    <>
      <h4>{heading}</h4>
      <ProgressBar
        completed={rate}
        maxCompleted={10}
        bgColor="#e8354c"
        isLabelVisible={false}
        width={window.innerWidth < 400 ? window.innerWidth - 20 : "400px"}
        height="10px"
      />
    </>
  );
}

export default HorizontalBar;
