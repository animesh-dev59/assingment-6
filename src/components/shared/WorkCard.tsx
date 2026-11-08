import React from 'react';
import { FiClock } from "react-icons/fi";
import { FaFire, FaRegStar } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { IWorkout } from '@/types/IWorkOut';

const WorkCard = ({work}:{work:IWorkout}) => {
  return ( <Link href={`/workouts/${work.id}`} className="group">
              <div className="card h-full w-full overflow-hidden rounded-2xl border border-white/5 bg-[#15171d] text-white shadow-sm transition duration-300 group-hover:-translate-y-1 group-hover:border-[#C2F800]/40">
                <figure className="relative h-44 w-full overflow-hidden">
                  <Image
                    src={work.image}
                    alt={work.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </figure>
                <div className="card-body gap-3 p-5">
                  <div className="flex flex-wrap gap-2">
                    {work.muscleGroups.map((group) => (
                      <div
                        key={group}
                        className="badge border-none bg-[#C2F800] text-[10px] font-bold uppercase text-black"
                      >
                        {group}
                      </div>
                    ))}
                  </div>
                  <h2 className="card-title text-lg font-extrabold uppercase">
                    {work.name}
                  </h2>
                  <p className="-mt-2 text-sm text-gray-400">{work.equipment}</p>
                  <div className="card-actions mt-auto items-center gap-4 border-t border-white/10 pt-3 text-xs text-gray-400">
                    <span className="flex items-center gap-1">
                      <FiClock /> {work.duration} min
                    </span>
                    <span className="flex items-center gap-1">
                      <FaFire /> {work.caloriesBurned} kcal
                    </span>
                    <span className="flex items-center gap-1">
                      <FaRegStar /> {work.rating}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
  );
};

export default WorkCard;