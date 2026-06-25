import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronRight, Layers, Cpu, Wrench, Cog, Zap, Target } from 'lucide-react'

// ─── Animation Variants (matching About.jsx style) ───────────────────────────

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

// ─── Products Data with valid local image paths ───────────────────────────────

const productsData = [
  {
    id: 1,
    title: "Solid Carbide End Mills",
    category: "PRODUCT PRECISION",
    desc: "High-performance variable helix geometries configured for continuous chatter-free roughing in titanium and aerospace alloys.",
    img: "/images/WOLF-Werkzeugtechnologie_VHM-Standardwerkzeuge_1.png",
    icon: <Layers size={16} />,
    accent: "#A3C614"
  },
  {
    id: 2,
    title: "PCD Non-Standard Auto Tools",
    category: "PCD & CBN TOOLS",
    desc: "Super-hard tooling engineered for high-speed machining of non-ferrous materials, composites, and hardened steels.",
    img: "/images/WOLF-coating-and-parts_Drehen-1.png",
    icon: <Cpu size={16} />,
    accent: "#06B6D4"
  },
  {
    id: 3,
    title: "Custom Toolholder Assemblages",
    category: "FACTORY OPERATIONS",
    desc: "Balanced multi-axis tool holding matrices optimized for high-velocity chip volume evacuation under load structural limits.",
    img: "/images/tool_in_action.jpg",
    icon: <Wrench size={16} />,
    accent: "#F59E0B"
  },
  {
    id: 4,
    title: "ISO CBN Inserts",
    category: "PCD & CBN TOOLS",
    desc: "Sub-micron cubic boron nitride matrices pressed for hard turning operations exceeding structural thresholds with extreme lifecycle durability.",
    img: "/images/reamer_annotated.jpg",
    icon: <Zap size={16} />,
    accent: "#8B5CF6"
  },
  {
    id: 5,
    title: "Multi-Flute Reamers",
    category: "SOLID CARBIDE TOOLS",
    desc: "Premium micro-grain carbide rods ground to precise flute reliefs and edge preps with internal coolant channels for ultra-smooth profiles.",
    img: "/images/precision_engineering.jpg",
    icon: <Target size={16} />,
    accent: "#10B981"
  },
  {
    id: 6,
    title: "Spindle Production Grinding",
    category: "FACTORY OPERATIONS",
    desc: "Live CNC multi-axis milling and micro-honing system lines achieving zero-tolerance edge consistency requirements.",
    img: "/images/slider7.jpg",
    icon: <Cog size={16} />,
    accent: "#EF4444"
  },
  {
    id: 7,
    title: "Indexable Milling Cutters",
    category: "INDEXABLE PLATFORMS",
    desc: "High-efficiency indexable cutter heads and milling bodies engineered to maximize material removal rates across high-stress profiles.",
    img: "/images/materials_comparison.jpg",
    icon: <Layers size={16} />,
    accent: "#EC4899"
  },
  {
    id: 8,
    title: "Heavy Duty Gear Hobs",
    category: "PRODUCT PRECISION",
    desc: "Rugged profile carbide cutting teeth optimized for industrial gear profile machining across demanding high-stress environments.",
    img: "/images/innovation.jpg",
    icon: <Cog size={16} />,
    accent: "#A3C614"
  }
]

const categories = [
  'ALL ASSETS',
  'PRODUCT PRECISION',
  'FACTORY OPERATIONS',
  'PCD & CBN TOOLS',
  'SOLID CARBIDE TOOLS',
  'INDEXABLE PLATFORMS'
]

// ─── Component ────────────────────────────────────────────────────────────────

export default function IntegratedProductsShowcase() {
  const [activeFilter, setActiveFilter] = useState('ALL ASSETS')

  const filteredProducts = activeFilter === 'ALL ASSETS'
    ? productsData
    : productsData.filter(p => p.category === activeFilter)

  return (
    <section
      id="products"
      className="bg-navy-900 text-white py-24 font-body relative overflow-hidden border-t border-navy-800"
    >
      {/* Background tech grid */}
      <div className="absolute inset-0 bg-grid-navy opacity-30 pointer-events-none" />

      {/* Ambient radial glow — lime */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-lime-brand/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* ══════════════════════════════════════════════
            HEADER — centered, whileInView animated
            ══════════════════════════════════════════════ */}
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
            Our <span className="text-lime-brand">Products</span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            variants={headerItemVariants}
            className="text-steel-200 text-sm sm:text-base font-medium leading-relaxed border-t border-navy-800 pt-4"
          >
            Precision-engineered cutting tools for every manufacturing need — from solid carbide to PCD-tipped custom solutions.
          </motion.p>
        </motion.div>

        {/* ══════════════════════════════════════════════
            FILTER TABS — whileInView animated
            ══════════════════════════════════════════════ */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex flex-wrap justify-center gap-1.5 bg-navy-950/70 border border-navy-800/80 p-1.5 rounded-xl shadow-inner backdrop-blur-sm">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 font-mono text-[10px] tracking-wider uppercase border transition-all duration-300 rounded-lg ${
                  activeFilter === cat
                    ? 'bg-lime-brand text-navy-950 font-extrabold border-lime-brand shadow-[0_0_18px_rgba(163,230,53,0.3)]'
                    : 'bg-transparent text-steel-400 border-transparent hover:text-white hover:bg-navy-800/60 hover:border-navy-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* ══════════════════════════════════════════════
            PRODUCT GRID — whileInView + re-stagger on filter
            ══════════════════════════════════════════════ */}
        <motion.div
          key={activeFilter}
          variants={gridContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.05 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7"
        >
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              variants={cardVariants}
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
                  src={product.img}
                  alt={product.title}
                  className="w-full h-full object-cover brightness-90 group-hover:brightness-100 group-hover:scale-105 transition-all duration-700 ease-out"
                />

                {/* Subtle bottom fade into the content panel */}
                <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-navy-950 to-transparent pointer-events-none" />

                {/* Accent glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  style={{ background: `linear-gradient(135deg, ${product.accent}08 0%, transparent 60%)` }}
                />
              </div>

              {/* ── Content Panel (below image) ─────────────── */}
              <div className="flex flex-col flex-grow p-6 space-y-3 border-t border-navy-800/60 bg-navy-950/40">

                {/* Category badge */}
                <div className="flex items-center gap-2">
                  <div
                    className="w-6 h-6 rounded flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${product.accent}22`, border: `1px solid ${product.accent}44` }}
                  >
                    <span style={{ color: product.accent }} className="scale-75 flex items-center">
                      {product.icon}
                    </span>
                  </div>
                  <span className="font-mono text-[9px] tracking-widest uppercase" style={{ color: product.accent }}>
                    {product.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base font-display font-black uppercase tracking-wide text-white group-hover:text-lime-300 transition-colors duration-300 leading-snug">
                  {product.title}
                </h3>

                {/* Description — always visible */}
                <p className="text-steel-400 text-xs font-medium leading-relaxed flex-grow">
                  {product.desc}
                </p>

                {/* Divider */}
                <div className="border-t border-navy-800/60 pt-3">
                  {/* CTA link */}
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 font-mono text-[10px] text-steel-500 hover:text-lime-brand transition-colors duration-300 group/cta"
                    onClick={(e) => { e.stopPropagation(); window.location.hash = 'contact'; }}
                  >
                    <span>KNOW MORE</span>
                    <ChevronRight size={10} className="transform group-hover/cta:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </div>

              {/* Bottom accent line on hover */}
              <div
                className="h-0.5 w-0 group-hover:w-full transition-all duration-500 ease-out flex-shrink-0"
                style={{ backgroundColor: product.accent }}
              />

            </motion.div>
          ))}
        </motion.div>

        {/* Empty state when filter returns no results */}
        {filteredProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-24 text-steel-500 font-mono text-sm tracking-widest"
          >
            // NO ASSETS MATCHING THIS FILTER
          </motion.div>
        )}

      </div>

      {/* Bottom lime accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-lime-brand to-transparent" />
    </section>
  )
}