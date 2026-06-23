import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  Microscope, Zap, ShieldCheck, BarChart3,
  Package, Headphones, FlaskConical, Timer
} from 'lucide-react'

const reasons = [
  {
    icon: Microscope,
    title: 'Sub-Micron Inspection',
    desc: 'Every batch inspected on Zeiss CMMs and Zoller presetting systems. No shipment without a certificate.',
  },
  {
    icon: Zap,
    title: '48-Hour Prototyping',
    desc: 'Custom geometry from DXF to your dock in 48 hours. Rush engineering desk staffed around the clock.',
  },
  {
    icon: ShieldCheck,
    title: 'ISO 9001:2015',
    desc: 'End-to-end quality management from raw carbide rod to final packaging — every deviation documented.',
  },
  {
    icon: BarChart3,
    title: 'Tool Life Guarantee',
    desc: 'We guarantee tool life benchmarks or we replace it — no questions, no friction.',
  },
  {
    icon: FlaskConical,
    title: 'In-House Substrate R&D',
    desc: 'Proprietary carbide grades and PVD coating recipes developed in our on-site materials lab.',
  },
  {
    icon: Package,
    title: 'Kitting & VMI',
    desc: 'Vendor Managed Inventory programs keep your crib stocked without capital tied up in tool inventory.',
  },
  {
    icon: Timer,
    title: '98% On-Time Delivery',
    desc: 'Real-time order tracking with automated alerts. Your production schedule is our production schedule.',
  },
  {
    icon: Headphones,
    title: 'Dedicated Application Engineers',
    desc: 'A named engineer assigned to your account — not a call center. They know your parts, your machines.',
  },
]

export default function WhyChooseUs() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 })

  return (
    <section id="why-us" ref={ref} className="py-24 bg-carbon relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-grid-steel opacity-20" />
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-48 bg-gradient-to-b from-transparent via-amber-500 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.p
            className="section-label mb-4"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
          >
            ◆ The Paramount Difference
          </motion.p>
          <motion.h2
            className="heading-xl text-5xl lg:text-7xl text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            Why Machinists<br />
            <span className="text-amber-500">Choose Us</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-steel-800">
          {reasons.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              className="group bg-carbon p-8 hover:bg-forge transition-colors duration-300 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              {/* Hover glow */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-amber-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              <div className="w-12 h-12 border border-steel-700 group-hover:border-amber-500/50 flex items-center justify-center mb-5 transition-colors duration-300">
                <Icon size={20} className="text-amber-500" />
              </div>

              <h3 className="font-display font-bold uppercase text-white text-lg tracking-wide mb-3 group-hover:text-amber-500 transition-colors duration-200">
                {title}
              </h3>
              <p className="text-steel-400 text-sm leading-relaxed">{desc}</p>

              {/* Corner accent */}
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-steel-800 group-hover:border-amber-500/40 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
