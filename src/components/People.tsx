"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function People() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto space-y-6"
        >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              🎤 Quem Estará{" "}
              <span className="text-orange-500">Com A Gente</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 items-start">
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-center">
                  <Image
                    src="/esquenta/palestrantes/david_ledson.jpg"
                    alt="David Ledson"
                    width={200}
                    height={200}
                    className="w-full h-48 object-cover object-top rounded-lg mb-4"
                  />
                  <h3 className="text-lg font-bold text-gray-900 mb-2">David Ledson</h3>
                   <p className="text-orange-600 font-semibold text-sm mb-2">Ex-sócio de Sympla, iFood, Sólides | Fundador GarantiaBR</p>
                   <p className="text-gray-600 italic text-sm mb-3">&ldquo;Não é sobre produto. É sobre sentimento.&rdquo;</p>
                   <div className="flex items-center justify-center">
                     <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
                       <span className="text-white text-xs font-bold">in</span>
                     </div>
                   </div>
                </div>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-center">
                  <Image
                    src="/esquenta/palestrantes/bento_meirelles.jpg"
                    alt="Bento Menezes"
                    width={200}
                    height={200}
                    className="w-full h-48 object-cover object-top rounded-lg mb-4"
                  />
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Bento Menezes</h3>
                   <p className="text-orange-600 font-semibold text-sm mb-2">Founder da Minimal</p>
                   <p className="text-gray-600 italic text-sm mb-3">A marca que transformou uma camiseta preta em símbolo de autoestima.</p>
                   <div className="flex items-center justify-center">
                     <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
                       <span className="text-white text-xs font-bold">in</span>
                     </div>
                   </div>
                </div>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-center">
                  <Image
                    src="/esquenta/palestrantes/marcela_zaidem.jpg"
                    alt="Marcela Zaiden"
                    width={200}
                    height={200}
                    className="w-full h-48 object-cover object-top rounded-lg mb-4"
                  />
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Marcela Zaiden</h3>
                   <p className="text-orange-600 font-semibold text-sm mb-2">Fundadora CNP | Ex-G4 Educação</p>
                   <p className="text-gray-600 italic text-sm mb-3">Especialista em criar culturas vivas com propósito.</p>
                   <div className="flex items-center justify-center">
                     <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
                       <span className="text-white text-xs font-bold">in</span>
                     </div>
                   </div>
                </div>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-center">
                  <Image
                    src="/esquenta/palestrantes/leonardo_superti.jpeg"
                    alt="Leonardo Superti"
                    width={200}
                    height={200}
                    className="w-full h-48 object-cover object-top rounded-lg mb-4"
                  />
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Leonardo Superti</h3>
                   <p className="text-orange-600 font-semibold text-sm mb-2">CEO da CustomerX</p>
                   <p className="text-gray-600 italic text-sm mb-3">Referência em dados, processos e CS escalável.</p>
                   <div className="flex items-center justify-center">
                     <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
                       <span className="text-white text-xs font-bold">in</span>
                     </div>
                   </div>
                </div>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-center">
                  <Image
                    src="/esquenta/palestrantes/aline_simoes.png"
                    alt="Aline Simões"
                    width={200}
                    height={200}
                    className="w-full h-48 object-cover object-top rounded-lg mb-4"
                  />
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Aline Simões</h3>
                   <p className="text-orange-600 font-semibold text-sm mb-2">Especialista em Marketing Digital</p>
                   <p className="text-gray-600 italic text-sm mb-3">Transformando marcas através de estratégias digitais inovadoras.</p>
                   <div className="flex items-center justify-center">
                     <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
                       <span className="text-white text-xs font-bold">in</span>
                     </div>
                   </div>
                </div>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-center">
                  <Image
                    src="/esquenta/palestrantes/douglas_conrad.png"
                    alt="Douglas Conrad"
                    width={200}
                    height={200}
                    className="w-full h-48 object-cover object-top rounded-lg mb-4"
                  />
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Douglas Conrad</h3>
                   <p className="text-orange-600 font-semibold text-sm mb-2">Empreendedor e Investidor</p>
                   <p className="text-gray-600 italic text-sm mb-3">Conectando startups ao futuro através de investimentos estratégicos.</p>
                   <div className="flex items-center justify-center">
                     <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
                       <span className="text-white text-xs font-bold">in</span>
                     </div>
                   </div>
                </div>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-center">
                  <Image
                    src="/esquenta/palestrantes/joao_paulo.png"
                    alt="João Paulo"
                    width={200}
                    height={200}
                    className="w-full h-48 object-cover object-top rounded-lg mb-4"
                  />
                  <h3 className="text-lg font-bold text-gray-900 mb-2">João Paulo</h3>
                   <p className="text-orange-600 font-semibold text-sm mb-2">Tech Leader e Inovador</p>
                   <p className="text-gray-600 italic text-sm mb-3">Liderando transformações tecnológicas em grandes corporações.</p>
                   <div className="flex items-center justify-center">
                     <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
                       <span className="text-white text-xs font-bold">in</span>
                     </div>
                   </div>
                </div>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-center">
                  <Image
                    src="/esquenta/palestrantes/veridiana_santos.jpeg"
                    alt="Veridiana Santos"
                    width={200}
                    height={200}
                    className="w-full h-48 object-cover object-top rounded-lg mb-4"
                  />
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Veridiana Santos</h3>
                   <p className="text-orange-600 font-semibold text-sm mb-2">Consultora em Experiência do Cliente</p>
                   <p className="text-gray-600 italic text-sm mb-3">Especialista em criar jornadas memoráveis para clientes.</p>
                   <div className="flex items-center justify-center">
                     <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
                       <span className="text-white text-xs font-bold">in</span>
                     </div>
                   </div>
                </div>
              </div>
            </div>
            

          </motion.div>
      </div>
    </section>
  )
}