import React from "react";
import { Label } from "./Label";
import { ErrorMessage } from "./ErrorMessage";

export const Input = ({
  placeholderName,
  LabelName,
  name,
  type,
  onChange,
  errors,
  value,
  hidden = false,
}) => {
  return (
    <div className="flex flex-col grow pb-2">
      <Label value={LabelName} />
      <input
        hidden={hidden}
        value={value}
        name={name}
        onChange={onChange}
        className="border rounded-md p-2 h-11"
        placeholder={placeholderName}
        type={type}
      />
      <ErrorMessage errors={errors[name]} />
    </div>
  );
};
