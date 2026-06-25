import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import story1 from '../assets/images/our-story/our_story_1.jpeg'
import story2 from '../assets/images/our-story/our_story_2.png'
import story3 from '../assets/images/our-story/our_story_3.jpeg'
import story4 from '../assets/images/our-story/our_story_4.jpeg'

const storyImages = [story1, story2, story3, story4]
import {
  Target, Cpu, Gauge,
  Workflow, Network, Terminal, CheckCircle2, Shield,
  Milestone, Activity, Zap, ShieldCheck, Orbit, Globe, Factory
} from 'lucide-react'

export default function About() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [storyIndex, setStoryIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setStoryIndex((prev) => (prev + 1) % storyImages.length)
    }, 3000) // Change image every 3 seconds
    return () => clearInterval(interval)
  }, [])

  const timelineData = [
    {
      year: "2019",
      title: "COMPANY INCEPTION",
      desc: "Paramount Cutting Tools was established with a vision to manufacture high-precision cutting tools, delivering quality, innovation, and reliable machining solutions to the engineering industry.",
      icon: <Milestone size={16} className="text-lime-brand" />,
      x: 180,
      y: 330,
      align: "bottom",
      color: "#FACC15",
      textColor: "text-navy-950"
    },
    {
      year: "2020",
      title: "MANUFACTURING SETUP",
      desc: "Commissioned our first production facility with advanced CNC grinding machines and precision inspection equipment to manufacture premium cutting tools.",
      icon: <Activity size={16} className="text-emerald-400" />,
      x: 335,
      y: 350,
      align: "top",
      color: "#EF4444",
      textColor: "text-white"
    },
    {
      year: "2021",
      title: "PRODUCT DEVELOPMENT",
      desc: "Expanded our product portfolio to include carbide end mills, drills, reamers, and customized cutting tools for diverse machining applications.",
      icon: <Factory size={16} className="text-cyan-400" />,
      x: 490,
      y: 280,
      align: "bottom",
      color: "#A855F7",
      textColor: "text-white"
    },
    {
      year: "2022",
      title: "TECHNOLOGY UPGRADE",
      desc: "Invested in advanced manufacturing technologies, precision measuring systems, and process improvements to enhance product accuracy and performance.",
      icon: <Zap size={16} className="text-yellow-400" />,
      x: 645,
      y: 300,
      align: "top",
      color: "#2563EB",
      textColor: "text-white"
    },
    {
      year: "2023",
      title: "QUALITY EXCELLENCE",
      desc: "Strengthened quality management systems and built long-term customer partnerships by consistently delivering reliable and high-performance cutting tools.",
      icon: <Cpu size={16} className="text-purple-400" />,
      x: 800,
      y: 220,
      align: "bottom",
      color: "#0D9488",
      textColor: "text-white"
    },
    {
      year: "2024",
      title: "MARKET EXPANSION",
      desc: "Expanded our customer base across India, serving industries such as automotive, aerospace, die & mould, medical, and general engineering with precision tooling solutions.",
      icon: <ShieldCheck size={16} className="text-indigo-400" />,
      x: 955,
      y: 240,
      align: "top",
      color: "#10B981",
      textColor: "text-white"
    },
    {
      year: "2025",
      title: "CUSTOM TOOLING SOLUTIONS",
      desc: "Enhanced our engineering capabilities to design and manufacture customized cutting tools tailored to complex machining requirements and customer-specific applications.",
      icon: <Globe size={16} className="text-pink-400" />,
      x: 1110,
      y: 170,
      align: "bottom",
      color: "#A3C614",
      textColor: "text-navy-950"
    },
    {
      year: "2026",
      title: "FUTURE READY",
      desc: "Advancing manufacturing through precision, innovation, and quality.",
      icon: <Orbit size={16} className="text-cyan-400" />,
      x: 1265,
      y: 200,
      align: "top",
      color: "#06B6D4",
      textColor: "text-navy-950"
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

  const timelinePathVariants = {
    hidden: {
      pathLength: 0,
      transition: { duration: 0 }
    },
    visible: {
      pathLength: 1,
      transition: { duration: 1.8, ease: "easeInOut" }
    }
  }

  const timelineCircleVariants = (idx) => ({
    hidden: {
      scale: 0,
      opacity: 0,
      transition: { duration: 0 }
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 12,
        delay: idx * 0.18 + 0.1
      }
    }
  })

  const timelineCalloutVariants = (idx, isTop) => ({
    hidden: {
      opacity: 0,
      y: isTop ? -20 : 20,
      scale: 0.95,
      transition: { duration: 0 }
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: idx * 0.18 + 0.25
      }
    }
  })

  const valuesData = [
    {
      title: "Quality Excellence",
      desc: "Uncompromising commitment to superior quality in every single product. Verified using digital micron continuous-honing tools to ensure precision performance thresholds.",
      icon: <Cpu size={18} />
    },
    {
      title: "Customer Focus",
      desc: "Building lasting relationships through exceptional specialized support metrics, mapping custom geometric pathways explicitly to target processing environments.",
      icon: <Gauge size={18} />
    },
    {
      title: "Precision Engineering",
      desc: "Leveraging cutting-edge technology for perfect tool setups, refining edge structures down to custom micro-honed profiles across advanced production lines.",
      icon: <Workflow size={18} />
    },
    {
      title: "Continuous Innovation",
      desc: "Always pushing boundaries to engineer high-yielding rotary tool blueprints. Specifically configured for seamless chip airflow evacuation channels and extended core metal toughness parameters.",
      icon: <Network size={18} />
    }
  ]

  return (
    <section id="about" className="bg-navy-900 text-white min-h-screen py-24 font-body relative overflow-hidden border-t border-navy-800">

      {/* Background Subtle Tech Grid */}
      <div className="absolute inset-0 bg-grid-navy opacity-30 pointer-events-none" />

      {/* Ambient center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-lime-brand/5 rounded-full blur-[120px] pointer-events-none" />

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
          <motion.h2
            variants={headerItemVariants}
            className="font-display font-black uppercase text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-none mb-4"
          >
            About <span className="text-lime-brand">Paramount</span>
          </motion.h2>

          <motion.p
            variants={headerItemVariants}
            className="text-steel-200 text-sm sm:text-base font-medium max-w-2xl mx-auto leading-relaxed border-t border-navy-800 pt-4"
          >
            Delivering high-performance industrial cutting solutions through metallurgy, customized geometries, and absolute precision.
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
              Our <span className="text-lime-brand">Story.</span>
            </motion.h3>

            <motion.div variants={itemVariants} className="space-y-4 text-steel-200 text-sm sm:text-base font-medium leading-relaxed">
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
              className="absolute -inset-4 bg-radial from-lime-brand/20 via-lime-brand/5 to-transparent rounded-full blur-3xl pointer-events-none z-0"
              initial={{ scale: 0.6, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
            />

            <div className="relative w-full aspect-[4/3] bg-navy-900 border border-navy-800 rounded-xl overflow-hidden shadow-2xl z-10 transition-all duration-300 group-hover:border-lime-brand/30">
              <AnimatePresence mode="popLayout">
                <motion.img
                  key={storyIndex}
                  src={storyImages[storyIndex]}
                  alt="State-of-the-art facility production line"
                  className="absolute inset-0 w-full h-full object-cover brightness-[0.45] group-hover:brightness-[0.35] transition-all duration-500"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                />
              </AnimatePresence>

              <div className="absolute inset-0 p-8 flex flex-col justify-end z-10 pointer-events-none">
                <div className="space-y-2 max-w-md">
                  <p className="text-white font-display font-black uppercase text-lg sm:text-xl tracking-wide leading-tight">
                    From A Vision To Industry Leadership
                  </p>
                  <p className="text-steel-200 text-xs font-medium leading-relaxed">
                    Today, we serve clients across multiple continents, providing customized cutting tool solutions that power manufacturing operations in automotive, aerospace, defense, and general engineering sectors.
                  </p>
                </div>
              </div>

              <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-lime-brand/30 z-20 pointer-events-none" />
              <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-lime-brand/30 z-20 pointer-events-none" />
            </div>
          </motion.div>

        </div>
      </div>

      {/* =========================================================
          SECTION 2: OUR JOURNEY (Slanted Wave Track Layout)
          ========================================================= */}
      <div className="border-t border-b border-navy-800/60 bg-navy-950/40 py-16 mb-16 relative overflow-hidden z-10">

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-xl mx-auto mb-6">
            <h3 className="text-3xl sm:text-4xl font-display font-black uppercase text-white tracking-tight">
              Our <span className="text-lime-brand">Journey</span>
            </h3>
          </div>

          {/* Horizontal Drag/Scroll Canvas Layout */}
          <div className="overflow-x-auto pb-16 pt-10 scrollbar-thin scrollbar-thumb-navy-700 scrollbar-track-transparent">
            <div className="relative min-w-[1200px] lg:min-w-0 lg:w-full h-[500px] px-12">

              {/* Dynamic SVG Wave Connector Line */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1500 500" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="track-grad" x1="0%" y1="50%" x2="100%" y2="50%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="50%" stopColor="#06b6d4" />
                    <stop offset="100%" stopColor="#a3c614" />
                  </linearGradient>

                  {/* Arrowhead marker for the track */}
                  <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="8" markerHeight="8" orient="auto">
                    <path d="M 0 1 L 10 5 L 0 9 z" fill="#a3c614" />
                  </marker>
                </defs>

                {/* Thick background track trail */}
                <path
                  d="M 180 330 L 335 350 L 490 280 L 645 300 L 800 220 L 955 240 L 1110 170 L 1265 200 L 1320 190"
                  fill="none"
                  stroke="#334155"
                  strokeWidth="24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  opacity="0.6"
                />

                {/* Animated colored core track trail */}
                <motion.path
                  d="M 180 330 L 335 350 L 490 280 L 645 300 L 800 220 L 955 240 L 1110 170 L 1265 200 L 1320 190"
                  fill="none"
                  stroke="url(#track-grad)"
                  strokeWidth="14"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  markerEnd="url(#arrow)"
                  variants={timelinePathVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.2 }}
                />
              </svg>

              {/* Timeline Nodes & Callouts */}
              <div className="absolute inset-0 w-full h-full">
                {timelineData.map((node, idx) => {
                  const isTop = node.align === "top";

                  return (
                    <div
                      key={idx}
                      className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-20 group"
                      style={{ left: `${(node.x / 1500) * 100}%`, top: `${(node.y / 500) * 100}%` }}
                    >

                      {/* Animated Floating Text Callout Panel (aligned above or below the node) */}
                      <motion.div
                        className={`absolute w-72 h-[150px] flex flex-col justify-start items-center text-center ${isTop ? 'bottom-[76px]' : 'top-[76px]'
                          }`}
                        variants={timelineCalloutVariants(idx, isTop)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.2 }}
                      >
                        <div className="space-y-1 w-full text-center">
                          <span className="font-display font-extrabold text-2xl text-lime-brand tracking-wider block transition-transform duration-300 group-hover:scale-105">
                            {node.year}
                          </span>
                          <h4 className="text-xs font-display font-extrabold uppercase tracking-widest text-white block transition-colors duration-300 group-hover:text-lime-brand">
                            {node.title}
                          </h4>
                          <p className="text-steel-400 text-[11px] font-medium leading-relaxed max-w-[230px] mx-auto block transition-colors duration-300 group-hover:text-steel-200">
                            {node.desc}
                          </p>
                        </div>
                      </motion.div>

                      {/* Circle Node matching the reference image */}
                      <motion.div
                        className="w-14 h-14 rounded-full border-[6px] border-slate-600/80 flex items-center justify-center shadow-2xl relative cursor-pointer transition-all duration-300 group-hover:scale-110 group-hover:border-white"
                        style={{ backgroundColor: node.color }}
                        variants={timelineCircleVariants(idx)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.2 }}
                      >
                        <span className={`font-display font-black text-sm tracking-tight ${node.textColor}`}>
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                      </motion.div>

                    </div>
                  );
                })}
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* =========================================================
          SECTION 3: OUR CORE VALUES & OUR MISSION (Side-by-Side Layout)
          ========================================================= */}
      <div className="max-w-7xl mx-auto px-6 mb-36 relative z-10">
        
        {/* Unified Full-Width Heading */}
        <motion.div
          className="border-b border-navy-800 pb-6 mb-12"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-3xl font-display font-black uppercase text-white tracking-tight">
            OUR <span className="text-lime-brand">CORE VALUES & MISSION</span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Core Values (lg:col-span-7) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
            <div>
              {/* Grid of 4 Cards (2x2 layout on sm and up) */}
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 gap-6"
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
                            ? { opacity: 1, scale: 1.02, borderColor: '#A3C614' }
                            : { opacity: 0.3, scale: 0.97, borderColor: '#0B1B33' }
                          : { opacity: 1, scale: 1, borderColor: '#0B1B33' }
                      }
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="border rounded-xl flex flex-col justify-between p-6 min-h-[180px] relative overflow-hidden group cursor-pointer bg-navy-900/40"
                    >
                      {isThisCardHovered && (
                        <div className="absolute inset-0 bg-radial from-lime-brand/10 via-transparent to-transparent pointer-events-none blur-xl" />
                      )}

                      <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/90 to-transparent pointer-events-none" />

                      <div className="relative z-10 space-y-4 flex flex-col h-full justify-between">
                        <div className={`w-10 h-10 rounded bg-navy-950 border transition-all duration-300 flex items-center justify-center 
                          ${isThisCardHovered ? 'border-lime-brand/60 text-lime-brand shadow-[0_0_15px_rgba(163,230,53,0.2)]' : 'border-navy-800 text-lime-brand'}
                        `}>
                          {card.icon}
                        </div>

                        <div className="space-y-2">
                          <h4 className={`text-base font-display font-bold uppercase tracking-wide transition-colors duration-300
                            ${isThisCardHovered ? 'text-lime-brand' : 'text-white'}
                          `}>
                            {card.title}
                          </h4>

                          <p className={`text-xs font-medium leading-relaxed transition-colors duration-300
                            ${isThisCardHovered ? 'text-steel-100' : 'text-steel-300'}
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
          </div>

          {/* Right Column: Mission (lg:col-span-5) */}
          <motion.div
            className="lg:col-span-5 flex flex-col justify-between"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.13, delayChildren: 0.05 } }
            }}
          >
            <div className="h-full flex flex-col">
              <motion.div
                className="relative border border-navy-800 rounded-2xl p-8 sm:p-12 overflow-hidden shadow-2xl group flex flex-col justify-center items-center flex-grow bg-navy-900/40"
                variants={{
                  hidden: { opacity: 0, y: 40, scale: 0.97 },
                  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
                }}
              >
                {/* Animated ambient background glow */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 1.2, delay: 0.4 }}
                  style={{
                    background: 'radial-gradient(ellipse at 50% 60%, rgba(163,198,20,0.06) 0%, transparent 70%)'
                  }}
                />

                {/* Animated border sweep line */}
                <motion.div
                  className="absolute top-0 left-0 h-0.5 bg-gradient-to-r from-transparent via-lime-brand to-transparent pointer-events-none"
                  initial={{ width: '0%', opacity: 0 }}
                  whileInView={{ width: '100%', opacity: 1 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 1.1, ease: 'easeOut', delay: 0.3 }}
                />

                <div className="max-w-md mx-auto text-center space-y-6 relative z-10 flex flex-col items-center justify-center h-full">

                  {/* Icon — spring bounce in */}
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, scale: 0.4, rotate: -15 },
                      visible: {
                        opacity: 1, scale: 1, rotate: 0,
                        transition: { type: 'spring', stiffness: 200, damping: 14, delay: 0.1 }
                      }
                    }}
                    className="relative mx-auto"
                  >
                    {/* Pulsing glow ring */}
                    <motion.div
                      className="absolute inset-0 rounded-full bg-lime-brand/20 blur-md"
                      animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0.1, 0.5] }}
                      transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
                    />
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-lime-brand/10 border border-lime-brand/30 text-lime-brand shadow-[0_0_30px_rgba(163,230,53,0.15)] relative z-10">
                      <Target size={24} />
                    </div>
                  </motion.div>

                  {/* Heading — slide up */}
                  <motion.h3
                    variants={{
                      hidden: { opacity: 0, y: 25 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
                    }}
                    className="text-3xl font-display font-black text-white uppercase tracking-tight"
                  >
                    Our <span className="text-lime-brand">Mission</span>
                  </motion.h3>

                  {/* Quote text — fade + slight slide */}
                  <motion.p
                    variants={{
                      hidden: { opacity: 0, y: 18 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
                    }}
                    className="text-steel-200 text-sm font-medium leading-relaxed max-w-sm mx-auto"
                  >
                    "To be the global leader in cutting tool manufacturing by delivering innovative, precision-engineered solutions that empower our customers to achieve manufacturing excellence while maintaining the highest standards of quality, sustainability, and customer service."
                  </motion.p>

                  {/* Badge strip — reveal from left */}
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } }
                    }}
                    className="pt-6 w-full flex flex-col sm:flex-row justify-center items-center gap-4 border-t border-navy-800/80 font-mono text-[9px] text-steel-400 uppercase tracking-wider"
                  >
                    <motion.div
                      className="flex items-center gap-2"
                      whileHover={{ color: '#A3C614', x: 3 }}
                      transition={{ duration: 0.2 }}
                    >
                      <CheckCircle2 size={13} className="text-lime-brand" /> ISO 9001 Certified
                    </motion.div>
                    <div className="hidden sm:block w-1 h-1 bg-navy-800 rounded-full" />
                    <motion.div
                      className="flex items-center gap-2"
                      whileHover={{ color: '#A3C614', x: 3 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Shield size={13} className="text-lime-brand" /> 24/7 Support Matrix
                    </motion.div>
                  </motion.div>

                </div>

              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom green accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-lime-brand to-transparent" />
    </section>
  )
}