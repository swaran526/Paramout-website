import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ChevronRight } from 'lucide-react'

const steps = [
  {
    phase: 'Specification',
    title: 'Engineering Review',
    desc: 'Your print or specification reviewed by a dedicated application engineer. Material selection, geometry optimization, and cutting data established before a single line is programmed.',
    detail: 'DXF / STEP / PDF input',
    img: '/images/process_step1.jpg',
  },
  {
    phase: 'Material',
    title: 'Carbide Rod Sourcing',
    desc: 'Micro-grain carbide blanks sourced from certified mill partners in submicron grain sizes matched to the application — from K10 for aluminum to M40 for hardened steels.',
    detail: '0.4–1.2µm grain size',
    img: '/images/process_step2.jpg',
  },
  {
    phase: 'Grinding',
    title: '5-Axis CNC Grinding',
    desc: 'Walter Helitronic and Rollomatic platforms execute flute, relief, and OD grinding under in-process laser gauging. Tolerances held to ±0.002mm throughout the cycle.',
    detail: 'Walter / Rollomatic CNC',
    img: '/images/process_step3.jpg',
  },
  {
    phase: 'Coating',
    title: 'PVD / CVD Coating',
    desc: 'In-house Oerlikon Balzers PVD arc ion-plating applies TiAlN, AlCrN, and DLC coatings at controlled chamber temperatures. Batch traceability maintained per coating run.',
    detail: 'TiAlN · AlCrN · DLC',
    img: '/images/process_step4.jpg',
  },
  {
    phase: 'Inspection',
    title: 'CMM & Optical QC',
    desc: 'Zeiss Contura CMM and Zoller Genius presetter verify every critical dimension. Edge prep inspected under Keyence digital microscopy at 200× magnification.',
    detail: 'Zeiss · Zoller · Keyence',
    img: '/images/process_step5.jpg',
  },
  {
    phase: 'Delivery',
    title: 'Kitting & Dispatch',
    desc: 'Tools packaged to ISPM-15 standards, labeled with Datamatrix 2D barcodes for full lot traceability. Same-day dispatch for stock items; 48hr for custom orders.',
    detail: '98% on-time rate',
    img: '/images/process_step6.jpg',
  },
]

function Step({ step, index, totalSteps }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 })
  const isEven = index % 2 === 0

  return (
    <div ref={ref} className={`relative flex items-stretch gap-0 ${isEven ? 'flex-row' : 'flex-row-reverse'}`}>

      {/* Card Wrapper Box */}
      <motion.div
        className={`flex-1 pb-16 relative group ${isEven ? 'pr-10 md:pr-16' : 'pl-10 md:pl-16'}`}
        initial={{ opacity: 0, x: isEven ? -40 : 40 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Core Layout Panel: The image fits perfectly to the boundaries of the text box container dynamically */}
        <div className="border border-navy-800 group-hover:border-lime-brand/20 rounded-xl relative overflow-hidden shadow-xl transition-all duration-500">

          {/* Background Image Track wrapped directly to card bounds with zero layout bleed spaces */}
          <div className="absolute inset-0 z-0">
            <img
              src={step.img}
              alt={step.title}
              className="w-full h-full object-cover brightness-[0.25] grayscale group-hover:grayscale-0 group-hover:brightness-[0.18] group-hover:scale-102 transition-all duration-700 ease-out"
            />
            {/* Dark technical protection veil matching your theme layout color space */}
            <div className="absolute inset-0 bg-navy-950/75 group-hover:bg-navy-950/65 transition-colors duration-500 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Tactical Corner Framework Markers */}
          <div className={`absolute top-3 w-2 h-2 border-t border-navy-800 z-20 group-hover:border-lime-brand/40 transition-colors ${isEven ? 'left-3 border-l' : 'right-3 border-r'}`} />

          {/* Bounding Text Content wrapper layer driving container sizing dimensions */}
          <div className={`p-6 md:p-8 relative z-10 space-y-3 ${isEven ? 'text-right' : 'text-left'}`}>
            <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-lime-brand block">
              // PHASE_{String(index + 1).padStart(2, '0')} : {step.phase}
            </span>

            <h3 className="font-display font-black uppercase text-lg md:text-xl text-white group-hover:text-lime-400 transition-colors leading-tight">
              {step.title}
            </h3>

            <p className="text-steel-200 text-xs md:text-sm font-medium leading-relaxed max-w-2xl" style={{ marginLeft: isEven ? 'auto' : 0, marginRight: isEven ? 0 : 'auto' }}>
              {step.desc}
            </p>

            <span className="font-mono text-[9px] text-steel-400 border border-navy-800 bg-navy-950/80 px-2.5 py-1 tracking-wider inline-block rounded-xs group-hover:text-steel-200 transition-colors">
              {step.detail}
            </span>

            {/* Decorative Bottom Anchor Track inside layout */}
            <div className={`pt-4 mt-6 border-t border-navy-800/40 flex items-center gap-1 font-mono text-[9px] text-steel-500 group-hover:text-lime-brand transition-colors ${isEven ? 'justify-end' : 'justify-start'}`}>
              <span>SYSTEM EVALUATION ACTIVE</span>
              <ChevronRight size={10} className="opacity-0 group-hover:opacity-100 transform group-hover:translate-x-0.5 transition-all" />
            </div>
          </div>

        </div>
      </motion.div>

      {/* Center Process Rail Spine Axis */}
      <div className="flex flex-col items-center relative z-10 w-12 md:w-16">

        {/* Diamond Node Index Marker */}
        <motion.div
          className="w-8 h-8 border border-navy-800 bg-navy-950 flex items-center justify-center flex-shrink-0 relative cursor-pointer group-hover:border-lime-brand/40"
          style={{ transform: 'rotate(45deg)' }}
          initial={{ scale: 0, rotate: 0 }}
          animate={inView ? { scale: 1, rotate: 45 } : {}}
          transition={{ duration: 0.5, type: "spring", stiffness: 90 }}
          whileHover={{ scale: 1.1 }}
        >
          <span className="font-display font-black text-lime-brand text-[10px] -rotate-45 block transform translate-x-[1px] translate-y-[-1px]">
            {String(index + 1).padStart(2, '0')}
          </span>
        </motion.div>

        {/* Dynamic Vector Line Track segments */}
        {index < totalSteps - 1 && (
          <motion.div
            className="w-px flex-1 bg-gradient-to-b from-lime-500/40 via-navy-800 to-navy-900 mt-3 mb-1"
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ transformOrigin: 'top' }}
          />
        )}
      </div>

      {/* Asymmetric balancing Spacer segment */}
      <div className="flex-1 hidden sm:block" />
    </div>
  )
}

export default function ManufacturingProcess() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 })

  return (
    <section id="process" ref={ref} className="bg-navy-950 text-white py-24 font-body relative overflow-hidden border-t border-navy-800">

      {/* Background Subtle Tech Grid */}
      <div className="absolute inset-0 bg-grid-navy opacity-30 pointer-events-none" />

      {/* Ambient center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-lime-brand/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-6 z-10">

        {/* ==========================================
            SECTION HEADER SEQUENCE
            ========================================== */}
        <div className="text-center max-w-2xl mx-auto mb-24 space-y-3">
          <motion.p
            className="text-xs font-mono tracking-[0.25em] text-steel-400 uppercase block"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
          >
            // CORE EXECUTION MATRIX
          </motion.p>

          <h2 className="font-display font-black uppercase text-4xl sm:text-6xl tracking-tight text-white leading-none">
            Manufacturing<br />
            <span className="text-lime-brand">Process</span>
          </h2>

          <p className="text-steel-200 font-medium text-sm leading-relaxed max-w-md mx-auto pt-2">
            Six distinct processing stages, zero structural compromises — from sub-micron tungsten carbide matrices to deployment-ready configurations.
          </p>

          <div className="w-10 h-px bg-navy-800 mx-auto pt-4" />
        </div>

        {/* ==========================================
            VERTICAL TIMELINE MOUNT TRACK
            ========================================== */}
        <div className="relative mt-12 max-w-3xl mx-auto">
          {/* Subtle Continuous Center Line Anchor Track */}
          <div className="absolute top-4 bottom-4 left-1/2 -translate-x-1/2 w-px bg-navy-800/60 z-0 pointer-events-none hidden sm:block" />

          <div className="relative z-10">
            {steps.map((step, i) => (
              <Step key={step.title} step={step} index={i} totalSteps={steps.length} />
            ))}
          </div>
        </div>

      </div>

      {/* Bottom green accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-lime-brand to-transparent" />
    </section>
  )
}