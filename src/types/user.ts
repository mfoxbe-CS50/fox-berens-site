export interface User {
  id: string
  email: string
  full_name?: string
  avatar_url?: string
  tenant_id: string
  role: 'owner' | 'admin' | 'member'
  created_at: string
}

export interface Tenant {
  id: string
  name: string
  slug: string
  plan: 'free' | 'starter' | 'pro' | 'enterprise'
  created_at: string
}
