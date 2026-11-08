import React from "react";
import { FiBookmark } from "react-icons/fi";

const SaveButton = () => {
  return (
    <button className="btn border border-white/20 bg-transparent text-xs font-medium text-white hover:border-[#C2F800]/50 hover:bg-transparent">
      <FiBookmark /> Save for later
    </button>
  );
};

export default SaveButton;
