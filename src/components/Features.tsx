import { motion } from "framer-motion";
import { useRef, useState } from "react";
import {
  BatteryCharging,
  Crown,
  MapPin,
  Sparkles,
} from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "./Reveal";

const cx = (...parts: (string | false | null | undefined)[]) =>
  parts.filter(Boolean).join(" ");

interface Feature {
  title: string;
  description: string;
  icon: typeof MapPin;
  accent: string;
  glance: string;
}

const FEATURES: Feature[] = [
  {
    title: "Alarma por distancia",
    description:
      "Define a cuántos metros antes de tu parada quieres despertar. La app detecta el “flanco de entrada” a esa zona y dispara la alarma con pantalla bloqueada: ni un minuto antes, ni un minuto tarde.",
    icon: MapPin,
    accent: "from-sky-400 to-blue-600",
    glance: "Radio configurable · aviso proactivo",
  },
  {
    title: "Optimización de batería",
    description:
      "Un rastreo GPS adaptativo ajusta la precisión según tu cercanía al destino: lejos usa menos energía y cerca se afina. Un servicio en segundo plano mantiene la geocerca sin drenar el teléfono.",
    icon: BatteryCharging,
    accent: "from-emerald-400 to-teal-600",
    glance: "GPS adaptativo · segundo plano",
  },
  {
    title: "Modo PRO",
    description:
      "Sin anuncios, temas de color personalizables y tu propio color de acento para toda la app. Plus: estadísticas de tus viajes y nuevas funciones antes que nadie.",
    icon: Crown,
    accent: "from-amber-400 to-orange-600",
    glance: "Sin anuncios · temas · color propio",
  },
];

function FeatureVisual({ feature }: { feature: Feature }) {
  const [hover, setHover] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  return (
    <div
      onMouseEnter={() => {
        clearTimeout(timer.current ?? undefined);
        setHover(true);
      }}
      onMouseLeave={() => {
        timer.current = setTimeout(() => setHover(false), 350);
      }}
      className="relative flex h-[172px] items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-night-800/80"
    >
      {/* Resplandor que crece con el hover */}
      <div className="absolute left-1/2 top-1/2 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(closest-side,rgba(37,99,235,0.14),transparent_75%)]" />

      {/* Icono grande */}
      <feature.icon
        className="relative z-10 h-14 w-14 opacity-70 transition-all duration-500"
        style={{ transform: hover ? "scale(1.15) rotate(-6deg)" : undefined }}
        strokeWidth={1.4}
      />

      {/* Puntos decorativos */}
      <div className="absolute left-5 top-6 h-8 w-8 rounded-full border border-white/10" />
      <div className="absolute right-6 top-8 h-4 w-4 rounded-full bg-sky-400/20" />
      <div className="absolute bottom-6 right-8 h-6 w-6 rounded-lg border border-white/10" />
      <div className="absolute bottom-8 left-7 h-2 w-2 rounded-full bg-cyan-glow/40" />

      {/* Deslizador de radio (insinuación) */}
      <div className="absolute bottom-5 left-1/2 h-1 w-24 -translate-x-1/2 overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-gradient-to-r from-sky-400 to-blue-500 transition-all duration-500"
          style={{ width: hover ? "86%" : "55%" }}
        />
      </div>
    </div>
  );
}

function FeatureCard({ feature }: { feature: Feature }) {
  const hoverClass = cx(
    feature.accent,
    "inline-flex h-12 w-12 items-center justify-center rounded-[15px] bg-gradient-to-br text-white shadow-lg",
  );

  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="group relative h-full rounded-3xl border border-white/10 bg-white/[0.04] p-1 shadow-[0_20px_60px_-24px_rgba(0,0,0,0.8)] backdrop-blur-xl hover:border-white/20 hover:bg-white/[0.06]"
    >
      <div className="flex h-full flex-col rounded-[1.4rem] p-6">
        <div className="flex items-center justify-between gap-4">
          <span className={hoverClass}>
            <feature.icon className="h-5.5 w-5.5" strokeWidth={2.1} />
          </span>
          <span className="text-right text-[11px] font-semibold uppercase leading-snug tracking-wider text-ink-400">
            {feature.glance}
          </span>
        </div>

        <h3 className="mt-6 font-display text-xl font-bold tracking-tight text-white">
          {feature.title}
        </h3>
        <p className="mt-3 flex-1 text-[15px] leading-relaxed text-ink-300">
          {feature.description}
        </p>

        <div className="mt-6">
          <FeatureVisual feature={feature} />
        </div>

        <div className="mt-5 flex items-center gap-2 text-[13px] font-semibold text-sky-300">
          <span className="text-sm">→</span>
          Saber más
          <span className="h-px flex-1 bg-gradient-to-r from-sky-400/40 to-transparent" />
        </div>
      </div>
    </motion.article>
  );
}

const TICKER = [
  "Alarma con pantalla bloqueada",
  "Bus en vivo sobre el mapa",
  "Metro de Santiago · Valparaíso · Biobío",
  "Tus datos solo en tu teléfono",
  "Radio de alarma configurable",
  "3 idiomas y tema claro/oscuro",
];

const TICKER_DOTS = [
  "bg-sky-400",
  "bg-emerald-400",
  "bg-amber-400",
  "bg-violet-400",
  "bg-cyan-glow",
  "bg-blue-500",
];

function TickerStrip() {
  return (
    <div className="relative mt-20 overflow-hidden py-2">
      <div className="flex w-max animate-[ticker_38s_linear_infinite] gap-10 pr-10">
        {[0, 1].map((dup) => (
          <div key={dup} className="flex shrink-0 items-center gap-10">
            {TICKER.map((text, i) => (
              <span
                key={i}
                className="flex items-center gap-2.5 whitespace-nowrap text-[13px] font-medium tracking-wide text-ink-400"
              >
                <span
                  className={cx(
                    "h-1.5 w-1.5 rounded-full",
                    TICKER_DOTS[i % TICKER_DOTS.length],
                  )}
                />
                {text}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export function Features() {
  return (
    <section id="features" className="relative z-10 scroll-mt-28 pt-20 sm:pt-28">
      <div className="mx-auto w-[min(100%-2rem,76rem)]">
        <Stagger className="mx-auto max-w-2xl text-center">
          <StaggerItem>
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/25 bg-sky-400/[0.08] px-4 py-1.5 text-[13px] font-semibold text-sky-200 backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5" />
              Por qué Despiertapp
            </div>
          </StaggerItem>
          <StaggerItem>
            <h2 className="mt-6 font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              Todo lo que necesitas
              <span className="block bg-gradient-to-r from-sky-300 to-blue-500 bg-clip-text text-transparent">
                para llegar despierto
              </span>
            </h2>
          </StaggerItem>
          <StaggerItem>
            <p className="mt-5 text-lg leading-relaxed text-ink-300">
              Una alarma inteligente que se adapta a tu viaje: despertarte a
              tiempo, cuidar tu batería y mantenerte en control.
            </p>
          </StaggerItem>
        </Stagger>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {FEATURES.map((feature) => (
            <StaggerItem key={feature.title} className="h-full">
              <FeatureCard feature={feature} />
            </StaggerItem>
          ))}
        </div>

        <Reveal>
          <TickerStrip />
        </Reveal>
      </div>
    </section>
  );
}