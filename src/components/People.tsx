"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function People() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Coluna esquerda - Imagem */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <Image
              src="/esquenta/people.png"
              alt="Pessoas que fazem acontecer"
              width={600}
              height={600}
              className="w-full h-auto object-contain"
              priority
            />
          </motion.div>

          {/* Coluna direita - Texto */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Pessoas que fazem{" "}
              <span className="text-orange-500">acontecer</span>
            </h2>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Conecte-se com empreendedores, influenciadores e líderes que estão 
              transformando o cenário de negócios em Santa Catarina.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Uma oportunidade única de fazer networking de qualidade, trocar experiências 
              e construir parcerias que podem mudar o rumo dos seus projetos.
            </p>
            
            <div className="pt-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">+</span>
                </div>
                <span className="text-gray-700 font-medium">
                  Networking estratégico e conexões valiosas
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}