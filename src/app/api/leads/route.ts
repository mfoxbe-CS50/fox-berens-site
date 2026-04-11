import { NextRequest, NextResponse } from 'next/server'
import { listRecords, createRecord, Tables } from '@/lib/airtable/client'

interface LeadFields {
  Email: string
  Name?: string
  Company?: string
  Service?: string
  Message?: string
  Source: string
  Status: string
}

export async function GET(_request: NextRequest) {
  const records = await listRecords<LeadFields>(Tables.LEADS, {
    sort: [{ field: 'Created', direction: 'desc' }],
    maxRecords: 100,
  })

  return NextResponse.json({
    leads: records.map((r) => ({ id: r.id, ...r.fields })),
    total: records.length,
  })
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    if (!body.email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 })
    }

    const record = await createRecord<LeadFields>(Tables.LEADS, {
      Email: body.email,
      Name: body.name,
      Company: body.company,
      Service: body.service,
      Message: body.message,
      Source: 'website',
      Status: 'new',
    })

    if (!record) {
      // Airtable not configured — still return success for form UX
      return NextResponse.json({ success: true, lead: body }, { status: 201 })
    }

    return NextResponse.json({ success: true, lead: { id: record.id, ...record.fields } }, { status: 201 })
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
