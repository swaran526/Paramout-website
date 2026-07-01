import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight, Layers, Cpu, Wrench, Cog, Zap, Target, X } from 'lucide-react'

// Product 1
import prod1_1 from '../assets/images/our_products/solid_carbide_tools/1.png'
import prod1_2 from '../assets/images/our_products/solid_carbide_tools/2.png'
import prod1_3 from '../assets/images/our_products/solid_carbide_tools/3.jpg'
import prod1_4 from '../assets/images/our_products/solid_carbide_tools/4.webp'
import prod1_5 from '../assets/images/our_products/solid_carbide_tools/5.webp'

// Product 2
import prod2_1 from '../assets/images/our_products/2ND.png'
import prod2_2 from '../assets/images/our_products/image (2).png'
import prod2_3 from '../assets/images/our_products/image (3).png'

// Product 3
import prod3_1 from '../assets/images/our_products/image (1).png'
import prod3_2 from '../assets/images/our_products/image (4).png'
import prod3_3 from '../assets/images/our_products/image (20).png'

// Product 4
import prod4_1 from '../assets/images/our_products/4.png'
import prod4_2 from '../assets/images/our_products/image (5).png'
import prod4_3 from '../assets/images/our_products/image (6).png'

// Product 5
import prod5_1 from '../assets/images/our_products/5.png'
import prod5_2 from '../assets/images/our_products/image (7).png'
import prod5_3 from '../assets/images/our_products/image (8).png'

// Product 6
import prod6_1 from '../assets/images/our_products/6.png'
import prod6_2 from '../assets/images/our_products/image (9).png'
import prod6_3 from '../assets/images/our_products/image (10).png'

// Product 7
import prod7_1 from '../assets/images/our_products/image (11).png'
import prod7_2 from '../assets/images/our_products/image (12).png'
import prod7_3 from '../assets/images/our_products/image (13).png'

// Product 8
import prod8_1 from '../assets/images/our_products/8.png'
import prod8_2 from '../assets/images/our_products/image (14).png'
import prod8_3 from '../assets/images/our_products/image (15).png'

// Product 9
import prod9_1 from '../assets/images/our_products/9.png'
import prod9_2 from '../assets/images/our_products/image (16).png'
import prod9_3 from '../assets/images/our_products/image (17).png'

// Product 10
import prod10_1 from '../assets/images/our_products/10.png'
import prod10_2 from '../assets/images/our_products/image (18).png'
import prod10_3 from '../assets/images/our_products/image (19).png'

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

export const productsData = [
  {
    id: 1,
    title: "SOLID CARBIDE TOOLS",
    category: "SOLID CARBIDE TOOLS",
    desc: "High-performance variable helix geometries configured for continuous chatter-free roughing in titanium and aerospace alloys.",
    img: prod1_1,
    images: [prod1_1, prod1_2, prod1_3, prod1_4, prod1_5],
    icon: <Layers size={16} />,
    accent: "#A3C614"
  },
  {
    id: 2,
    title: "CUSTOMIZED FORM TOOLS",
    category: "CUSTOMIZED FORM TOOLS",
    desc: "Tailor-made cutting tool designs engineered for specific component profiles, minimizing cycle time and maximizing accuracy.",
    img: prod2_1,
    images: [prod2_1, prod2_2, prod2_3, prod8_2, prod8_3],
    icon: <Wrench size={16} />,
    accent: "#F59E0B"
  },
  {
    id: 3,
    title: "CERMET,PCD AND CARBIDE EXPENDABLE REAMER",
    category: "CERMET,PCD AND CARBIDE EXPENDABLE REAMER",
    desc: "Precision expandable reaming systems with adjustable blades for achieving ultra-tight tolerances and superior surface finishes.",
    img: prod3_1,
    images: [prod3_1, prod3_2, prod3_3, prod2_2, prod2_3],
    icon: <Cpu size={16} />,
    accent: "#10B981"
  },
  {
    id: 4,
    title: "PCD BORING TOOLS",
    category: "PCD BORING TOOLS",
    desc: "Super-hard PCD boring tools designed for high-speed finish boring of non-ferrous and abrasive non-metallic materials.",
    img: prod4_1,
    images: [prod4_1, prod4_2, prod4_3, prod9_2, prod9_3],
    icon: <Target size={16} />,
    accent: "#06B6D4"
  },
  {
    id: 5,
    title: "HOB AND FIRTREE",
    category: "HOB AND FIRTREE",
    desc: "High-precision gear hobs and firtree milling cutters designed for turbine slotting and heavy-duty gear profile manufacturing.",
    img: prod5_1,
    images: [prod5_1, prod5_2, prod5_3, prod10_2, prod10_3],
    icon: <Cog size={16} />,
    accent: "#8B5CF6"
  },
  {
    id: 6,
    title: "PCD AND PCBN SPL INSERTS",
    category: "PCD AND PCBN SPL INSERTS",
    desc: "Special indexable inserts tipped with premium PCD or PCBN matrices for hard turning and high-speed machining operations.",
    img: prod6_1,
    images: [prod6_1, prod6_2, prod6_3, prod3_1, prod2_3],
    icon: <Zap size={16} />,
    accent: "#EC4899"
  },
  {
    id: 7,
    title: "FINE BORING GUIDE PAD TOOLS",
    category: "FINE BORING GUIDE PAD TOOLS",
    desc: "Single-point fine boring tools equipped with wear-resistant guide pads for optimal alignment and concentricity in deep holes.",
    img: prod7_1,
    images: [prod7_1, prod7_2, prod7_3, prod4_1, prod4_2],
    icon: <Layers size={16} />,
    accent: "#EF4444"
  },
  {
    id: 8,
    title: "SPL PCD WIPER CARTRIDGE",
    category: "SPL PCD WIPER CARTRIDGE",
    desc: "Adjustable PCD wiper cartridges designed for face milling cutters to achieve sub-micron surface finishes at high feed rates.",
    img: prod8_1,
    images: [prod8_1, prod8_2, prod8_3, prod6_1, prod6_2],
    icon: <Cog size={16} />,
    accent: "#A3C614"
  },
  {
    id: 9,
    title: "MICRO TOOLS AND BLANK PREPARATION",
    category: "MICRO TOOLS AND BLANK PREPARATION",
    desc: "Sub-millimeter micro cutting tools down to 0.05mm and precision ground carbide blanks prepared for custom tool fabrications.",
    img: prod9_1,
    images: [prod9_1, prod9_2, prod9_3, prod5_1, prod5_2],
    icon: <Cpu size={16} />,
    accent: "#06B6D4"
  },
  {
    id: 10,
    title: "CUSTOMIZED FORM CUTTER",
    category: "CUSTOMIZED FORM CUTTER",
    desc: "Complex profile form cutters manufactured to custom prints for high-productivity machining of specialized industrial parts.",
    img: prod10_1,
    images: [prod10_1, prod10_2, prod10_3, prod3_3, prod1_1],
    icon: <Wrench size={16} />,
    accent: "#F59E0B"
  }
]

const categories = [
  'ALL PRODUCTS',
  'SOLID CARBIDE TOOLS',
  'CUSTOMIZED FORM TOOLS',
  'CERMET,PCD AND CARBIDE EXPENDABLE REAMER',
  'PCD BORING TOOLS',
  'HOB AND FIRTREE',
  'PCD AND PCBN SPL INSERTS',
  'FINE BORING GUIDE PAD TOOLS',
  'SPL PCD WIPER CARTRIDGE',
  'MICRO TOOLS AND BLANK PREPARATION',
  'CUSTOMIZED FORM CUTTER'
]

// ─── Component ────────────────────────────────────────────────────────────────

export default function IntegratedProductsShowcase({ 
  activeFilter: propActiveFilter, 
  setActiveFilter: propSetActiveFilter,
  selectedProduct: propSelectedProduct,
  setSelectedProduct: propSetSelectedProduct
}) {
  const [localFilter, setLocalFilter] = useState('ALL PRODUCTS')
  const [localSelectedProduct, setLocalSelectedProduct] = useState(null)
  const activeFilter = propActiveFilter !== undefined ? propActiveFilter : localFilter
  const setActiveFilter = propSetActiveFilter !== undefined ? propSetActiveFilter : setLocalFilter
  const selectedProduct = propSelectedProduct !== undefined ? propSelectedProduct : localSelectedProduct
  const setSelectedProduct = propSetSelectedProduct !== undefined ? propSetSelectedProduct : setLocalSelectedProduct

  const filteredProducts = activeFilter === 'ALL PRODUCTS'
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
              onClick={() => setSelectedProduct(product)}
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
                  <button
                    className="inline-flex items-center gap-1.5 font-mono text-[10px] text-steel-500 hover:text-lime-brand transition-colors duration-300 group/cta bg-transparent border-0 cursor-pointer p-0"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProduct(product);
                    }}
                  >
                    <span>KNOW MORE</span>
                    <ChevronRight size={10} className="transform group-hover/cta:translate-x-1 transition-transform duration-300" />
                  </button>
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