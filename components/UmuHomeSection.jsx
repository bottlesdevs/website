import { ArrowRight, Gamepad2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const UmuHomeSection = ({ onOpenPost }) => (
  <section className="relative overflow-hidden border-y border-red-950/60 bg-black py-28">
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_45%,rgba(220,38,38,0.24),transparent_36%),radial-gradient(circle_at_88%_25%,rgba(127,29,29,0.16),transparent_30%)]" />
    <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(239,68,68,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(239,68,68,0.2)_1px,transparent_1px)] [background-size:72px_72px]" />

    <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-[0.88fr_1.12fr] lg:px-8">
      <div>
        <div className="mb-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-red-400">
          <Gamepad2 className="h-5 w-5" />
          New in Bottles 66
        </div>

        <h2 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-6xl">
          UMU is now part of Bottles.
        </h2>

        <p className="max-w-xl text-lg leading-relaxed text-zinc-400">
          Run games with Proton outside Steam, directly from the Library you already use. Bottles takes care of the prefix, the runner and each game configuration while UMU provides the same runtime environment Proton expects.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            to="/umu"
            onClick={() => window.scrollTo(0, 0)}
            className="inline-flex items-center gap-2 rounded-full bg-red-600 px-7 py-3.5 font-bold text-white transition-colors hover:bg-red-500"
          >
            Discover UMU
            <ArrowRight className="h-4 w-4" />
          </Link>
          <button
            type="button"
            onClick={() => onOpenPost('2026-08-10-bottles-66.md')}
            className="inline-flex items-center gap-2 rounded-full border border-red-900 bg-red-950/30 px-7 py-3.5 font-bold text-red-100 transition-colors hover:border-red-700 hover:bg-red-950/60"
          >
            Announcement
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="relative">
        <div className="absolute -inset-8 bg-red-600/15 blur-3xl" />
        <img
          src="/uploads/bottles-66/umu-library.png"
          alt="Games managed through UMU in the Bottles Library"
          loading="lazy"
          className="relative w-full rounded-2xl shadow-2xl shadow-red-950/50"
        />
      </div>
    </div>
  </section>
);

export default UmuHomeSection;
