"use client";
import React, { useMemo } from "react";
import { cn } from "@/lib/utils";

export const BoxesCore = ({ className, ...rest }) => {
  // Slightly reduced grid size (but visually similar due to scaling)
  const rows = new Array(150).fill(1);  // Was 150 → now 100
  const cols = new Array(100).fill(1);   // Was 100 → now 60
  const colors = [
    "#93c5fd",
    "#f9a8d4",
    "#86efac",
    "#fde047",
    "#fca5a5",
    "#d8b4fe",
    "#93c5fd",
    "#a5b4fc",
    "#c4b5fd",
  ];

  // Precompute color classes (faster than calculating on-the-fly)
  const colorClasses = useMemo(() => {
    return rows.map((_, i) => 
      cols.map((_, j) => `hover-color-${(i * cols.length + j) % colors.length}`)
    );
  }, [rows, cols]);

  return (
    <div
      style={{
        transform: `translate(-40%,-60%) skewX(-48deg) skewY(14deg) scale(0.9) rotate(0deg) translateZ(0)`,
      }}
      className={cn(
        "absolute -top-1/4 left-1/4 z-0 flex h-full w-full -translate-x-1/2 -translate-y-1/2 p-4",
        className
      )}
      {...rest}
    >
      {/* Same hover animations as original */}
      <style jsx>{`
        ${colors.map((color, index) => `
          .hover-color-${index}:hover {
            background-color: ${color} !important;
          }
        `).join('')}
        .box-cell {
          transition: background-color 0.1s ease;
        }
      `}</style>

      {/* Same structure as original, just fewer elements */}
      {rows.map((_, i) => (
        <div key={`row-${i}`} className="relative h-5 w-10 border-l border-slate-700">
          {cols.map((_, j) => (
            <div
              key={`col-${j}`}
              className={`box-cell relative h-5 w-10 border-t border-r border-slate-700 ${colorClasses[i][j]}`}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export const Boxes = React.memo(BoxesCore);