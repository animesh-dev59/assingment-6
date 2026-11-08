'use client'
import { WorksContext } from "@/context/WorksProvider";
import { IWorkout } from "@/types/IWorkOut";
import React, { useContext } from "react";
import { FiX } from "react-icons/fi";
import { toast } from "react-toastify";

interface ICardRemove {
  work: IWorkout;
  type: "addTab" | "saveTab";
}

const CardRemove = ({ work, type }: ICardRemove) => {
  const { setAddButton, setSaveButton } = useContext(WorksContext);

  const handleRemove = () => {
    if (type === "addTab") {
      setAddButton((prev) => prev.filter((w) => w.id !== work.id));
      toast.success(`${work.name} removed from plan`);
    } else {
      setSaveButton((prev) => prev.filter((w) => w.id !== work.id));
      toast.success(`${work.name} removed from saved`);
    }
  };  
 
  return (
    <button
      onClick={handleRemove}
      aria-label={`Remove ${work.name}`}
      className="text-[#9CA3AF] transition hover:text-white"
    >
      <FiX size={18} />
    </button>
  );
};

export default CardRemove;