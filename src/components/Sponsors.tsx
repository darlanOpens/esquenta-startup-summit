"use client"

import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"

const sponsors = [
  { name: "Sponsor 1", logo: "/path/to/logo1.svg" },
  { name: "Sponsor 2", logo: "/path/to/logo2.svg" },
  { name: "Sponsor 3", logo: "/path/to/logo3.svg" },
  { name: "Sponsor 4", logo: "/path/to/logo4.svg" },
  { name: "Sponsor 5", logo: "/path/to/logo5.svg" },
  { name: "Sponsor 6", logo: "/path/to/logo6.svg" },
];

export function Sponsors() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Nossos{" "}
            <span className="text-purple-600">Patrocinadores</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Agradecemos o apoio dos nossos parceiros que tornam este evento possível.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center"
        >
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="flex justify-center items-center p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-16 w-full flex items-center justify-center text-gray-500">
                {sponsor.name}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
