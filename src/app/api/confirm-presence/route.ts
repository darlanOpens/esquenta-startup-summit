import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

/**
 * Schema de validação para confirmação de presença
 */
const confirmPresenceSchema = z.object({
  nomeCompleto: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  linkedin: z.string().url('URL do LinkedIn inválida').optional().or(z.literal('')),
  tamanhoEmpresa: z.string().min(1, 'Tamanho da empresa é obrigatório'),
  setorAtuacao: z.string().min(1, 'Setor de atuação é obrigatório'),
  principaisProdutos: z.string().min(2, 'Principais produtos/serviços é obrigatório'),
  areaExperiencia: z.enum(['Sim', 'Não']),
  quantasPessoas: z.string().min(1, 'Quantidade de pessoas é obrigatória'),
  canaisAtendimento: z.array(z.string()),
  desafios: z.string().min(2, 'Principais desafios é obrigatório'),
  faturamento: z.string().min(1, 'Faturamento é obrigatório'),
  modeloNegocio: z.string().min(1, 'Modelo de negócio é obrigatório'),
  // Campos UTM
  utm_source: z.string().optional(),
  utm_medium: z.string().optional(),
  utm_campaign: z.string().optional(),
  utm_term: z.string().optional(),
  utm_content: z.string().optional(),
  // URL de envio
  referrer_url: z.string().optional()
})

/**
 * Interface para dados do webhook
 */
interface WebhookData {
  [key: string]: unknown
}

/**
 * Função para enviar webhook
 */
async function sendWebhook(data: WebhookData, webhookUrl: string) {
  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...data,
        timestamp: new Date().toISOString(),
        form_type: 'confirm_presence'
      })
    })
    
    if (!response.ok) {
      console.error('Erro ao enviar webhook:', response.statusText)
    }
  } catch (error) {
    console.error('Erro ao enviar webhook:', error)
  }
}

/**
 * Endpoint POST para confirmação de presença
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validação dos dados usando Zod
    const validatedData = confirmPresenceSchema.parse(body)
    
    // Log dos dados recebidos
    console.log('Confirmação de presença recebida:', {
      ...validatedData,
      timestamp: new Date().toISOString(),
      userAgent: request.headers.get('user-agent'),
      ip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip')
    })
    
    // Enviar webhook se configurado
    const webhookUrl = process.env.WEBHOOK_CONFIRM_PRESENCE_URL
    if (webhookUrl && webhookUrl !== 'https://webhook.site/your-confirm-presence-webhook-url') {
      await sendWebhook({
        ...validatedData,
        userAgent: request.headers.get('user-agent'),
        ip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip')
      }, webhookUrl)
    }
    
    // Resposta de sucesso
    return NextResponse.json(
      { 
        success: true, 
        message: 'Presença confirmada com sucesso!' 
      },
      { status: 200 }
    )
    
  } catch (error) {
    console.error('Erro ao processar confirmação de presença:', error)
    
    // Erro de validação
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Dados inválidos',
          errors: error.issues
        },
        { status: 400 }
      )
    }
    
    // Erro interno do servidor
    return NextResponse.json(
      { 
        success: false, 
        message: 'Erro interno do servidor' 
      },
      { status: 500 }
    )
  }
}

/**
 * Endpoint GET para verificar se a API está funcionando
 */
export async function GET() {
  return NextResponse.json(
    { 
      message: 'API de confirmação de presença funcionando',
      timestamp: new Date().toISOString()
    },
    { status: 200 }
  )
}