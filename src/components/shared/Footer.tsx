import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-white/5 bg-[#08090a] mt-10">
      <div className="container mx-auto flex flex-col items-center justify-between gap-5 px-4 py-6 sm:flex-row">
        <Link href="/" className="flex items-center gap-2">
          <Image src={Logo} alt="FitLog logo" width={30} height={30} />
          <span className="text-xl font-bold uppercase tracking-wide text-white">
            FitLog
          </span>
        </Link>

        <p className="text-center text-[15px] text-[#9CA3AF] sm:text-right">
          © {new Date().getFullYear()} FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
};

export default Footer;