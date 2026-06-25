import { Phone, Mail, MapPin } from 'lucide-react'
import logoImg from '../assets/images/logo.png'

export default function Footer() {
  const getLinkHref = (link) => {
    switch (link) {
      case 'Home':
        return '#'
      case 'About Us':
        return '#about'
      case 'Products':
        return '#products'
      case 'Core Values':
        return '#value-proposition'
      case 'Industries':
        return '#industries'
      case 'Our Team':
        return '#team'
      case 'Contact Us':
        return '#contact'
      default:
        return '#'
    }
  }

  return (
    <footer className="bg-navy-900 border-t border-navy-700 relative overflow-hidden">
      {/* Top accent green line */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-lime-brand via-lime-brandHover to-transparent" />

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">

        {/* 4-Column Horizontal Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Column 1: Brand Profile */}
          <div>
            {/* Logo */}
            <div className="flex items-center gap-3 mb-5">
              <img
                src={logoImg}
                alt="Paramount Cutting Tools Logo"
                className="h-12 w-auto object-contain flex-shrink-0"
              />
              <div className="flex flex-col leading-[1.1]">
                <span className="font-display font-extrabold text-lg uppercase tracking-wider text-white">Paramount</span>
                <span className="font-display font-bold text-[10px] uppercase tracking-widest text-lime-brand">Cutting Tools</span>
              </div>
            </div>
            <p className="text-steel-400 text-xs sm:text-sm leading-relaxed mb-4 max-w-xs">
              Precision engineering meets innovation. Manufacturing cutting-edge solutions for the mechanical industry since decades.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-display font-extrabold uppercase text-xs tracking-wider text-white mb-5 flex items-center gap-2 after:flex-1 after:h-px after:bg-navy-700">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {['Home', 'About Us', 'Products', 'Core Values', 'Industries', 'Our Team', 'Contact Us'].map((link) => (
                <li key={link}>
                  <a
                    href={getLinkHref(link)}
                    className="text-steel-400 hover:text-lime-brand transition-colors text-xs font-body flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-lime-brand/30 group-hover:bg-lime-brand transition-colors flex-shrink-0" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Products */}
          <div>
            <h4 className="font-display font-extrabold uppercase text-xs tracking-wider text-white mb-5 flex items-center gap-2 after:flex-1 after:h-px after:bg-navy-700">
              Products
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                'PCD & CBN Tools',
                'Indexable Tools',
                'Solid Carbide Tools',
                'Rotary Files',
                'Gear Cutting Tools',
                'Special Tools'
              ].map((product) => (
                <li key={product}>
                  <a
                    href="#products"
                    className="text-steel-400 hover:text-lime-brand transition-colors text-xs font-body flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-lime-brand/30 group-hover:bg-lime-brand transition-colors flex-shrink-0" />
                    {product}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="font-display font-extrabold uppercase text-xs tracking-wider text-white mb-5 flex items-center gap-2 after:flex-1 after:h-px after:bg-navy-700">
              Contact Info
            </h4>
            <div className="flex flex-col gap-3">
              <a href="tel:+919900858297" className="flex items-center gap-2.5 text-steel-300 hover:text-lime-brand transition-colors text-xs">
                <Phone size={13} className="text-lime-brand flex-shrink-0" />
                +91 99008 58297
              </a>
              <a href="mailto:tools@paramountco.in" className="flex items-center gap-2.5 text-steel-300 hover:text-lime-brand transition-colors text-xs">
                <Mail size={13} className="text-lime-brand flex-shrink-0" />
                tools@paramountco.in
              </a>
              <div className="flex items-start gap-2.5 text-steel-400 text-xs">
                <MapPin size={13} className="text-lime-brand flex-shrink-0 mt-0.5" />
                <span>
                  Paramount Cutting Tools,<br />Bangalore, Karnataka, India
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom sub-bar (Legal Notice) */}
        <div className="border-t border-navy-700 pt-6 text-center text-steel-500 text-[11px] font-body">
          <p>© {new Date().getFullYear()} Paramount Cutting Tools. All Rights Reserved. All specifications are subject to technical changes.</p>
        </div>

      </div>
    </footer>
  )
}
