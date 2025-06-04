// app/components/Loader/loaderWraper.jsx
"use client";

import { useEffect, useState, Children } from "react";
import Loader from "./loader";

export default function LoaderWrapper({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if page has finished loading
    const handleLoad = () => setLoading(false);
    
    // If page is already loaded when this component mounts
    if (document.readyState === 'complete') {
      setLoading(false);
    } else {
      window.addEventListener('load', handleLoad);
    }

    // Fallback timeout in case load event doesn't fire
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 5000); // Maximum 5 seconds fallback

    return () => {
      window.removeEventListener('load', handleLoad);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      {loading && <Loader />}
      <div className={`relative z-10 ${loading ? 'opacity-0' : 'opacity-100 transition-opacity duration-300'}`}>
        {children}
      </div>
    </>
  );
}