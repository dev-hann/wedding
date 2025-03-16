"use client";
import { motion } from "framer-motion";

export interface FadeInMotionProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  className?: string;
}

export default function FadeInMotion({
  children,
  className = "",
}: FadeInMotionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true, margin: "0px 0px -150px 0px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
