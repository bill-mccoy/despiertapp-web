import { Bus } from "lucide-react";

export function LogoMark({ className }: { className?: string }) {
  return (
    <span
      className={`relative inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-white/15 bg-gradient-to-br from-sky-400 via-blue-500 to-blue-700 text-white shadow-glow-blue ${className ?? ""}`}
    >
      <Bus className="h-5 w-5" strokeWidth={2.2} />
      <span className="absolute left-0 top-0 h-full w-full rounded-2xl bg-gradient-to-b from-white/20 to-transparent opacity-70" />
    </span>
  );
}