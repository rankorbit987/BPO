// app/context/LoaderContext/index.js
"use client";

import { createContext, useState, useContext } from 'react';
import Loader from '@/app/components/Loader'; // ✅ Make sure this path is correct

const LoaderContext = createContext();

export const useLoader = () => useContext(LoaderContext);

export const LoaderProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  return (
    <LoaderContext.Provider value={{ loading, setLoading }}>
      {loading && <Loader />}
      {children}
    </LoaderContext.Provider>
  );
};
