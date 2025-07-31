import { Hero } from "@/components/Hero"
import { OpensCredit } from "@/components/OpensCredit"
import { People } from "@/components/People"
import { Agenda } from "@/components/Agenda"
import { Manifesto } from "@/components/Manifesto"
import { Exclusivity } from "@/components/Exclusivity"
import { Footer } from "@/components/Footer"

/**
 * Página principal da Landing Page do Esquenta Startup Summit
 * Implementa todas as seções seguindo o design system e copy fornecidos
 */
export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Seção Opens Credit - Créditos da Opens Tecnologia */}
      <OpensCredit />
      
      {/* Seção Hero - Cabeçalho principal */}
      <Hero />
      
      {/* Seção Exclusivity - Por que este evento é diferente */}
      <Exclusivity />
      
      {/* Seção People - Pessoas que fazem acontecer */}
      <People />
      
      {/* Seção Agenda - O que vai rolar */}
      <Agenda />
      
      {/* Seção Manifesto - Nosso Manifesto em 1 minuto */}
      <Manifesto />
      
      {/* Footer - Rodapé */}
      <Footer />
    </main>
  );
}
