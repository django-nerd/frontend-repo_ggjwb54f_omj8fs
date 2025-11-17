import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, PackageSearch } from 'lucide-react'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "40%"])
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])

  return (
    <section ref={ref} className="relative h-[90vh] overflow-hidden bg-black text-white">
      <motion.div style={{ y: y1 }} className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjMzMDU0MTN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center opacity-30" />
      <motion.div style={{ y: y2 }} className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
        <div className="max-w-2xl">
          <motion.h1 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            Your Local Partner for <span className="text-[#D4AF37]">Mail, Print</span> & Business Services
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.6 }} className="mt-6 text-lg text-white/80">
            MAS Mail & Print Center in Rockford delivers professional shipping, printing, design, and business solutions with fast turnaround.
          </motion.p>

          <div className="mt-8 flex flex-wrap gap-4">
            <motion.a
              href="#tracking"
              className="inline-flex items-center gap-2 bg-[#D4AF37] text-black font-semibold px-5 py-3 rounded-full hover:brightness-110 transition shadow"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <PackageSearch size={18} /> Track a Package
            </motion.a>
            <motion.a
              href="#services"
              className="inline-flex items-center gap-2 border border-white/20 text-white font-semibold px-5 py-3 rounded-full hover:border-[#D4AF37] hover:text-[#D4AF37] transition"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              See Our Services <ArrowRight size={18} />
            </motion.a>
          </div>
        </div>

        <motion.a href="#tracking" className="hidden md:flex absolute top-24 right-8 bg-[#D4AF37] text-black px-4 py-2 rounded-full font-semibold shadow hover:brightness-110" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
          Track Package
        </motion.a>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-sm">Scroll</div>
    </section>
  )
}
