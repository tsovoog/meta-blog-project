import React from "react";

export const InputGlobal = ({ type, placeholder, className }) => {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        className={`border-[2px] px-2 py-1 bg-white rounded-md ${className}`}
      />
    </div>
  );
};
