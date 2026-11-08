import Link from 'next/link';
import React from 'react';

const AddAndSvaeTabsNoDATa = () => {
  return (
    <div>
      <div className="flex min-h-[170px] flex-col items-center justify-center rounded-2xl border border-white/5 bg-[#0a0a0a] px-4 py-12 text-center">
                  <h3
                    className={` text-lg font-bold uppercase tracking-wide text-white`}
                  >
                    Nothing here yet
                  </h3>
                  <p className="mt-1 text-xs text-[#9CA3AF]">
                    Browse the library and add a lift to get today moving.
                  </p>
                  <Link
                    href="/workouts"
                    className="btn mt-5 h-9 min-h-0 rounded-full border-none bg-[#C2F800] px-5 text-xs font-bold text-black shadow-[0_0_20px_rgba(194,248,0,0.3)] hover:bg-[#d4ff33]"
                  >
                    Go to workouts
                  </Link>
                </div> 
    </div>
  );
};

export default AddAndSvaeTabsNoDATa;