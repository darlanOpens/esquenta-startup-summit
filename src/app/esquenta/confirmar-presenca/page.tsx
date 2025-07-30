import { ConfirmPresence } from "@/components/ConfirmPresence"

/**
 * Página de Confirmação de Presença
 * Exibida quando o email é encontrado na lista de convidados
 */
export default function ConfirmPresencePage() {
  return (
    <main className="min-h-screen">
      <ConfirmPresence />
    </main>
  )
}

export const metadata = {
  title: 'Confirmar Presença - Esquenta Startup Summit',
  description: 'Confirme sua presença no Esquenta Startup Summit e preencha suas informações.',
}