"use client";

import { useEffect, useState } from "react";
import Loader from "./loader";

export default function LoaderWrapper({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => setLoading(false);

    // If the document is already loaded
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      // Otherwise, wait for it
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return (
    <>
      {loading && <Loader />}
      {!loading && <div className="relative z-10">{children}</div>}
    </>
  );
}
