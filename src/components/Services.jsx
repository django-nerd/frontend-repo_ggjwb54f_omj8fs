import { motion } from 'framer-motion'
import { Package, Truck, Mail, Printer, Fax, ScanLine, Stamp, Shirt, BadgeDollarSign, CreditCard, Box, Ruler } from 'lucide-react'

const services = [
  {
    icon: Package,
    title: 'Shipping Services',
    items: [
      'USPS, UPS, DHL (No FedEx yet)',
      'Domestic & international shipping',
      'Label printing and drop-off',
    ],
  },
  {
    icon: Truck,
    title: 'Package Tracking',
    items: [
      'Quick links to USPS, UPS, and DHL',
      'Clean input with animated Track button',
      'Real-time redirects to carriers',
    ],
  },
  {
    icon: Mail,
    title: 'Mailbox Rental',
    items: [
      'Real street address',
      'Email & text notifications',
      '24/7 access',
    ],
  },
  {
    icon: Printer,
    title: 'Printing & Copies',
    items: [
      'Flyers, business cards, forms',
      'Color and black & white options',
      'Fast turnaround',
    ],
  },
  {
    icon: Fax,
    title: 'Faxing & Shredding',
    items: [
      'Send & receive faxes',
      'Secure document shredding',
    ],
  },
  {
    icon: ScanLine,
    title: 'Document Scanning',
    items: [
      'Email, USB, or PDF output',
      'Bulk or single-scan options',
    ],
  },
  {
    icon: Stamp,
    title: 'Notary Services',
    items: [
      'Walk-in or appointment',
      'Personal and business documents',
    ],
  },
  {
    icon: Shirt,
    title: 'Custom Apparel (DTF Printing)',
    items: [
      'Shirts with custom prints',
      'For teams, staff, or resale',
    ],
  },
  {
    icon: Ruler,
    title: 'Posters & Banners',
    items: [
      'Grand opening signs',
      'Storefront signage',
      'Event prints',
    ],
  },
  {
    icon: CreditCard,
    title: 'Credit Card Machines',
    items: [
      'Clover POS setup & sales',
      'On-site business support',
      'Payment processing systems',
    ],
  },
  {
    icon: Box,
    title: 'Packaging & Supplies',
    items: [
      'Boxes, envelopes, tape',
      'Bubble wrap, packing peanuts',
    ],
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-20 bg-gradient-to-b from-black to-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl sm:text-4xl font-bold mb-12">
          Our Services
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: i * 0.04 }}
              className="group bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-[#D4AF37]/50 transition relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/0 via-[#D4AF37]/0 to-[#D4AF37]/10 opacity-0 group-hover:opacity-100 transition" />
              <div className="flex items-center gap-3">
                <s.icon className="text-[#D4AF37]" />
                <h3 className="text-xl font-semibold">{s.title}</h3>
              </div>
              <ul className="mt-4 space-y-2 text-white/80">
                {s.items.map((it) => (
                  <li key={it} className="leading-relaxed">• {it}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
