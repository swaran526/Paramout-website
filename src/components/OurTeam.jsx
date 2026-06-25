import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Linkedin, Mail, ShieldCheck } from 'lucide-react'

import teamRajesh from '../assets/images/team_rajesh.png'
import teamVikram from '../assets/images/team_vikram.png'
import teamAnanya from '../assets/images/team_ananya.png'
import teamAmit from '../assets/images/team_amit.png'
import teamSarah from '../assets/images/team_sarah.png'

const teamMembers = [
  {
    name: 'Rajesh Sharma',
    role: 'Founder & Managing Director',
    bio: 'Over 25 years of pioneering engineering in custom carbide tooling systems and metallurgical advancements.',
    image: teamRajesh,
  },
  {
    name: 'Vikram Malhotra',
    role: 'Head of R&D and Tool Design',
    bio: 'Specialist in multi-axis CNC grinding geometry optimization and zero-tolerance chip flow engineering.',
    image: teamVikram,
  },
  {
    name: 'Dr. Ananya Goel',
    role: 'Chief Metallurgist & Materials Scientist',
    bio: 'Directs the development of proprietary PVD arc ion-plating recipes and sub-micron carbide matrices.',
    image: teamAnanya,
  },
  {
    name: 'Amit Verma',
    role: 'Director of Quality Assurance',
    bio: 'Oversees Zeiss CMM presetting protocols and digital keyence inspection metrics to guarantee defect-free delivery.',
    image: teamAmit,
  },
  {
    name: 'Sarah Jenkins',
    role: 'Lead Application & Support Engineer',
    bio: 'Bridges structural specs with production reality for defense, aerospace, and high-precision automotive sectors.',
    image: teamSarah,
  },
]

export default function OurTeam() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 35, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  }

  return (
    <section ref={ref} id="team" className="bg-navy-900 text-white py-24 font-body relative overflow-hidden border-t border-navy-800">
      {/* Background Subtle Tech Grid */}
      <div className="absolute inset-0 bg-grid-navy opacity-30 pointer-events-none" />

      {/* Ambient center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-lime-brand/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-3">
          <span className="text-xs font-mono tracking-[0.25em] text-steel-400 uppercase block">
            // LEADERSHIP & TECHNICAL CORES
          </span>
          <h2 className="font-display font-black uppercase text-4xl sm:text-6xl tracking-tight text-white leading-none">
            Our <span className="text-lime-brand">Team</span>
          </h2>
          <p className="text-steel-200 font-medium text-sm leading-relaxed max-w-md mx-auto pt-2">
            The metallurgy and precision tooling experts engineering industrial performance.
          </p>
          <div className="w-10 h-px bg-navy-800 mx-auto pt-4" />
        </div>

        {/* 5-Member Premium Grid Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.name}
              variants={cardVariants}
              className="group bg-navy-900/40 border border-navy-800 hover:border-lime-brand/30 rounded-xl relative overflow-hidden p-5 shadow-xl transition-all duration-500 flex flex-col justify-between"
            >
              {/* Tactical Tech Corner Decorators */}
              <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-navy-800 group-hover:border-lime-brand/40 transition-colors" />
              <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-navy-800 group-hover:border-lime-brand/40 transition-colors" />

              <div>
                {/* Photo frame */}
                <div className="relative aspect-square w-full mb-5 bg-navy-950 rounded-lg overflow-hidden border border-navy-800/60 group-hover:border-navy-700 transition-colors">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover brightness-[0.85] grayscale group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Info and Bio */}
                <div className="space-y-2 px-1">
                  <span className="font-mono text-[8px] tracking-[0.15em] text-lime-brand uppercase block">
                    // ENGINEER VERIFIED
                  </span>
                  <h3 className="font-display font-black uppercase text-base tracking-wide text-steel-200 group-hover:text-white transition-colors leading-tight">
                    {member.name}
                  </h3>
                  <p className="font-display font-bold text-[11px] text-steel-400 uppercase tracking-wider">
                    {member.role}
                  </p>
                  <p className="text-steel-200 text-xs font-medium leading-relaxed pt-2">
                    {member.bio}
                  </p>
                </div>
              </div>

              {/* Social / Support Indicators */}
              <div className="pt-5 mt-4 border-t border-navy-800/60 flex items-center justify-between px-1">
                <div className="flex gap-3">
                  <a href="#" className="text-steel-500 hover:text-lime-brand transition-colors">
                    <Linkedin size={14} />
                  </a>
                  <a href="#" className="text-steel-500 hover:text-lime-brand transition-colors">
                    <Mail size={14} />
                  </a>
                </div>
                <div className="flex items-center gap-1.5 text-steel-600 group-hover:text-lime-brand/50 transition-colors">
                  <ShieldCheck size={14} />
                  <span className="font-mono text-[8px]">ACTIVE</span>
                </div>
              </div>

              {/* Ambient Radial Spotlight Base Glow Layer */}
              <div className="absolute inset-0 bg-radial from-lime-500/0 via-transparent to-transparent group-hover:from-lime-500/5 transition-all duration-500 pointer-events-none blur-xl" />
            </motion.div>
          ))}
        </motion.div>

      </div>

      {/* Bottom green accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-lime-brand to-transparent" />
    </section>
  )
}
