"use client";
import AddAndSaveTabs from "@/components/myplanshoreted/AddAndSaveTabs";
import AddAndSvaeTabsNoDATa from "@/components/myplanshoreted/AddAndSvaeTabsNoDATa";
import { WorksContext } from "@/context/WorksProvider";
import { IWorkout } from "@/types/IWorkOut";

import React, { useContext, useState } from "react";


type TabType = "addTab" | "saveTab";

const MyPlan = () => {
  const { addButton, saveButton } = useContext(WorksContext);
  const [sortBy, setSortBy] = useState<
    "rating" | "duration" | "caloriesBurned"
  >("rating");
  const [activeTab, setActiveTab] = useState<TabType>("addTab");
  const sortWorks = (worksData: IWorkout[]) => {
    const sortedWorks = [...worksData];
    if (sortBy === "rating") {
      sortedWorks.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "duration") {
      sortedWorks.sort((a, b) => b.duration - a.duration);
    } else if (sortBy === "caloriesBurned") {
      sortedWorks.sort((a, b) => b.caloriesBurned - a.caloriesBurned);
    }
    return sortedWorks;
  };
  const sortedAddButtonWorks = sortWorks(addButton);
  const sortedSaveButtonWorks = sortWorks(saveButton);

  const activeWorks = activeTab === "addTab" ? addButton : saveButton;
  const countSum = activeWorks.length;
  const totalDutation = activeWorks.reduce(
    (sum, work) => sum + work.duration,
    0,
  );
  const totalCaloris = activeWorks.reduce(
    (sum, work) => sum + work.caloriesBurned,
    0,
  );
  return (
    <div className="container mx-auto ">
      <div className="text-white">
        <div className="stats my-5 w-full rounded-2xl border border-white/5 bg-[#15171d] stats-vertical sm:stats-horizontal">
          <div className="stat px-6 py-5">
            <div className="stat-title text-[11px] text-[#9CA3AF]">
              Exercises
            </div>
            <div className="stat-value text-4xl text-[#C2F800]">{countSum}</div>
          </div>

          <div className="stat px-6 py-5">
            <div className="stat-title text-[11px] text-[#9CA3AF]">Minutes</div>
            <div className="stat-value text-4xl text-white">
              {totalDutation}
            </div>
          </div>

          <div className="stat px-6 py-5">
            <div className="stat-title text-[11px] text-[#9CA3AF]">
              Calories
            </div>
            <div className="stat-value text-4xl text-white">{totalCaloris}</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-10 gap-4 bg-[#0f1115] rounded-4xl pt-5 mx-4 ">
        <div className="tabs tabs-border md:col-span-7">
          <input
            type="radio"
            name="my_tabs_2"
            className="tab text-yellow-500"
            aria-label="Today's Plan"
            checked={activeTab === "addTab"}
            onChange={() => setActiveTab("addTab")}
          />
          <div className="tab-content  p-10">
            {addButton.length > 0 ? (
              sortedAddButtonWorks.map((work: IWorkout, ind: number) => {
                return <AddAndSaveTabs  key={work.id} work={work} type="addTab" />;
              })
            ) : (
              <AddAndSvaeTabsNoDATa />
            )}
          </div>

          <input
            type="radio"
            name="my_tabs_2"
            className="tab text-yellow-500"
            aria-label="Saved"
            checked={activeTab === "saveTab"}
            onChange={() => setActiveTab("saveTab")}
          />
          <div className="tab-content   p-10">
            {saveButton.length > 0 ? (
              sortedSaveButtonWorks.map((work: IWorkout, ind: number) => {
                return <AddAndSaveTabs key={work.id} work={work} type="saveTab"/>;
              })
            ) : (
              <AddAndSvaeTabsNoDATa />
            )}
          </div>
        </div>
        <div className="md:col-span-3 md:mt-2  ">
          <select
            value={sortBy}
            onChange={(e) =>
              setSortBy(
                e.target.value as "rating" | "duration" | "caloriesBurned",
              )
            }
            className="select appearance-none mt-8 ml-8 bg-[#151922] text-amber-50"
          >
            <option disabled={true}>sortBy</option>
            <option value={"rating"}>rating</option>
            <option value={"duration"}>duration</option>
            <option value={"caloriesBurned"}>caloriesBurned</option>
          </select>
        </div>
      </div>
    </div>
  );
};
export default MyPlan;
