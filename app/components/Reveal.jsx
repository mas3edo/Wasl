"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function Reveal({
  children,
  from = "up",
  delay = 0,
  duration = 0.55,
  once = true,
  amount = 0.2,
}) {
  const prefersReducedMotion = useReducedMotion();

  const axis = {
    up: { x: 0, y: 40 },
    left: { x: -40, y: 0 },
    right: { x: 40, y: 0 },
  };

  const start = axis[from] || axis.up;

  if (prefersReducedMotion) {
    return <>{children}</>;
  }

  return (
    <motion.div
      className="max-md:!transform-none"
      initial={{ opacity: 0, ...start }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
