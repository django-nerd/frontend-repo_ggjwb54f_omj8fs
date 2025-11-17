import { motion } from 'framer-motion'

export default function About(){
  const stats = [
    { label: 'Years Serving Rockford', value: 8 },
    { label: 'Satisfied Clients', value: 3200 },
    { label: 'Packages Shipped', value: 58000 },
    { label: 'Design Projects', value: 1200 },
  ]

  return (
    <div className="bg-black text-white">
      <section className="pt-24 pb-16 max-w-6xl mx-auto px-6">
        <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} className="text-4xl font-extrabold">About MAS</motion.h1>
        <p className="mt-4 text-white/80 max-w-2xl">We are a full-service mail and print center dedicated to helping Rockford businesses move faster. From shipping and mailbox rentals to design, printing, and apparel—our team delivers with speed and care.</p>
      </section>

      <section className="pb-20 max-w-6xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((s,i)=> (
          <motion.div key={s.label} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.05}} className="bg-white/5 border border-white/10 rounded-xl p-6">
            <motion.div initial={{scale:0.9}} whileInView={{scale:1}} transition={{type:'spring', stiffness:200, damping:20}} className="text-3xl font-extrabold text-[#D4AF37]">{s.value.toLocaleString()}</motion.div>
            <div className="mt-1 text-white/80">{s.label}</div>
          </motion.div>
        ))}
      </section>
    </div>
  )
}
