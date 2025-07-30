import { WaitingList } from "@/components/WaitingList"

/**
 * Página de Lista de Espera
 * Exibida quando as vagas estão esgotadas
 */
export default function WaitingListPage() {
  return (
    <main className="min-h-screen">
      <WaitingList />
    </main>
  )
}

export const metadata = {
  title: 'Lista de Espera - Esquenta Startup Summit',
  description: 'Entre na lista de espera para ser notificado sobre novas vagas do Esquenta Startup Summit.',
}