"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import Image from "next/image"

/**
 * Componente Hero da landing page
 * Implementa o cabeçalho principal com animações e CTA
 */
export function Hero() {
  /**
   * Função para scroll suave até o formulário
   */
  const scrollToForm = () => {
    const formElement = document.getElementById('inscricao-form')
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      {/* Background com gradiente */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-400 via-purple-600 to-purple-700" />
      
      {/* Conteúdo principal */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Coluna Esquerda - Conteúdo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Cápsula superior */}
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.2 }}
               className="mb-6"
             >
               <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-md rounded-full border border-white/30 shadow-lg shadow-black/20">
                 <span className="text-orange-500 font-semibold text-sm">Brunch</span>
                 <span className="text-white/60">•</span>
                 <span className="text-orange-500 font-semibold text-sm">Insights</span>
                 <span className="text-white/60">•</span>
                 <span className="text-orange-500 font-semibold text-sm">Networking</span>
               </div>
             </motion.div>

             {/* Headline principal */}
             <motion.h1
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.4 }}
               className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
             >
               <span className="text-white">
                 Reconecte seu{" "}
                 <span className="text-orange-500">propósito de comunicação</span>
               </span>
             </motion.h1>

            {/* Sub-headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl md:text-2xl text-white-80 mb-4"
            >
              <p className="font-semibold text-blue-200">28 de agosto · 09h – 12h · Florianópolis</p>
              <p className="mt-2">
                Encontro exclusivo para empresários e influenciadores que acreditam em uma comunicação centrada nas pessoas.
              </p>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-12"
            >
              <Button
                size="lg"
                onClick={scrollToForm}
                className="text-lg px-8 py-4 h-auto"
              >
                Reserve seu lugar agora
                <ArrowDown className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Coluna Direita - Logo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-lg">
              <Image
                src="/logo-esquenta.png"
                alt="Logo Esquenta Startup Summit"
                width={500}
                height={400}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Indicador de scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-white-80 cursor-pointer"
          onClick={scrollToForm}
        >
          <ArrowDown className="h-6 w-6" />
        </motion.div>
      </motion.div>
    </section>
  )
}