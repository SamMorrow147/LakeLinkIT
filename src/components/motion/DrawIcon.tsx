"use client";

import { useEffect, useRef, useState, type ReactElement } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";

type DrawIconProps = {
  children: ReactElement<React.SVGProps<SVGSVGElement>>;
  duration?: number;
  delay?: number;
  className?: string;
  once?: boolean;
};

/**
 * Wraps an inline SVG icon and animates its strokes drawing in when the
 * icon enters the viewport. Works with the existing <Icon /> component
 * because all icons render as <svg> with stroked <path>/<circle>/<rect>/<line>.
 */
export function DrawIcon({
  children,
  duration = 0.7,
  delay = 0,
  className,
  once = true,
}: DrawIconProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduced = useReducedMotion();
  const inView = useInView(ref, { once, margin: "-60px 0px" });
  const [paths, setPaths] = useState<SVGGeometryElement[]>([]);

  useEffect(() => {
    if (!ref.current) return;
    const svg = ref.current.querySelector("svg");
    if (!svg) return;

    const drawables = Array.from(
      svg.querySelectorAll<SVGGeometryElement>("path, circle, rect, line, polyline, polygon")
    );

    drawables.forEach((el) => {
      try {
        const length = el.getTotalLength?.() ?? 0;
        if (!length) return;
        el.style.strokeDasharray = `${length}`;
        el.style.strokeDashoffset = reduced || inView ? "0" : `${length}`;
        el.style.transition = reduced
          ? "none"
          : `stroke-dashoffset ${duration}s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s, opacity 0.3s ease ${delay}s`;
        el.style.opacity = reduced || inView ? "1" : "0";
      } catch {
        /* getTotalLength can throw on some elements; skip them */
      }
    });

    setPaths(drawables);
  }, [reduced, inView, duration, delay]);

  // Re-run on inView changes by re-applying styles
  useEffect(() => {
    if (!paths.length) return;
    paths.forEach((el) => {
      el.style.strokeDashoffset = reduced || inView ? "0" : el.style.strokeDasharray;
      el.style.opacity = reduced || inView ? "1" : "0";
    });
  }, [inView, paths, reduced]);

  return (
    <motion.span
      ref={ref}
      className={className}
      style={{ display: "inline-flex", lineHeight: 0 }}
    >
      {children}
    </motion.span>
  );
}
