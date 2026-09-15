import { Link } from "react-router-dom";
import { ShieldCheck } from "lucide-react";
import { LogoMark } from "./LogoMark";
import { COPYRIGHT_YEAR } from "../lib/site";

export function Footer() {
  return (
    <footer className="relative z-10 mt-24 border-t border-white/10">
      <div className="mx-auto flex w-[min(100%-2rem,76rem)] flex-col items-center gap-8 py-12 sm:flex-row sm:justify-between">
        <div className="flex items-center gap-3">
          <LogoMark className="h-9 w-9 rounded-xl" />
          <Link to="/" className="flex flex-col justify-center leading-none">
            <span className="font-display text-[15px] font-bold tracking-tight text-white">
              Despiertapp
            </span>
            <span className="mt-0.5 text-[11px] text-ink-400">
              © {COPYRIGHT_YEAR} · Hecho para que llegues a tiempo.
            </span>
          </Link>
        </div>

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-center sm:gap-8">
          <Link
            to="/privacy"
            className="group inline-flex items-center gap-2 rounded-xl px-3 py-2 text-[13px] font-semibold text-ink-300 transition-colors duration-300 hover:text-white"
          >
            <ShieldCheck className="h-4 w-4 text-sky-400 transition-transform duration-300 group-hover:-translate-y-0.5" />
            Política de privacidad
          </Link>
          <span className="hidden h-4 w-px bg-white/10 sm:block" />
          <span className="text-[12px] text-ink-500">
            Alarma GPS · Bus y Metro · Santiago · Valparaíso · Biobío
          </span>
        </div>
      </div>
    </footer>
  );
}