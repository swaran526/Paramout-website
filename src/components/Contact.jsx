import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, Send, CheckCircle2 } from 'lucide-react'

// ─── Data ─────────────────────────────────────────────────────────────────────

const contactDetails = [
  { icon: Phone, label: 'Call Us', value: '+91 99008 58297', subtext: 'Mon - Sat: 9:00 AM - 6:30 PM', href: 'tel:+919900858297' },
  { icon: Mail, label: 'Email Us', value: 'tools@paramountco.in', subtext: 'Response within 24 business hours', href: 'mailto:tools@paramountco.in' },
]

// ─── Animation Variants ───────────────────────────────────────────────────────

const headerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
}

const headerItemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '', company: '', email: '', phone: '', toolType: '', message: ''
  })

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section
      id="contact"
      className="bg-navy-900 text-white py-24 font-body relative overflow-hidden border-t border-navy-800"
    >
      {/* Background tech grid */}
      <div className="absolute inset-0 bg-grid-navy opacity-30 pointer-events-none" />

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-lime-brand/4 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 z-10">

        {/* ══════════════════════════════════════════════
            CENTERED HEADER — whileInView animated
            ══════════════════════════════════════════════ */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16 space-y-4"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <motion.h2
            variants={headerItemVariants}
            className="font-display font-black uppercase text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-none"
          >
            Contact <span className="text-lime-brand">Us</span>
          </motion.h2>

          <motion.p
            variants={headerItemVariants}
            className="text-steel-300 text-sm sm:text-base font-medium leading-relaxed border-t border-navy-800 pt-4"
          >
            Whether you need standard tooling or a custom engineered solution, our application engineering team is ready to help.
          </motion.p>
        </motion.div>

        {/* ══════════════════════════════════════════════
            GRID — contact cards + form
            ══════════════════════════════════════════════ */}
        <div className="grid lg:grid-cols-12 gap-8 items-center">

          {/* ── Contact Info Cards (col-span-5) ──────── */}
          <motion.div
            className="lg:col-span-5 flex flex-col gap-4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            {contactDetails.map(({ icon: Icon, label, value, subtext, href }) => (
              <motion.a
                key={label}
                href={href}
                className="flex items-start gap-4 p-5 bg-navy-950/60 border border-navy-800 rounded-2xl relative overflow-hidden group hover:border-lime-brand/30 transition-colors duration-300"
                whileHover={{ y: -3 }}
                transition={{ duration: 0.3 }}
              >
                {/* Hover top border sweep */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-lime-brand/60 via-lime-brand to-lime-brand/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Spotlight glow */}
                <div className="absolute inset-0 bg-radial from-lime-500/0 via-transparent to-transparent group-hover:from-lime-500/4 transition-all duration-500 pointer-events-none blur-xl" />

                {/* Icon */}
                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-navy-950 border border-navy-800 rounded-xl text-lime-brand group-hover:border-lime-brand/40 group-hover:shadow-[0_0_15px_rgba(163,230,53,0.12)] transition-all duration-300">
                  <Icon size={16} />
                </div>

                {/* Text */}
                <div className="relative z-10 space-y-0.5">
                  <p className="font-mono text-[9px] uppercase tracking-widest text-lime-brand">{label}</p>
                  <p className="text-white text-sm font-semibold tracking-tight group-hover:text-lime-300 transition-colors duration-300">{value}</p>
                  <p className="text-steel-400 text-[10px] font-medium leading-relaxed">{subtext}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* ── Form Panel (col-span-7) ───────────────── */}
          <motion.div
            className="lg:col-span-7 bg-navy-950/60 border border-navy-800 rounded-2xl p-5 relative overflow-hidden group shadow-2xl"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            {/* Animated top border sweep */}
            <motion.div
              className="absolute top-0 left-0 h-0.5 bg-gradient-to-r from-transparent via-lime-brand to-transparent pointer-events-none"
              initial={{ width: '0%', opacity: 0 }}
              whileInView={{ width: '100%', opacity: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 1.1, ease: 'easeOut', delay: 0.4 }}
            />

            {/* Corner decorators */}
            <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-white/10 group-hover:border-lime-brand/50 transition-colors duration-300 pointer-events-none" />
            <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-white/10 group-hover:border-lime-brand/50 transition-colors duration-300 pointer-events-none" />
            <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-white/10 group-hover:border-lime-brand/50 transition-colors duration-300 pointer-events-none" />
            <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-white/10 group-hover:border-lime-brand/50 transition-colors duration-300 pointer-events-none" />

            {/* Spotlight glow */}
            <div className="absolute inset-0 bg-radial from-lime-500/0 via-transparent to-transparent group-hover:from-lime-500/3 transition-all duration-700 pointer-events-none blur-2xl" />

            {submitted ? (
              <motion.div
                className="flex flex-col items-center justify-center min-h-[300px] text-center relative z-10"
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <motion.div
                  initial={{ scale: 0, rotate: -20 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 14 }}
                >
                  <CheckCircle2 size={52} className="text-lime-brand mb-5" />
                </motion.div>
                <h3 className="font-display font-black uppercase text-2xl text-white mb-3 tracking-wide">
                  Request <span className="text-lime-brand">Received</span>
                </h3>
                <p className="text-steel-300 text-sm font-medium max-w-sm leading-relaxed">
                  Our application engineer will review your specifications and contact you within one business day.
                </p>
              </motion.div>
            ) : (
              <div className="relative z-10">
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">

                  {/* Row 1 */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text" name="name" required value={form.name} onChange={handleChange}
                      className="w-full bg-navy-900/80 border border-navy-700 focus:border-lime-brand/60 focus:ring-1 focus:ring-lime-brand/20 text-steel-200 text-xs px-4 py-2.5 rounded-xl outline-none transition-all duration-300 font-body placeholder:text-steel-500"
                      placeholder="Full Name *"
                    />
                    <input
                      type="text" name="company" required value={form.company} onChange={handleChange}
                      className="w-full bg-navy-900/80 border border-navy-700 focus:border-lime-brand/60 focus:ring-1 focus:ring-lime-brand/20 text-steel-200 text-xs px-4 py-2.5 rounded-xl outline-none transition-all duration-300 font-body placeholder:text-steel-500"
                      placeholder="Company Name *"
                    />
                  </div>

                  {/* Row 2 */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="email" name="email" required value={form.email} onChange={handleChange}
                      className="w-full bg-navy-900/80 border border-navy-700 focus:border-lime-brand/60 focus:ring-1 focus:ring-lime-brand/20 text-steel-200 text-xs px-4 py-2.5 rounded-xl outline-none transition-all duration-300 font-body placeholder:text-steel-500"
                      placeholder="Email Address *"
                    />
                    <input
                      type="text" name="phone" value={form.phone} onChange={handleChange}
                      className="w-full bg-navy-900/80 border border-navy-700 focus:border-lime-brand/60 focus:ring-1 focus:ring-lime-brand/20 text-steel-200 text-xs px-4 py-2.5 rounded-xl outline-none transition-all duration-300 font-body placeholder:text-steel-500"
                      placeholder="Phone Number"
                    />
                  </div>

                  {/* Tool type */}
                  <div className="relative">
                    <select
                      name="toolType" value={form.toolType} onChange={handleChange}
                      className="w-full bg-navy-900/80 border border-navy-700 focus:border-lime-brand/60 focus:ring-1 focus:ring-lime-brand/20 text-steel-200 text-xs px-4 py-2.5 rounded-xl outline-none transition-all duration-300 font-body appearance-none"
                      style={{ backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='6 9 12 15 18 9'></polyline></svg>")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 14px center', backgroundSize: '16px' }}
                    >
                      <option value="" className="bg-navy-950 text-steel-500">Select Product / Application...</option>
                      <option className="bg-navy-950 text-steel-200" value="SOLID CARBIDE TOOLS">SOLID CARBIDE TOOLS</option>
                      <option className="bg-navy-950 text-steel-200" value="CUSTOMIZED FORM TOOLS">CUSTOMIZED FORM TOOLS</option>
                      <option className="bg-navy-950 text-steel-200" value="CERMET,PCD AND CARBIDE EXPENDABLE REAMER">CERMET, PCD AND CARBIDE EXPENDABLE REAMER</option>
                      <option className="bg-navy-950 text-steel-200" value="PCD BORING TOOLS">PCD BORING TOOLS</option>
                      <option className="bg-navy-950 text-steel-200" value="HOB AND FIRTREE">HOB AND FIRTREE</option>
                      <option className="bg-navy-950 text-steel-200" value="PCD AND PCBN SPL INSERTS">PCD AND PCBN SPL INSERTS</option>
                      <option className="bg-navy-950 text-steel-200" value="FINE BORING GUIDE PAD TOOLS">FINE BORING GUIDE PAD TOOLS</option>
                      <option className="bg-navy-950 text-steel-200" value="SPL PCD WIPER CARTRIDGE">SPL PCD WIPER CARTRIDGE</option>
                      <option className="bg-navy-950 text-steel-200" value="MICRO TOOLS AND BLANK PREPARATION">MICRO TOOLS AND BLANK PREPARATION</option>
                      <option className="bg-navy-950 text-steel-200" value="CUSTOMIZED FORM CUTTER">CUSTOMIZED FORM CUTTER</option>
                    </select>
                  </div>

                  {/* Message */}
                  <textarea
                    name="message" rows={2} value={form.message} onChange={handleChange}
                    className="w-full bg-navy-900/80 border border-navy-700 focus:border-lime-brand/60 focus:ring-1 focus:ring-lime-brand/20 text-steel-200 text-xs px-4 py-2.5 rounded-xl outline-none transition-all duration-300 font-body resize-none placeholder:text-steel-500"
                    placeholder="Describe your geometries, workpiece profiles, tolerances..."
                  />

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    className="w-full py-3 px-6 bg-lime-brand text-navy-950 font-mono text-xs font-extrabold uppercase tracking-widest rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(163,230,53,0.15)] hover:shadow-[0_0_30px_rgba(163,230,53,0.35)] flex items-center justify-center gap-2 hover:bg-lime-brandHover"
                    whileHover={{ scale: 1.015 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>Send Request</span>
                    <Send size={13} />
                  </motion.button>

                </form>
              </div>
            )}
          </motion.div>

        </div>
      </div>

      {/* Bottom lime accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-lime-brand to-transparent" />
    </section>
  )
}