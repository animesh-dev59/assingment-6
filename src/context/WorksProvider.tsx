 'use client'
import { IWorkout } from '@/types/IWorkOut';
import React, {  createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react'; 
   interface IWorksContext { 
    countSave:number;
    setCountSave:Dispatch<SetStateAction<number>>;
    countPlan:number;
    setCountPlan:Dispatch<SetStateAction<number>>;
    addButton:IWorkout[]
    setAddButton:Dispatch<SetStateAction<IWorkout[]>>; 
    saveButton:IWorkout[]; 
    setSaveButton:Dispatch<SetStateAction<IWorkout[]>>;
   }
  export const WorksContext = createContext<IWorksContext>({ 
  countSave: 0,
  setCountSave:()=>{ },
  countPlan:0,
  setCountPlan:()=>{ },
  addButton:[],
  setAddButton:()=>{ },
  saveButton:[],
  setSaveButton:()=>{},
 })
const WorksProvider = ({children}:{children : ReactNode}) => {
  const [countSave,setCountSave] = useState<number>(0);
  const [countPlan,setCountPlan] = useState<number>(0);
  const [addButton,setAddButton] = useState<IWorkout[]>([]);
  const [savedButton,setSaveButton]= useState<IWorkout[]>([]);  
  const shereData ={   
    countSave,setCountSave,countPlan,setCountPlan,addButton,setAddButton,savedButton,setSaveButton, 
  }
  return (<WorksContext.Provider value={shereData}> 
   {children}</WorksContext.Provider>
  );
};

export default WorksProvider;