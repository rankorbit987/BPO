// app/components/ClientWrapper.jsx
"use client";

import { useEffect, useState, Children } from "react";
import Loader from "./loader";

export default function LoaderWrapper({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Loader />}
      <div className="relative z-10">{children}</div>
    </>
  );
}
