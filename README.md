# Esquenta Startup Summit - Landing Page

Landing page moderna e responsiva para o evento "Esquenta Startup Summit" da Opens, desenvolvida com Next.js 15, TypeScript e Tailwind CSS.

## 🚀 Tecnologias Utilizadas

- **Next.js 15** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS 4** - Framework CSS utilitário
- **Framer Motion** - Animações fluidas
- **React Hook Form** - Gerenciamento de formulários
- **Zod** - Validação de schemas
- **Lucide React** - Ícones modernos
- **shadcn/ui** - Componentes UI reutilizáveis
- **Radix UI** - Primitivos de UI acessíveis
- **Class Variance Authority** - Gerenciamento de variantes de CSS

## 🎨 Design System

O projeto implementa um design system completo baseado no arquivo `design.json` fornecido, incluindo:

- **Cores**: Paleta roxa e rosa com gradientes
- **Tipografia**: Hierarquia clara com Inter como fonte principal
- **Componentes shadcn/ui implementados**:
  - `Input` - Campos de entrada estilizados
  - `Label` - Rótulos acessíveis
  - `Checkbox` - Caixas de seleção
  - `Badge` - Tags e indicadores
  - `Alert` - Mensagens de feedback
  - `Separator` - Divisores visuais
- **Tokens**: Definidos em `globals.css` e `tailwind.config.ts`
- **Animações**: Transições suaves e efeitos hover com Framer Motion e tailwindcss-animate
- **Responsividade**: Layout adaptável para todos os dispositivos

## 📋 Funcionalidades

### Seções da Landing Page

1. **Hero** - Cabeçalho principal com CTA
2. **Features** - "Por que você não pode ficar de fora"
3. **Agenda** - "O que vai rolar" com timeline
4. **Manifesto** - Filosofia da Opens
5. **CTA** - Formulário de inscrição
6. **Footer** - Informações de contato

### Formulários e Webhooks

#### Formulário de Captura de Leads (Página Principal)
- Validação em tempo real com Zod
- Campos: Nome, Email, Empresa, LGPD
- API endpoint `/api/lead` para processamento
- Webhook configurável via `WEBHOOK_LEAD_URL`
- Captura automática de dados UTM e URL de referência

#### Formulário de Confirmação de Presença
- Formulário completo para confirmação de presença
- Campos: Nome, LinkedIn, empresa, setor, produtos, etc.
- API endpoint `/api/confirm-presence` para processamento
- Webhook configurável via `WEBHOOK_CONFIRM_PRESENCE_URL`
- Captura automática de dados UTM e URL de referência

#### Formulário de Lista de Espera
- Formulário para inscrição na lista de espera
- Campos: Nome, Email, Telefone, Empresa, Cargo
- API endpoint `/api/waiting-list` para processamento
- Webhook configurável via `WEBHOOK_WAITING_LIST_URL`
- Captura automática de dados UTM e URL de referência

#### Recursos dos Webhooks
- Envio automático de dados para URLs configuradas
- Campos UTM capturados automaticamente (utm_source, utm_medium, utm_campaign, utm_term, utm_content)
- URL de referência capturada automaticamente
- Metadados incluídos: timestamp, user agent, IP, tipo de formulário
- Feedback visual de sucesso/erro

## 🛠️ Instalação e Uso

### Pré-requisitos

- Node.js 18+ 
- pnpm (recomendado) ou npm

### Instalação

```bash
# Clone o repositório
git clone <url-do-repositorio>
cd esquenta-startup-summit

# Instale as dependências
pnpm install

# Configure as variáveis de ambiente
cp .env.example .env
# Edite o arquivo .env com suas URLs de webhook reais

# Execute o servidor de desenvolvimento
pnpm dev
```

A aplicação estará disponível em `http://localhost:3000`

### Configuração de Webhooks

Para configurar os webhooks, edite o arquivo `.env` com suas URLs reais:

```bash
# Webhooks URLs - Configure com suas URLs reais de webhook
WEBHOOK_LEAD_URL=https://seu-webhook.com/lead
WEBHOOK_CONFIRM_PRESENCE_URL=https://seu-webhook.com/confirm-presence
WEBHOOK_WAITING_LIST_URL=https://seu-webhook.com/waiting-list
```

**Importante:** Se as URLs não forem configuradas ou estiverem com os valores padrão do exemplo, os webhooks não serão enviados, mas os formulários continuarão funcionando normalmente.

### Scripts Disponíveis

```bash
pnpm dev          # Servidor de desenvolvimento
pnpm build        # Build de produção
pnpm start        # Servidor de produção
pnpm lint         # Verificação de código
```

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── api/lead/          # API de captura de leads
│   ├── globals.css        # Estilos globais + variáveis CSS
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Página inicial
├── components/
│   ├── ui/                # Componentes shadcn/ui
│   │   ├── button.tsx     # Botão reutilizável
│   │   ├── card.tsx       # Cards
│   │   ├── input.tsx      # Campos de entrada
│   │   ├── label.tsx      # Rótulos
│   │   ├── checkbox.tsx   # Caixas de seleção
│   │   ├── badge.tsx      # Tags e indicadores
│   │   ├── alert.tsx      # Alertas
│   │   └── separator.tsx  # Separadores
│   ├── Hero.tsx           # Seção hero
│   ├── Features.tsx       # Seção de benefícios
│   ├── Agenda.tsx         # Seção de programação
│   ├── Manifesto.tsx      # Seção do manifesto
│   ├── CTA.tsx            # Formulário de inscrição
│   └── Footer.tsx         # Rodapé
├── lib/
│   ├── tokens.ts          # Tokens do design system
│   └── utils.ts           # Utilitários + cn helper
└── tailwind.config.ts     # Configuração do Tailwind
```

## 🎯 SEO e Performance

- **Metadados otimizados** para redes sociais
- **Open Graph** e Twitter Cards configurados
- **Fonte Inter** otimizada com `font-display: swap`
- **Scroll suave** entre seções
- **Acessibilidade** com ARIA labels

## 🔧 Customização

### Design Tokens

Os tokens de design estão centralizados em:
- `src/lib/tokens.ts` - Definições TypeScript
- `src/app/globals.css` - Variáveis CSS

### Componentes

Todos os componentes seguem o padrão shadcn/ui e podem ser facilmente customizados através das classes Tailwind.

### API de Leads

O endpoint `/api/lead` pode ser integrado com:
- Serviços de email (SendGrid, Resend)
- CRM (HubSpot, Pipedrive)
- Banco de dados
- Webhooks (Zapier, Make)

## 📱 Responsividade

A landing page é totalmente responsiva com breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🚀 Deploy

O projeto está pronto para deploy em:
- **Vercel** (recomendado)
- **Netlify**
- **AWS Amplify**
- Qualquer provedor que suporte Next.js

```bash
# Build de produção
pnpm build

# Teste local do build
pnpm start
```

## 📄 Licença

Este projeto foi desenvolvido para a Opens como parte do evento Esquenta Startup Summit.

---

**Desenvolvido com ❤️ para conectar pessoas e transformar o futuro dos negócios.**
