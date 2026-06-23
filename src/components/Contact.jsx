import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Phone, Mail, MapPin, Send, CheckCircle2 } from 'lucide-react'

const contactDetails = [
  { icon: Phone, label: 'Call Us', value: '+91 98765 43210', href: 'tel:+919876543210' },
  { icon: Mail, label: 'Email Us', value: 'info@paramountco.in', href: 'mailto:info@paramountco.in' },
  { icon: MapPin, label: 'Our Location', value: 'B-23, Industrial Area, Ludhiana, Punjab, India', href: '#' },
]

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
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
    <section id="contact" ref={ref} className="py-20 bg-navy-900 relative overflow-hidden">
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid-navy opacity-30 pointer-events-none" />
      <div className="absolute right-0 bottom-0 w-80 h-80 bg-lime-brand/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="section-label mb-3">◆ Get in Touch</p>
          <h2 className="font-display font-black uppercase text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
            Contact <span className="text-lime-brand">Us</span>
          </h2>
          <p className="text-steel-400 mt-4 max-w-xl mx-auto text-sm">
            Whether you need standard tooling or a custom engineered solution, our team is ready to help.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Left — Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col gap-6 mb-10">
              {contactDetails.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-5 group"
                >
                  <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full bg-navy-800 border border-navy-600 group-hover:border-lime-brand transition-colors">
                    <Icon size={18} className="text-lime-brand" />
                  </div>
                  <div>
                    <div className="font-display font-bold text-[10px] uppercase tracking-widest text-steel-500 mb-0.5">{label}</div>
                    <div className="text-steel-200 text-sm group-hover:text-lime-brand transition-colors font-body">{value}</div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right — Quote Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-navy-800 border border-navy-600 p-8 relative"
          >
            {/* Top highlight accent bar */}
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-lime-brand via-lime-brandHover to-transparent" />

            {submitted ? (
              <motion.div
                className="flex flex-col items-center justify-center min-h-[400px] text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <CheckCircle2 size={52} className="text-lime-brand mb-5" />
                <h3 className="font-display font-extrabold uppercase text-2xl text-white mb-2">Request Received</h3>
                <p className="text-steel-400 text-sm max-w-xs">
                  Our application engineer will contact you within one business day.
                </p>
              </motion.div>
            ) : (
              <>
                <h3 className="font-display font-extrabold uppercase text-xl text-white mb-6 tracking-wide">
                  Request a Quote
                </h3>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="font-display text-[10px] font-bold uppercase tracking-widest text-steel-400 mb-1.5 block">Full Name *</label>
                      <input
                        type="text" name="name" required value={form.name} onChange={handleChange}
                        className="w-full bg-navy-900 border border-navy-600 focus:border-lime-brand text-steel-200 text-sm px-3 py-2.5 outline-none transition-colors font-body"
                        placeholder="Your Name"
                      />
                    </div>
                    <div>
                      <label className="font-display text-[10px] font-bold uppercase tracking-widest text-steel-400 mb-1.5 block">Company *</label>
                      <input
                        type="text" name="company" required value={form.company} onChange={handleChange}
                        className="w-full bg-navy-900 border border-navy-600 focus:border-lime-brand text-steel-200 text-sm px-3 py-2.5 outline-none transition-colors font-body"
                        placeholder="Company Name"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="font-display text-[10px] font-bold uppercase tracking-widest text-steel-400 mb-1.5 block">Email *</label>
                      <input
                        type="email" name="email" required value={form.email} onChange={handleChange}
                        className="w-full bg-navy-900 border border-navy-600 focus:border-lime-brand text-steel-200 text-sm px-3 py-2.5 outline-none transition-colors font-body"
                        placeholder="your@company.com"
                      />
                    </div>
                    <div>
                      <label className="font-display text-[10px] font-bold uppercase tracking-widest text-steel-400 mb-1.5 block">Phone</label>
                      <input
                        type="tel" name="phone" value={form.phone} onChange={handleChange}
                        className="w-full bg-navy-900 border border-navy-600 focus:border-lime-brand text-steel-200 text-sm px-3 py-2.5 outline-none transition-colors font-body"
                        placeholder="+91 00000 00000"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-display text-[10px] font-bold uppercase tracking-widest text-steel-400 mb-1.5 block">Tool Type / Application</label>
                    <select
                      name="toolType" value={form.toolType} onChange={handleChange}
                      className="w-full bg-navy-900 border border-navy-600 focus:border-lime-brand text-steel-200 text-sm px-3 py-2.5 outline-none transition-colors font-body"
                    >
                      <option value="">Select a category...</option>
                      <option>PCD & CBN Tools</option>
                      <option>Indexable Tools</option>
                      <option>Solid Carbide Tools</option>
                      <option>Rotary Files</option>
                      <option>Gear Cutting Tools</option>
                      <option>Special Tools</option>
                    </select>
                  </div>

                  <div>
                    <label className="font-display text-[10px] font-bold uppercase tracking-widest text-steel-400 mb-1.5 block">Message / Specifications</label>
                    <textarea
                      name="message" rows={4} value={form.message} onChange={handleChange}
                      className="w-full bg-navy-900 border border-navy-600 focus:border-lime-brand text-steel-200 text-sm px-3 py-2.5 outline-none transition-colors font-body resize-none"
                      placeholder="Describe your application, material, tolerances, quantities..."
                    />
                  </div>

                  <button type="submit" className="btn-primary justify-center py-4 mt-1 group">
                    Send Request
                    <Send size={14} className="group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
