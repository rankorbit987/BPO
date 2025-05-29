import React from "react";

const cards = [
  {
    title: "Card One",
    description: "Details for card one.",
  },
  {
    title: "Card Two",
    description: "Details for card two.",
  },
  {
    title: "Card Three",
    description: "Details for card three.",
  },
];

export default function CardList() {
  return (
    <div className="flex gap-8 justify-center p-8">
      {cards.map((card, index) => (
        <div
          key={index}
          className="group relative w-[190px] h-[254px] rounded-[20px] bg-gray-100 p-7 border-2 border-gray-300 overflow-visible
                     transition-all duration-500 ease-out hover:border-blue-600 hover:shadow-lg
                     opacity-0 animate-fadeInUp"
          style={{ animationDelay: `${index * 0.2}s`, animationFillMode: "forwards" }}
        >
          <div className="text-black h-full gap-2 flex flex-col justify-center items-center text-center">
            <p className="text-xl font-bold">{card.title}</p>
            <p className="text-gray-500">{card.description}</p>
          </div>

          <button
            className="absolute left-1/2 bottom-0 w-3/5 rounded-lg bg-blue-600 text-white text-base py-2 px-4
                       opacity-0 transform -translate-x-1/2 translate-y-[125%]
                       transition-opacity transition-transform duration-300 ease-out
                       group-hover:opacity-100 group-hover:translate-y-[50%]"
          >
            More info
          </button>
        </div>
      ))}
    </div>
  );
}
