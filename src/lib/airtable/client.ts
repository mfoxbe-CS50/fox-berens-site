const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY
const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID
const AIRTABLE_API_BASE = 'https://api.airtable.com/v0'

function headers() {
  return {
    Authorization: `Bearer ${AIRTABLE_API_KEY}`,
    'Content-Type': 'application/json',
  }
}

function tableUrl(tableName: string) {
  return `${AIRTABLE_API_BASE}/${AIRTABLE_BASE_ID}/${encodeURIComponent(tableName)}`
}

// ---------------------------------------------------------------------------
// Generic CRUD
// ---------------------------------------------------------------------------

export interface AirtableRecord<T = Record<string, unknown>> {
  id: string
  fields: T
  createdTime: string
}

interface AirtableListResponse<T> {
  records: AirtableRecord<T>[]
  offset?: string
}

export async function listRecords<T = Record<string, unknown>>(
  table: string,
  options?: {
    filterByFormula?: string
    sort?: { field: string; direction?: 'asc' | 'desc' }[]
    maxRecords?: number
    view?: string
  },
): Promise<AirtableRecord<T>[]> {
  if (!AIRTABLE_API_KEY || !AIRTABLE_BASE_ID) return []

  const params = new URLSearchParams()
  if (options?.filterByFormula) params.set('filterByFormula', options.filterByFormula)
  if (options?.maxRecords) params.set('maxRecords', String(options.maxRecords))
  if (options?.view) params.set('view', options.view)
  if (options?.sort) {
    options.sort.forEach((s, i) => {
      params.set(`sort[${i}][field]`, s.field)
      params.set(`sort[${i}][direction]`, s.direction || 'asc')
    })
  }

  const url = `${tableUrl(table)}?${params.toString()}`
  const res = await fetch(url, { headers: headers(), next: { revalidate: 30 } })

  if (!res.ok) {
    console.error(`Airtable listRecords error: ${res.status}`)
    return []
  }

  const data: AirtableListResponse<T> = await res.json()
  return data.records
}

export async function getRecord<T = Record<string, unknown>>(
  table: string,
  recordId: string,
): Promise<AirtableRecord<T> | null> {
  if (!AIRTABLE_API_KEY || !AIRTABLE_BASE_ID) return null

  const res = await fetch(`${tableUrl(table)}/${recordId}`, {
    headers: headers(),
    next: { revalidate: 30 },
  })

  if (!res.ok) return null
  return res.json()
}

export async function createRecord<T = Record<string, unknown>>(
  table: string,
  fields: Partial<T>,
): Promise<AirtableRecord<T> | null> {
  if (!AIRTABLE_API_KEY || !AIRTABLE_BASE_ID) return null

  const res = await fetch(tableUrl(table), {
    method: 'POST',
    headers: headers(),
    body: JSON.stringify({ fields }),
  })

  if (!res.ok) {
    console.error(`Airtable createRecord error: ${res.status}`)
    return null
  }

  return res.json()
}

export async function updateRecord<T = Record<string, unknown>>(
  table: string,
  recordId: string,
  fields: Partial<T>,
): Promise<AirtableRecord<T> | null> {
  if (!AIRTABLE_API_KEY || !AIRTABLE_BASE_ID) return null

  const res = await fetch(`${tableUrl(table)}/${recordId}`, {
    method: 'PATCH',
    headers: headers(),
    body: JSON.stringify({ fields }),
  })

  if (!res.ok) return null
  return res.json()
}

// ---------------------------------------------------------------------------
// Table name constants — match these to your Airtable base
// ---------------------------------------------------------------------------

export const Tables = {
  LEADS: 'Leads',
  CAMPAIGNS: 'Campaigns',
  CONTACTS: 'Contacts',
  NEWSLETTER: 'Newsletter',
} as const
