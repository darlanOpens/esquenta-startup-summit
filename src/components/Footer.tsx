"use client"

import { motion } from "framer-motion"
import { Separator } from "./ui/separator"
import Image from "next/image"

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
            <div className="inline-flex items-center justify-center w-16 h-16 mb-4">
              <Image
                src="/Logo Opens.png"
                alt="Logo Opens"
                width={64}
                height={64}
                className="object-contain"
              />
            </div>
           
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
              <span className="text-white font-semibold">Opens tecnologia</span>
            </p>
          </div>

          {/* Copyright e créditos */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-white-80 text-sm">
            <p>
              © 2025 Opens Tecnologia. Todos os direitos reservados.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}