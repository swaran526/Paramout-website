import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ChevronRight, Layers, Cpu, Wrench, Cog, Zap, Target } from 'lucide-react'

const products = [
  {
    id: 1,
    name: 'Solid Carbide End Mills',
    category: 'MILLING',
    image: '/images/WOLF-Werkzeugtechnologie_VHM-Standardwerkzeuge_1.png',
    desc: 'Precision milling tools for high-performance machining across various materials.',
    icon: <Layers size={16} />
  },
  {
    id: 2,
    name: 'Carbide Drills',
    category: 'DRILLING',
    image: '/images/tool_in_action.jpg',
    desc: 'High-accuracy drilling solutions for consistent performance and long tool life.',
    icon: <Target size={16} />
  },
  {
    id: 3,
    name: 'PCD Reamers',
    category: 'REAMING',
    image: '/images/reamer_clean.jpg',
    desc: 'Engineered for superior surface finish and exceptional dimensional accuracy.',
    icon: <Cpu size={16} />
  },
  {
    id: 4,
    name: 'Gear Hob Cutters',
    category: 'GEAR CUTTING',
    image: '/images/innovation.jpg',
    desc: 'Precision tools designed for efficient gear manufacturing applications.',
    icon: <Cog size={16} />
  },
  {
    id: 5,
    name: 'Indexable Boring Tools',
    category: 'BORING',
    image: '/images/precision_engineering.jpg',
    desc: 'Reliable boring solutions for improved productivity and precision.',
    icon: <Wrench size={16} />
  },
  {
    id: 6,
    name: 'Special Form Tools',
    category: 'CUSTOM',
    image: '/images/slider7.jpg',
    desc: 'Custom-designed cutting tools developed for complex machining requirements.',
    icon: <Cog size={16} />
  },
  {
    id: 7,
    name: 'Cermet Inserts',
    category: 'TURNING',
    image: '/images/reamer_annotated.jpg',
    desc: 'High-speed finishing inserts providing superior wear resistance and exceptional surface finish quality.',
    icon: <Zap size={16} />
  },
  {
    id: 8,
    name: 'Custom Toolholders',
    category: 'TOOLHOLDERS',
    image: '/images/materials_comparison.jpg',
    desc: 'High-precision toolholding systems optimized for structural rigidity and minimal runout under high load.',
    icon: <Wrench size={16} />
  },
]

const headerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 }
  }
}

const headerItemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
}

const gridContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.09, delayChildren: 0.1 }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 35, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] }
  }
}

export default function FeaturedProducts() {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.05 })

  return (
    <section ref={ref} id="featured-products" className="bg-navy-900 text-white py-24 font-body relative overflow-hidden border-t border-navy-800">

      {/* Background Subtle Tech Grid */}
      <motion.div
        animate={inView ? {
          opacity: [0.15, 0.3, 0.15]
        } : {}}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute inset-0 bg-grid-navy pointer-events-none"
      />

      {/* Ambient center glow */}
      <motion.div
        animate={inView ? {
          scale: [1, 1.12, 1],
          opacity: [0.4, 0.8, 0.4]
        } : {}}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-lime-brand/5 rounded-full blur-[130px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* ==========================================
            HEADER — centered, whileInView animated
            ========================================== */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-14 space-y-4"
          variants={headerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {/* Heading */}
          <motion.h2
            variants={headerItemVariants}
            className="font-display font-black uppercase text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-none"
          >
            Featured <span className="text-lime-brand">Products</span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            variants={headerItemVariants}
            className="text-steel-200 text-sm sm:text-base font-medium leading-relaxed border-t border-navy-800 pt-4"
          >
            Precision engineering and specialized tooling designs configured to maximize your manufacturing performance.
          </motion.p>
        </motion.div>

        {/* ==========================================
            PRODUCT GRID LAYOUT — identical to ToolingPortfolio
            ========================================== */}
        <motion.div
          variants={gridContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.05 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={cardVariants}
              onClick={() => {
                document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
                window.location.hash = 'products';
              }}
              className="group border border-navy-800 bg-navy-950/60 rounded-2xl overflow-hidden shadow-2xl hover:border-lime-brand/40 hover:shadow-[0_8px_40px_rgba(163,230,53,0.06)] transition-all duration-500 flex flex-col cursor-pointer"
            >
              {/* ── Image Section (top, always fully visible) ── */}
              <div className="relative w-full h-[220px] overflow-hidden flex-shrink-0">
                {/* Corner bracket decorators */}
                <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-white/20 group-hover:border-lime-brand/70 transition-colors duration-300 pointer-events-none z-10" />
                <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-white/20 group-hover:border-lime-brand/70 transition-colors duration-300 pointer-events-none z-10" />

                {/* ID badge */}
                <div className="absolute top-3.5 left-1/2 -translate-x-1/2 font-mono text-[9px] text-white/40 tracking-widest group-hover:text-white/60 transition-colors duration-300 z-10">
                  #{String(product.id).padStart(2, '0')}
                </div>

                {/* Product image — bright, always visible, subtle zoom on hover */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover brightness-90 group-hover:brightness-100 group-hover:scale-105 transition-all duration-700 ease-out"
                />

                {/* Subtle bottom fade into the content panel */}
                <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-navy-950 to-transparent pointer-events-none" />
              </div>

              {/* ── Content Panel (below image) ─────────────── */}
              <div className="flex flex-col flex-grow p-6 space-y-3 border-t border-navy-800/60 bg-navy-950/40">

                {/* Category badge */}
                <div className="flex items-center gap-2">
                  <div
                    className="w-6 h-6 rounded flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `rgba(163, 230, 53, 0.1)`, border: `1px solid rgba(163, 230, 53, 0.2)` }}
                  >
                    <span className="scale-75 flex items-center text-lime-brand">
                      {product.icon}
                    </span>
                  </div>
                  <span className="font-mono text-[9px] tracking-widest uppercase text-lime-brand">
                    {product.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base font-display font-black uppercase tracking-wide text-white group-hover:text-lime-300 transition-colors duration-300 leading-snug">
                  {product.name}
                </h3>

                {/* Description — always visible */}
                <p className="text-steel-400 text-xs font-medium leading-relaxed flex-grow">
                  {product.desc}
                </p>

                {/* Divider */}
                <div className="border-t border-navy-800/60 pt-3">
                  {/* CTA link */}
                  <a
                    href="#products"
                    className="inline-flex items-center gap-1.5 font-mono text-[10px] text-steel-500 hover:text-lime-brand transition-colors duration-300 group/cta"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
                      window.location.hash = 'products';
                    }}
                  >
                    <span>VIEW DETAILS</span>
                    <ChevronRight size={10} className="transform group-hover/cta:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </div>

              {/* Bottom accent line on hover */}
              <div className="h-0.5 w-0 group-hover:w-full transition-all duration-500 ease-out flex-shrink-0 bg-lime-brand" />
            </motion.div>
          ))}
        </motion.div>

      </div>

      {/* Bottom green accent line */}
      <motion.div
        animate={{
          opacity: [0.5, 1, 0.5]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-lime-brand to-transparent"
      />
    </section>
  )
}