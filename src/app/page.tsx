import { Hero } from "@/components/Hero"
import { Features } from "@/components/Features"
import { Agenda } from "@/components/Agenda"
import { Manifesto } from "@/components/Manifesto"
import { CTA } from "@/components/CTA"
import { Footer } from "@/components/Footer"

/**
 * Página principal da Landing Page do Esquenta Startup Summit
 * Implementa todas as seções seguindo o design system e copy fornecidos
 */
export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Seção Hero - Cabeçalho principal */}
      <Hero />
      
      {/* Seção Features - Por que você não pode ficar de fora */}
      <Features />
      
      {/* Seção Agenda - O que vai rolar */}
      <Agenda />
      
      {/* Seção Manifesto - Nosso Manifesto em 1 minuto */}
      <Manifesto />
      
      {/* Seção CTA - Formulário de inscrição */}
      <CTA />
      
      {/* Footer - Rodapé */}
      <Footer />
    </main>
  );
}
