'use client'
import { WorksContext } from "@/context/WorksProvider";
import { IWorkout } from "@/types/IWorkOut";
import Link from "next/link";
import React, { useContext } from "react";
import { FiBookmark } from "react-icons/fi";
import { toast } from "react-toastify";

const SaveButton = ({work}:{work:IWorkout}) => {
   const{setSaveButton,setCountSave} = useContext(WorksContext);
    const handleButtonSave = () => { 
      setSaveButton((prev)=>[...prev ,work]); 
      setCountSave((prev)=>prev + 1);
      toast.success(`You have add ${work.name}`);
    }
  return (  
    <Link  
    href={`/myplan`}
    onClick={()=>handleButtonSave()} 
     className="btn border border-white/20 bg-transparent text-xs font-medium text-white hover:border-[#C2F800]/50 hover:bg-transparent">
      <FiBookmark /> Save for later
    </Link>
  );
};

export default SaveButton;
