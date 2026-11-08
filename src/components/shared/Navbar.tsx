'use client'
import Image from "next/image";
import React, { useContext } from "react";
import Logo from "@/assets/logo.png";
import Link from "next/link";
import { WorksContext } from "@/context/WorksProvider";

const Navbar = () => {
  const {countPlan,countSave} =useContext(WorksContext);
  return (
    <div className="bg-[#08090a] border-b border-white/5">
      <div className="navbar container mx-auto px-4">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost text-white lg:hidden"
            >
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
               
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-[#111214] text-white rounded-box z-10 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link href={"/workouts"}>Workouts</Link>
              </li>
              <li>
                <Link href={"/myplan"}>My Plan</Link>
              </li> 
              <li> 
                <Link href={'/'}> Home </Link>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-2">
            <Image src={Logo} alt="Logo" width={24} height={24} />
            <span className="text-lg font-extrabold uppercase tracking-wide text-white">
              FitLog
            </span>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-2 px-1 text-sm">
            <li>
              <Link
                href={"/workouts"}
                className="rounded-full bg-[#C2F800]/10 px-4 py-1.5 font-medium text-[#C2F800]"
              >
                Workouts
              </Link>
            </li>
            <li>
              <Link
                href={"/myplan"}
                className="rounded-full px-4 py-1.5 font-medium text-gray-400 hover:bg-transparent hover:text-white"
              >
                My Plan
              </Link> 
            </li> 
            <li className="text-white"> 
                <Link href={'/'}> Home </Link>
              </li>
          </ul>
        </div>
        <div className="navbar-end gap-5 text-sm">
          <Link
            href={"/myplan"} 
            className="flex items-center gap-2 text-gray-200"
          >
            Plan
            <span className="grid h-5 min-w-5 place-items-center rounded-full bg-[#C2F800] px-1 text-xs font-bold text-black">
              {countPlan}
            </span>
          </Link>
          <div className="flex items-center gap-2 text-gray-400">
            Saved
            <span className="grid h-5 min-w-5 place-items-center rounded-full bg-white/10 px-1 text-xs font-bold text-white">
              {countSave}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
