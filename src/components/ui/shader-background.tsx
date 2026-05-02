"use client";

import { MeshGradient } from "@paper-design/shaders-react";
import { useEffect, useState } from "react";

interface ShaderBackgroundProps {
  children: React.ReactNode;
}

/**
 * Renders a background with animated mesh gradients.
 * On mobile devices, it falls back to a static gradient for performance.
 *
 * @param props - Component properties.
 * @returns Shader background element.
 */
export default function ShaderBackground({ children }: ShaderBackgroundProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div
      className="min-h-screen bg-black relative overflow-hidden flex flex-col"
      style={{
        background:
          "radial-gradient(circle at 20% 30%, #06b6d4 0%, transparent 50%), radial-gradient(circle at 80% 70%, #f97316 0%, transparent 50%), #000000",
      }}
    >
      {!isMobile && (
        <>
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
        </>
      )}

      <div className="relative z-10 flex-grow">{children}</div>
    </div>
  );
}
