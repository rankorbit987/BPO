"use client";

export default function Loader() {
  return (
    <>
      <style>{`
        @keyframes up {
          0%, 100% { transform: none; }
          25% { transform: translateX(-100%); }
          50% { transform: translateX(-100%) translateY(-100%); }
          75% { transform: translateY(-100%); }
        }

        @keyframes down {
          0%, 100% { transform: none; }
          25% { transform: translateX(100%); }
          50% { transform: translateX(100%) translateY(100%); }
          75% { transform: translateY(100%); }
        }
      `}</style>

      <div className="fixed inset-0 z-[9999] flex items-center justify-center"
           style={{
             background: 'linear-gradient(to right, #0F172A, #1E293B, #0F172A)'
           }}>
        <div className="relative w-[100px] h-[100px]">
          {/* Block 1 */}
          <div
            className="absolute w-[30px] h-[30px] bg-[#c93c3c]"
            style={{
              top: '50%',
              left: '50%',
              animation: 'up 2.4s cubic-bezier(0, 0, 0.24, 1.21) infinite',
              transform: 'translate(-50%, -50%)',
            }}
          />
          {/* Block 2 */}
          <div
            className="absolute w-[30px] h-[30px] bg-white"
            style={{
              top: 'calc(50% - 30px)',
              left: 'calc(50% - 30px)',
              animation: 'down 2.4s cubic-bezier(0, 0, 0.24, 1.21) infinite',
            }}
          />
        </div>
      </div>
    </>
  );
}