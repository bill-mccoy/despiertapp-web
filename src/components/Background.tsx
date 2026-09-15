import { motion } from "framer-motion";
import { fadeIn } from "../lib/motion";

/** Fondo ambient: gradientes, resplandores y red de puntos. */
export function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Degradado base de "cielo nocturno" */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_0%,#0b1c3d_0%,#070b16_46%,#04060d_100%)]" />

      {/* Resplandores borrosos estilo splash de la app */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1.6 }}
        className="absolute inset-0"
      >
        <div className="absolute -top-40 left-1/2 h-[560px] w-[860px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(37,99,235,0.4),transparent_70%)] blur-2xl" />
        <div className="absolute -left-40 top-1/3 h-[480px] w-[480px] rounded-full bg-[radial-gradient(closest-side,rgba(34,211,238,0.14),transparent_70%)] blur-2xl" />
        <div className="absolute -right-40 top-1/4 h-[520px] w-[520px] rounded-full bg-[radial-gradient(closest-side,rgba(56,189,248,0.12),transparent_70%)] blur-2xl" />
        <div className="absolute -bottom-52 left-1/4 h-[460px] w-[620px] rounded-full bg-[radial-gradient(closest-side,rgba(37,99,235,0.2),transparent_70%)] blur-3xl" />
      </motion.div>

      {/* Red de puntos sutil */}
      <div
        className="absolute inset-0 opacity-40 [background-image:radial-gradient(rgba(148,163,184,0.14)_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(70%_55%_at_50%_32%,black,transparent)]"
      />
    </div>
  );
}