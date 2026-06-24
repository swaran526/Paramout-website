import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Layers, Grid, Cpu, Hammer, ShieldAlert, ChevronRight } from 'lucide-react'

export default function ProductsShowcase() {
    const [activeFilter, setActiveFilter] = useState('ALL ASSETS')
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 })

    const categories = ['ALL ASSETS', 'PRODUCT PRECISION', 'FACTORY OPERATIONS', 'CUSTOM SOLUTIONS']

    const productsData = [
        {
            id: 1,
            title: "Solid Carbide End Mills",
            category: "PRODUCT PRECISION",
            desc: "High-performance variable helix geometries configured for continuous chatter-free roughing in titanium and aerospace alloys.",
            img: "/images/product_endmills.jpg",
            span: "md:col-span-4 h-[420px]"
        },
        {
            id: 2,
            title: "Custom Toolholder Assemblages",
            category: "FACTORY OPERATIONS",
            desc: "Balanced multi-axis tool holding matrices optimized for high-velocity chip volume evacuation under load structural limits.",
            img: "/images/product_holders.jpg",
            span: "md:col-span-5 h-[260px]"
        },
        {
            id: 3,
            title: "ISO CBN Inserts",
            category: "CUSTOM SOLUTIONS",
            desc: "Sub-micron cubic boron nitride matrices meticulously pressed for hard turning operations exceeding structural thresholds.",
            img: "/images/product_inserts.jpg",
            span: "md:col-span-3 h-[260px]"
        },
        {
            id: 4,
            title: "Spindle Production Grinding",
            category: "FACTORY OPERATIONS",
            desc: "Live CNC multi-axis milling and micro-honing system lines achieving zero-tolerance edge consistency requirements.",
            img: "/images/product_spindle.jpg",
            span: "md:col-span-5 h-[340px]"
        },
        {
            id: 5,
            title: "Multi-Flute Reamers",
            category: "PRODUCT PRECISION",
            desc: "Engineered ultra-smooth profile reaming structures with internal coolants for exact micro-honed mirror bore executions.",
            img: "/images/product_reamers.jpg",
            span: "md:col-span-4 h-[340px]"
        },
        {
            id: 6,
            title: "PCD Non-Standard Auto Tools",
            category: "CUSTOM SOLUTIONS",
            desc: "Polycrystalline diamond layouts custom-configured for high-volume automated processing within automotive manufacturing tracks.",
            img: "/images/product_pcd.jpg",
            span: "md:col-span-3 h-[420px] md:-mt-[80px]"
        },
        {
            id: 7,
            title: "Heavy Duty Gear Hobs",
            category: "CUSTOM SOLUTIONS",
            desc: "Rugged profile carbide cutting teeth optimized for industrial gear profile machining operations across high-stress environments.",
            img: "/images/product_hobs.jpg",
            span: "md:col-span-6 h-[260px]"
        },
        {
            id: 8,
            title: "Indexable Milling Cutters",
            category: "PRODUCT PRECISION",
            desc: "Precision double-sided geometry insert locks supporting heavy surface structural milling across aerospace alloys.",
            img: "/images/product_milling.jpg",
            span: "md:col-span-3 h-[260px]"
        }
    ]

    const filteredProducts = activeFilter === 'ALL ASSETS'
        ? productsData
        : productsData.filter(p => p.category === activeFilter)

    return (
        <section ref={ref} id="products" className="bg-[#030712] text-white py-24 font-body relative overflow-hidden">

            {/* Background Subtle Tech Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_80%,transparent_100%)] opacity-10 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* ==========================================
            HEADER SEQUENCE & FILTER CONTROLS
            ========================================== */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 border-b border-slate-900 pb-10">
                    <div className="space-y-3">
                        <span className="text-xs font-mono tracking-[0.25em] text-slate-400 uppercase block">
              // VISUAL EXCELLENCE SHOWCASE
                        </span>
                        <h2 className="font-display font-black uppercase text-4xl sm:text-5xl tracking-tight text-white leading-none">
                            Industrial Precision<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-emerald-500">In Every Detail.</span>
                        </h2>
                        <p className="text-slate-400 text-sm font-light max-w-xl leading-relaxed pt-2">
                            Explore our high-performance tooling solutions and state-of-the-art manufacturing environments through our curated visual gallery.
                        </p>
                    </div>

                    {/* Reference Image Styled Interactive Filter Controls */}
                    <div className="flex flex-wrap gap-2 self-start lg:self-end">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveFilter(cat)}
                                className={`px-5 py-2.5 font-mono text-xs tracking-wider uppercase border transition-all duration-300 rounded-xs ${activeFilter === cat
                                    ? 'bg-gradient-to-r from-lime-500 to-emerald-600 text-[#030712] font-bold border-transparent shadow-[0_0_20px_rgba(163,230,53,0.2)]'
                                    : 'bg-slate-950/60 text-slate-400 border-slate-800 hover:border-slate-700 hover:text-white'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* ==========================================
            PRODUCT GRID LAYOUT (Asymmetric Masonry Track)
            ========================================== */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-12 gap-6"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProducts.map((product) => (
                            <motion.div
                                layout
                                key={product.id}
                                initial={{ opacity: 0, scale: 0.92 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.92 }}
                                transition={{ duration: 0.4, ease: "easeInOut" }}
                                className={`${product.span} border border-slate-900 bg-slate-950/40 rounded-xl relative overflow-hidden group shadow-xl hover:border-lime-brand/30 transition-colors duration-500 flex flex-col justify-end`}
                            >
                                {/* Fallback Grid Line Indicators on Asset Box edges */}
                                <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-slate-800 group-hover:border-lime-brand/30 transition-colors" />
                                <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-slate-800 group-hover:border-lime-brand/30 transition-colors" />

                                {/* Core Tool Asset Image Rendering Container */}
                                <img
                                    src={product.img}
                                    alt={product.title}
                                    className="absolute inset-0 w-full h-full object-cover brightness-[0.55] scale-100 group-hover:scale-105 group-hover:brightness-[0.25] transition-all duration-700 ease-out pointer-events-none"
                                />

                                {/* Ambient Radial Spotlight Glow Layer */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity pointer-events-none" />
                                <div className="absolute inset-0 bg-radial from-lime-500/0 via-transparent to-transparent group-hover:from-lime-500/5 transition-all duration-500 pointer-events-none blur-xl" />

                                {/* Integrated Context/Description Overlay Card Block */}
                                <div className="p-6 sm:p-8 relative z-10 space-y-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">

                                    {/* Category Tracker Tag */}
                                    <div className="font-mono text-[9px] text-lime-brand bg-slate-950/90 border border-slate-800/80 px-2.5 py-0.5 rounded backdrop-blur-xs inline-block uppercase tracking-widest">
                    // {product.category}
                                    </div>

                                    {/* Title and Animated Metrics Toggle Area */}
                                    <div className="space-y-1.5">
                                        <h3 className="text-lg font-display font-black uppercase tracking-wide text-white group-hover:text-lime-400 transition-colors flex items-center gap-2">
                                            {product.title}
                                        </h3>

                                        {/* Collapsible/Expandable Tool Description parameters */}
                                        <p className="text-slate-400 text-xs font-light leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 max-w-xl">
                                            {product.desc}
                                        </p>
                                    </div>

                                    {/* Operational Request Callout indicator inside item container */}
                                    <div className="pt-2 flex items-center gap-1 font-mono text-[10px] text-slate-500 group-hover:text-lime-brand transition-colors opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <span>VIEW PARAMETERS</span>
                                        <ChevronRight size={10} className="transform group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>

                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

            </div>
        </section>
    )
}