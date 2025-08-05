import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

// Schema para os dados que chegam do formulário do Hero.
const heroFormSchema = z.object({
  email: z.string().email('Email inválido'),
  form_title: z.string().optional(),
  form_id: z.string().optional(),
});

// Schema para a resposta do webhook. Agora aceita qualquer string para redirectUrl.
const webhookResponseSchema = z.object({
    redirectUrl: z.string(), // Validação mais flexível
});

/**
 * Chama o webhook externo e aguarda a resposta.
 */
async function getRedirectUrlFromWebhook(data: object, webhookUrl: string): Promise<string> {
  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
      signal: AbortSignal.timeout(20000) // Timeout aumentado para 20 segundos
    });

    if (!response.ok) {
      console.error('Webhook retornou um erro:', response.status, response.statusText);
      return '/brunch-vip/lista-espera'; // Fallback
    }

    const responseData = await response.json();
    const validatedWebhookResponse = webhookResponseSchema.safeParse(responseData);

    if (!validatedWebhookResponse.success) {
        console.error("Resposta inválida do webhook:", validatedWebhookResponse.error);
        return '/brunch-vip/lista-espera'; // Fallback
    }

    return validatedWebhookResponse.data.redirectUrl;

  } catch (error) {
    console.error('Erro ao chamar o webhook:', error);
    return '/brunch-vip/lista-espera'; // Fallback
  }
}

/**
 * Endpoint POST que recebe o email, consulta o webhook e retorna a URL de redirecionamento.
 */
export async function POST(request: NextRequest) {
  const webhookUrl = process.env.WEBHOOK_LEAD_URL;

  if (!webhookUrl || webhookUrl.includes('your-lead-webhook-url')) {
      console.error('A variável de ambiente WEBHOOK_LEAD_URL não está configurada.');
      return NextResponse.json(
          { success: false, message: 'Serviço indisponível: Webhook não configurado.' },
          { status: 503 }
      );
  }

  try {
    const body = await request.json();
    const validatedData = heroFormSchema.parse(body);

    const webhookPayload = {
      ...validatedData,
      timestamp: new Date().toISOString(),
      userAgent: request.headers.get('user-agent'),
      ip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip'),
    };

    const redirectUrl = await getRedirectUrlFromWebhook(webhookPayload, webhookUrl);

    return NextResponse.json(
      { 
        success: true, 
        redirectUrl: redirectUrl 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Erro ao processar o lead:', error);
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, message: 'Dados inválidos.', errors: error.issues },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { success: false, message: 'Erro interno do servidor.' },
      { status: 500 }
    );
  }
}

/**
 * Endpoint GET para verificar o status da API.
 */
export async function GET() {
  return NextResponse.json(
    { 
      message: 'API de verificação de leads (via Webhook) está funcionando.',
      timestamp: new Date().toISOString()
    },
    { status: 200 }
  );
}
