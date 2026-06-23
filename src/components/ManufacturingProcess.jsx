import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const steps = [
  {
    phase: 'Specification',
    title: 'Engineering Review',
    desc: 'Your print or specification reviewed by a dedicated application engineer. Material selection, geometry optimization, and cutting data established before a single line is programmed.',
    detail: 'DXF / STEP / PDF input',
  },
  {
    phase: 'Material',
    title: 'Carbide Rod Sourcing',
    desc: 'Micro-grain carbide blanks sourced from certified mill partners in submicron grain sizes matched to the application — from K10 for aluminum to M40 for hardened steels.',
    detail: '0.4–1.2µm grain size',
  },
  {
    phase: 'Grinding',
    title: '5-Axis CNC Grinding',
    desc: 'Walter Helitronic and Rollomatic platforms execute flute, relief, and OD grinding under in-process laser gauging. Tolerances held to ±0.002mm throughout the cycle.',
    detail: 'Walter / Rollomatic CNC',
  },
  {
    phase: 'Coating',
    title: 'PVD / CVD Coating',
    desc: 'In-house Oerlikon Balzers PVD arc ion-plating applies TiAlN, AlCrN, and DLC coatings at controlled chamber temperatures. Batch traceability maintained per coating run.',
    detail: 'TiAlN · AlCrN · DLC',
  },
  {
    phase: 'Inspection',
    title: 'CMM & Optical QC',
    desc: 'Zeiss Contura CMM and Zoller Genius presetter verify every critical dimension. Edge prep inspected under Keyence digital microscopy at 200× magnification.',
    detail: 'Zeiss · Zoller · Keyence',
  },
  {
    phase: 'Delivery',
    title: 'Kitting & Dispatch',
    desc: 'Tools packaged to ISPM-15 standards, labeled with Datamatrix 2D barcodes for full lot traceability. Same-day dispatch for stock items; 48hr for custom orders.',
    detail: '98% on-time rate',
  },
]

function Step({ step, index, totalSteps }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })
  const isEven = index % 2 === 0

  return (
    <div ref={ref} className={`relative flex gap-0 ${isEven ? 'flex-row' : 'flex-row-reverse'}`}>
      {/* Content */}
      <motion.div
        className={`flex-1 pb-16 ${isEven ? 'pr-12 text-right' : 'pl-12 text-left'}`}
        initial={{ opacity: 0, x: isEven ? -40 : 40 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-amber-500 mb-2 block">
          {step.phase}
        </span>
        <h3 className="font-display font-black uppercase text-2xl text-white mb-3">
          {step.title}
        </h3>
        <p className="text-steel-400 text-sm leading-relaxed mb-3 max-w-xs ml-auto mr-0" style={{ marginLeft: isEven ? 'auto' : 0 }}>
          {step.desc}
        </p>
        <span className="font-mono text-[10px] text-steel-600 border border-steel-800 px-2 py-1 tracking-wider inline-block">
          {step.detail}
        </span>
      </motion.div>

      {/* Timeline spine */}
      <div className="flex flex-col items-center relative z-10">
        <motion.div
          className="w-10 h-10 border-2 border-amber-500 bg-carbon flex items-center justify-center flex-shrink-0"
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <span className="font-display font-black text-amber-500 text-xs">
            {String(index + 1).padStart(2, '0')}
          </span>
        </motion.div>
        {index < totalSteps - 1 && (
          <motion.div
            className="w-px flex-1 bg-gradient-to-b from-amber-500/60 to-steel-800 mt-2 min-h-[80px]"
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ transformOrigin: 'top' }}
          />
        )}
      </div>

      {/* Spacer */}
      <div className="flex-1" />
    </div>
  )
}

export default function ManufacturingProcess() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 })

  return (
    <section id="process" ref={ref} className="py-24 bg-carbon relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-steel opacity-15" />

      <div className="relative max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.p
            className="section-label mb-4"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
          >
            ◆ How We Build
          </motion.p>
          <motion.h2
            className="heading-xl text-5xl lg:text-7xl text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            Manufacturing<br />
            <span className="text-amber-500">Process</span>
          </motion.h2>
          <motion.p
            className="text-steel-400 mt-4 max-w-md mx-auto text-sm"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
          >
            Six stages, zero shortcuts — from raw carbide rod to certified, application-ready tooling.
          </motion.p>
        </div>

        <div>
          {steps.map((step, i) => (
            <Step key={step.title} step={step} index={i} totalSteps={steps.length} />
          ))}
        </div>
      </div>
    </section>
  )
}
