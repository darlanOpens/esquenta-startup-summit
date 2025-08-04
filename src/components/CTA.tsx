"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { addUTMToFormData } from "@/lib/utm"
import { Button } from "@/components/ui/button"
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { CheckCircle, MapPin, Clock, Shirt, ArrowRight } from "lucide-react"

/**
 * Schema de validação do formulário usando Zod
 */
const formSchema = z.object({
  nome: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  empresa: z.string().min(2, 'Nome da empresa deve ter pelo menos 2 caracteres'),
  lgpd: z.boolean().refine(val => val === true, 'Você deve aceitar os termos')
})

type FormData = z.infer<typeof formSchema>

/**
 * Informações rápidas do evento
 */
const eventInfo = [
  {
    icon: Clock,
    label: "Data",
    value: "28/08"
  },
  {
    icon: Clock,
    label: "Horário",
    value: "09h – 12h"
  },
  {
    icon: MapPin,
    label: "Local",
    value: "Espaço reservado próximo ao centro de eventos do Startup Summit"
  },
  {
    icon: Shirt,
    label: "Dress code",
    value: "Casual-profissional"
  }
]

/**
 * Componente GlassEffect para criar efeito glassmorphism
 */
const GlassEffect = ({ 
  children, 
  className = "", 
  style = {} 
}: { 
  children: React.ReactNode; 
  className?: string; 
  style?: React.CSSProperties; 
}) => {
  const glassStyle = {
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
    backdropFilter: "blur(8px)",
    ...style,
  };

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={glassStyle}
    >
      {/* Glass Layers */}
      <div
        className="absolute inset-0 z-0 overflow-hidden"
        style={{
          backdropFilter: "blur(8px)",
          background: "rgba(255, 255, 255, 0.08)",
        }}
      />
      <div
        className="absolute inset-0 z-10"
        style={{ 
          boxShadow: "inset 0 1px 1px 0 rgba(255, 255, 255, 0.2)",
          background: "linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.05) 100%)" 
        }}
      />

      {/* Content */}
      <div className="relative z-30">{children}</div>
    </div>
  );
};

/**
 * SVG Filter para efeitos visuais
 */
const GlassFilter = () => (
  <svg style={{ display: "none" }}>
    <filter
      id="glass-distortion"
      x="0%"
      y="0%"
      width="100%"
      height="100%"
      filterUnits="objectBoundingBox"
    >
      <feTurbulence
        type="fractalNoise"
        baseFrequency="0.01 0.01"
        numOctaves="1"
        seed="1"
        result="turbulence"
      />
      <feDisplacementMap
        in="SourceGraphic"
        in2="turbulence"
        scale="10"
        xChannelSelector="R"
        yChannelSelector="G"
      />
    </filter>
  </svg>
);

/**
 * Componente CTA - seção de inscrição e informações do evento
 * Inclui formulário de captura de leads e detalhes do evento
 */
export function CTA() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormData>({
    resolver: zodResolver(formSchema)
  })

  /**
   * Função para enviar o formulário
   */
  const onSubmit = async (data: FormData) => {
    setIsLoading(true)
    
    try {
      // Adiciona dados UTM ao formulário
      const dataWithUTM = addUTMToFormData(data)
      
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataWithUTM),
      })
      
      if (response.ok) {
        setIsSubmitted(true)
        reset()
      } else {
        throw new Error('Erro ao enviar formulário')
      }
    } catch (error) {
      console.error('Erro:', error)
      alert('Erro ao enviar formulário. Tente novamente.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="inscricao-form" className="relative py-24 px-4 overflow-hidden">
      <GlassFilter />
      
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900 via-purple-800 to-purple-900 z-0" />
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-400 via-transparent to-transparent z-0" style={{ top: '-30%', left: '60%' }} />
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-500 via-transparent to-transparent z-0" style={{ top: '60%', left: '10%' }} />
      
      {/* Glow effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[256px] w-[60%] scale-[2.5] rounded-[50%] bg-[radial-gradient(ellipse_at_center,_rgba(255,140,50,0.15)_10%,_rgba(255,140,50,0)_70%)] z-0" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[256px] w-[60%] scale-[2.5] rounded-[50%] bg-[radial-gradient(ellipse_at_center,_rgba(147,51,234,0.15)_10%,_rgba(147,51,234,0)_70%)] z-0" />
      
      <div className="relative max-w-6xl mx-auto z-10">
        {/* Título da seção */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-300">
              Garanta sua vaga
            </span>
          </h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-white/80 max-w-2xl mx-auto"
          >
            <span className="font-semibold text-orange-300">Vagas limitadas</span> para preservar a troca de alto valor entre os participantes.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulário de inscrição */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <GlassEffect className="rounded-2xl border border-white/10 overflow-hidden">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl text-center text-white">
                  {isSubmitted ? "Inscrição realizada!" : "Quero participar"}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                {isSubmitted ? (
                  <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, type: "spring" }}
                    className="text-center py-8"
                  >
                    <div className="relative mb-6">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ 
                          delay: 0.2,
                          duration: 0.6,
                          type: "spring",
                          stiffness: 200
                        }}
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-400 to-purple-500 blur-lg opacity-30"
                      />
                      <CheckCircle className="h-20 w-20 text-gradient-to-r from-orange-400 to-purple-500 mx-auto relative z-10" />
                    </div>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.6 }}
                      className="text-white/90 text-lg"
                    >
                      Sua inscrição foi realizada com sucesso!
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6, duration: 0.6 }}
                      className="text-white/70 mt-2"
                    >
                      Em breve você receberá mais informações por email.
                    </motion.p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="space-y-6">
                      {/* Campo Nome */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="group"
                      >
                        <Label htmlFor="nome" className="text-white/90 font-medium">
                          Nome completo *
                        </Label>
                        <div className="relative mt-2">
                          <Input
                            {...register("nome", { required: true, setValueAs: (value) => value || '' })}
                            type="text"
                            id="nome"
                            className="bg-white/5 border border-white/10 text-white placeholder:text-white/50 focus:border-orange-400/50 focus:ring-orange-400/20 transition-all duration-300 backdrop-blur-sm"
                            placeholder="Seu nome completo"
                          />
                          <div className="absolute inset-0 rounded-md bg-gradient-to-r from-orange-400/10 to-purple-500/10 opacity-0 transition-opacity duration-300 pointer-events-none group-focus-within:opacity-100" />
                        </div>
                        {errors.nome && (
                          <motion.p 
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="text-red-400 text-sm mt-1"
                          >
                            {errors.nome.message}
                          </motion.p>
                        )}
                      </motion.div>

                      {/* Campo Email */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="group"
                      >
                        <Label htmlFor="email" className="text-white/90 font-medium">
                          Email *
                        </Label>
                        <div className="relative mt-2">
                          <Input
                            {...register("email", { required: true, setValueAs: (value) => value || '' })}
                            type="email"
                            id="email"
                            className="bg-white/5 border border-white/10 text-white placeholder:text-white/50 focus:border-orange-400/50 focus:ring-orange-400/20 transition-all duration-300 backdrop-blur-sm"
                            placeholder="seu@email.com"
                          />
                          <div className="absolute inset-0 rounded-md bg-gradient-to-r from-orange-400/10 to-purple-500/10 opacity-0 transition-opacity duration-300 pointer-events-none group-focus-within:opacity-100" />
                        </div>
                        {errors.email && (
                          <motion.p 
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="text-red-400 text-sm mt-1"
                          >
                            {errors.email.message}
                          </motion.p>
                        )}
                      </motion.div>

                      {/* Campo Empresa */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="group"
                      >
                        <Label htmlFor="empresa" className="text-white/90 font-medium">
                          Empresa *
                        </Label>
                        <div className="relative mt-2">
                          <Input
                            {...register("empresa", { required: true, setValueAs: (value) => value || '' })}
                            type="text"
                            id="empresa"
                            className="bg-white/5 border border-white/10 text-white placeholder:text-white/50 focus:border-orange-400/50 focus:ring-orange-400/20 transition-all duration-300 backdrop-blur-sm"
                            placeholder="Nome da sua empresa"
                          />
                          <div className="absolute inset-0 rounded-md bg-gradient-to-r from-orange-400/10 to-purple-500/10 opacity-0 transition-opacity duration-300 pointer-events-none group-focus-within:opacity-100" />
                        </div>
                        {errors.empresa && (
                          <motion.p 
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="text-red-400 text-sm mt-1"
                          >
                            {errors.empresa.message}
                          </motion.p>
                        )}
                      </motion.div>

                      {/* Checkbox LGPD */}
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="flex items-start space-x-3 p-4 rounded-lg bg-white/5 border border-white/10"
                      >
                        <Checkbox
                          {...register("lgpd")}
                          id="lgpd"
                          className="mt-1 border-white/30 data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-orange-400 data-[state=checked]:to-orange-500 data-[state=checked]:border-orange-400"
                        />
                        <Label htmlFor="lgpd" className="text-sm text-white/80 leading-relaxed cursor-pointer">
                          Aceito receber comunicações sobre o evento e concordo com o tratamento dos meus dados pessoais conforme a LGPD. *
                        </Label>
                      </motion.div>
                      {errors.lgpd && (
                        <motion.p 
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          className="text-red-400 text-sm"
                        >
                          {errors.lgpd.message}
                        </motion.p>
                      )}
                    </div>

                    {/* Botão de envio */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <Button
                        type="submit"
                        disabled={isLoading}
                        className="group relative w-full overflow-hidden bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 disabled:opacity-50 shadow-lg hover:shadow-orange-500/25 border border-orange-400/20"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                        <div className="relative flex items-center justify-center">
                          {isLoading ? (
                            <>
                              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                              Enviando...
                            </>
                          ) : (
                            <>
                              Garantir minha vaga
                              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </>
                          )}
                        </div>
                      </Button>
                    </motion.div>
                  </form>
                )}
              </CardContent>
            </GlassEffect>
          </motion.div>

          {/* Informações do evento */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <GlassEffect className="rounded-2xl border border-white/10 overflow-hidden">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl text-center text-white">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-purple-400">
                    Informações do evento
                  </span>
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {eventInfo.map((info, index) => {
                  const Icon = info.icon
                  
                  return (
                    <motion.div
                      key={info.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="group flex items-start gap-4 p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300"
                    >
                      <div className="w-10 h-10 bg-gradient-to-r from-orange-400/20 to-purple-500/20 border border-orange-400/30 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="h-5 w-5 text-orange-400" />
                      </div>
                      
                      <div>
                        <p className="text-orange-200 text-sm font-medium">{info.label}</p>
                        <p className="text-white text-base">{info.value}</p>
                        {info.label === "Local" && (
                          <p className="text-white/80 text-sm mt-1">
                            (endereço completo após inscrição)
                          </p>
                        )}
                      </div>
                    </motion.div>
                  )
                })}
              </CardContent>
            </GlassEffect>
          </motion.div>
        </div>
      </div>
    </section>
  )
}