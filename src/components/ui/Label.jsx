import React from "react";

export const Label = ({ value }) => {
  return (
    <div className="flex font-semibold">
      <div>{value}</div>
      <div className="text-red-500">*</div>
    </div>
  );
};
