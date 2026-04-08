"use client";

import { MeshGradient, PulsingBorder } from "@paper-design/shaders-react";
import { motion } from "framer-motion";
import { useRef } from "react";

interface ShaderBackgroundProps {
  children: React.ReactNode;
}

export default function ShaderBackground({ children }: ShaderBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-black relative overflow-hidden flex flex-col"
      style={{
        background:
          "radial-gradient(circle at 20% 30%, #06b6d4 0%, transparent 50%), radial-gradient(circle at 80% 70%, #f97316 0%, transparent 50%), #000000",
      }}
    >
      <MeshGradient
        className="absolute inset-0 w-full h-full"
        colors={["#000000", "#06b6d4", "#0891b2", "#164e63", "#f97316"]}
        speed={0.3}
      />
      <MeshGradient
        className="absolute inset-0 w-full h-full opacity-60"
        colors={["#000000", "#ffffff", "#06b6d4", "#f97316"]}
        speed={0.2}
      />

      <div className="relative z-10 flex-grow">{children}</div>

    </div>
  );
}
