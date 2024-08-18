import { useState } from "react";

interface ButtonSharedStateProps {
    count: number;
    onClick: () => void;
}

export const ButtonSharedState = ({
    count,
    onClick
  }: ButtonSharedStateProps) => {  
    return (
      <button
        className="bg-blue-500 hover:bg-blue-700 rounded text-white font-bold px-4 py-2"
        onClick={onClick}
      >
        I have been clicked {count} times
      </button>
    )
  }