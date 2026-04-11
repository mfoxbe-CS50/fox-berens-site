interface WebhookPayload {
  [key: string]: unknown
}

/**
 * Trigger a Make.com (formerly Integromat) webhook scenario.
 * Each scenario has its own unique webhook URL stored in env vars.
 */
export async function triggerMakeWebhook(webhookUrl: string, payload: WebhookPayload) {
  if (!webhookUrl) {
    throw new Error('Make webhook URL is not configured')
  }

  const res = await fetch(webhookUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })

  if (!res.ok) {
    throw new Error(`Make webhook failed: ${res.status}`)
  }

  // Make webhooks may return empty responses
  const text = await res.text()
  return text ? JSON.parse(text) : { accepted: true }
}

/**
 * Pre-configured triggers for common scenarios.
 */
export async function triggerContactForm(data: {
  name: string
  email: string
  company?: string
  service?: string
  message: string
}) {
  const url = process.env.MAKE_WEBHOOK_CONTACT
  if (!url) return { accepted: true }
  return triggerMakeWebhook(url, data)
}

export async function triggerNewsletter(email: string) {
  const url = process.env.MAKE_WEBHOOK_NEWSLETTER
  if (!url) return { accepted: true }
  return triggerMakeWebhook(url, { email, subscribed_at: new Date().toISOString() })
}

export async function triggerNewLead(data: {
  email: string
  first_name?: string
  last_name?: string
  company?: string
  source: string
}) {
  const url = process.env.MAKE_WEBHOOK_NEW_LEAD
  if (!url) return { accepted: true }
  return triggerMakeWebhook(url, data)
}
