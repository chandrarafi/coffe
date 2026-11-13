"use client";

import React, { useEffect } from "react";
import { rawPageHtml } from "@/data/pageHtml";

export default function Home() {
  useEffect(() => {
    // Safety fallback to guarantee loader fades out even if font observer is delayed
    const timer = setTimeout(() => {
      document.documentElement.classList.add("has-seq-ready", "fonts-loaded", "is-ready");
      const loader = document.querySelector(".loader") as HTMLElement | null;
      if (loader) {
        loader.style.opacity = "0";
        loader.style.pointerEvents = "none";
        setTimeout(() => {
          loader.style.display = "none";
        }, 600);
      }
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      dangerouslySetInnerHTML={{ __html: rawPageHtml }}
      suppressHydrationWarning
    />
  );
}
