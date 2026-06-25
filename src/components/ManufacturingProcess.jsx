import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const steps = [
  {
    phase: 'Specification',
    title: 'Engineering Review',
    desc: 'Every project begins with a detailed engineering review of your drawings and machining requirements. Our specialists optimize tool geometry, material selection, and cutting parameters to deliver the best machining performance.',
  },
  {
    phase: 'Material',
    title: 'Carbide Rod Sourcing',
    desc: 'We source premium-grade micro-grain carbide rods from trusted suppliers, ensuring exceptional hardness, wear resistance, and consistent quality for every cutting tool we manufacture.',
  },
  {
    phase: 'Manufacturing',
    title: '5-Axis CNC Grinding',
    desc: 'Our advanced 5-axis CNC grinding technology produces cutting tools with outstanding dimensional accuracy, superior edge quality, and exceptional repeatability for demanding machining applications.',
  },
  {
    phase: 'Surface Enhancement',
    title: 'PVD / CVD Coating',
    desc: 'Advanced PVD and CVD coating technologies improve hardness, reduce friction, and significantly extend tool life, ensuring reliable performance across a wide range of machining operations.',
  },
  {
    phase: 'Quality Assurance',
    title: 'Quality Inspection',
    desc: 'Every tool undergoes comprehensive dimensional and visual inspection using advanced quality control methods to ensure consistent accuracy, reliability, and performance before delivery.',
  },
  {
    phase: 'Delivery',
    title: 'Packaging & Dispatch',
    desc: 'Finished tools are carefully cleaned, securely packaged, and dispatched with complete product traceability, ensuring safe delivery and ready-to-use performance at your facility.',
  },
]

function Step({ step, index, totalSteps }) {
  const isEven = index % 2 === 0

  return (
    <div className={`relative flex items-stretch gap-0 ${isEven ? 'flex-row' : 'flex-row-reverse'}`}>

      {/* Card Wrapper Box */}
      <motion.div
        className={`flex-1 pb-16 relative group ${isEven ? 'pr-10 md:pr-16' : 'pl-10 md:pl-16'}`}
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Core Layout Panel */}
        <motion.div 
          whileHover={{
            borderColor: 'rgba(163, 230, 53, 0.6)',
            boxShadow: '0 0 25px rgba(163, 230, 53, 0.2)'
          }}
          className="border border-lime-brand/20 bg-navy-950/60 rounded-xl relative overflow-hidden transition-all duration-300 cursor-pointer"
        >

          {/* Spotlight glow on hover */}
          <div className="absolute inset-0 bg-radial from-lime-500/8 via-transparent to-transparent group-hover:from-lime-500/18 transition-all duration-500 pointer-events-none blur-xl" />

          {/* Tactical Corner Framework Markers */}
          <div className="absolute top-3 left-3 w-2 h-2 border-t border-l border-lime-brand/30 z-20 group-hover:border-lime-brand/60 transition-colors" />

          {/* Bounding Text Content wrapper layer driving container sizing dimensions */}
          <div className="p-6 md:p-8 relative z-10 space-y-3 text-left">
            <h3 className="font-display font-black uppercase text-lg md:text-xl text-lime-brand group-hover:text-lime-400 transition-colors leading-tight">
              {step.title}
            </h3>

            <p className="text-steel-200 text-xs md:text-sm font-medium leading-relaxed max-w-2xl">
              {step.desc}
            </p>
          </div>

        </motion.div>
      </motion.div>

      {/* Center Process Rail Spine Axis */}
      <div className="flex flex-col items-center relative z-10 w-12 md:w-16">

        {/* Diamond Node Index Marker */}
        <motion.div
          className="w-8 h-8 border border-navy-800 bg-navy-950 flex items-center justify-center flex-shrink-0 relative cursor-pointer group-hover:border-lime-brand/40"
          style={{ transform: 'rotate(45deg)' }}
          initial={{ scale: 0, rotate: 0 }}
          whileInView={{ scale: 1, rotate: 45 }}
          viewport={{ once: false, amount: 0.15 }}
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
            whileInView={{ scaleY: 1 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.8, delay: 0.1 }}
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
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.05 })

  return (
    <section id="process" ref={ref} className="bg-navy-900 text-white py-24 font-body relative overflow-hidden border-t border-navy-800">

      {/* Background Subtle Tech Grid */}
      <div className="absolute inset-0 bg-grid-navy opacity-30 pointer-events-none" />

      {/* Ambient center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-lime-brand/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-6 z-10">

        {/* ==========================================
            SECTION HEADER SEQUENCE
            ========================================== */}
        <div className="text-center max-w-2xl mx-auto mb-24 space-y-3">
          <motion.h2 
            initial={{ opacity: 0, y: 25 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
            transition={{ duration: 0.6 }}
            className="font-display font-black uppercase text-4xl sm:text-6xl tracking-tight text-white leading-none"
          >
            Manufacturing<br />
            <span className="text-lime-brand">Process</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-steel-200 font-medium text-sm leading-relaxed max-w-md mx-auto pt-2"
          >
            Six distinct processing stages, zero structural compromises — from sub-micron tungsten carbide matrices to deployment-ready configurations.
          </motion.p>
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