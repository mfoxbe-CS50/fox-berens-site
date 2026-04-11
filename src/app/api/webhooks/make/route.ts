import { NextRequest, NextResponse } from 'next/server'

/**
 * Incoming webhook from Make.com scenarios.
 * Make can POST data back to our app (e.g. enriched lead data, status updates).
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    if (!body || typeof body !== 'object') {
      return NextResponse.json({ error: 'Invalid payload' }, { status: 400 })
    }

    // Process Make webhook — extend as scenarios are built
    return NextResponse.json({ received: true })
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
