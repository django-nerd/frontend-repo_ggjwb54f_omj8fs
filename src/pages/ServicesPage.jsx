import Layout from '../components/Layout'
import Services from '../components/Services'

export default function ServicesPage(){
  return (
    <Layout>
      <div className="bg-black">
        <div className="max-w-7xl mx-auto px-6 pt-24 pb-6">
          <h1 className="text-4xl font-extrabold text-white">All Services</h1>
          <p className="text-white/70 mt-2">Comprehensive shipping, printing, design, and business solutions.</p>
        </div>
        <Services />
      </div>
    </Layout>
  )
}
