"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Quote, Sparkles } from "lucide-react"
import Image from "next/image"

/**
 * GlassFilter - SVG filter for glassmorphism effect
 */
const GlassFilter = () => (
  <svg className="absolute" style={{ width: 0, height: 0, position: "absolute" }}>
    <filter id="glass-distortion" x="0%" y="0%" width="100%" height="100%">
      <feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="2" seed="1" result="turbulence" />
      <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="10" xChannelSelector="R" yChannelSelector="G" />
      <feGaussianBlur stdDeviation="1" />
    </filter>
  </svg>
)

/**
 * Componente Manifesto - seção "Nosso Manifesto em 1 minuto"
 * Apresenta a filosofia da Opens de forma impactante e cinematográfica
 */
export function Manifesto() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative min-h-[100vh] py-20 px-4 overflow-hidden">
      <GlassFilter />
      
      {/* Background gradients and effects */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 via-black/70 to-orange-900/80" />
        
        {/* Animated gradient orbs */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: -100 }}
          animate={isLoaded ? { opacity: 0.3, scale: 1, x: 0 } : {}}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-20 left-10 w-64 h-64 rounded-full bg-orange-500/20 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 100 }}
          animate={isLoaded ? { opacity: 0.2, scale: 1, x: 0 } : {}}
          transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
          className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-purple-500/20 blur-3xl"
        />
      </div>

      <div className="container relative z-10 max-w-5xl mx-auto">
        {/* Título da seção com efeito de revelação */}
        <AnimatePresence>
          {isLoaded && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                ease: [0.22, 1, 0.36, 1] 
              }}
              className="text-center mb-16"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6"
              >
                <Sparkles className="h-4 w-4 text-orange-400" />
                <span className="text-sm font-medium text-orange-300">Filosofia Opens</span>
              </motion.div>
              
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-purple-400">
                  Nosso Manifesto em 1 minuto
                </span>
              </h2>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg text-white/70 max-w-2xl mx-auto"
              >
                A essência que nos move e transforma cada interação em conexão
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Card único do manifesto */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ 
            duration: 0.8, 
            delay: 0.5,
            ease: [0.22, 1, 0.36, 1]
          }}
        >
          <Card className="relative overflow-hidden backdrop-blur-md bg-black/30 border border-white/10 shadow-2xl">
            {/* Efeito de brilho animado */}
            <motion.div 
              className="absolute inset-0 opacity-0"
              animate={{ 
                opacity: [0, 0.1, 0],
                backgroundPosition: ['0% 0%', '100% 100%']
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity,
                repeatType: "reverse" 
              }}
              style={{
                background: 'linear-gradient(45deg, transparent, rgba(255, 165, 0, 0.3), transparent)',
                filter: 'blur(20px)',
                backgroundSize: '200% 200%'
              }}
            />
            
            {/* Grid interno com 3 colunas: imagem (1/3) + texto (2/3) */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-8">
              {/* Imagem - 1/3 do espaço */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={isLoaded ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="relative lg:col-span-1"
              >
                <Image
                  src="/brunch-vip/manifesto.png"
                  alt="Manifesto Opens"
                  width={250}
                  height={350}
                  className="w-full h-auto object-contain opacity-80 rounded-lg"
                  priority
                />
              </motion.div>

              {/* Conteúdo do texto - 2/3 do espaço */}
              <div className="relative z-10 lg:col-span-2">
                {/* Ícone de aspas estilizado */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isLoaded ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="mb-6"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500/30 to-purple-500/30 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/10">
                    <Quote className="h-8 w-8 text-orange-400" />
                  </div>
                </motion.div>
                
                <div className="space-y-8 text-lg md:text-1xl leading-relaxed">
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="text-white/90"
                  >
                    Acreditamos que{" "}
                    <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-300">
                      atender é conectar
                    </span>.
                    Cada conversa é a chance de transformar um problema em confiança, 
                    um dado em história, um cliente em comunidade.
                  </motion.p>
                  
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.9 }}
                    className="text-white/90"
                  >
                    Nossa tecnologia é poderosa, mas o que nos move são as pessoas — 
                    e é isso que queremos compartilhar com você.
                  </motion.p>
                </div>
                
                {/* Assinatura com efeito de revelação */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.1 }}
                  className="mt-12 pt-8 border-t border-white/10"
                >
                  <p className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-400 font-bold text-xl md:text-2xl">
                    Opens — Mais do que atendimento, conexão.
                  </p>
                </motion.div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Seção "Quem estará lá" com efeito de revelação */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-300 mb-6">
            Quem estará lá
          </h3>
          
          <p className="text-xl text-white/80 italic max-w-3xl mx-auto leading-relaxed mb-6">
            Empresários visionários, creators que influenciam narrativas e 
            profissionais que enxergam a comunicação além dos números.
          </p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isLoaded ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 1.5 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-orange-500/20 to-purple-500/20 backdrop-blur-sm border border-white/10"
          >
            <p className="text-lg text-white font-medium">
              Faça parte desse círculo que constrói pontes e não apenas campanhas.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Manifesto