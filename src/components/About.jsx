import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Target, Cpu, Gauge,
  Workflow, Network, Terminal, CheckCircle2, Shield,
  Milestone, Activity, Zap, ShieldCheck, Orbit, Globe, Factory
} from 'lucide-react'

export default function About() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const timelineData = [
    {
      year: "2019",
      title: "Company Inception",
      desc: "Began operations as a small state-level startup with a focus on manufacturing custom precision cutting geometries.",
      icon: <Milestone size={16} className="text-lime-brand" />
    },
    {
      year: "2020",
      title: "Early Calibration",
      desc: "Started building a local customer base and refining our product core profiles to handle strict performance standards.",
      icon: <Activity size={16} className="text-emerald-400" />
    },
    {
      year: "2021",
      title: "Infrastructure Scaling",
      desc: "Upgraded our manufacturing floors with precision multi-axis CNC grinding setups to handle custom structural workloads.",
      icon: <Factory size={16} className="text-cyan-400" />
    },
    {
      year: "2022",
      title: "Process Optimization",
      desc: "Enhanced production processes and expanded our specialized team to support high-yield commercial component demand.",
      icon: <Zap size={16} className="text-yellow-400" />
    },
    {
      year: "2023",
      title: "Metallurgical Mastery",
      desc: "Formed supply partnerships for sub-micron tungsten raw carbide matrices to increase edge lifecycle durability.",
      icon: <Cpu size={16} className="text-purple-400" />
    },
    {
      year: "2024",
      title: "Market Expansion",
      desc: "Increased presence across the state and strengthened tight strategic relationships with aerospace and defense sectors.",
      icon: <ShieldCheck size={16} className="text-indigo-400" />
    },
    {
      year: "2025",
      title: "Supply Corridors",
      desc: "Expanded delivery frameworks to supply customized cutting configurations to clients across multiple continents.",
      icon: <Globe size={16} className="text-pink-400" />
    },
    {
      year: "2026",
      title: "Present Horizon",
      desc: "Operating continuous micro-honed platform lines and shipping zero-failure rotary tools engineered for maximum productivity.",
      icon: <Orbit size={16} className="text-cyan-400" />
    }
  ]

  const headerContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      }
    }
  };

  const headerItemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: [0.215, 0.610, 0.355, 1.000] }
    }
  }

  const valuesData = [
    {
      title: "Quality Excellence",
      desc: "Uncompromising commitment to superior quality in every single product. Verified using digital micron continuous-honing tools to ensure precision performance thresholds.",
      img: "/images/slider7.jpg",
      icon: <Cpu size={18} />,
      gridSpan: "md:col-span-7"
    },
    {
      title: "Customer Focus",
      desc: "Building lasting relationships through exceptional specialized support metrics, mapping custom geometric pathways explicitly to target processing environments.",
      img: "/images/reamer_clean.jpg",
      icon: <Gauge size={18} />,
      gridSpan: "md:col-span-5"
    },
    {
      title: "Precision Engineering",
      desc: "Leveraging cutting-edge technology for perfect tool setups, refining edge structures down to custom micro-honed profiles across advanced production lines.",
      img: "/images/reamer_clean.jpg",
      icon: <Workflow size={18} />,
      gridSpan: "md:col-span-5"
    },
    {
      title: "Continuous Innovation",
      desc: "Always pushing boundaries to engineer high-yielding rotary tool blueprints. Specifically configured for seamless chip airflow evacuation channels and extended core metal toughness parameters.",
      img: "/images/tool_in_action.jpg",
      icon: <Network size={18} />,
      gridSpan: "md:col-span-7"
    }
  ]

  return (
    <section id="about" className="bg-[#030712] text-white min-h-screen py-24 font-body relative overflow-hidden">

      {/* Background Subtle Tech Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-10 pointer-events-none" />

      {/* =========================================================
          SECTION 1: OUR STORY
          ========================================================= */}
      <div className="max-w-7xl mx-auto px-6 mb-16 relative z-10">

        {/* Rearranged Centered Header Sequence: ABOUT -> PARAMOUNT -> DESCRIPTION */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-20 space-y-4"
          variants={headerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <div className="space-y-1">
            <motion.span
              variants={headerItemVariants}
              className="text-xs sm:text-sm font-mono tracking-[0.3em] text-slate-400 uppercase block"
            >
              About
            </motion.span>
            <motion.h2
              variants={headerItemVariants}
              className="font-display font-black uppercase text-4xl sm:text-6xl tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-emerald-500 leading-none"
            >
              Paramount
            </motion.h2>
          </div>

          <motion.p
            variants={headerItemVariants}
            className="text-slate-400 text-sm sm:text-base font-light max-w-2xl mx-auto leading-relaxed border-t border-slate-900 pt-4"
          >
            Crafting exceptional spaces through innovation, quality, and an unwavering commitment to excellence.
          </motion.p>
        </motion.div>

        {/* Content Layout Grid (Narrative & Card Image) */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">

          {/* Left Block - Animated Narrative Copy */}
          <motion.div
            className="lg:col-span-6 space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            <motion.h3 variants={itemVariants} className="font-display font-black uppercase text-2xl sm:text-3xl tracking-wide text-white">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-emerald-500">Story.</span>
            </motion.h3>

            <motion.div variants={itemVariants} className="space-y-4 text-slate-300 text-sm sm:text-base font-light leading-relaxed">
              <p>
                Paramount Cutting Tools has been at the forefront of precision manufacturing, delivering high-performance cutting tool solutions to industries across India. What began as a modest workshop has grown into a modern manufacturing facility equipped with advanced technology and world-class production capabilities.
              </p>
              <p>
                Our journey has been driven by continuous innovation, engineering excellence, and an unwavering commitment to quality. By investing in cutting-edge technology, skilled professionals, and ongoing research, we consistently deliver products that meet the evolving needs of modern manufacturing.
              </p>
              <p>Today, Paramount Cutting Tools proudly serves customers across diverse industries, including automotive, aerospace, defense, and general engineering. With a focus on precision, reliability, and customer satisfaction, we continue to build lasting partnerships and shape the future of industrial manufacturing.</p>
            </motion.div>
          </motion.div>

          {/* Right Block - Animated Premium Card Image with Text Overlay & Background Ambient Light */}
          <motion.div
            className="lg:col-span-6 relative group"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          >
            <motion.div
              className="absolute -inset-4 bg-radial from-lime-500/20 via-emerald-500/5 to-transparent rounded-full blur-3xl pointer-events-none z-0"
              initial={{ scale: 0.6, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
            />

            <div className="relative w-full aspect-[4/3] bg-slate-950 border border-slate-800 rounded-xl overflow-hidden shadow-2xl z-10 transition-all duration-300 group-hover:border-lime-brand/30">
              <img
                src="/images/tool_in_action.jpg"
                alt="State-of-the-art facility production line"
                className="w-full h-full object-cover brightness-[0.45] group-hover:brightness-[0.35] transition-all duration-500"
              />

              <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                <div className="font-mono text-[10px] text-lime-brand bg-slate-950/80 border border-slate-800/80 px-3 py-1 rounded backdrop-blur-xs self-start uppercase tracking-wider">
                  Live Global Logistics // ACTIVE
                </div>

                <div className="space-y-2 max-w-md">
                  <p className="text-white font-display font-black uppercase text-lg sm:text-xl tracking-wide leading-tight">
                    Powering Heavy Global Industries Daily
                  </p>
                  <p className="text-slate-300 text-xs font-light leading-relaxed">
                    Today, we serve clients across multiple continents, providing customized cutting tool solutions that power manufacturing operations in automotive, aerospace, defense, and general engineering sectors.
                  </p>
                </div>
              </div>

              <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-lime-brand/30" />
              <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-lime-brand/30" />
            </div>
          </motion.div>

        </div>
      </div>

      {/* =========================================================
          SECTION 2: OUR JOURNEY (Animated Roadmap with Tool Backdrop)
          ========================================================= */}
      <div className="border-t border-b border-slate-900/60 py-12 mb-16 relative overflow-hidden z-10">

        {/* Tool Backdrop Layer */}
        <img
          src="/images/reamer_clean.jpg"
          alt="Tool blueprint asset track background"
          className="absolute inset-0 w-full h-full object-cover brightness-[0.12] opacity-30 pointer-events-none scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#030712] via-[#030712]/80 to-[#030712] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 overflow-hidden relative z-10">

          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-[10px] font-mono text-lime-brand uppercase tracking-[0.25em] block mb-1">
              // LINEAR_DIAMOND_ROADMAP
            </span>
            <h3 className="text-3xl sm:text-4xl font-display font-black uppercase text-white tracking-tight">
              Our Journey
            </h3>
          </div>

          {/* Horizontal Drag/Scroll Canvas Layout */}
          <div className="overflow-x-auto pb-12 pt-20 scrollbar-thin scrollbar-thumb-slate-800 scrollbar-track-transparent">
            <div className="relative flex items-center min-w-[1200px] justify-between px-12 h-[380px]">

              {/* Animated Axis Rail Connection */}
              <motion.div
                className="absolute left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-teal-500 via-lime-500 to-cyan-500 rounded-full top-1/2 -translate-y-1/2 opacity-60 z-0 origin-left"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 1, ease: "easeInOut" }}
              />

              {timelineData.map((node, idx) => {
                const isTop = idx % 2 === 0

                return (
                  <div key={idx} className="relative flex flex-col items-center justify-center flex-1 z-10">

                    {/* Animated Diamond Node Card */}
                    <motion.div
                      className="absolute top-1/2 -translate-y-1/2"
                      initial={{ opacity: 0, scale: 0.3, rotate: 0 }}
                      whileInView={{ opacity: 1, scale: 1, rotate: 45 }}
                      viewport={{ once: false, amount: 0.1 }}
                      transition={{ duration: 0.5, delay: idx * 0.1, type: "spring", stiffness: 100 }}
                    >
                      <div className="w-24 h-24 bg-slate-950 border border-slate-800 shadow-xl hover:border-lime-brand/60 hover:shadow-[0_0_20px_rgba(163,230,53,0.15)] transition-all duration-300 flex items-center justify-center relative group cursor-pointer">

                        <div className="-rotate-45 text-center flex flex-col items-center justify-center space-y-1 group-hover:scale-105 transition-transform duration-300">
                          <span className="text-white font-display font-black text-sm tracking-tight">
                            {node.year}
                          </span>
                          <div className="opacity-80 group-hover:opacity-100 transition-opacity">
                            {node.icon}
                          </div>
                        </div>

                      </div>
                    </motion.div>

                    {/* Animated Text Block Callout Panel */}
                    <motion.div
                      className={`absolute w-56 flex flex-col items-center text-center ${isTop ? 'bottom-[96px]' : 'top-[96px]'
                        }`}
                      initial={{ opacity: 0, y: isTop ? -25 : 25 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false, amount: 0.1 }}
                      transition={{ duration: 0.5, delay: (idx * 0.1) + 0.2, ease: "easeOut" }}
                    >

                      {/* Top cards place description first, then line and downward pointing arrow */}
                      {isTop ? (
                        <>
                          <div className="space-y-1 p-3 bg-[#030712]/95 rounded-lg backdrop-blur-xs border border-slate-900 hover:border-slate-800 transition-colors shadow-2xl w-full">
                            <h4 className="text-xs font-display font-bold uppercase tracking-wider text-lime-brand">
                              {node.title}
                            </h4>
                            <p className="text-slate-400 text-[11px] font-light leading-relaxed line-clamp-3">
                              {node.desc}
                            </p>
                          </div>
                          <div className="flex flex-col items-center w-full mt-1">
                            <div className="w-px h-8 bg-gradient-to-b from-slate-700 to-transparent" />
                            <div className="w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[6px] border-t-slate-700/80 mt-[-2px]" />
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="flex flex-col items-center w-full mb-1">
                            <div className="w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-b-[6px] border-b-slate-700/80 mb-[-2px]" />
                            <div className="w-px h-8 bg-gradient-to-t from-slate-700 to-transparent" />
                          </div>
                          <div className="space-y-1 p-3 bg-[#030712]/95 rounded-lg backdrop-blur-xs border border-slate-900 hover:border-slate-800 transition-colors shadow-2xl w-full">
                            <h4 className="text-xs font-display font-bold uppercase tracking-wider text-lime-brand">
                              {node.title}
                            </h4>
                            <p className="text-slate-400 text-[11px] font-light leading-relaxed line-clamp-3">
                              {node.desc}
                            </p>
                          </div>
                        </>
                      )}

                    </motion.div>

                  </div>
                )
              })}

            </div>
          </div>

        </div>
      </div>

      {/* =========================================================
          SECTION 3: OUR CORE VALUES (Spotlight & Intelligent Dimming)
          ========================================================= */}
      <div className="max-w-7xl mx-auto px-6 mb-36 relative z-10">

        <motion.div
          className="border-b border-slate-900 pb-6 mb-12"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-[10px] font-mono text-lime-brand uppercase tracking-widest block mb-1">OPERATIONAL_METRICS</span>
          <h3 className="text-3xl font-display font-black uppercase text-white tracking-tight">OUR CORE VALUES</h3>
        </motion.div>

        {/* Staggered Grid Wrapper */}
        <motion.div
          className="grid md:grid-cols-12 gap-6"
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {valuesData.map((card, index) => {
            const isAnyCardHovered = hoveredIndex !== null;
            const isThisCardHovered = hoveredIndex === index;

            return (
              <motion.div
                key={index}
                variants={cardVariants}
                onMouseEnter={() => setHoveredIndex(index)}
                animate={
                  isAnyCardHovered
                    ? isThisCardHovered
                      ? { opacity: 1, scale: 1.02, borderColor: '#a3e635' }
                      : { opacity: 0.3, scale: 0.97, borderColor: '#0f172a' }
                    : { opacity: 1, scale: 1, borderColor: '#0f172a' }
                }
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className={`${card.gridSpan} border rounded-xl flex flex-col justify-between min-h-[220px] relative overflow-hidden group cursor-pointer`}
              >
                <img
                  src={card.img}
                  alt={card.title}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out pointer-events-none
                    ${isThisCardHovered ? 'brightness-[0.6] opacity-60 scale-105' : 'brightness-[0.35] opacity-40'}
                  `}
                />

                {isThisCardHovered && (
                  <div className="absolute inset-0 bg-radial from-lime-500/10 via-transparent to-transparent pointer-events-none blur-xl" />
                )}

                <div className="absolute inset-0 bg-gradient-to-r from-[#030712] via-[#030712]/90 to-transparent pointer-events-none" />

                <div className="p-8 relative z-10 space-y-4">
                  <div className={`w-10 h-10 rounded bg-slate-950 border transition-all duration-300 flex items-center justify-center 
                    ${isThisCardHovered ? 'border-lime-brand/60 text-lime-400 shadow-[0_0_15px_rgba(163,230,53,0.2)]' : 'border-slate-800 text-lime-brand'}
                  `}>
                    {card.icon}
                  </div>

                  <div className="space-y-2">
                    <h4 className={`text-base font-display font-bold uppercase tracking-wide transition-colors duration-300
                      ${isThisCardHovered ? 'text-lime-400' : 'text-white'}
                    `}>
                      {card.title}
                    </h4>

                    <p className={`text-xs sm:text-sm font-light leading-relaxed max-w-xl transition-colors duration-300
                      ${isThisCardHovered ? 'text-slate-100' : 'text-slate-300'}
                    `}>
                      {card.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>

      {/* =========================================================
          SECTION 4: OUR MISSION (Centered Banner)
          ========================================================= */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="relative border border-slate-900 rounded-2xl p-8 sm:p-14 lg:p-20 overflow-hidden shadow-2xl group flex flex-col justify-center items-center">
          <img
            src="/images/tool_in_action.jpg"
            alt="Centered global mission backdrop"
            className="absolute inset-0 w-full h-full object-cover brightness-[0.3] opacity-35 group-hover:scale-101 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(3,7,18,0.95)_40%,rgba(3,7,18,0.6)_100%)] pointer-events-none" />

          <div className="absolute top-4 right-4 font-mono text-[8px] text-slate-700 tracking-widest hidden sm:block">
            MISSION_STATEMENT_CORE // VER_4.2
          </div>

          <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-lime-400/10 border border-lime-500/20 text-lime-brand mx-auto shadow-[0_0_20px_rgba(163,230,53,0.1)]">
              <Target size={22} />
            </div>

            <span className="text-[10px] font-mono tracking-[0.3em] uppercase block text-lime-brand font-bold">
              // Core Mission Matrix
            </span>

            <h3 className="text-3xl sm:text-4xl font-display font-black text-white uppercase tracking-tight">
              Our Mission
            </h3>

            <p className="text-slate-100 text-base sm:text-lg lg:text-xl font-body leading-relaxed max-w-3xl mx-auto font-light">
              "To be the global leader in cutting tool manufacturing by delivering innovative, precision-engineered solutions that empower our customers to achieve manufacturing excellence while maintaining the highest standards of quality, sustainability, and customer service."
            </p>

            <div className="pt-8 flex flex-wrap justify-center items-center gap-6 border-t border-slate-900/60 max-w-md mx-auto font-mono text-[10px] text-slate-400 uppercase tracking-widest">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-lime-brand" /> ISO 9001 Certified
              </div>
              <div className="w-1 h-1 bg-slate-800 rounded-full" />
              <div className="flex items-center gap-2">
                <Shield size={14} className="text-lime-brand" /> 24/7 Support Matrix
              </div>
            </div>
          </div>

        </div>
      </div>

    </section>
  )
}