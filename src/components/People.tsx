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
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start mt-12">
               {/* Variáveis CSS para personalização das imagens */}
               <style jsx>{`
                 .speaker-card {
                   --card-height: 320px;
                   --image-object-fit: cover;
                   --image-object-position: center top;
                   --image-scale: 1;
                   --image-brightness: 1;
                   --image-contrast: 1;
                   --image-saturate: 1;
                 }
                 .speaker-image {
                   height: var(--card-height);
                   object-fit: var(--image-object-fit);
                   object-position: var(--image-object-position);
                   transform: scale(var(--image-scale));
                   filter: brightness(var(--image-brightness)) contrast(var(--image-contrast)) saturate(var(--image-saturate));
                   transition: all 0.3s ease;
                 }
               `}</style>
              <div className="speaker-card relative group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <Image
                   src="/brunch-vip/palestrantes/david_ledson.png"
                   alt="David Ledson"
                   width={400}
                   height={320}
                   className="speaker-image w-full"
                 />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-white/20 backdrop-blur-md border-t border-white/30">
                  <h3 className="text-lg font-bold text-white mb-1 drop-shadow-lg">David Ledson</h3>
                  <p className="text-orange-200 font-semibold text-xs mb-1">Ex-sócio de Sympla, iFood, Sólides | Fundador GarantiaBR</p>
                  <p className="text-white/90 italic text-xs mb-2 drop-shadow">&ldquo;Não é sobre produto. É sobre sentimento.&rdquo;</p>

                </div>
              </div>
              
              <div className="speaker-card relative group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                 <Image
                   src="/brunch-vip/palestrantes/bento_meirelles.png"
                   alt="Bento Menezes"
                   width={400}
                   height={320}
                   className="speaker-image w-full"
                 />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-white/20 backdrop-blur-md border-t border-white/30">
                  <h3 className="text-lg font-bold text-white mb-1 drop-shadow-lg">Bento Menezes</h3>
                  <p className="text-orange-200 font-semibold text-xs mb-1">Founder da Minimal</p>
                  <p className="text-white/90 italic text-xs mb-2 drop-shadow">A marca que transformou uma camiseta preta em símbolo de autoestima.</p>

                </div>
              </div>
              
              <div className="speaker-card relative group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                 <Image
                   src="/brunch-vip/palestrantes/marcela_zaidem.png"
                   alt="Marcela Zaiden"
                   width={400}
                   height={320}
                   className="speaker-image w-full"
                 />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-white/20 backdrop-blur-md border-t border-white/30">
                  <h3 className="text-lg font-bold text-white mb-1 drop-shadow-lg">Marcela Zaiden</h3>
                  <p className="text-orange-200 font-semibold text-xs mb-1">Fundadora CNP | Ex-G4 Educação</p>
                  <p className="text-white/90 italic text-xs mb-2 drop-shadow">Especialista em criar culturas vivas com propósito.</p>

                </div>
              </div>
              
              <div className="speaker-card relative group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                 <Image
                   src="/brunch-vip/palestrantes/leonardo_superti.png"
                   alt="Leonardo Superti"
                   width={400}
                   height={320}
                   className="speaker-image w-full"
                 />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-white/20 backdrop-blur-md border-t border-white/30">
                  <h3 className="text-lg font-bold text-white mb-1 drop-shadow-lg">Leonardo Superti</h3>
                  <p className="text-orange-200 font-semibold text-xs mb-1">CEO da CustomerX</p>
                  <p className="text-white/90 italic text-xs mb-2 drop-shadow">Referência em dados, processos e CS escalável.</p>

                </div>
              </div>
              
              <div className="speaker-card relative group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <Image
                    src="/brunch-vip/palestrantes/aline_simoes.png"
                    alt="Aline Simões"
                    width={400}
                    height={320}
                    className="speaker-image w-full"
                  />
                 <div className="absolute bottom-0 left-0 right-0 p-4 bg-white/20 backdrop-blur-md border-t border-white/30">
                   <h3 className="text-lg font-bold text-white mb-1 drop-shadow-lg">Aline Simões</h3>
                   <p className="text-orange-200 font-semibold text-xs mb-1">Especialista em Marketing Digital</p>
                   <p className="text-white/90 italic text-xs mb-2 drop-shadow">Transformando marcas através de estratégias digitais inovadoras.</p>

                 </div>
               </div>
              
              <div className="speaker-card relative group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <Image
                    src="/brunch-vip/palestrantes/douglas_conrad.png"
                    alt="Douglas Conrad"
                    width={400}
                    height={320}
                    className="speaker-image w-full"
                  />
                 <div className="absolute bottom-0 left-0 right-0 p-4 bg-white/20 backdrop-blur-md border-t border-white/30">
                   <h3 className="text-lg font-bold text-white mb-1 drop-shadow-lg">Douglas Conrad</h3>
                   <p className="text-orange-200 font-semibold text-xs mb-1">Empreendedor e Investidor</p>
                   <p className="text-white/90 italic text-xs mb-2 drop-shadow">Conectando startups ao futuro através de investimentos estratégicos.</p>

                 </div>
               </div>
              
              <div className="speaker-card relative group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <Image
                    src="/brunch-vip/palestrantes/joao_paulo.png"
                    alt="João Paulo"
                    width={400}
                    height={320}
                    className="speaker-image w-full"
                  />
                 <div className="absolute bottom-0 left-0 right-0 p-4 bg-white/20 backdrop-blur-md border-t border-white/30">
                   <h3 className="text-lg font-bold text-white mb-1 drop-shadow-lg">João Paulo</h3>
                   <p className="text-orange-200 font-semibold text-xs mb-1">Tech Leader e Inovador</p>
                   <p className="text-white/90 italic text-xs mb-2 drop-shadow">Liderando transformações tecnológicas em grandes corporações.</p>

                 </div>
               </div>
              
              <div className="speaker-card relative group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <Image
                    src="/brunch-vip/palestrantes/veridiana_santos.png"
                    alt="Veridiana Santos"
                    width={400}
                    height={320}
                    className="speaker-image w-full"
                  />
                 <div className="absolute bottom-0 left-0 right-0 p-4 bg-white/20 backdrop-blur-md border-t border-white/30">
                   <h3 className="text-lg font-bold text-white mb-1 drop-shadow-lg">Veridiana Santos</h3>
                   <p className="text-orange-200 font-semibold text-xs mb-1">Consultora em Experiência do Cliente</p>
                   <p className="text-white/90 italic text-xs mb-2 drop-shadow">Especialista em criar jornadas memoráveis para clientes.</p>

                 </div>
               </div>
              
              <div className="speaker-card relative group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <Image
                    src="/brunch-vip/palestrantes/dionara_conrad.png"
                    alt="Dionara Conrad"
                    width={400}
                    height={320}
                    className="speaker-image w-full"
                  />
                 <div className="absolute bottom-0 left-0 right-0 p-4 bg-white/20 backdrop-blur-md border-t border-white/30">
                   <h3 className="text-lg font-bold text-white mb-1 drop-shadow-lg">Dionara Conrad</h3>
                   <p className="text-orange-200 font-semibold text-xs mb-1">CEO Opens e mestre de cerimônia</p>
                   <p className="text-white/90 italic text-xs mb-2 drop-shadow">Construindo pontes entre empresas e seus clientes</p>

                 </div>
               </div>
            </div>
            

          </motion.div>
      </div>
    </section>
  )
}