"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Icon } from "./Icon";

export function BackToTop() {
  const [show, setShow] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 800);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          key="back-to-top"
          type="button"
          onClick={scrollUp}
          aria-label="Back to top"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          whileHover={reduced ? undefined : { y: -2 }}
          whileTap={{ scale: 0.96 }}
          className="fixed bottom-safe right-5 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-navy text-white shadow-lg shadow-navy/30 ring-1 ring-white/10 transition-colors hover:bg-navy-700"
        >
          <Icon name="arrow-up" className="w-5 h-5 stroke-[2.2]" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
