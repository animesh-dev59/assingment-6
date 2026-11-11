import React from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { FiCalendar, FiBookmark } from 'react-icons/fi';
import { IWorkout } from '@/types/IWorkOut';
import AddButton from '@/components/shared/AddButton';
import SaveButton from '@/components/shared/SaveButton';

interface IWorkViewDetailsPages {
  params: Promise<{ id: string }>;
}

const getWorkOuts = async (): Promise<IWorkout[]> => {
  const API = process.env.NEXT_PUBLIC_API_URL as string;
  const res = await fetch(API);
  if (!res.ok) throw new Error('Failed to fetch workouts');
  return res.json();
};

const WorkViewDetailsPages = async ({ params }: IWorkViewDetailsPages) => {
  const { id } = await params;
  const works = await getWorkOuts();
  const work = works.find((w) => w.id === Number(id));

  if (!work) notFound();

  return (
    <div className="container mx-auto px-4">
      <div className="hero min-h-screen items-start py-6">
        <div className="hero-content w-full max-w-none flex-col items-start gap-8 p-0 lg:flex-row">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-white/5 lg:w-[45%]">
            <Image
              src={work.image}
              alt={work.name}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>

          <div className="w-full lg:w-[55%]">
            <h1 className="text-3xl font-extrabold uppercase text-white lg:text-4xl">
              {work.name}
            </h1>
            <p className="mt-2 text-sm text-gray-400">{work.description}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {work.muscleGroups?.map((group) => (
                <span
                  key={group}
                  className="badge border-none bg-[#C2F800] text-[11px] font-bold text-black"
                >
                  {group}
                </span>
              ))}
            </div>

            <div className="mt-6 overflow-hidden rounded-xl border border-white/10 bg-[#15171d] text-sm">
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-3.5">
                <span className="text-[11px] font-semibold uppercase tracking-widest text-gray-400">Equipment</span>
                <span className="text-white">{work.equipment}</span>
              </div>
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-3.5">
                <span className="text-[11px] font-semibold uppercase tracking-widest text-gray-400">Difficulty</span>
                <span className="text-white">{work.difficulty}</span>
              </div>
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-3.5">
                <span className="text-[11px] font-semibold uppercase tracking-widest text-gray-400">Sets</span>
                <span className="text-white">{work.sets}</span>
              </div>
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-3.5">
                <span className="text-[11px] font-semibold uppercase tracking-widest text-gray-400">Reps</span>
                <span className="text-white">{work.reps}</span>
              </div>
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-3.5">
                <span className="text-[11px] font-semibold uppercase tracking-widest text-gray-400">Duration</span>
                <span className="text-white">{work.duration} min</span>
              </div>
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-3.5">
                <span className="text-[11px] font-semibold uppercase tracking-widest text-gray-400">Calories</span>
                <span className="text-white">{work.caloriesBurned} kcal</span>
              </div>
              <div className="flex items-center justify-between px-5 py-3.5">
                <span className="text-[11px] font-semibold uppercase tracking-widest text-gray-400">Rating</span>
                <span className="text-white">{work.rating}</span>
              </div>
            </div>

            <h2 className="mt-8 text-sm font-extrabold uppercase tracking-wide text-white">
              Instructions
            </h2>
            <ol className="mt-3 list-inside list-decimal space-y-2.5 text-sm text-gray-400">
              {work.instructions?.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>

            <div className="mt-8 flex flex-wrap gap-3">
              <AddButton work={work}/>
              <SaveButton work={work}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkViewDetailsPages;