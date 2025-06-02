"use client";

export default function Loader() {
  return (
    <>
      <style>{`
        @keyframes animateBackground {
          0% {
            background-position: 0 0;
          }
          25% {
            background-position: 0 100%;
          }
          50% {
            background-position: 100% 100%;
          }
          75% {
            background-position: 100% 0%;
          }
          100% {
            background-position: 0 0;
          }
        }
      `}</style>

      <div className="fixed inset-0 z-[9999] flex items-center justify-center backdrop-blur-md">
        <div
          className="text-3xl md:text-4xl lg:text-6xl font-bold dm-serif-display-regular tracking-widest text-transparent bg-clip-text leading-none p-4 overflow-visible"
          style={{
            backgroundImage:
              "conic-gradient(#c93c3c 0% 25%, #ffffff 25% 50%, #60a5fa 50% 75%, #ffb3b3 75%)",
            backgroundSize: "200% 200%",
            backgroundRepeat: "no-repeat",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            animation: "animateBackground 4s ease-in-out infinite",
            textShadow: "0 0 10px rgba(255, 255, 255, 0.1)",
          }}
        >
          BPO Brigade
        </div>
      </div>
    </>
  );
}