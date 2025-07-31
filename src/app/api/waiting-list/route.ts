import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

/**
 * Schema de validação para lista de espera
 */
const waitingListSchema = z.object({
  nome: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  telefone: z.string().min(10, 'Telefone deve ter pelo menos 10 caracteres'),
  empresa: z.string().min(2, 'Nome da empresa deve ter pelo menos 2 caracteres'),
  cargo: z.string().min(2, 'Cargo deve ter pelo menos 2 caracteres'),
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
 * Função para enviar webhook
 */
async function sendWebhook(data: Record<string, unknown>, webhookUrl: string) {
  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...data,
        timestamp: new Date().toISOString(),
        form_type: 'waiting_list'
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
 * Endpoint POST para lista de espera
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validação dos dados usando Zod
    const validatedData = waitingListSchema.parse(body)
    
    // Log dos dados recebidos
    console.log('Inscrição na lista de espera:', {
      ...validatedData,
      timestamp: new Date().toISOString(),
      userAgent: request.headers.get('user-agent'),
      ip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip')
    })
    
    // Enviar webhook se configurado
    const webhookUrl = process.env.WEBHOOK_WAITING_LIST_URL
    if (webhookUrl && webhookUrl !== 'https://webhook.site/your-waiting-list-webhook-url') {
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
        message: 'Inscrição na lista de espera realizada com sucesso!' 
      },
      { status: 200 }
    )
    
  } catch (error) {
    console.error('Erro ao processar lista de espera:', error)
    
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
      message: 'API de lista de espera funcionando',
      timestamp: new Date().toISOString()
    },
    { status: 200 }
  )
}