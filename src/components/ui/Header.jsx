import React from "react";

export const Header = () => {
  return (
    <div>
      <div className="space-y-2 mb-7">
        <div>
          {" "}
          <img className="w-15 h-15" src="./pinecone.png" alt="" />
        </div>
        <h2 className="text-[26px] font-bold">Join Us! 😎</h2>
        <p className="text-[18px] text-gray-400">
          Please provide all current information accurately.
        </p>
      </div>
    </div>
  );
};
