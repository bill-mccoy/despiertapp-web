import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

const cx = (...parts: (string | false | null | undefined)[]) =>
  parts.filter(Boolean).join(" ");

interface PrimaryButtonProps {
  href: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
}

/** CTA principal: gradiente de marca, resplandor y micro-interacción de hover. */
export function PrimaryButton({
  href,
  children,
  className,
  external = true,
}: PrimaryButtonProps) {
  return (
    <motion.a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      whileHover={{ scale: 1.03, y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 420, damping: 22 }}
      className={cx(
        "group relative inline-flex items-center justify-center gap-2.5 rounded-2xl px-7 py-3.5 text-base font-semibold text-white",
        "bg-gradient-to-br from-sky-400 via-blue-500 to-blue-700 shadow-glow-blue",
        "hover:shadow-[0_0_0_1px_rgba(125,180,255,0.35),0_14px_48px_-12px_rgba(37,99,235,0.85)]",
        className,
      )}
    >
      <span className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/25 via-white/5 to-transparent opacity-80" />
      <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
        <span className="absolute -left-full top-0 h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/35 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-[300%]" />
      </span>
      <span className="relative flex items-center gap-2.5">{children}</span>
    </motion.a>
  );
}

interface GhostButtonProps {
  href: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
}

/** CTA secundario: vidrio (glassmorphism). */
export function GhostButton({
  href,
  children,
  className,
  external = false,
}: GhostButtonProps) {
  return (
    <motion.a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      whileHover={{ scale: 1.03, y: -1 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 420, damping: 24 }}
      className={cx(
        "group inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-semibold text-ink-100 backdrop-blur-md",
        "transition-colors duration-300 hover:border-sky-400/40 hover:bg-white/10",
        className,
      )}
    >
      {children}
      <ArrowRight className="h-4 w-4 text-sky-glow transition-transform duration-300 group-hover:translate-x-1" />
    </motion.a>
  );
}