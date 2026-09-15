import { motion } from "framer-motion";
import type { ReactNode } from "react";
import {
  ArrowLeft,
  Mail,
  Map,
  MapPin,
  ShieldCheck,
  ShoppingCart,
  User,
} from "lucide-react";
import { Link } from "react-router-dom";
import { fadeUp, stagger } from "../lib/motion";
import { APP_NAME, EMAIL } from "../lib/site";
import { PagesLayout } from "../components/PagesLayout";

const card =
  "rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl sm:p-8";

function Section({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ElementType;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className={card}>
      <h2 className="flex items-center gap-3 font-display text-lg font-bold tracking-tight text-white">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 text-white">
          <Icon className="h-4.5 w-4.5" />
        </span>
        {title}
      </h2>
      <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-ink-300">
        {children}
      </div>
    </section>
  );
}

function Highlight({ children }: { children: ReactNode }) {
  return <strong className="font-semibold text-sky-300">{children}</strong>;
}

export function PrivacyPage() {
  return (
    <PagesLayout>
      <main className="relative z-10 mx-auto w-[min(100%-2rem,52rem)] pb-24 pt-32 sm:pt-40">
      <motion.div
        variants={stagger(0.05, 0.12)}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={fadeUp}>
          <Link
            to="/"
            className="group inline-flex items-center gap-2 rounded-xl px-3 py-2 text-[13px] font-semibold text-ink-300 transition-colors duration-300 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
            Volver a la portada
          </Link>
        </motion.div>

        <motion.header variants={fadeUp} className="mt-6 text-center sm:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-sky-400/25 bg-sky-400/[0.08] px-4 py-1.5 text-[12px] font-semibold uppercase tracking-widest text-sky-200 backdrop-blur-md">
            <ShieldCheck className="h-3.5 w-3.5" />
            Privacidad
          </span>
          <h1 className="mt-5 font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Política de Privacidad
          </h1>
          <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[12px] font-medium text-ink-300 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Última actualización: 14 de septiembre de 2026
          </p>
        </motion.header>

        <motion.div variants={fadeUp} className="mt-8 space-y-6">
          <p className="rounded-2xl border-l-4 border-sky-400 bg-white/[0.04] p-6 text-[15px] leading-relaxed text-ink-200 backdrop-blur-xl">
            Esta Política de Privacidad describe cómo <Highlight>{APP_NAME}</Highlight>{" "}
            recopila, utiliza y protege la información de los usuarios. Al
            utilizar nuestra aplicación, aceptas las prácticas descritas en este
            documento.
          </p>
        </motion.div>

        <motion.div variants={fadeUp} className="mt-10 space-y-6">
          <Section icon={MapPin} title="Uso de la Ubicación (GPS)">
            <p>
              {APP_NAME} es una alarma basada en la ubicación diseñada para
              despertarte al acercarte a tu destino. Para funcionar
              correctamente, requerimos acceso a:
            </p>
            <ul className="space-y-3">
              <Li>
                <Highlight>Ubicación en segundo plano:</Highlight> el acceso a
                la ubicación (incluso cuando la app está minimizada o la
                pantalla del dispositivo está apagada/bloqueada) es
                estrictamente necesario para rastrear tu progreso, calcular la
                distancia al destino y activar la alarma de manera oportuna.
              </Li>
              <Li>
                <Highlight>Procesamiento local:</Highlight> los datos de tu
                ubicación se procesan de forma local en tu dispositivo. No
                guardamos un historial de tus rutas en servidores externos ni
                compartimos tu ubicación en tiempo real con terceros para fines
                de seguimiento.
              </Li>
            </ul>
          </Section>

          <Section icon={Map} title="Servicios de Terceros y Publicidad (Versión Gratuita)">
            <p>
              Para mantener la versión gratuita operativa, integramos servicios
              de publicidad de terceros (como <Highlight>Google AdMob</Highlight>).
            </p>
            <ul className="space-y-3">
              <Li>
                Estos proveedores pueden recopilar y utilizar identificadores de
                tu dispositivo móvil y datos de uso generales para mostrar
                anuncios publicitarios relevantes.
              </Li>
              <Li>
                Las políticas sobre cómo estos proveedores manejan la
                información están regidas por sus propios términos de servicio y
                privacidad, independientes a esta aplicación.
              </Li>
            </ul>
          </Section>

          <Section icon={ShoppingCart} title="Compras Integradas (Modo PRO)">
            <p>
              Al adquirir la versión premium (<Highlight>{APP_NAME} PRO</Highlight>) para
              eliminar anuncios o desbloquear funciones de personalización:
            </p>
            <ul className="space-y-3">
              <Li>
                Todas las transacciones económicas se realizan mediante el
                sistema seguro de facturación de{" "}
                <Highlight>Google Play Billing</Highlight>.
              </Li>
              <Li>
                El desarrollador no recopila, almacena ni tiene acceso a tu
                información financiera, detalles bancarios o números de tarjeta
                de crédito.
              </Li>
            </ul>
          </Section>

          <Section icon={User} title="Seguridad y Derechos del Usuario">
            <p>
              El control de tus datos y permisos permanece en tus manos en todo
              momento:
            </p>
            <ul className="space-y-3">
              <Li>
                Puedes revocar el permiso de ubicación directamente desde la
                configuración de tu sistema operativo cuando lo desees (ten en
                cuenta que esto detendrá el funcionamiento de la alarma GPS).
              </Li>
              <Li>
                Toda tu información personal, como los lugares guardados en
                favoritos o tus métricas de viaje, se almacena exclusivamente en
                la memoria local de tu teléfono.
              </Li>
            </ul>
          </Section>

          <Section icon={Mail} title="Contacto">
            <p>
              Si tienes alguna pregunta o inquietud sobre esta Política de
              Privacidad, puedes comunicarte con el desarrollador:
            </p>
            <div className="mt-4 rounded-2xl border border-sky-400/20 bg-gradient-to-br from-white/[0.06] to-sky-400/[0.06] p-6">
              <p className="flex items-center gap-2 text-[15px] font-semibold text-white">
                <User className="h-4 w-4 text-sky-300" />
                Juan Cortes
              </p>
              <p className="mt-2 flex items-center gap-2 text-[14px] text-ink-300">
                <Mail className="h-4 w-4 text-sky-300" />
                <a
                  href={`mailto:${EMAIL}`}
                  className="font-medium text-sky-300 underline decoration-sky-400/40 underline-offset-4 transition-colors hover:text-sky-200"
                >
                  {EMAIL}
                </a>
              </p>
            </div>
          </Section>
        </motion.div>
      </motion.div>
      </main>
    </PagesLayout>
  );
}

function Li({ children }: { children: ReactNode }) {
  return (
    <li className="relative rounded-xl border border-white/5 bg-white/[0.03] p-4 pl-11">
      <span className="absolute left-4 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-sky-400 shadow-[0_0_8px_2px_rgba(56,189,248,0.5)]" />
      <span className="text-[14.5px] leading-relaxed text-ink-300">{children}</span>
    </li>
  );
}