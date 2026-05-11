"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "motion/react";
import { directionVariants, type Direction } from "./variants";

type RevealProps = Omit<HTMLMotionProps<"div">, "variants" | "initial" | "whileInView" | "viewport"> & {
  direction?: Direction;
  delay?: number;
  duration?: number;
  once?: boolean;
  margin?: string;
};

export function Reveal({
  direction = "up",
  delay = 0,
  duration,
  once = true,
  margin = "-80px 0px",
  children,
  ...rest
}: RevealProps) {
  const reduced = useReducedMotion();
  const baseVariants = directionVariants[direction];

  if (reduced) {
    return (
      <div {...(rest as React.HTMLAttributes<HTMLDivElement>)}>
        {children as React.ReactNode}
      </div>
    );
  }

  const variants = {
    hidden: baseVariants.hidden,
    visible: {
      ...(baseVariants.visible as object),
      transition: {
        ...((baseVariants.visible as { transition?: object })?.transition ?? {}),
        delay,
        ...(duration ? { duration } : {}),
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin }}
      variants={variants}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
