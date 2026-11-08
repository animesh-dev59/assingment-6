"use client";
import AddAndSaveTabs from "@/components/myplanshoreted/AddAndSaveTabs";
import AddAndSvaeTabsNoDATa from "@/components/myplanshoreted/AddAndSvaeTabsNoDATa";
import { WorksContext } from "@/context/WorksProvider";
import { IWorkout } from "@/types/IWorkOut";
import Link from "next/link";
// import { IWorkout } from "@/types/IWorkOut";

import React, { useContext } from "react";

const MyPlan = () => {
  const { addButton, saveButton } = useContext(WorksContext);
  return (
    <div className="container mx-auto">
      <div>
        {/* name of each tab group should be unique */}
        <div className="tabs tabs-border">
          <input
            type="radio"
            name="my_tabs_2"
            className="tab text-yellow-500"
            aria-label="Today's Plan"
          />
          <div className="tab-content border-base-300 p-10">
            {addButton.length > 0 ? addButton.map((work:IWorkout,ind:number)=>{ 
                     return <AddAndSaveTabs key={ind} work={work}/>
            }) : (  <AddAndSvaeTabsNoDATa/>
            )}
          </div>

          <input
            type="radio"
            name="my_tabs_2"
            className="tab text-yellow-500"
            aria-label="Saved"
            defaultChecked
          />
          <div className="tab-content border-base-300  p-10">
             {saveButton.length > 0 ? saveButton.map((work:IWorkout,ind:number)=>{ 
                     return <AddAndSaveTabs key={ind} work={work}/>
            }) : (  <AddAndSvaeTabsNoDATa/>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default MyPlan;
