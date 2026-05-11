"use client";

import { createElement, type ElementType } from "react";
import {
  motion,
  useReducedMotion,
  type HTMLMotionProps,
  type Variants,
} from "motion/react";
import {
  directionVariants,
  stagger,
  staggerFast,
  staggerSlow,
  type Direction,
} from "./variants";

type Speed = "fast" | "normal" | "slow";

const speedVariants: Record<Speed, Variants> = {
  fast: staggerFast,
  normal: stagger,
  slow: staggerSlow,
};

type RevealStaggerProps = Omit<
  HTMLMotionProps<"div">,
  "variants" | "initial" | "whileInView" | "viewport"
> & {
  speed?: Speed;
  once?: boolean;
  margin?: string;
  as?: "div" | "ul" | "ol" | "section";
};

export function RevealStagger({
  speed = "normal",
  once = true,
  margin = "-80px 0px",
  as = "div",
  children,
  ...rest
}: RevealStaggerProps) {
  const reduced = useReducedMotion();

  if (reduced) {
    return createElement(
      as as ElementType,
      rest as React.HTMLAttributes<HTMLElement>,
      children as React.ReactNode
    );
  }

  const Component = motion[as] as typeof motion.div;

  return (
    <Component
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin }}
      variants={speedVariants[speed]}
      {...rest}
    >
      {children}
    </Component>
  );
}

type RevealItemProps = Omit<
  HTMLMotionProps<"div">,
  "variants" | "initial" | "animate"
> & {
  direction?: Direction;
  as?: "div" | "li" | "article" | "span" | "p";
};

export function RevealItem({
  direction = "up",
  as = "div",
  children,
  ...rest
}: RevealItemProps) {
  const reduced = useReducedMotion();

  if (reduced) {
    return createElement(
      as as ElementType,
      rest as React.HTMLAttributes<HTMLElement>,
      children as React.ReactNode
    );
  }

  const Component = motion[as] as typeof motion.div;

  return (
    <Component variants={directionVariants[direction]} {...rest}>
      {children}
    </Component>
  );
}
