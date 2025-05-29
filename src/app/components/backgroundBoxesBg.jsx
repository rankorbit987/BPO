"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { Boxes } from "./ui/background-boxes";
import Hero2 from "./hero2/hero2";

export function BackgroundBoxesDemo() {
  return (
    <div
      className="h-screen relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      <div
        className="absolute inset-0 w-full h-screen bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />
      <div className={cn(" relative z-20 pointer-events-none")}>
        <Hero2/>
      </div>
      
    </div>
  );
}
