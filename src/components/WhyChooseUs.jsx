import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  Microscope, Zap, ShieldCheck, BarChart3,
  Package, Headphones, FlaskConical, Timer
} from 'lucide-react'

const reasons = [
  {
    icon: Microscope,
    title: 'Precision Inspection',
    desc: 'Every cutting tool undergoes rigorous dimensional and quality inspection to ensure exceptional accuracy, consistency, and machining performance.',
  },
  {
    icon: Zap,
    title: 'Rapid Prototyping',
    desc: 'Custom cutting tools developed with fast turnaround to minimize production downtime.',
  },
  {
    icon: ShieldCheck,
    title: 'ISO 9001:2015 Certified',
    desc: 'Our quality management system ensures every stage of manufacturing meets internationally recognized quality standards.',
  },
  {
    icon: BarChart3,
    title: 'Performance Trial',
    desc: 'Experience our cutting tools through trial solutions designed to demonstrate precision, durability, and machining efficiency.',
  },
  {
    icon: FlaskConical,
    title: 'In-House Carbide Development',
    desc: 'We develop our own premium carbide grades to achieve superior hardness, wear resistance, and consistent machining performance.',
  },
  {
    icon: Package,
    title: 'Packaging & Dispatch',
    desc: 'Every order is carefully packed, labeled, and dispatched to ensure complete product protection and safe delivery.',
  },
  {
    icon: Timer,
    title: 'On-Time Delivery',
    desc: 'Efficient production planning ensures every order is delivered safely and on schedule.',
  },
  {
    icon: Headphones,
    title: 'Dedicated Engineering Support',
    desc: 'Our experienced application engineers work closely with customers to recommend the right cutting tool solutions for maximum machining performance.',
  },
]

export default function WhyChooseUs() {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.05 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.06 }
    }
  }

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30, 
      scale: 0.96,
      rotateX: 6
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: { 
        type: 'spring',
        stiffness: 80,
        damping: 14,
        mass: 0.8
      }
    }
  }

  return (
    <section id="why-us" ref={ref} className="bg-navy-900 text-white py-20 font-body relative overflow-hidden border-t border-navy-800">

      {/* Background Subtle Tech Grid */}
      <div className="absolute inset-0 bg-grid-navy opacity-30 pointer-events-none" />

      {/* Ambient center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-lime-brand/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 z-10">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* ==========================================
              LEFT COLUMN (40% on desktop)
              ========================================== */}
          <div className="lg:col-span-5 space-y-8 flex flex-col justify-center">
            <div className="space-y-4 text-center lg:text-left">
              <motion.h2 
                className="font-display font-black uppercase text-4xl sm:text-5xl tracking-tight text-white leading-none text-center lg:text-left"
                initial={{ opacity: 0, y: 25 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
                transition={{ duration: 0.6 }}
              >
                Why Choose <br />
                <span className="text-lime-brand">Paramount</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="text-steel-200 text-sm font-medium leading-relaxed max-w-xl mx-auto lg:mx-0 text-center lg:text-left"
              >
                Paramount Cutting Tools combines precision engineering, advanced manufacturing, and technical expertise to deliver reliable cutting tool solutions for industries that demand uncompromising performance.
              </motion.p>
            </div>

            {/* Premium Engineering Blueprint Mockup Frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ scale: 1.01, borderColor: 'rgba(163, 230, 53, 0.3)' }}
              className="relative flex items-center justify-center aspect-square w-full bg-navy-900/40 border border-navy-800 rounded-xl shadow-2xl p-6 overflow-hidden group max-w-md mx-auto lg:mx-0 transition-colors duration-300"
            >
              {/* Ambient spinning accent rings */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
                <div className="w-4/5 h-4/5 rounded-full border-4 border-dashed border-navy-800 animate-[spin_40s_linear_infinite]" />
              </div>

              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10">
                <div className="w-[110%] h-[110%] rounded-full border border-lime-brand/30 animate-[spin_60s_linear_infinite]" />
              </div>

              {/* Blueprint content card frame */}
              <div className="relative z-10 w-full h-full border border-navy-800 rounded-lg flex flex-col justify-between p-5 bg-navy-950/80 backdrop-blur-sm">
                <div className="flex justify-between items-start border-b border-navy-800 pb-4">
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-lime-brand mb-1 block">Engineering Blueprint</span>
                    <h4 className="font-display font-black text-white text-sm sm:text-base uppercase tracking-wide">High-Performance End Mill</h4>
                  </div>
                </div>

                {/* Image with blueprint overlay */}
                <div className="my-4 relative flex-1 w-full overflow-hidden border border-navy-800 bg-black/40 flex items-center justify-center rounded">
                  <img
                    src="/images/engineering_blueprint_endmill.png"
                    alt="Precision End Mill Blueprint"
                    className="w-full h-full object-cover brightness-[0.65] group-hover:scale-102 transition-transform duration-700 pointer-events-none"
                  />

                  {/* Sci-fi Scanline animation */}
                  <motion.div
                    className="absolute inset-x-0 h-10 bg-gradient-to-b from-transparent via-lime-brand/15 to-transparent pointer-events-none"
                    animate={{
                      y: ["-100%", "280%"]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />

                  {/* Techy grid line overlay matching background */}
                  <div className="absolute inset-0 bg-grid-steel opacity-20" />

                  {/* Blueprint data panels */}
                  <div className="absolute top-3 left-3 border border-navy-800 bg-navy-950/90 text-lime-brand font-mono text-[8px] px-2 py-0.5 uppercase tracking-wider rounded">
                    Substrate: Micro-Grain Carbide
                  </div>
                  <div className="absolute bottom-3 right-3 border border-navy-800 bg-navy-950/90 text-steel-400 font-mono text-[8px] px-2 py-0.5 uppercase rounded">
                    Verified Dimensions
                  </div>
                </div>

                <div className="border-t border-navy-800 pt-4 flex justify-between items-center text-[9px] font-mono text-steel-400">
                  <div className="flex gap-4">
                    <div>RADIUS: 6.00mm</div>
                    <div>ANGLE: 12°</div>
                  </div>
                  <span className="text-lime-brand font-bold group-hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-lime-500"></span>
                    </span>
                    VERIFIED OK
                  </span>
                </div>
              </div>

              {/* Dynamic visual anchors */}
              <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-navy-800 group-hover:border-lime-brand/30 transition-colors" />
              <div className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-navy-800 group-hover:border-lime-brand/30 transition-colors" />
            </motion.div>
          </div>

          {/* ==========================================
              RIGHT COLUMN (60% on desktop)
              ========================================== */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {reasons.map(({ icon: Icon, title, desc }, index) => (
              <motion.div
                key={title}
                variants={cardVariants}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  borderColor: 'rgba(163, 230, 53, 0.5)',
                  boxShadow: '0 15px 25px -5px rgba(0, 0, 0, 0.4), 0 0 15px rgba(163, 230, 53, 0.2)'
                }}
                className="group bg-navy-900/40 border border-lime-brand/20 rounded-xl relative overflow-hidden p-6 transition-all duration-300 flex flex-col justify-between h-full min-h-[190px] cursor-pointer"
              >
                {/* Tactical Corner Tech Brackets */}
                <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-lime-brand/30 group-hover:border-lime-brand/60 transition-colors" />
                <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-lime-brand/30 group-hover:border-lime-brand/60 transition-colors" />

                <div className="flex flex-col h-full justify-between relative z-10 space-y-4">
                  {/* Header Row: Icon */}
                  <div className="flex items-center justify-between">
                    <motion.div
                      animate={{ y: [0, -4, 0] }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.2
                      }}
                      className="w-12 h-12 rounded-lg bg-navy-950 border border-navy-800 group-hover:border-lime-brand/40 flex items-center justify-center transition-all duration-300 text-lime-brand shadow-inner group-hover:shadow-[0_0_15px_rgba(163,230,53,0.1)]"
                    >
                      <Icon size={20} className="transform group-hover:scale-110 transition-transform duration-300" />
                    </motion.div>
                  </div>

                  {/* Content Block */}
                  <div className="space-y-1">
                    <h3 className="font-display font-black uppercase text-sm tracking-wide text-lime-brand group-hover:text-lime-400 transition-colors">
                      {title}
                    </h3>
                    <p className="text-steel-200 text-xs font-medium leading-relaxed line-clamp-4 group-hover:text-steel-100 transition-colors">
                      {desc}
                    </p>
                  </div>
                </div>

                {/* Ambient Radial Spotlight Base Glow Layer */}
                <div className="absolute inset-0 bg-radial from-lime-500/8 via-transparent to-transparent group-hover:from-lime-500/18 transition-all duration-500 pointer-events-none blur-xl" />
              </motion.div>
            ))}
          </motion.div>

        </div>

      </div>

      {/* Bottom green accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-lime-brand to-transparent" />
    </section>
  )
}