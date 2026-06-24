import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ShieldCheck, Target, Zap } from 'lucide-react'

export default function ValueProposition() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section ref={ref} className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background grid */}
      <div className="absolute inset-0 bg-grid-steel opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column — Text & Stacked Metric Highlights */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex flex-col"
          >
            <span className="font-display text-xs font-bold uppercase tracking-widest text-lime-brand mb-4">Core Advantage</span>
            <h2 className="font-display font-black uppercase text-2xl lg:text-4xl leading-[1.1] text-navy-900 mb-6">
              Our Value <span className="text-lime-brand">Proposition</span>
            </h2>
            <p className="text-steel-500 text-xs sm:text-sm leading-relaxed mb-10 font-light">
              We engineer solutions that optimize your tooling setup. Through customized cutting geometries, sub-micron carbide grades, and high-performance coatings, we help your facility achieve faster cycles and longer tool life.
            </p>

            {/* Stacked Metric Highlights */}
            <div className="flex flex-col gap-6">
              
              {/* Metric 1 */}
              <div className="flex items-start gap-5 p-4 border border-steel-100 bg-offwhite/50 hover:border-lime-brand/30 hover:bg-offwhite transition-colors duration-200">
                <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-navy-800 text-lime-brand border border-lime-brand/20">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-display font-black text-xl text-navy-900">+30%</span>
                    <span className="font-display font-extrabold text-[10px] uppercase tracking-wider text-steel-400">Tool Life</span>
                  </div>
                  <p className="text-steel-500 text-xs leading-relaxed mt-1 font-light">
                    Engineered geometries and Balzers coatings reduce thermal friction, significantly extending tool durability.
                  </p>
                </div>
              </div>

              {/* Metric 2 */}
              <div className="flex items-start gap-5 p-4 border border-steel-100 bg-offwhite/50 hover:border-lime-brand/30 hover:bg-offwhite transition-colors duration-200">
                <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-navy-800 text-lime-brand border border-lime-brand/20">
                  <Target size={20} />
                </div>
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-display font-black text-xl text-navy-900">±0.002mm</span>
                    <span className="font-display font-extrabold text-[10px] uppercase tracking-wider text-steel-400">Grinding Precision</span>
                  </div>
                  <p className="text-steel-500 text-xs leading-relaxed mt-1 font-light">
                    Held to aerospace tolerances on multi-axis CNC grinding machines, verified by Zeiss coordinate metrology.
                  </p>
                </div>
              </div>

              {/* Metric 3 */}
              <div className="flex items-start gap-5 p-4 border border-steel-100 bg-offwhite/50 hover:border-lime-brand/30 hover:bg-offwhite transition-colors duration-200">
                <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-navy-800 text-lime-brand border border-lime-brand/20">
                  <Zap size={20} />
                </div>
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-display font-black text-xl text-navy-900">24 Hour</span>
                    <span className="font-display font-extrabold text-[10px] uppercase tracking-wider text-steel-400">Response Guarantee</span>
                  </div>
                  <p className="text-steel-500 text-xs leading-relaxed mt-1 font-light">
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
            className="relative flex items-center justify-center aspect-square w-full bg-navy-900 border border-steel-800 shadow-2xl p-8 lg:p-12 overflow-hidden"
          >
            {/* Spinning green accent ring */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
              <div className="w-4/5 h-4/5 rounded-full border-4 border-dashed border-lime-brand/40 animate-[spin_40s_linear_infinite]" />
            </div>

            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10">
              <div className="w-[110%] h-[110%] rounded-full border border-lime-brand/20 animate-[spin_60s_linear_infinite]" />
            </div>

            {/* Graphic content */}
            <div className="relative z-10 w-full h-full border border-steel-800 flex flex-col justify-between p-6 bg-navy-950/80 backdrop-blur-sm">
              <div className="flex justify-between items-start border-b border-steel-800 pb-6">
                <div>
                  <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-lime-brand mb-1 block">Engineering Blueprint</span>
                  <h4 className="font-display font-black text-white text-base sm:text-lg uppercase">End Mill Reliefradial</h4>
                </div>
                <span className="font-mono text-[9px] text-steel-500">REV: 04.2B</span>
              </div>

              {/* Image with blueprint overlay */}
              <div className="my-6 relative h-48 w-full overflow-hidden border border-steel-800 bg-black/40 flex items-center justify-center">
                <img
                  src="/images/materials_comparison.jpg"
                  alt="Cutting Materials Test"
                  className="w-full h-full object-cover opacity-85"
                />
                
                {/* Techy grid line overlay */}
                <div className="absolute inset-0 bg-grid-steel opacity-10" />
                
                {/* Blueprint lines */}
                <div className="absolute top-4 left-4 border border-lime-brand bg-navy-950/90 text-lime-brand font-mono text-[8px] px-1.5 py-0.5 uppercase tracking-wider">
                  Material Testing: M · N · S
                </div>
                <div className="absolute bottom-4 right-4 border border-steel-700 bg-navy-950/90 text-steel-400 font-mono text-[8px] px-1.5 py-0.5 uppercase">
                  Verified Geometry
                </div>
              </div>

              <div className="border-t border-steel-800 pt-6 flex justify-between items-center text-[10px] font-mono text-steel-400">
                <div className="flex gap-4">
                  <div>RADIUS: 6.00mm</div>
                  <div>ANGLE: 12°</div>
                </div>
                <span className="text-lime-brand">VERIFIED OK</span>
              </div>
            </div>

            {/* Corner highlight anchors */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-lime-brand" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-lime-brand" />
          </motion.div>

        </div>
      </div>
    </section>
  )
}
