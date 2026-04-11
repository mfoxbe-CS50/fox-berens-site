export interface Lead {
  id: string
  email: string
  first_name: string
  last_name: string
  company: string
  job_title: string
  linkedin_url?: string
  phone?: string
  source: 'apollo' | 'manual' | 'website' | 'import'
  status: 'new' | 'enriched' | 'contacted' | 'qualified' | 'converted' | 'lost'
  score?: number
  tags: string[]
  tenant_id: string
  created_at: string
  updated_at: string
}

export interface LeadFilters {
  status?: Lead['status']
  source?: Lead['source']
  search?: string
  tags?: string[]
}
