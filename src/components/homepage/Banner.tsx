import Image from "next/image";
import React from "react";
import BannerHero from "@/assets/banner.png";

const Banner = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="hero bg-[#15171d] rounded-2xl border border-white/5 py-10 lg:py-16">
        <div className="hero-content w-full max-w-none flex-col justify-between gap-10 px-6 lg:flex-row-reverse lg:px-14">
          <Image
            src={BannerHero}
            alt="BannerHero"
            className="w-64 lg:w-96 h-auto"
          />
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#C2F800]">
              Workout Library
            </p>
            <h1 className="mt-4 text-4xl font-extrabold uppercase leading-tight text-white lg:text-[44px]">
              TRAIN WITH INTENT. LOG 
              EVERY SET.
              +
            </h1>
            <p className="py-6 text-sm text-[#9CA3AF]">
              FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
              into todays plan, and watch the weeks work add up.
            </p>
            <button className="btn border-none bg-[#C2F800] text-xs font-bold uppercase text-black hover:bg-[#d4ff33]">
              Browse Workouts
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
