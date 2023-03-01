import React from "react";
import { BsCheck } from "react-icons/bs";
const Note = ({ text }) => {
  return (
    <div>
      <p className="flex  gap-[18px] mt-9">
        <BsCheck size={20} className="bg-[#FAD69C] h-5 w-5 rounded-full" />
        <span>{text}</span>
      </p>
    </div>
  );
};

export default Note;
