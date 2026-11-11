import { IWorkout } from '@/types/IWorkOut';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaFire, FaRegStar } from 'react-icons/fa';
import { FiCheck, FiClock } from 'react-icons/fi';
import CardRemove from '../shared/CardRemove';

const AddAndSaveTabs = ({work}:{work:IWorkout}) => {
  return (
    <div>
       <div className="flex flex-col gap-4 my-3 rounded-2xl border border-white/5 bg-[#15171d] p-3 sm:flex-row sm:items-center">
      <div className="relative h-16 w-24 shrink-0 overflow-hidden rounded-lg">
        <Image
          src={work.image}
          alt={work.name}
          fill
          sizes="96px"
          className="object-cover"
        />
      </div>

      <div className="flex-1">
        <h3
          className={` text-base font-bold uppercase tracking-wide text-white`}
        >
          {work.name}
        </h3>
        <p className="text-xs text-[#9CA3AF]">{work.equipment}</p>
        <div className="mt-1 flex items-center gap-4 text-xs text-[#9CA3AF]">
          <span className="flex items-center gap-1">
            <FiClock className="text-[#C2F800]" /> {work.duration} min
          </span>
          <span className="flex items-center gap-1">
            <FaFire className="text-[#C2F800]" /> {work.caloriesBurned} kcal
          </span>
          <span className="flex items-center gap-1">
            <FaRegStar className="text-[#C2F800]" /> {work.rating}
          </span>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Link
          href={`/workouts/${work.id}`}
          className="btn btn-sm rounded-full border border-white/20 bg-transparent text-xs font-medium text-white hover:border-[#C2F800]/50 hover:bg-transparent"
        >
          View Details
        </Link>
        <button className="btn btn-sm rounded-full border-none bg-[#C2F800] text-xs font-bold text-black hover:bg-[#d4ff33]">
          <FiCheck /> Mark as Done
        </button>
          <CardRemove/>
        {/* <button
          aria-label={`Remove ${work.name}`}
          className="text-[#9CA3AF] transition hover:text-white"
        >
          <FiX size={18} />
        </button>  */}
        
      </div>
    </div>
              </div>

  );
};

export default AddAndSaveTabs;