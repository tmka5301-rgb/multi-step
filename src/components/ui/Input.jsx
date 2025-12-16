import React from "react";
import { Label } from "./Label";
import { ErrorMessage } from "./ErrorMessage";

export const Input = ({ placeholderName, LabelName, type, hidden = false }) => {
  return (
    <div className="flex flex-col grow pb-2">
      <Label val={LabelName} />
      <input
        hidden={hidden}
        className="border rounded-md p-2 h-11"
        placeholder={placeholderName}
        type={type}
      />
      {/* <ErrorMessage /> */}
    </div>
  );
};
