"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowDown, Calendar, Clock, MapPin } from "lucide-react"
import Image from "next/image"
import { useState } from "react"


/**
 * Componente Hero da landing page
 * Implementa o cabeçalho principal com animações e CTA
 */
export function Hero() {
  // Estados para o formulário
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted] = useState(false)
  
  // Variáveis para controlar o tamanho da imagem de fundo por breakpoint
  // Ajustado para resolver problemas de sobreposição em telas pequenas
  const mobileImageScale = 0.7; // Escala reduzida para mobile para evitar sobreposição
  const desktopImageScale = 0.55; // Escala para desktop (mantém tamanho original)
  
  /**
   * Função para scroll suave até o formulário
   */
  const scrollToForm = () => {
    const formElement = document.getElementById('inscricao-form')
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  /**
   * Função para lidar com o submit do formulário de convite
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/esquenta/api/lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          form_title: "Esquenta",
          form_id: "Esquenta"
        }),
      })
      
      const data = await response.json()
      
      if (response.ok && data.success && data.redirectUrl) {
        window.location.href = data.redirectUrl
      } else if (response.ok) {
        // Não mostra mensagem de sucesso, apenas limpa o email
        setEmail('')
      } else {
        throw new Error('Erro ao confirmar convite')
      }
    } catch (error) {
      console.error('Erro:', error)
      alert('Erro ao confirmar convite. Tente novamente.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="hero-section relative h-[95vh] flex flex-col items-center justify-start px-4 py-4 sm:py-8 md:py-16 lg:py-20">
      {/* Background com imagem */}
      <div className="absolute inset-0 -z-10">
        {/* Pattern/Textura de fundo */}
        <div className="absolute inset-0 opacity-50">
          <Image
            src="/esquenta/bg.png"
            alt="Pattern Background"
            fill
            className="object-cover"
            priority={false}
            quality={100}
          />
        </div>
        
        {/* Imagem para mobile */}
        <div 
          className="absolute inset-0 flex justify-end items-end md:hidden z-10"
          style={{
            transform: `scale(${mobileImageScale})`,
            transformOrigin: 'right bottom'
          }}
        >
          <Image
            src="/esquenta/bg hero.png"
            alt="Background Hero"
            width={1920}
            height={1080}
            className="object-contain"
            priority
            quality={100}
            unoptimized={true}
          />
        </div>
        
        {/* Imagem para desktop */}
        <div 
          className="hidden md:absolute md:inset-0 md:flex md:justify-center md:items-end z-10"
          style={{
            transform: `scale(${desktopImageScale})`,
            transformOrigin: 'right bottom'
          }}
        >
          <Image
            src="/esquenta/bg hero.png"
            alt="Background Hero"
            width={1920}
            height={1080}
            className="object-contain"
            priority
            quality={100}
            unoptimized={true}
          />
        </div>
        
        {/* Overlay branco para filtro */}
        <div className="absolute inset-0 z-20" style={{backgroundColor: 'rgba(25, 9, 114, 0)'}} />
      </div>
      
      {/* Conteúdo principal */}
      <div className="hero-content relative z-10 max-w-7xl mx-auto pt-2 sm:pt-4 md:pt-12 lg:pt-0">
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
                src="/esquenta/logo-esquenta.png"
                alt="Logo Esquenta Startup Summit"
                width={200}
                height={160}
                className="h-16 w-auto object-contain"
                priority
              />
            </motion.div>

            {/* Cápsulas superiores */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2 sm:gap-3 mb-3 sm:mb-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="inline-flex items-center gap-1 sm:gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/20 backdrop-blur-md rounded-full border border-white/30 shadow-lg shadow-black/20">
                   <span className="text-orange-500 font-semibold text-xs">Brunch</span>
                   <span className="text-white/60">•</span>
                   <span className="text-orange-500 font-semibold text-xs">Insights</span>
                   <span className="text-white/60">•</span>
                   <span className="text-orange-500 font-semibold text-xs">Networking</span>
                 </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="inline-flex items-center gap-1 sm:gap-1.5 px-3 sm:px-4 py-2 sm:py-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-md rounded-full border border-green-400/40 shadow-lg shadow-green-500/20">
                   <span className="text-green-300 font-semibold text-xs">Evento gratuito para convidados</span>
                 </div>
              </motion.div>
            </div>

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
               className="hero-title text-lg sm:text-xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4 md:mb-6 leading-tight"
             >
               <span className="text-white">
                 🍽️ BRUNCH VIP |{" "}
                 <span className="text-orange-500">O Futuro Agora da Experiência do Cliente</span>
               </span>
             </motion.h1>

            {/* Sub-headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="hero-subtitle text-xs sm:text-sm md:text-base text-white/80 mb-3 sm:mb-4"
            >
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-1 sm:gap-2 md:gap-4 text-blue-200 font-semibold text-xs sm:text-sm">
                <div className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4 text-orange-400" />
                  <span>28 de agosto</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4 text-orange-400" />
                  <span>09h – 12h</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="h-4 w-4 text-orange-400" />
                  <a 
                    href="https://blackpotrestaurant.com.br/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-orange-300 transition-colors duration-200 underline decoration-orange-400/50 hover:decoration-orange-300"
                  >
                    Blackpot Restaurant Floripa
                  </a>
                </div>
              </div>
              <p className="mt-2 sm:mt-3 text-xs sm:text-sm md:text-lg leading-relaxed">
                Um encontro exclusivo nas vésperas do Startup Summit 2025 para quem acredita que o futuro dos negócios passa pela experiência do cliente.
              </p>
            </motion.div>

            {/* Formulário de inscrição */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="hero-form mt-4 sm:mt-6 md:mt-8 w-full max-w-md mx-auto lg:mx-0"
            >
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row bg-white/10 backdrop-blur-md border border-white/30 rounded-lg overflow-hidden">
                  <input
                    type="email"
                    placeholder="Email do convite pessoal"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-4 py-3 bg-transparent text-white placeholder-white/70 focus:outline-none border-none text-center lg:text-left"
                    required
                  />
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    size="lg"
                    className="text-sm md:text-base px-4 md:px-6 py-3 h-auto whitespace-nowrap rounded-none bg-orange-500 hover:bg-orange-600 mt-2 sm:mt-0 disabled:opacity-50"
                  >
                    {isSubmitting ? 'Enviando...' : 'Confirmar Convite'}
                  </Button>
                </form>
              ) : (
                <div className="bg-green-500/20 backdrop-blur-md border border-green-400/30 rounded-lg p-4 text-center">
                  <p className="text-green-300 font-semibold">✅ Convite confirmado com sucesso!</p>
                  <p className="text-green-200 text-sm mt-1">Você receberá mais informações em breve.</p>
                </div>
              )}
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