"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Zap, Users, Heart, Coffee } from "lucide-react"

/**
 * Dados dos benefícios do evento
 */
const features = [
  {
    icon: Zap,
    title: "Recarregue o 'porquê'",
    description: "Redescubra o motivo pelo qual você comunica, empreende e inspira.",
    gradient: "from-orange-500/80 to-purple-600/80"
  },
  {
    icon: Users,
    title: "Networking intencional",
    description: "Conecte-se com líderes do mercado que buscam impacto humano antes do ROI.",
    gradient: "from-purple-600/80 to-orange-500/80"
  },
  {
    icon: Heart,
    title: "Conteúdo Inspirador",
    description: "Histórias que inspiram e transformam de maneira profunda.",
    gradient: "from-orange-500/80 to-purple-600/80"
  },
  {
    icon: Coffee,
    title: "Brunch premium",
    description: "Gastronomia local, clima descontraído e aquele drink para aquecer novas ideias.",
    gradient: "from-purple-600/80 to-orange-500/80"
  }
]

/**
 * Componente Features - seção "Por que você não pode ficar de fora"
 * Mostra os principais benefícios do evento em cards animados
 */
export function Features() {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background to-background/90 backdrop-blur-sm z-0"></div>
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Título da seção */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <Badge 
              variant="secondary" 
              className="mb-6 px-4 py-2 text-sm font-medium bg-gradient-to-r from-orange-500/20 to-purple-600/20 backdrop-blur-md border border-white/10 shadow-lg"
            >
              Benefícios Exclusivos
            </Badge>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-purple-600"
          >
            Por que você não pode ficar de fora
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-white/70 max-w-2xl mx-auto text-lg"
          >
            Uma experiência única que vai transformar sua visão sobre comunicação e liderança
          </motion.p>
        </motion.div>

        {/* Grid de features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="h-full perspective-1000"
              >
                <Card className="h-full overflow-hidden border-white/10 bg-black/20 backdrop-blur-lg relative group">
                  {/* Card gradient background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
                  
                  {/* Glass effect overlay */}
                  <div className="absolute inset-0 bg-white/5 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Border glow effect */}
                  <div className="absolute -inset-[1px] bg-gradient-to-r from-orange-500/50 to-purple-600/50 rounded-xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300 z-0"></div>
                  
                  <CardHeader className="text-center relative z-10">
                    {/* Ícone com efeito de glassmorphism */}
                    <motion.div 
                      className="mx-auto mb-6 w-20 h-20 rounded-2xl flex items-center justify-center relative"
                      whileHover={{ 
                        rotate: [0, -5, 5, -5, 0],
                        transition: { duration: 0.5 }
                      }}
                    >
                      {/* Icon background with gradient */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-2xl opacity-80`}></div>
                      
                      {/* Glass effect */}
                      <div className="absolute inset-0 bg-white/10 rounded-2xl backdrop-blur-sm"></div>
                      
                      {/* Icon shadow */}
                      <div className="absolute inset-0 rounded-2xl shadow-lg shadow-orange-500/20"></div>
                      
                      <Icon className="h-10 w-10 text-white relative z-10" />
                    </motion.div>
                    
                    {/* Título */}
                    <CardTitle className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-purple-500">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="relative z-10">
                    {/* Descrição */}
                    <CardDescription className="text-center text-base leading-relaxed text-white/80 font-medium">
                      {feature.description}
                    </CardDescription>
                    
                    {/* Decorative element */}
                    <div className="w-12 h-1 bg-gradient-to-r from-orange-500 to-purple-600 mx-auto mt-6 rounded-full opacity-70"></div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}