import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  Microscope, Zap, ShieldCheck, BarChart3,
  Package, Headphones, FlaskConical, Timer, ChevronRight
} from 'lucide-react'

const reasons = [
  {
    icon: Microscope,
    title: 'Sub-Micron Inspection',
    tag: 'METROLOGY_01',
    desc: 'Every batch inspected on Zeiss CMMs and Zoller presetting systems. No shipment without a certificate.',
  },
  {
    icon: Zap,
    title: '48-Hour Prototyping',
    tag: 'RUSH_ENG_02',
    desc: 'Custom geometry from DXF to your dock in 48 hours. Rush engineering desk staffed around the clock.',
  },
  {
    icon: ShieldCheck,
    title: 'ISO 9001:2015',
    tag: 'QA_MATRIX_03',
    desc: 'End-to-end quality management from raw carbide rod to final packaging — every deviation documented.',
  },
  {
    icon: BarChart3,
    title: 'Tool Life Guarantee',
    tag: 'BENCHMARK_04',
    desc: 'We guarantee tool life benchmarks or we replace it — no questions, no friction.',
  },
  {
    icon: FlaskConical,
    title: 'In-House Substrate R&D',
    tag: 'METALLURGY_05',
    desc: 'Proprietary carbide grades and PVD coating recipes developed in our on-site materials lab.',
  },
  {
    icon: Package,
    title: 'Kitting & VMI',
    tag: 'LOGISTICS_06',
    desc: 'Vendor Managed Inventory programs keep your crib stocked without capital tied up in tool inventory.',
  },
  {
    icon: Timer,
    title: '98% On-Time Delivery',
    tag: 'TRACKING_07',
    desc: 'Real-time order tracking with automated alerts. Your production schedule is our production schedule.',
  },
  {
    icon: Headphones,
    title: 'Dedicated Application Engineers',
    tag: 'EXPERT_DESK_08',
    desc: 'A named engineer assigned to your account — not a call center. They know your parts, your machines.',
  },
]

export default function WhyChooseUs() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.06 }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  }

  return (
    <section id="why-us" ref={ref} className="bg-navy-900 text-white py-24 font-body relative overflow-hidden border-t border-navy-800">

      {/* Background Subtle Tech Grid */}
      <div className="absolute inset-0 bg-grid-navy opacity-30 pointer-events-none" />

      {/* Ambient center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-lime-brand/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 z-10">

        {/* ==========================================
            SECTION HEADER SEQUENCE
            ========================================== */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-3">
          <motion.span
            className="text-xs font-mono tracking-[0.25em] text-steel-400 uppercase block"
            initial={{ opacity: 0, y: -10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            // THE PARAMOUNT DIFFERENCE
          </motion.span>

          <motion.h2
            className="font-display font-black uppercase text-4xl sm:text-6xl tracking-tight text-white leading-none"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Why Machinists<br />
            <span className="text-lime-brand">Choose Us</span>
          </motion.h2>

          <div className="w-12 h-px bg-navy-800 mx-auto pt-4" />
        </div>

        {/* ==========================================
            TACTICAL METRICS GRID
            ========================================== */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {reasons.map(({ icon: Icon, title, tag, desc }) => (
            <motion.div
              key={title}
              variants={cardVariants}
              className="group bg-navy-900/40 border border-navy-800 hover:border-lime-brand/30 rounded-xl relative overflow-hidden p-8 shadow-xl transition-all duration-500 flex flex-col justify-between min-h-[280px]"
            >
              {/* Tactical Corner Tech Brackets */}
              <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-navy-800 group-hover:border-lime-brand/40 transition-colors" />
              <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-navy-800 group-hover:border-lime-brand/40 transition-colors" />

              <div>
                {/* Header Row: Icon and Engineering System Tag */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-lg bg-navy-950 border border-navy-800 group-hover:border-lime-brand/40 flex items-center justify-center transition-all duration-300 text-lime-brand shadow-inner group-hover:shadow-[0_0_15px_rgba(163,230,53,0.1)]">
                    <Icon size={20} className="transform group-hover:scale-105 transition-transform duration-300" />
                  </div>

                  <span className="font-mono text-[9px] tracking-widest text-steel-500 group-hover:text-steel-400 transition-colors">
                    // {tag}
                  </span>
                </div>

                {/* Content Block */}
                <div className="space-y-2">
                  <h3 className="font-display font-black uppercase text-sm sm:text-base tracking-wide text-steel-200 group-hover:text-white transition-colors">
                    {title}
                  </h3>
                  <p className="text-steel-200 text-xs font-medium leading-relaxed group-hover:text-steel-100 transition-colors">
                    {desc}
                  </p>
                </div>
              </div>

              {/* Decorative Bottom Anchor tracking design aesthetics */}
              <div className="pt-4 mt-4 border-t border-navy-800/40 flex items-center gap-1 font-mono text-[9px] text-steel-500 group-hover:text-lime-brand transition-colors">
                <span>SYSTEM EVALUATION ACTIVE</span>
                <ChevronRight size={10} className="opacity-0 group-hover:opacity-100 transform group-hover:translate-x-0.5 transition-all" />
              </div>

              {/* Ambient Radial Spotlight Base Glow Layer */}
              <div className="absolute inset-0 bg-radial from-lime-500/0 via-transparent to-transparent group-hover:from-lime-500/5 transition-all duration-500 pointer-events-none blur-xl" />
            </motion.div>
          ))}
        </motion.div>

      </div>

      {/* Bottom green accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-lime-brand to-transparent" />
    </section>
  )
}