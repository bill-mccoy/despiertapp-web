import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { Link } from "react-router-dom";
import { LogoMark } from "./LogoMark";
import { EASE } from "../lib/motion";
import { PLAY_STORE_URL } from "../lib/site";

export function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: EASE }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div className="mx-auto mt-4 w-[min(100%-2rem,76rem)]">
        <div className="flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 shadow-[0_10px_40px_-16px_rgba(0,0,0,0.7)] backdrop-blur-xl saturate-150">
          <Link
            to="/"
            className="group flex items-center gap-3 rounded-xl"
            aria-label="Despiertapp — inicio"
          >
            <LogoMark />
            <span className="flex flex-col justify-center leading-none">
              <span className="font-display text-[17px] font-bold tracking-tight text-white">
                Despiertapp
              </span>
              <span className="mt-0.5 text-[11px] font-medium tracking-wide text-ink-300">
                Te aviso al llegar
              </span>
            </span>
          </Link>

          <motion.a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04, y: -1 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 420, damping: 22 }}
            className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-sky-400 via-blue-500 to-blue-700 px-5 py-2.5 text-sm font-semibold text-white shadow-glow-blue"
          >
            <Download className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
            <span className="hidden sm:inline">Descargar App</span>
            <span className="sm:hidden">App</span>
          </motion.a>
        </div>
      </div>
    </motion.header>
  );
}