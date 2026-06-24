import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Cpu, ShieldAlert, Key, Settings } from 'lucide-react'

const capabilities = [
  {
    icon: Cpu,
    title: '5-Axis CNC Grinding',
    desc: 'High-precision Walter Helitronic and Rollomatic grinder platforms executing flute, relief, and profile geometries. Tolerances held to ±0.002mm.',
    stat: 'Walter / Rollomatic'
  },
  {
    icon: Settings,
    title: 'Advanced PVD Coating',
    desc: 'In-house Oerlikon Balzers arc ion-plating chamber applying customized TiAlN, AlCrN, and DLC coatings matched precisely to raw work materials.',
    stat: 'TiAlN · AlCrN · DLC'
  },
  {
    icon: ShieldAlert,
    title: 'Zeiss Metrology & QC',
    desc: 'Full dimension verification using Zeiss Contura CMM and Zoller Genius presetter systems. Digital keyence microscopy inspects edge preps at 200x.',
    stat: 'Zeiss · Zoller · Keyence'
  },
  {
    icon: Key,
    title: 'Engineering Review',
    desc: 'Every tool path and custom geometry runs through an application engineering review to establish optimal chip load and clearance values.',
    stat: 'CAD / CAM Optimization'
  }
]

export default function ManufacturingCapabilities() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 })

  return (
    <section id="capabilities" ref={ref} className="py-24 bg-navy-900 relative overflow-hidden">
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid-navy opacity-30 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-lime-brand/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-display text-xs font-bold uppercase tracking-widest text-lime-brand">Production Facility</span>
          <h2 className="font-display font-black text-2xl lg:text-4xl uppercase tracking-tight text-white mt-1">
            Manufacturing <span className="text-lime-brand">Capabilities</span>
          </h2>
          <p className="text-steel-400 mt-4 max-w-md mx-auto text-xs sm:text-sm">
            State-of-the-art machinery and quality standards executing high-precision tooling cycles.
          </p>
        </div>

        {/* 4-Column Row Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((cap, i) => {
            const Icon = cap.icon
            return (
              <motion.div
                key={cap.title}
                className="group bg-navy-800 border border-navy-700/60 p-6 flex flex-col justify-between hover:border-lime-brand/40 hover:bg-navy-800/80 transition-all duration-300 relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                {/* Visual border accent */}
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-lime-brand/50 to-transparent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
                
                <div>
                  <div className="w-10 h-10 flex items-center justify-center bg-lime-brand/10 border border-lime-brand/20 text-lime-brand mb-6 transition-colors group-hover:bg-lime-brand group-hover:text-navy-900 duration-300">
                    <Icon size={18} />
                  </div>
                  
                  <h3 className="font-display font-black uppercase text-sm sm:text-base text-white tracking-wide mb-3">
                    {cap.title}
                  </h3>
                  
                  <p className="text-steel-400 text-xs leading-relaxed font-light mb-6">
                    {cap.desc}
                  </p>
                </div>
                
                <span className="font-mono text-[9px] text-steel-500 uppercase tracking-wider block border-t border-navy-700/50 pt-4">
                  {cap.stat}
                </span>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
