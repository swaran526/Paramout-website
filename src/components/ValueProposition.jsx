import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ShieldCheck, Target, Zap } from 'lucide-react'

export default function ValueProposition() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section ref={ref} id="value-proposition" className="bg-navy-900 text-white py-24 font-body relative overflow-hidden border-t border-navy-800">

      {/* Background Subtle Tech Grid matching your UI exactly */}
      <div className="absolute inset-0 bg-grid-navy opacity-30 pointer-events-none" />

      {/* Ambient center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-lime-brand/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Column — Text & Stacked Metric Highlights */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex flex-col"
          >
            <span className="text-xs font-mono tracking-[0.25em] text-steel-400 uppercase block mb-4">
              // CORE ADVANTAGE
            </span>
            <h2 className="font-display font-black uppercase text-3xl sm:text-4xl tracking-tight text-white leading-[1.1] mb-6">
              Our Value <br />
              <span className="text-lime-brand">Proposition.</span>
            </h2>
            <p className="text-steel-200 text-sm font-medium max-w-xl leading-relaxed mb-10">
              We engineer solutions that optimize your tooling setup. Through customized cutting geometries, sub-micron carbide grades, and high-performance coatings, we help your facility achieve faster cycles and longer tool life.
            </p>

            {/* Stacked Metric Highlights */}
            <div className="flex flex-col gap-4">

              {/* Metric 1 */}
              <div className="flex items-start gap-5 p-5 border border-navy-800 bg-navy-900/40 rounded-xl relative overflow-hidden group hover:border-lime-brand/30 transition-colors duration-300">
                <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-navy-800 group-hover:border-lime-brand/30 transition-colors" />
                <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-navy-950 border border-navy-800 text-lime-brand group-hover:text-emerald-400 transition-colors">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-display font-black text-xl text-white group-hover:text-lime-400 transition-colors">+30%</span>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-steel-500">Tool Life</span>
                  </div>
                  <p className="text-steel-200 text-xs leading-relaxed mt-1 font-medium">
                    Engineered geometries and Balzers coatings reduce thermal friction, significantly extending tool durability.
                  </p>
                </div>
              </div>

              {/* Metric 2 */}
              <div className="flex items-start gap-5 p-5 border border-navy-800 bg-navy-900/40 rounded-xl relative overflow-hidden group hover:border-lime-brand/30 transition-colors duration-300">
                <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-navy-800 group-hover:border-lime-brand/30 transition-colors" />
                <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-navy-950 border border-navy-800 text-lime-brand group-hover:text-emerald-400 transition-colors">
                  <Target size={20} />
                </div>
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-display font-black text-xl text-white group-hover:text-lime-400 transition-colors">±0.002mm</span>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-steel-500">Grinding Precision</span>
                  </div>
                  <p className="text-steel-200 text-xs leading-relaxed mt-1 font-medium">
                    Held to aerospace tolerances on multi-axis CNC grinding machines, verified by Zeiss coordinate metrology.
                  </p>
                </div>
              </div>

              {/* Metric 3 */}
              <div className="flex items-start gap-5 p-5 border border-navy-800 bg-navy-900/40 rounded-xl relative overflow-hidden group hover:border-lime-brand/30 transition-colors duration-300">
                <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-navy-800 group-hover:border-lime-brand/30 transition-colors" />
                <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-navy-950 border border-navy-800 text-lime-brand group-hover:text-emerald-400 transition-colors">
                  <Zap size={20} />
                </div>
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-display font-black text-xl text-white group-hover:text-lime-400 transition-colors">24 Hour</span>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-steel-500">Response Guarantee</span>
                  </div>
                  <p className="text-steel-200 text-xs leading-relaxed mt-1 font-medium">
                    Application engineers analyze your custom drawings and issue detailed quotes with cycle data within 24 hours.
                  </p>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Column — Composite Graphic Features */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative flex items-center justify-center aspect-square w-full bg-navy-900/40 border border-navy-800 rounded-xl shadow-2xl p-8 lg:p-12 overflow-hidden group"
          >
            {/* Ambient spinning accent rings adjusted to use theme lines */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
              <div className="w-4/5 h-4/5 rounded-full border-4 border-dashed border-navy-800 animate-[spin_40s_linear_infinite]" />
            </div>

            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10">
              <div className="w-[110%] h-[110%] rounded-full border border-lime-brand/30 animate-[spin_60s_linear_infinite]" />
            </div>

            {/* Blueprint content card frame */}
            <div className="relative z-10 w-full h-full border border-navy-800 rounded-lg flex flex-col justify-between p-6 bg-navy-950/80 backdrop-blur-sm">
              <div className="flex justify-between items-start border-b border-navy-800 pb-6">
                <div>
                  <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-lime-brand mb-1 block">Engineering Blueprint</span>
                  <h4 className="font-display font-black text-white text-base sm:text-lg uppercase tracking-wide">End Mill Reliefradial</h4>
                </div>
                <span className="font-mono text-[9px] text-steel-500">REV: 04.2B</span>
              </div>

              {/* Image with blueprint overlay */}
              <div className="my-6 relative h-48 w-full overflow-hidden border border-navy-800 bg-black/40 flex items-center justify-center rounded">
                <img
                  src="/images/materials_comparison.jpg"
                  alt="Cutting Materials Test"
                  className="w-full h-full object-cover brightness-[0.55] group-hover:scale-102 transition-transform duration-700 pointer-events-none"
                />

                {/* Techy grid line overlay matching background */}
                <div className="absolute inset-0 bg-grid-steel opacity-20" />

                {/* Blueprint data panels */}
                <div className="absolute top-4 left-4 border border-navy-800 bg-navy-950/90 text-lime-brand font-mono text-[8px] px-2 py-0.5 uppercase tracking-wider rounded">
                  Material Testing: M · N · S
                </div>
                <div className="absolute bottom-4 right-4 border border-navy-800 bg-navy-950/90 text-steel-400 font-mono text-[8px] px-2 py-0.5 uppercase rounded">
                  Verified Geometry
                </div>
              </div>

              <div className="border-t border-navy-800 pt-6 flex justify-between items-center text-[10px] font-mono text-steel-400">
                <div className="flex gap-4">
                  <div>RADIUS: 6.00mm</div>
                  <div>ANGLE: 12°</div>
                </div>
                <span className="text-lime-brand font-bold group-hover:text-emerald-400 transition-colors">VERIFIED OK</span>
              </div>
            </div>

            {/* Dynamic visual anchors */}
            <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-navy-800 group-hover:border-lime-brand/30 transition-colors" />
            <div className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-navy-800 group-hover:border-lime-brand/30 transition-colors" />
          </motion.div>

        </div>
      </div>

      {/* Bottom green accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-lime-brand to-transparent" />
    </section>
  )
}