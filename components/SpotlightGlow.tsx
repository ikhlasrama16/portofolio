"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "motion/react";

export default function SpotlightGlow() {
  const mouseX = useMotionValue(-500);
  const mouseY = useMotionValue(-500);

  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  if (!mounted) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-30 overflow-hidden transition-opacity duration-500">
      <motion.div
        className="absolute -inset-px rounded-full opacity-40 mix-blend-screen blur-[120px]"
        style={{
          width: 500,
          height: 500,
          left: smoothX,
          top: smoothY,
          transform: "translate(-50%, -50%)",
          background: "radial-gradient(circle, rgba(239, 68, 68, 0.15) 0%, rgba(225, 29, 72, 0.08) 45%, transparent 70%)",
        }}
      />
    </div>
  );
}
