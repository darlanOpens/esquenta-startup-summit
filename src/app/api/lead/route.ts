import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

/**
 * Schema de validação para os dados do lead
 */
const leadSchema = z.object({
  nome: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  empresa: z.string().min(2, 'Nome da empresa deve ter pelo menos 2 caracteres'),
  lgpd: z.boolean().refine(val => val === true, 'Você deve aceitar os termos')
})

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
    
    // Aqui você pode integrar com:
    // - Serviço de email (SendGrid, Resend, etc.)
    // - CRM (HubSpot, Pipedrive, etc.)
    // - Banco de dados
    // - Webhook para Zapier/Make
    
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