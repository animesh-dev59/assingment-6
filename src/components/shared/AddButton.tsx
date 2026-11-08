'use client'
import { WorksContext } from "@/context/WorksProvider";
import { IWorkout } from "@/types/IWorkOut";
import React, { useContext } from "react";
import { FiCalendar } from "react-icons/fi";
import { toast } from "react-toastify";

const AddButton = ({work}:{work:IWorkout}) => { 
  const{setAddButton,setCountPlan} = useContext(WorksContext);
  const handleButtonAdd = () => { 
    setAddButton((prev)=>[...prev ,work]); 
    setCountPlan((prev)=>prev + 1);
    toast.success(`You have add ${work.name}`);
  }
   
  return (
    <button 
    onClick={()=>handleButtonAdd()}  
     className="btn border-none bg-[#C2F800] text-xs font-bold text-black hover:bg-[#d4ff33]">
      <FiCalendar /> Add to today&apos;s plan
    </button>
  );
};

export default AddButton;
