import type { Variants } from "framer-motion";

export const EASE = [0.22, 1, 0.36, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: EASE },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.9, ease: EASE } },
};

export const stagger = (delay = 0.12, staggerChildren = 0.12): Variants => ({
  hidden: {},
  visible: {
    transition: { delayChildren: delay, staggerChildren },
  },
});

export const VIEWPORT = { once: true, margin: "-80px" } as const;

export function scrollToId(id: string) {
  const matches = window.matchMedia("(prefers-reduced-motion: reduce)");
  document.getElementById(id)?.scrollIntoView({
    behavior: matches.matches ? "auto" : "smooth",
    block: "start",
  });
}