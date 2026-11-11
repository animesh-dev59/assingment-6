"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaFire, FaRegStar } from "react-icons/fa";
import { FiClock, FiTrash2, FiX } from "react-icons/fi";

interface IWorkout {
  id: number;
  name: string;
  image: string;
  equipment: string;
  duration: number;
  caloriesBurned: number;
  rating: number;
}

const API = "https://api.abcz.workers.dev/api/fitlog";
const LIMIT = 9;

const DemoPage = () => {
  const [works, setWorks] = useState<IWorkout[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(API);
        if (!res.ok) throw new Error("Failed to load data");
        const data: IWorkout[] = await res.json();
        setWorks(data.slice(0, LIMIT));
      } catch (err) {
        setError(err instanceof Error ? err.message : "Something went wrong");
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const handleDelete = (id: number) => {
    setWorks((prev) => prev.filter((w) => w.id !== id));
  };

  const handleDeleteAll = () => {
    setWorks([]);
  };

  if (loading) return <p className="text-center text-white my-10">Loading...</p>;
  if (error) return <p className="text-center text-red-400 my-10">{error}</p>;

  return (
    <div className="container mx-auto px-4 my-6 text-white">
      {/* Total + Delete All */}
      <div className="flex items-center justify-between rounded-2xl border border-white/5 bg-[#15171d] px-6 py-4">
        <div>
          <p className="text-[11px] text-[#9CA3AF]">Total</p>
          <p className="text-4xl font-bold text-[#C2F800]">{works.length}</p>
        </div>

        <button
          onClick={handleDeleteAll}
          className="btn btn-sm rounded-full border border-red-500/40 bg-transparent text-xs font-medium text-red-400 hover:bg-red-500/10"
        >
          <FiTrash2 /> Delete All
        </button>
      </div>

      {/* Cards */}
      <div className="mt-4">
        {works.length === 0 ? (
          <p className="py-10 text-center text-[#9CA3AF]">No workouts left.</p>
        ) : (
          works.map((work) => (
            <div
              key={work.id}
              className="flex flex-col gap-4 my-3 rounded-2xl border border-white/5 bg-[#15171d] p-3 sm:flex-row sm:items-center"
            >
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
                <h3 className="text-base font-bold uppercase tracking-wide text-white">
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
                <button
                  onClick={() => handleDelete(work.id)}
                  aria-label={`Remove ${work.name}`}
                  className="text-[#9CA3AF] transition hover:text-white"
                >
                  <FiX size={18} />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default DemoPage;