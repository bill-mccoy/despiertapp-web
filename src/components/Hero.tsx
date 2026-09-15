import { motion, useMotionValue, useScroll, useSpring } from "framer-motion";
import {
  BellRing,
  Bus,
  ChevronDown,
  ChevronRight,
  MapPin,
  Navigation,
  Signal,
  Wifi,
} from "lucide-react";
import { useEffect } from "react";
import { PrimaryButton, GhostButton } from "./Buttons";
import { fadeUp, scrollToId, stagger, VIEWPORT } from "../lib/motion";
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
        <div className="relative overflow-hidden rounded-[2.75rem] border border-white/10 bg-night-800">
          {/* Notch */}
          <div className="absolute left-1/2 top-3.5 z-20 h-5 w-24 -translate-x-1/2 rounded-full bg-black/80" />

          {/* Barra de estado */}
          <div className="flex items-center justify-between px-5 pb-1.5 pt-4 text-[10px] font-semibold text-ink-200">
            <span>9:41</span>
            <span className="flex items-center gap-2">
              <Signal className="h-3 w-3" strokeWidth={2.5} />
              <Wifi className="h-3 w-3" strokeWidth={2.5} />
              <span className="relative flex h-3 w-[18px] items-center rounded-[3.5px] border border-ink-400 px-[2.5px]">
                <span className="block h-[7px] w-[11px] rounded-[1.5px] bg-emerald-400" />
                <span className="absolute -right-[1.5px] top-1/2 h-[5px] w-[2px] -translate-y-1/2 rounded-r-full bg-ink-400" />
              </span>
            </span>
          </div>

          {/* Mapa abstracto */}
          <div className="relative h-[280px] overflow-hidden rounded-[2.75rem] sm:h-[310px]">
            {/* Fondo del mapa */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#152a57] via-[#0c1a38] to-[#071020]" />

            {/* Red de calles y manzanas (estilo navegación, modo oscuro) */}
            <svg
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              className="absolute inset-0 h-full w-full"
              fill="none"
              aria-hidden
            >
              {/* Manzanas y calles en trama densa (efecto "zoom out") */}
              <defs>
                <pattern id="cityGrid" width="8" height="8" patternUnits="userSpaceOnUse">
                  <rect
                    x="1"
                    y="1"
                    width="6"
                    height="6"
                    rx="0.9"
                    fill="#ffffff"
                    fillOpacity="0.04"
                    stroke="#7db4ff"
                    strokeOpacity="0.06"
                    strokeWidth="0.3"
                  />
                  <path d="M0 0H8" stroke="#223a60" strokeWidth="0.7" strokeLinecap="square" />
                  <path d="M0 0V8" stroke="#223a60" strokeWidth="0.7" strokeLinecap="square" />
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#cityGrid)" />

              {/* Avenidas principales: borde exterior */}
              <g strokeLinecap="round">
                <path d="M0 24L100 24" stroke="#0a1730" strokeWidth="4.6" />
                <path d="M0 72L100 72" stroke="#0a1730" strokeWidth="4.6" />
                <path d="M32 0L32 100" stroke="#0a1730" strokeWidth="4.4" />
                <path d="M64 0L64 100" stroke="#0a1730" strokeWidth="4.4" />
              </g>

              {/* Avenidas principales: calzada */}
              <g strokeLinecap="round">
                <path d="M0 24L100 24" stroke="#1c3355" strokeWidth="3.2" />
                <path d="M0 72L100 72" stroke="#1c3355" strokeWidth="3.2" />
                <path d="M32 0L32 100" stroke="#1c3355" strokeWidth="3" />
                <path d="M64 0L64 100" stroke="#1c3355" strokeWidth="3" />
              </g>

              {/* Avenidas principales: línea central */}
              <g strokeLinecap="round" strokeDasharray="3 3">
                <path d="M0 24L100 24" stroke="#7db4ff" strokeWidth="0.5" strokeOpacity="0.2" />
                <path d="M0 72L100 72" stroke="#7db4ff" strokeWidth="0.5" strokeOpacity="0.2" />
                <path d="M32 0L32 100" stroke="#7db4ff" strokeWidth="0.5" strokeOpacity="0.2" />
                <path d="M64 0L64 100" stroke="#7db4ff" strokeWidth="0.5" strokeOpacity="0.2" />
              </g>

              {/* Puntos de interés */}
              <circle cx="14" cy="40" r="0.55" fill="#7db4ff" opacity="0.35" />
              <circle cx="92" cy="30" r="0.55" fill="#7db4ff" opacity="0.35" />
              <circle cx="18" cy="62" r="0.55" fill="#7db4ff" opacity="0.35" />
              <circle cx="70" cy="84" r="0.55" fill="#7db4ff" opacity="0.35" />
            </svg>

            {/* Viñeta sutil del mapa */}
            <div className="absolute inset-0 bg-[radial-gradient(130%_130%_at_50%_38%,transparent_42%,rgba(2,6,20,0.5)_100%)]" />

            {/* Recorrido del bus (punto de partida → parada) */}
            <svg
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              className="absolute inset-0 z-[2] h-full w-full"
              fill="none"
            >
              <path
                id="busRoute"
                d="M32 88 H64 V72 H88 V48 H64 V24 H40"
                stroke="rgba(125,180,255,0.55)"
                strokeWidth="1.2"
                strokeDasharray="5 5"
                strokeLinecap="butt"
                strokeLinejoin="bevel"
              />
              <path
                d="M32 88 H64 V72 H88 V48 H64 V24 H40"
                stroke="url(#routeGrad)"
                strokeWidth="1.6"
                strokeLinecap="butt"
                strokeLinejoin="bevel"
              />
              <defs>
                <linearGradient id="routeGrad" x1="0" y1="1" x2="1" y2="0">
                  <stop offset="0" stopColor="#2563EB" />
                  <stop offset="1" stopColor="#7DD3FC" />
                </linearGradient>
                <linearGradient id="busGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#3b82f6" />
                  <stop offset="1" stopColor="#1e4fd0" />
                </linearGradient>
              </defs>
            </svg>

            {/* Destino con zona de alarma */}
            <div className="absolute left-[40%] top-[24%] z-10 -translate-x-1/2 -translate-y-1/2">
              <span className="block h-16 w-16 rounded-full bg-sky-400/10 ring-2 ring-dashed ring-sky-300/40" />
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-full">
                <MapPin
                  className="relative h-7 w-7 text-sky-glow drop-shadow-[0_4px_10px_rgba(56,189,248,0.6)]"
                  size={28}
                  fill="rgba(56,189,248,0.4)"
                />
              </span>
            </div>

            {/* Etiqueta del destino */}
            <span className="absolute left-[40%] top-[39%] z-10 -translate-x-1/2 rounded-md border border-white/10 bg-night-900/80 px-1.5 py-0.5 text-[9px] font-semibold text-ink-100 backdrop-blur-sm">
              Tu parada
            </span>

            {/* Punto de partida · posición GPS del usuario */}
            <div className="absolute left-[32%] top-[88%] z-10 -translate-x-1/2 -translate-y-1/2">
              <span className="relative flex h-4 w-4 items-center justify-center">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-glow opacity-50" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full border-2 border-night-900 bg-sky-glow shadow-[0_0_10px_rgba(56,189,248,0.9)]" />
              </span>
            </div>

            {/* Bus en movimiento: recorre la línea desde el inicio hacia el destino (SMIL) */}
            <svg
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              className="pointer-events-none absolute inset-0 z-30 h-full w-full"
              fill="none"
              aria-hidden
            >
              <defs>
                <filter
                  id="busGlow"
                  x="-60%"
                  y="-60%"
                  width="220%"
                  height="220%"
                >
                  <feGaussianBlur stdDeviation="2.2" />
                </filter>
              </defs>
              <g className="bus-fade">
                <animateMotion
                  dur="10s"
                  repeatCount="indefinite"
                  calcMode="linear"
                  keyPoints="0;0.9;1;1;1"
                  keyTimes="0;0.8;0.88;0.93;1"
                  rotate="0"
                  path="M32 88 H64 V72 H88 V48 H64 V24 H40"
                />
                <circle r="10.5" fill="#2563eb" opacity="0.35" filter="url(#busGlow)" />
                <g transform="translate(-7 -7)">
                  <rect
                    width="14"
                    height="14"
                    rx="3.4"
                    fill="url(#busGrad)"
                    stroke="rgba(255,255,255,0.3)"
                    strokeWidth="0.5"
                  />
                  <g transform="translate(2.4 2.4)">
                    <Bus size={9.2} strokeWidth={2.2} className="text-white" />
                  </g>
                </g>
              </g>
            </svg>

            {/* Chip de distancia restante */}
            <div className="absolute bottom-3 left-3 z-50 flex items-center gap-1.5 rounded-lg border border-white/10 bg-night-900/80 px-2.5 py-1.5 text-[10px] font-bold text-white backdrop-blur-md">
              <span className="flex h-3 w-3 shrink-0 items-center justify-center">
                <Navigation className="h-3 w-3 text-sky-glow" />
              </span>
              <span className="leading-none">1,2 km</span>
            </div>

            {/* Chip del radio de alarma */}
            <div className="absolute bottom-3 right-3 z-50 flex items-center gap-1.5 rounded-lg border border-white/10 bg-night-900/80 px-2.5 py-1.5 text-[10px] font-bold text-ink-100 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Radio 300 m
            </div>
          </div>

          {/* Franja inferior "glass" con el estado de la alarma */}
          <div className="relative z-50 flex items-center gap-3 px-4 py-3.5">
            <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400 to-blue-600 text-white shadow-glow-blue">
              <BellRing className="h-5 w-5" />
            </span>
            <div className="flex min-w-0 flex-1 flex-col">
              <p className="flex items-center gap-1.5 text-[13px] font-bold text-white">
                Alarma lista
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)]" />
              </p>
              <p className="whitespace-normal text-[11px] leading-tight text-ink-300">
                Sonará antes de tu parada · «Te aviso al llegar»
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
    <section className="relative z-10 mx-auto flex w-[min(100%-2rem,76rem)] flex-col pb-16 pt-36 sm:pb-20 sm:pt-44">
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
            <GhostButton onClick={() => scrollToId("features")}>
              Ver características
            </GhostButton>
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

      <ScrollIndicator />
    </section>
  );
}

/** Indicador "desliza para ver más": flecha animada que se desvanece al hacer scroll. */
function ScrollIndicator() {
  const { scrollY } = useScroll();
  const progress = useMotionValue(0);
  const opacity = useSpring(progress, { stiffness: 120, damping: 28, mass: 0.6 });
  const y = useSpring(progress, { stiffness: 120, damping: 28, mass: 0.6 });

  useEffect(() => {
    const update = () => {
      const max = Math.max(window.innerHeight * 0.75, 1);
      progress.set(Math.max(0, 1 - scrollY.get() / max));
    };
    update();
    return scrollY.on("change", update);
  }, [scrollY, progress]);

  return (
    <motion.button
      type="button"
      onClick={() => scrollToId("features")}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.1, duration: 0.8 }}
      style={{ opacity, y }}
      className="pointer-events-auto relative z-20 mx-auto mt-12 flex flex-col items-center gap-1 sm:mt-16 lg:mt-20"
      aria-label="Desliza para ver las características"
    >
      <motion.span
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="flex flex-col items-center gap-1.5"
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-[12px] font-medium tracking-wide text-ink-300 backdrop-blur-md">
          <ChevronDown className="h-3.5 w-3.5 text-sky-glow" />
          Hay más que ver
          <ChevronDown className="h-3.5 w-3.5 text-sky-glow" />
        </span>
        <ChevronDown className="h-5 w-5 text-sky-300/70" />
      </motion.span>
    </motion.button>
  );
}