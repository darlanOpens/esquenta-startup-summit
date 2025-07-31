"use client"

import { motion } from "framer-motion"
import { Crown, Users, Star, Shield } from "lucide-react"

/**
 * Componente Exclusivity - Seção sobre a exclusividade do evento
 * Destaca o caráter VIP e por convite pessoal do brunch
 */
export function Exclusivity() {
  const exclusivityFeatures = [
    {
      icon: Crown,
      title: "Apenas por Convite",
      description: "Acesso restrito a empreendedores e líderes selecionados"
    },
    {
      icon: Users,
      title: "Networking de Alto Nível",
      description: "Conexões estratégicas com quem realmente importa"
    },
    {
      icon: Star,
      title: "Experiência Premium",
      description: "Ambiente exclusivo no melhor restaurante de Floripa"
    },
    {
      icon: Shield,
      title: "Conteúdo Exclusivo",
      description: "Insights e estratégias compartilhadas apenas entre nós"
    }
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 rounded-full bg-orange-500/5 blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-purple-500/5 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Título da seção */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/20 to-purple-500/20 border border-orange-500/30 rounded-full px-6 py-2 mb-6"
          >
            <Crown className="w-5 h-5 text-orange-400" />
            <span className="text-orange-200 font-medium">Exclusivo • VIP • Convite Pessoal</span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Por que este evento é{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-400">
              diferente?
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Não é mais um evento de networking. É uma experiência cuidadosamente curada 
            para quem entende que o futuro dos negócios está na conexão humana.
          </motion.p>
        </motion.div>

        {/* Grid de características exclusivas */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {exclusivityFeatures.map((feature, index) => {
            const Icon = feature.icon
            
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 h-full hover:bg-white/10 hover:border-orange-500/30 transition-all duration-300 group-hover:scale-105">
                  {/* Ícone */}
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-purple-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  
                  {/* Título */}
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-orange-200 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  {/* Descrição */}
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Call to action final */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-orange-500/10 to-purple-500/10 border border-orange-500/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              🎯 Seu convite está esperando
            </h3>
            <p className="text-gray-300 mb-6">
              Este não é um evento para todos. É para quem está pronto para 
              elevar o nível das suas conexões e do seu negócio.
            </p>
            <div className="flex items-center justify-center gap-2 text-orange-200">
              <Crown className="w-5 h-5" />
              <span className="font-medium">Vagas limitadas • Apenas convidados</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}