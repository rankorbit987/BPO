export default function KineticLoaders() {
  const loaderCount = 48;
  const loaders = Array.from({ length: loaderCount }, (_, i) => (i % 9) + 1);

  return (
    <div className="loaders-page w-full h-full top-0 left-0 z-0">
      <main className="container">
        {loaders.map((num, i) => (
          <div className="item" key={i}>
            <i className={`loader loader--${num}`}></i>
          </div>
        ))}
      </main>

      <style jsx>{`
        .loaders-page {
          pointer-events: none;
          position: absolute;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(to top right, #231208, #370a10, #8A2387);
          color: white;
          font-family: sans-serif;
          z-index: 0; /* stay behind all other content */
        }

        .container {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
          grid-auto-rows: 120px;
          gap: 1vmin;
          width: 100vw;
          height: 100vh;
          padding: 2vmin;
        }

        .item {
          pointer-events: auto; /* enable hover */
          background: rgba(255, 255, 255, 0.1);
          display: grid;
          place-items: center;
          backdrop-filter: blur(2px);
          border-radius: 8px;
          position: relative;
          transition: all 0.1s linear;
        }

        .item::before {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(255, 255, 255, 0.05);
          z-index: -1;
          border-radius: 8px;
        }

        .container:hover .item:not(:hover) {
          opacity: 0.3;
          transform: scale(0.95);
        }

        .item:hover {
          background-color: rgba(255, 255, 255, 0.3);
          z-index: 2;
          transform: scale(1.05);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }

        .loader {
          --size: 60%;
          --thickness: 6%;
          width: var(--size);
          height: var(--size);
          position: relative;
          display: block;
          pointer-events: none; /* prevent loader blocking clicks */
        }

        .loader::before,
        .loader::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          border: var(--thickness) solid rgba(255, 255, 255, 0.8);
          top: 0;
          left: 0;
          animation: loader-animation 1s infinite ease-in-out;
          box-sizing: border-box;
        }

        .item:hover .loader::before,
        .item:hover .loader::after {
          border-color: #FFD700;
          filter: drop-shadow(0 0 8px rgba(255, 215, 0, 0.3));
        }

        .loader--1::before { animation-name: loader-1; }
        .loader--2::before { animation-name: loader-2; }
        .loader--3::before { animation-name: loader-3; }
        .loader--4::before { animation-name: loader-4; }
        .loader--5::before { animation-name: loader-5; }
        .loader--6::before { animation-name: loader-6; }
        .loader--7::before { animation-name: loader-7; }
        .loader--8::before { animation-name: loader-8; }
        .loader--9::before { animation-name: loader-9; }

        @keyframes loader-1 {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(0.6); }
        }

        @keyframes loader-2 {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes loader-3 {
          0% { transform: scaleX(1); }
          100% { transform: scaleX(0.5); }
        }

        @keyframes loader-4 {
          0% { transform: rotateY(0); }
          100% { transform: rotateY(360deg); }
        }

        @keyframes loader-5 {
          0% { transform: translateX(-20%); }
          100% { transform: translateX(20%); }
        }

        @keyframes loader-6 {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }

        @keyframes loader-7 {
          0%, 100% { border-width: var(--thickness); }
          50% { border-width: calc(var(--thickness) * 2); }
        }

        @keyframes loader-8 {
          0% { transform: scale(1) rotate(0); }
          100% { transform: scale(1.2) rotate(360deg); }
        }

        @keyframes loader-9 {
          0%, 100% { border-radius: 50%; }
          50% { border-radius: 15%; }
        }
      `}</style>
    </div>
  );
}
