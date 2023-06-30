"use client";
import { useEffect } from "react";

export default function Home() {
  return (
    <div className="h-screen flex items-center justify-center flex-col text-center">
      <div className="mx-8">
        <h1 className="text-5xl md:text-9xl text-white font-bold mb-6">
          Profiler
        </h1>
        <h2 className="text-xl md:text-4xl text-gray-400 font-medium mb-6">
          Easily create an amazing looking profile.
        </h2>
        <button className="text-lg md:text-xl font-bold text-gray-400 bg-black rounded-lg px-6 py-3">
          Get Started
        </button>
      </div>
    </div>
  );
}
