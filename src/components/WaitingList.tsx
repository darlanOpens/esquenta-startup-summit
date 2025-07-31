"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, Users, AlertCircle } from "lucide-react"
import { useState } from "react"
import Image from "next/image"
import { addUTMToFormData } from "@/lib/utm"

/**
 * Componente de Lista de Espera
 * Página para quando as vagas estão esgotadas
 */
export function WaitingList() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    empresa: '',
    cargo: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Adiciona dados UTM ao formulário
      const dataWithUTM = addUTMToFormData(formData)
      
      const response = await fetch('/esquenta/api/waiting-list', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataWithUTM),
      })
      
      if (response.ok) {
        setIsSubmitted(true)
      } else {
        throw new Error('Erro ao entrar na lista de espera')
      }
    } catch (error) {
      console.error('Erro:', error)
      alert('Erro ao entrar na lista de espera. Tente novamente.')
    } finally {
      setIsSubmitting(false)
    }
  }



  return (
    <section className="relative min-h-screen flex flex-col items-center justify-start px-4 py-8 md:py-20">
      {/* Background com gradiente e efeito de brilho */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900">
        {/* Efeito de brilho central */}
        <div className="absolute inset-0 bg-gradient-radial from-purple-400/20 via-purple-600/10 to-transparent" />
        {/* Brilho adicional no canto superior */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-radial from-pink-400/15 via-purple-500/10 to-transparent" />
        {/* Brilho no canto inferior esquerdo */}
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-radial from-blue-400/15 via-indigo-500/10 to-transparent" />
      </div>
      
      {/* Conteúdo principal */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <Image
            src="/esquenta/logo-esquenta.png"
            alt="Logo Esquenta Startup Summit"
            width={200}
            height={160}
            className="h-20 w-auto object-contain mx-auto"
            priority
          />
        </motion.div>

        {/* Alerta de vagas esgotadas */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-red-500/20 backdrop-blur-md rounded-full border border-red-400/30 shadow-lg">
            <AlertCircle className="h-5 w-5 text-red-400" />
            <span className="text-red-200 font-semibold">Lote Esgotado</span>
          </div>
        </motion.div>

        {/* Título principal */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
        >
          <span className="text-white">
            Não encontramos o seu email na{" "}
            <span className="text-orange-500">Lista de Convidados</span>
          </span>
        </motion.h1>

        {/* Subtítulo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-8"
        >
          <p className="text-white/80 max-w-2xl mx-auto leading-relaxed">
            Mas não se preocupe! O <span className="font-semibold text-orange-300">Esquenta Startup Summit</span> também é para você e estamos abrindo um novo lote em seguida! Inscreva-se abaixo para entrar na <span className="font-semibold text-purple-300">Lista de Espera</span> e reservar seu ingresso em primeira mão.
          </p>
        </motion.div>

        {/* Informações do evento */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-8"
        >
          <div className="flex flex-wrap items-center justify-center gap-4 text-blue-200 font-semibold mb-6">
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
        </motion.div>

        {/* Formulário de lista de espera */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="max-w-md mx-auto"
        >
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="bg-white/10 backdrop-blur-md border border-white/30 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <Users className="h-5 w-5 text-orange-400" />
                  Entre na Lista de Espera
                </h3>
                
                <div className="space-y-3">
                  <input
                    type="text"
                    name="nome"
                    placeholder="Nome completo"
                    value={formData.nome}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-orange-400 transition-colors"
                    required
                  />
                  
                  <input
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-orange-400 transition-colors"
                    required
                  />
                  
                  <input
                    type="tel"
                    name="telefone"
                    placeholder="Telefone"
                    value={formData.telefone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-orange-400 transition-colors"
                    required
                  />
                  
                  <input
                    type="text"
                    name="empresa"
                    placeholder="Empresa"
                    value={formData.empresa}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-orange-400 transition-colors"
                    required
                  />
                  
                  <input
                    type="text"
                    name="cargo"
                    placeholder="Cargo"
                    value={formData.cargo}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-orange-400 transition-colors"
                    required
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-6 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition-colors"
                >
                  {isSubmitting ? 'Enviando...' : 'Entrar na Lista de Espera'}
                </Button>
              </div>
            </form>
          ) : (
            <div className="bg-green-500/20 backdrop-blur-md border border-green-400/30 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-green-500/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Você está na lista!
              </h3>
              <p className="text-green-200">
                Entraremos em contato assim que novas vagas estiverem disponíveis.
              </p>
            </div>
          )}
        </motion.div>

        {/* Informações de contato */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-12 text-center"
        >
          <p className="text-white/60 text-sm">
            Se você acredita que houve um engano ou deseja mais informações sobre o evento, entre em contato conosco para esclarecer sua situação. É possível garantir sua participação.
          </p>
          <p className="text-orange-300 font-semibold mt-2">
            Contato para suporte: <a href="mailto:contato@opens.com.br" className="underline hover:text-orange-200 transition-colors">contato@opens.com.br</a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}