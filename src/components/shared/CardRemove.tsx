"use client";
import { WorksContext } from "@/context/WorksProvider";
import { IWorkout } from "@/types/IWorkOut";
import { useContext } from "react";
import { FiX } from "react-icons/fi";
import { toast } from "react-toastify";

interface ICardRemove {
  work: IWorkout;
  type: "addTab" | "saveTab";
}

const CardRemove = ({ work, type }: ICardRemove) => {
  const { removeFromAdd, removeFromSave } = useContext(WorksContext);

  const handleDelete = () => {
    if (type === "addTab") {
      removeFromAdd(work.id);
      toast.success(`${work.name} removed from plan`);
    } else if (type === "saveTab") {
      removeFromSave(work.id);
      toast.success(`${work.name} removed from saved`);
    }
  };

  return (
    <button
      onClick={handleDelete}
      aria-label={`Remove ${work.name}`}
      className="text-[#9CA3AF] transition hover:text-white"
    >
      <FiX size={18} />
    </button>
  );
};

export default CardRemove;