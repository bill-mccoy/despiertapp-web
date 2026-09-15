import { motion } from "framer-motion";
import {
  BellRing,
  Bus,
  ChevronRight,
  MapPin,
  Navigation,
  Signal,
} from "lucide-react";
import { PrimaryButton, GhostButton } from "./Buttons";
import { fadeUp, stagger, VIEWPORT } from "../lib/motion";
import { PLAY_STORE_URL, TAGLINE } from "../lib/site";

/** Mockup del teléfono construido 100% con CSS: mapa, recorrido y alarma. */
function PhoneMockup() {
  return (
    <motion.div
      aria-hidden
      initial={{ opacity: 0, y: 46, rotate: 4 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{ duration: 0.95, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto w-full max-w-[300px] sm:max-w-[320px]"
    >
      {/* Halo de fondo */}
      <div className="absolute left-1/2 top-1/2 -z-10 h-[120%] w-[130%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(37,99,235,0.32),transparent_70%)] blur-2xl" />

      <div className="relative rounded-[3rem] border border-white/15 bg-gradient-to-b from-night-600 to-night-900 p-3 shadow-[0_40px_120px_-30px_rgba(37,99,235,0.55)]">
        <div className="relative overflow-hidden rounded-[2.4rem] border border-white/10 bg-night-800">
          {/* Notch */}
          <div className="absolute left-1/2 top-2 z-20 h-6 w-24 -translate-x-1/2 rounded-full bg-black/80" />

          {/* Barra de estado */}
          <div className="flex items-center justify-between px-6 pb-1 pt-3 text-[10px] font-semibold text-ink-200">
            <span>9:41</span>
            <span className="flex items-center gap-1">
              <Signal className="h-3 w-3" />
              <span className="flex h-1.5 w-5 items-center rounded-full border border-ink-400 p-px">
                <span className="h-full flex-1 rounded-full bg-white" />
              </span>
            </span>
          </div>

          {/* Mapa abstracto */}
          <div className="relative mx-3 h-[300px] overflow-hidden rounded-3xl bg-gradient-to-br from-[#132a4d] via-[#0b1b3a] to-[#0a1730] sm:h-[330px]">
            {/* Cuadrícula */}
            <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(148,163,184,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.12)_1px,transparent_1px)] [background-size:44px_44px]" />
            {/* Manzanas */}
            <div className="absolute left-6 top-10 h-14 w-20 rounded-xl bg-white/[0.05] ring-1 ring-white/10" />
            <div className="absolute right-7 top-20 h-16 w-24 rounded-xl bg-white/[0.05] ring-1 ring-white/10" />
            <div className="absolute bottom-12 left-4 h-16 w-24 rounded-xl bg-white/[0.05] ring-1 ring-white/10" />
            <div className="absolute bottom-4 right-8 h-12 w-20 rounded-xl bg-white/[0.05] ring-1 ring-white/10" />

            {/* Calles */}
            <div className="absolute left-0 top-1/2 h-[3px] w-full -rotate-6 rounded-full bg-[#2c4268]/80" />
            <div className="absolute left-0 top-[30%] h-[3px] w-full rotate-3 rounded-full bg-[#2c4268]/80" />
            <div className="absolute left-1/2 top-0 h-full w-[3px] -rotate-6 rounded-full bg-[#2c4268]/80" />

            {/* Recorrido del bus */}
            <div className="absolute inset-0">
              <svg viewBox="0 0 120 120" className="h-full w-full" fill="none">
                <path
                  d="M14 96 C 44 84, 46 40, 76 34"
                  stroke="rgba(56,189,248,0.25)"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                />
                <path
                  d="M14 96 C 44 84, 46 40, 76 34"
                  stroke="url(#routeGrad)"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="routeGrad" x1="0" y1="1" x2="1" y2="0">
                    <stop offset="0" stopColor="#2563EB" />
                    <stop offset="1" stopColor="#7DD3FC" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Zona de alarma alrededor del destino */}
            <div className="absolute left-[63%] top-[28%]">
              <span className="absolute inline-flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-400/20 ring-1 ring-sky-300/40">
                <span className="absolute inset-0 animate-ping rounded-full bg-sky-400/25" />
              </span>
              <MapPin className="relative -translate-x-1/2 -translate-y-1/2 text-sky-glow" size={22} fill="rgba(56,189,248,0.35)" />
            </div>

{/* Posición del usuario (pulsador) */}
          <div className="absolute left-1/2 top-[68%] -translate-x-1/2 -translate-y-1/2">
              <span className="relative flex h-4 w-4 items-center justify-center">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-glow opacity-70" />
                <span className="relative inline-flex h-3 w-3 rounded-full border-2 border-white bg-sky-glow" />
              </span>
            </div>

            {/* Bus en movimiento */}
            <motion.div
              animate={{ x: [0, 14, 0], y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute right-[30%] top-[50%] flex h-9 w-9 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-xl border border-white/20 bg-gradient-to-br from-blue-500 to-blue-700 shadow-lg"
            >
              <Bus className="h-4.5 w-4.5 text-white" />
            </motion.div>

            {/* Chip "distancia restante" */}
            <div className="absolute left-3 top-3 flex items-center gap-2 rounded-xl border border-white/10 bg-white/10 px-2.5 py-1.5 text-[10px] font-bold text-white backdrop-blur-md">
              <Navigation className="h-3 w-3 text-sky-glow" />
              1,2 km de tu parada
            </div>
          </div>

          {/* Franja inferior "glass" con el estado de la alarma */}
          <div className="flex items-center gap-3 p-4">
            <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400 to-blue-600 text-white shadow-glow-blue">
              <BellRing className="h-5 w-5" />
              <span className="absolute -right-0.5 -top-0.5 flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-3 w-3 rounded-full border-2 border-white bg-emerald-400" />
              </span>
            </span>
            <div className="min-w-0">
              <p className="truncate text-[13px] font-bold text-white">
                Alarma lista
              </p>
              <p className="truncate text-[11px] text-ink-300">
                Sonará antes de bajar · radio 300 m
              </p>
            </div>
            <ChevronRight className="ml-auto h-4 w-4 shrink-0 text-ink-400" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Hero() {
  return (
    <section className="relative z-10 mx-auto w-[min(100%-2rem,76rem)] pb-24 pt-36 sm:pb-32 sm:pt-44">
      <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <motion.div
          variants={stagger(0.1, 0.13)}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-sky-400/25 bg-sky-400/[0.08] px-4 py-1.5 text-[13px] font-semibold text-sky-200 backdrop-blur-md"
          >
            <span className="h-2 w-2 rounded-full bg-sky-glow shadow-[0_0_10px_2px_rgba(56,189,248,0.7)]" />
            {TAGLINE}
          </motion.div>

          {/* Título */}
          <motion.h1
            variants={fadeUp}
            className="mt-6 font-display text-[2.6rem] font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-[4.2rem]"
          >
            Duerme tranquilo,
            <br />
            <span className="bg-gradient-to-r from-sky-300 via-blue-400 to-blue-600 bg-clip-text text-transparent">
              baja a tiempo.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-xl text-lg leading-relaxed text-ink-300"
          >
            Despiertapp usa tu GPS para saber exactamente cuándo te acercas a tu
            destino y dispara una alarma potente justo antes que tu parada.
            Funciona con la pantalla bloqueada, y sin gastar de más tu batería.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
          >
            <PrimaryButton href={PLAY_STORE_URL}>
              Descargar en Google Play
            </PrimaryButton>
            <GhostButton href="#features">Ver características</GhostButton>
          </motion.div>

          {/* Confianza */}
          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-[13px] font-medium text-ink-400"
          >
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Gratuita con opción PRO
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Sin registro
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Tu posición no sale de tu teléfono
            </span>
          </motion.div>
        </motion.div>

        {/* Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10"
          viewport={VIEWPORT}
        >
          <PhoneMockup />
          <div className="mt-12 flex items-center justify-center gap-3 text-center text-[13px] font-medium text-ink-400 lg:hidden">
            <span className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md">
              <Navigation className="h-3.5 w-3.5 text-sky-300" />
              Posición en vivo · distancia restante · alarma
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}