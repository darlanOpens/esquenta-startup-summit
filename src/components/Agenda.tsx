"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, Video, Lightbulb, Gamepad2, Handshake } from "lucide-react"
import { useRef, useState, useEffect } from "react"

/**
 * Dados da programação do evento
 */
const agendaItems = [
  {
    time: "09h00 – 09h30",
    title: "Recepção & Brunch",
    description: "Boas-vindas, delícias matinais e conexões iniciais",
    icon: Users
  },
  {
    time: "09h30 – 10h15",
    title: "Mudança de Paradigma",
    description: "Douglas Conrad (Opens) conta a história que redefiniu nossa forma de atender e se relacionar",
    icon: Lightbulb
  },
  {
    time: "10h15 – 10h30",
    title: "Vídeo-Manifesto Opens",
    description: "Um convite para olhar atendimento como conexão — seguido de bate-papo rápido",
    icon: Video
  },
  {
    time: "10h30 – 11h15",
    title: "Cápsulas Inspiradoras",
    description: "Vídeos curtos de grandes nomes da comunicação + discussão guiada",
    icon: Video
  },
  {
    time: "11h15 – 11h45",
    title: "Dinâmica Lúdica",
    description: "Atividade em grupo para tangibilizar propósito em ações práticas",
    icon: Gamepad2
  },
  {
    time: "11h45 – 12h00",
    title: "Encerramento & Networking Livre",
    description: "Troca de contatos, fotos e próximos passos para o Startup Summit",
    icon: Handshake
  }
]

/**
 * GlassCard Component - Provides a glassmorphism effect for timeline cards
 */
interface GlassCardProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 
  'onDrag' | 'onDragEnd' | 'onDragStart' | 'onAnimationStart' | 'onAnimationEnd' | 'onAnimationIteration'
> {
  isEven: boolean;
  index: number;
}

const GlassCard = ({ children, className, isEven, index, ...props }: GlassCardProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    }
  };

  const { onMouseMove, ...restProps } = props;

  return (
    <motion.div
      ref={cardRef}
      className={`relative overflow-hidden rounded-xl transition-all duration-300 hover:shadow-[0_10px_40px_-15px_rgba(255,135,0,0.3)] ${className}`}
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      onMouseMove={handleMouseMove}
      {...restProps}
    >
      {/* Glassmorphism effect */}
      <div 
        className="absolute inset-0 rounded-xl bg-gradient-to-br from-orange-500/20 to-purple-600/20 backdrop-blur-[2px] border border-white/10"
      />
      
      {/* Animated gradient spotlight effect */}
      <div 
        className="absolute w-40 h-40 rounded-full bg-gradient-to-r from-orange-400 to-purple-500 opacity-30 blur-xl pointer-events-none transition-all duration-300"
        style={{ 
          left: `${mousePosition.x - 80}px`, 
          top: `${mousePosition.y - 80}px`,
          opacity: '0.3'
        }}
      />
      
      {/* Card content with glass effect */}
      <div className="relative z-10 backdrop-blur-sm">
        {children}
      </div>
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
    <section className="py-20 px-4 bg-gradient-to-b from-purple-900 via-purple-800 to-purple-700 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-orange-500/20 blur-3xl" />
        <div className="absolute top-1/3 -left-40 w-80 h-80 rounded-full bg-purple-600/20 blur-3xl" />
        <div className="absolute bottom-20 right-20 w-64 h-64 rounded-full bg-orange-400/20 blur-3xl" />
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
          >
            O que vai rolar
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Uma programação cuidadosamente pensada para reconectar você ao propósito da comunicação
            </p>
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
                    <GlassCard isEven={isEven} index={index}>
                      <Card className="border-0 bg-transparent">
                        <CardHeader className="pb-2">
                          <div className="flex items-center gap-4">
                            {/* Ícone */}
                            <motion.div 
                              className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-400 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-orange-500/20"
                              whileHover={{ 
                                rotate: [0, -5, 5, -5, 0],
                                transition: { duration: 0.5 }
                              }}
                            >
                              <Icon className="h-6 w-6 text-white" />
                            </motion.div>
                            
                            <div className="flex-1">
                              {/* Horário */}
                              <div className="flex items-center gap-2 mb-1">
                                <Badge variant="outline" className="text-xs bg-white/10 border-orange-500/30 text-orange-100">
                                  <Clock className="w-3 h-3 mr-1 text-orange-300" />
                                  {item.time}
                                </Badge>
                              </div>
                              
                              {/* Título */}
                              <CardTitle className="text-lg text-white">
                                {item.title}
                              </CardTitle>
                            </div>
                          </div>
                        </CardHeader>
                        
                        <CardContent>
                          {/* Descrição */}
                          <CardDescription className="text-base leading-relaxed text-white/70">
                            {item.description}
                          </CardDescription>
                        </CardContent>
                      </Card>
                    </GlassCard>
                  </div>
                  
                  {/* Ponto na timeline (desktop) */}
                  <motion.div 
                    className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full border-2 border-purple-800 z-10 shadow-lg shadow-orange-500/30"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 300, 
                      damping: 15, 
                      delay: index * 0.1 + 0.2 
                    }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.2 }}
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