"use client";

import { useEffect, useState } from "react";
import { Truck } from "lucide-react";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;

      setProgress(
        scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) : 0,
      );
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 bottom-0 h-[3px] bg-border/70"
    >
      <div
        className="relative h-full bg-primary-dark transition-[width] duration-150 ease-out"
        style={{ width: `${progress * 100}%` }}
      >
        <span
          className="absolute right-0 top-1/2 grid size-6 -translate-y-1/2 translate-x-1/2 place-items-center bg-accent text-text shadow-[0_10px_26px_rgba(16,43,58,0.18)] transition-opacity duration-200"
          style={{ opacity: progress > 0.015 ? 1 : 0 }}
        >
          <Truck className="size-3.5" />
        </span>
      </div>
    </div>
  );
}
