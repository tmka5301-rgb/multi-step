import React from "react";

export const Button = ({ step, handleClick, handlePrev }) => {
  return (
    <div className="pt-11 flex text-center justify-center items-center space-x-2">
      <button
        className={`h-11 bg-white border grow rounded-md ${
          step === 0 ? "hidden" : "block"
        } ${step === 3 ? "hidden" : "block"}`}
        onClick={handlePrev}
      >
        Back
      </button>
      <button
        className={`h-11 bg-black border text-white rounded-md grow ${
          step === 3 ? "hidden" : "block"
        }`}
        onClick={handleClick}
      >
        {step === 2 ? `Submit ${step + 1} /3 ` : `Continue ${step + 1} / 3`}
      </button>
    </div>
  );
};
