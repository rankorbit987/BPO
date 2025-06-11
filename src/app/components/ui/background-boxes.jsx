"use client";
import React from "react";
import { cn } from "@/lib/utils";

export const BoxesCore = ({ className, ...rest }) => {
  const rows = new Array(150).fill(1);
  const cols = new Array(100).fill(1);
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

  // Generate CSS for random colors
  const getRandomColorClass = (i, j) => {
    const colorIndex = (i * cols.length + j) % colors.length;
    return `hover-color-${colorIndex}`;
  };

  return (
    <div
      style={{
        transform: `translate(-40%,-60%) skewX(-48deg) skewY(14deg) scale(0.675) rotate(0deg) translateZ(0)`,
      }}
      className={cn(
        "absolute -top-1/4 left-1/4 z-0 flex h-full w-full -translate-x-1/2 -translate-y-1/2 p-4",
        className
      )}
      {...rest}
    >
      {/* Add dynamic styles for hover colors */}
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
      
      {rows.map((_, i) => (
        <div key={`row-${i}`} className="relative h-8 w-16 border-l border-slate-700">
          {cols.map((_, j) => (
            <div
              key={`col-${j}`}
              className={`box-cell relative h-8 w-16 border-t border-r border-slate-700 ${getRandomColorClass(i, j)}`}
            >
              {/* Removed the SVG cross element */}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export const Boxes = React.memo(BoxesCore);