// app/components/Loader/loaderWraper.jsx
"use client";

import { useEffect, useState, Children } from "react";
import Loader from "./loader";

export default function LoaderWrapper({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Function to trigger loading
  const triggerLoading = () => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1000); // Shorter duration for navigation
    return () => clearTimeout(timer);
  };

  return (
    <>
      {loading && <Loader />}
      <div className="relative z-10">
        {Children.map(children, child => {
          if (typeof child.type === 'string') {
            return child;
          }
          return {
            ...child,
            props: {
              ...child.props,
              triggerLoading // Pass the trigger function to children
            }
          };
        })}
      </div>
    </>
  );
}