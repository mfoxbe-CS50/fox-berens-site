export interface Campaign {
  id: string
  name: string
  description?: string
  status: 'draft' | 'active' | 'paused' | 'completed'
  type: 'email' | 'linkedin' | 'multi-channel'
  lead_count: number
  sent_count: number
  open_rate?: number
  reply_rate?: number
  tenant_id: string
  created_at: string
  updated_at: string
}

export interface CampaignStep {
  id: string
  campaign_id: string
  order: number
  type: 'email' | 'linkedin_connect' | 'linkedin_message' | 'delay'
  subject?: string
  body?: string
  delay_days?: number
}
