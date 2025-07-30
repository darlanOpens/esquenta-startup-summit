"use client"

import { motion } from "framer-motion"
import { Separator } from "./ui/separator"
import { Heart } from "lucide-react"

/**
 * Componente Footer - rodapé da landing page
 * Inclui branding da Opens e informações de contato
 */
export function Footer() {
  return (
    <footer className="py-12 px-4 bg-purple-700 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Logo/Brand */}
          <div className="mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-400 rounded-full mb-4">
              <span className="text-2xl font-bold text-white">O</span>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-2">
              Opens
            </h3>
            
            <p className="text-orange-500 font-semibold text-lg">
              Mais do que atendimento, conexão.
            </p>
          </div>

          {/* Divider */}
          <Separator className="bg-white/20 mb-8" />

          {/* Texto de oferecimento */}
          <div className="mb-8">
            <p className="text-white-80 text-lg">
              Oferecido por{" "}
              <span className="text-white font-semibold">Opens</span>
            </p>
          </div>

          {/* Copyright e créditos */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-white-80 text-sm">
            <p>
              © 2024 Opens. Todos os direitos reservados.
            </p>
            
            <div className="flex items-center gap-1">
              <span>Feito com</span>
              <Heart className="h-4 w-4 text-orange-500 fill-current" />
              <span>para reconectar pessoas</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}