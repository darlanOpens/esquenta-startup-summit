/**
 * Utilitários para captura de dados UTM e URL de referência
 */
import React from 'react'

/**
 * Interface para dados UTM
 */
export interface UTMData {
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
  utm_term?: string
  utm_content?: string
  referrer_url?: string
}

/**
 * Captura dados UTM da URL atual
 */
export function getUTMData(): UTMData {
  if (typeof window === 'undefined') {
    return {}
  }

  const urlParams = new URLSearchParams(window.location.search)
  const referrerUrl = document.referrer || window.location.href

  return {
    utm_source: urlParams.get('utm_source') || undefined,
    utm_medium: urlParams.get('utm_medium') || undefined,
    utm_campaign: urlParams.get('utm_campaign') || undefined,
    utm_term: urlParams.get('utm_term') || undefined,
    utm_content: urlParams.get('utm_content') || undefined,
    referrer_url: referrerUrl
  }
}

/**
 * Adiciona dados UTM aos dados do formulário
 */
export function addUTMToFormData<T extends Record<string, any>>(formData: T): T & UTMData {
  const utmData = getUTMData()
  return {
    ...formData,
    ...utmData
  }
}

/**
 * Cria campos ocultos para UTM em formulários HTML
 */
export function createUTMHiddenFields(): React.ReactElement[] {
  const utmData = getUTMData()
  const fields: React.ReactElement[] = []

  Object.entries(utmData).forEach(([key, value]) => {
    if (value) {
      fields.push(
        React.createElement('input', {
          key,
          type: 'hidden',
          name: key,
          value: value
        })
      )
    }
  })

  return fields
}