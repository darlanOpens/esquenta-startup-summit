"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, Video, Lightbulb } from "lucide-react"
import { useRef, useState, useEffect } from "react"

/**
 * Dados da programação do evento
 */
const agendaItems = [
  {
    time: "09h00 – 09h30",
    title: "Recepção & Welcome Coffe",
    description: "Boas-vindas, delícias matinais e conexões iniciais",
    icon: Users
  },
  {
    time: "09h30 – 10h30",
    title: "Recalibrando a Comunicação",
    description: "Douglas Conrad, David Ledson e mais nomes de peso contam histórias que redefiniram a forma de atender e se relacionar",
    icon: Lightbulb
  },
  {
    time: "10h30 – 12h00",
    title: "Brunch + Networking",
    description: "Um convite para olhar atendimento como conexão com empreendedores que pensam da mesma maneira que você, seguido de um brunch.",
    icon: Video
  }
]

/**
 * SimpleCard Component - Clean card design for timeline items
 */
interface SimpleCardProps {
  children: React.ReactNode;
  isEven: boolean;
  index: number;
}

const SimpleCard = ({ children, isEven, index }: SimpleCardProps) => {
  return (
    <motion.div
      className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all duration-300"
      initial={{ opacity: 0, x: isEven ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

/**
 * Componente Agenda - seção "O que vai rolar"
 * Mostra a programação completa do evento em timeline
 */
export function Agenda() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      setHeight(containerRef.current.scrollHeight);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 20%"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], [0, height]);
  const lineOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-purple-900 to-purple-800 relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-orange-500/10 blur-3xl" />
        <div className="absolute bottom-20 right-20 w-64 h-64 rounded-full bg-orange-400/10 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10" ref={containerRef}>
        {/* Título da seção */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >O que vai rolar</motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-4">
              Uma programação cuidadosamente pensada para reconectar você ao propósito da comunicação
            </p>
            <div className="bg-orange-500/20 border border-orange-500/30 rounded-lg p-4 max-w-md mx-auto">
              <p className="text-orange-200 font-semibold">📍 Local: Blackpot Restaurant Floripa</p>
              <p className="text-orange-100 text-sm">28 de agosto • 09h às 12h</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Linha vertical (desktop) */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-orange-500/30 via-orange-500/70 to-orange-500/30 h-full rounded-full overflow-hidden">
            <motion.div
              className="absolute inset-x-0 top-0 w-full bg-gradient-to-b from-orange-400 via-orange-500 to-purple-500 rounded-full"
              style={{
                height: lineHeight,
                opacity: lineOpacity
              }}
            />
          </div>
          
          {/* Items da agenda */}
          <div className="space-y-12 lg:space-y-16">
            {agendaItems.map((item, index) => {
              const Icon = item.icon
              const isEven = index % 2 === 0
              
              return (
                <div
                  key={item.title}
                  className={`relative lg:flex lg:items-center ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Card do item */}
                  <div className={`lg:w-5/12 ${
                    isEven ? 'lg:pr-8' : 'lg:pl-8'
                  }`}>
                    <SimpleCard isEven={isEven} index={index}>
                      <div className="flex items-center gap-4 mb-4">
                        {/* Ícone */}
                        <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-400 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        
                        <div className="flex-1">
                          {/* Horário */}
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="outline" className="text-xs bg-white/10 border-orange-500/30 text-orange-100">
                              <Clock className="w-3 h-3 mr-1 text-orange-300" />
                              {item.time}
                            </Badge>
                          </div>
                          
                          {/* Título */}
                          <h3 className="text-lg font-semibold text-white mb-2">
                            {item.title}
                          </h3>
                        </div>
                      </div>
                      
                      {/* Descrição */}
                      <p className="text-base leading-relaxed text-white/70">
                        {item.description}
                      </p>
                    </SimpleCard>
                  </div>
                  
                  {/* Ponto na timeline (desktop) */}
                  <motion.div 
                    className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-orange-500 rounded-full border-2 border-purple-800 z-10"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  />
                  
                  {/* Espaçador (desktop) */}
                  <div className="hidden lg:block lg:w-5/12" />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}