import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

/**
 * Schema de validação para os dados do lead
 */
const leadSchema = z.object({
  email: z.string().email('Email inválido'),
  form_title: z.string().min(1, 'Título do formulário é obrigatório'),
  form_id: z.string().min(1, 'ID do formulário é obrigatório'),
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
        form_type: 'lead'
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
 * Endpoint POST para captura de leads
 * Recebe os dados do formulário e processa a inscrição
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validação dos dados usando Zod
    const validatedData = leadSchema.parse(body)
    
    // Log dos dados recebidos (em produção, enviar para serviço de email/CRM)
    console.log('Novo lead capturado:', {
      ...validatedData,
      timestamp: new Date().toISOString(),
      userAgent: request.headers.get('user-agent'),
      ip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip')
    })
    
    // Enviar webhook se configurado
    const webhookUrl = process.env.WEBHOOK_LEAD_URL
    if (webhookUrl && webhookUrl !== 'https://webhook.site/your-lead-webhook-url') {
      await sendWebhook({
        ...validatedData,
        userAgent: request.headers.get('user-agent'),
        ip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip')
      }, webhookUrl)
    }
    
    // Simulação de processamento
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Resposta de sucesso
    return NextResponse.json(
      { 
        success: true, 
        message: 'Inscrição realizada com sucesso!' 
      },
      { status: 200 }
    )
    
  } catch (error) {
    console.error('Erro ao processar lead:', error)
    
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
      message: 'API de captura de leads funcionando',
      timestamp: new Date().toISOString()
    },
    { status: 200 }
  )
}