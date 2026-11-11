import WorkOutsTitle from "@/components/shared/WorkOutsTitle";
import { IWorkout } from "@/types/IWorkOut";
import React from "react";
import WorkCard from "@/components/shared/WorkCard";
 export const getWorkOuts = async (): Promise<IWorkout[]> => {
  // const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
  const API = process.env.NEXT_PUBLIC_API_URL as string;
  const res = await fetch(API);
  if (!res.ok) throw new Error("Failed to fetch workouts");
  return res.json();
};

const Workouts = async () => {
  const works = await getWorkOuts();
  return (
    <div className="container mx-auto px-4 pb-12">
      <WorkOutsTitle />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-6">
        {works.map((work: IWorkout) => {
          return <WorkCard key={work.id} work={work} />;
        })}
      </div>
    </div>
  );
};

export default Workouts;
