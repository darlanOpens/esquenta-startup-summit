Instruções‑guia para a IA construir a Landing Page “Esquenta Startup Summit”
Objetivo: gerar um repositório Next .js + React completo (pronto para deploy na Vercel) que traduza, sem desvios, o design‑system JSON fornecido e a copy contida no arquivo de conteúdo. A LP deve ser ultramoderna, acessível, performática e fácil de evoluir.

1. Tecnologias & stack obrigatórios
Camada	Ferramenta / Lib	Justificativa
Framework	Next .js 14 (App Router) em TypeScript	Roteamento baseado em arquivo, server actions, edge runtime opcional & perf líder no mercado
UI & Estilo	Tailwind CSS 3.x + @shadcn/ui	Design tokens via tailwind.config.js, componentes acessíveis prontos, integração minuciosa com nosso JSON
Ícones	lucide‑react	SVG leve, personalizável com classe Tailwind
Animações	Framer Motion	Micro‑interações (fade, slide‑up) em seções estratégicas
Imagens	next/image	Otimização automática, blur placeholder
Form (captura de lead)	React‑Hook‑Form + Zod	Validação tipada, UX instantânea
Analytics	Vercel/Next Analytics ou Plausible embutido	Primeiro party, LGPD‑friendly
Deploy	Vercel	CI/CD zero‑config, pré‑visualizações de PR

Nunca use CSS in JS ou styled‑components aqui; todo estilo deve vir de Tailwind + tokens.

2. Estrutura de pastas esperada
bash
Copiar
Editar
/app
  ├─ (marketing)       # páginas públicas
  │   └─ page.tsx      # landing principal
  ├─ api
  │   └─ lead/route.ts # endpoint lead‑capture (POST)
  ├─ components
  │   ├─ Hero.tsx
  │   ├─ Features.tsx
  │   ├─ Agenda.tsx
  │   ├─ CTA.tsx
  │   ├─ Footer.tsx
  │   └─ ui/           # re‑exporta componentes shadcn customizados
  ├─ lib
  │   ├─ tokens.ts     # importa & tipa o JSON do design‑system
  │   └─ mailer.ts     # opcional para envio de confirmação
  ├─ hooks             # Framer Motion / RS hooks
  └─ styles
      └─ globals.css   # diretiva @tailwind + custom utilities
3. Integração do design‑system JSON
Converter tokens para Tailwind em tailwind.config.js

js
Copiar
Editar
const { colors, gradients, radii, shadows } = require('./lib/tokens');
module.exports = {
  theme: {
    extend: {
      colors,
      boxShadow: {
        'elevation-sm': shadows['elevation-sm'],
        'elevation-md': shadows['elevation-md'],
      },
      borderRadius: radii,
      backgroundImage: {
        'brand-purple': gradients['brand-purple'],
        'button-orange': gradients['button-orange'],
      }
    }
  }
}
Gerar utilities como .btn-primary, .card, .icon-nav seguindo o mapeamento "selectors" do JSON.

Implementar regras “DO NOT” como lint rules rápidas (ex.: não permitir .card dentro de .icon--container).

4. Componentização & estados
Componente	Estados implementados	Observações
Card	default · hover	Hover → elevação (shadow-lg) + -translate-y-1
Button.primary	default · hover · active · disabled · focus	Usa gradiente bg-button-orange; disabled:opacity-50 cursor-not-allowed
Navigation Icon	default · hover	Troca de fill-blue-500 → fill-orange-500
Lead Form Field	default · focus‑visible	Outline ring-2 ring-blue-500 habilitado por teclado

5. Layout & seções da página
Hero:

Topo com shape roxo (bg-brand-purple) e logotipo gerado.

Headline (H1) em text-orange-500 (copy do arquivo).

CTA Button → scroll suave para formulário.

Features: Cards responsivos 3‑col (≥lg) / 1‑col (sm).

Agenda/Highlights: Timeline vertical em mobile, horizontal em desktop, usando motion.div para fade‑in on‑scroll.

Formulário:

Nome · Email · Empresa · Checkbox LGPD.

Validação Zod + aviso de sucesso (Toast shadcn).

Footer:

“Oferecido por Opens” + links sociais com ícones lucide.

6. Acessibilidade & SEO
Atributos lang="pt-BR", aria-label coerentes.

Meta tags Open Graph (og:title, og:image usando generated social card).

next/head por página; Favicon (.svg).

7. Performance & boas práticas
ISR (Incremental Static Regeneration) para / com revalidate: 86400.

Lazy loading imagens below the fold.

font-display: swap para Google Fonts ou autofont.

eslint-config-next + @typescript-eslint enforced.

8. Passo‑a‑passo resumido para a IA
Clonar template Next 14 → adicionar TypeScript & Tailwind.

Importar design‑system JSON → gerar tokens e utilities.

Ler arquivo de copy → mapear para seções Hero, Features, CTA, etc.

Criar componentes conforme estrutura (uso de shadcn como base).

Aplicar classes segundo "selectors" + tokens; respeitar "doNot" regras.

Testar estados via Storybook ou Preview Page.

Otimizar & validar (Lighthouse ≥ 95, a11y score ≥ 95).

Deploy em Vercel com preview URL.

Resultado esperado: repositório Git (pref. GitHub) com CI Vercel automático, branch main live, README explicando como rodar pnpm dev e como atualizar tokens se o JSON mudar.