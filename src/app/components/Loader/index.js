// components/Loader.jsx
import React from 'react';

const Loader = () => (
  <div className="fixed inset-0 bg-black/50 backdrop-blur-xs flex justify-center items-center z-50">
    <div className="w-12 h-12 rounded-full border-4 border-t-transparent border-[#B53535] animate-spin " />
  </div>
);

export default Loader;
