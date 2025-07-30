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
  // Variável para controlar o tamanho da imagem de fundo (ajuste conforme necessário)
  const imageScale = 2.1; // Valores entre 0.5 (menor) e 1.5 (maior)
  
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
    <section className="relative min-h-screen flex flex-col items-center justify-start px-4 py-8 md:py-20">
      {/* Background com imagem */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 flex justify-end md:justify-center items-end md:items-center"
          style={{
            transform: `scale(${imageScale})`,
            transformOrigin: 'right bottom'
          }}
        >
          <Image
            src="/bg hero.png"
            alt="Background Hero"
            width={1920}
            height={1080}
            className="object-contain"
            priority
          />
        </div>
        {/* Overlay branco para filtro */}
         <div className="absolute inset-0" style={{backgroundColor: 'rgba(25, 9, 114, 0)'}} />
      </div>
      
      {/* Conteúdo principal */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Coluna esquerda - Conteúdo */}
          <div className="text-center lg:text-left flex flex-col items-center lg:items-start pt-4 lg:pt-0">
            {/* Logo pequeno no topo */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-4"
            >
              <Image
                src="/logo-esquenta.png"
                alt="Logo Esquenta Startup Summit"
                width={200}
                height={160}
                className="h-16 w-auto object-contain"
                priority
              />
            </motion.div>

            {/* Cápsula superior */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6"
            >
              <div className="inline-flex items-center gap-1.5 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full border border-white/30 shadow-lg shadow-black/20">
                 <span className="text-orange-500 font-semibold text-xs">Brunch</span>
                 <span className="text-white/60">•</span>
                 <span className="text-orange-500 font-semibold text-xs">Insights</span>
                 <span className="text-white/60">•</span>
                 <span className="text-orange-500 font-semibold text-xs">Networking</span>
               </div>
            </motion.div>

            {/* Conteúdo principal */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >

             {/* Headline principal */}
             <motion.h1
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.4 }}
               className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
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
              className="text-lg md:text-xl text-white-80 mb-4"
            >
              <p className="font-semibold text-blue-200">28 de agosto · 09h – 12h · Florianópolis</p>
              <p className="mt-2">
                Encontro exclusivo para empresários e influenciadores que acreditam em uma comunicação centrada nas pessoas.
              </p>
            </motion.div>

            {/* Formulário de inscrição */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-8 md:mt-12 w-full max-w-md mx-auto lg:mx-0"
            >
              <form className="flex flex-col sm:flex-row bg-white/10 backdrop-blur-md border border-white/30 rounded-lg overflow-hidden">
                 <input
                   type="email"
                   placeholder="Seu melhor e-mail"
                   className="flex-1 px-4 py-3 bg-transparent text-white placeholder-white/70 focus:outline-none border-none text-center lg:text-left"
                   required
                 />
                 <Button
                   type="submit"
                   size="lg"
                   className="text-sm md:text-base px-4 md:px-6 py-3 h-auto whitespace-nowrap rounded-none bg-orange-500 hover:bg-orange-600 mt-2 sm:mt-0"
                 >
                   Confirmar Presença
                 </Button>
               </form>
            </motion.div>
            </motion.div>
          </div>

          {/* Coluna direita - Vazia para destacar a imagem de fundo */}
          <div className="hidden lg:block">
            {/* Espaço vazio intencional */}
          </div>
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