import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Search } from 'lucide-react'

const carriers = [
  { name: 'USPS', url: 'https://tools.usps.com/go/TrackConfirmAction', param: 'tLabels' },
  { name: 'UPS', url: 'https://www.ups.com/track?loc=en_US&requester=ST/', param: 'tracknum' },
  { name: 'DHL', url: 'https://www.dhl.com/us-en/home/tracking/tracking-express.html', param: 'tracking-id' },
]

export default function Tracking() {
  const [number, setNumber] = useState('')
  const [selected, setSelected] = useState(carriers[0])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!number) return
    const url = `${selected.url}${selected.url.includes('?') ? '&' : '?'}${selected.param}=${encodeURIComponent(number)}`
    window.open(url, '_blank')
  }

  return (
    <section id="tracking" className="py-16 bg-black text-white">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h3 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-2xl font-bold mb-6">Track a Package</motion.h3>
        <form onSubmit={handleSubmit} className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col sm:flex-row gap-3">
          <div className="flex-1 relative">
            <input
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              placeholder="Enter tracking number"
              className="w-full bg-transparent border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-[#D4AF37]"
            />
            <span className="absolute -top-2 left-3 text-xs bg-black px-1 text-white/60">Tracking Number</span>
          </div>
          <select value={selected.name} onChange={(e) => setSelected(carriers.find(c => c.name === e.target.value))} className="bg-transparent border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-[#D4AF37]">
            {carriers.map(c => <option key={c.name} value={c.name} className="bg-black">{c.name}</option>)}
          </select>
          <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="submit" className="inline-flex items-center justify-center gap-2 bg-[#D4AF37] text-black font-semibold px-5 py-3 rounded-lg">
            <Search size={16} /> Track
          </motion.button>
        </form>
        <div className="mt-3 text-sm text-white/70 flex flex-wrap items-center gap-4">
          {carriers.map(c => (
            <a key={c.name} href={c.url} target="_blank" className="inline-flex items-center gap-1 hover:text-[#D4AF37]">
              {c.name} Tracking <ExternalLink size={14} />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
