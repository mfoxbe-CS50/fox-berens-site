const NOTION_API_KEY = process.env.NOTION_API_KEY
const NOTION_BLOG_DATABASE_ID = process.env.NOTION_BLOG_DATABASE_ID

const NOTION_API_BASE = 'https://api.notion.com/v1'
const NOTION_VERSION = '2022-06-28'

function notionHeaders() {
  return {
    Authorization: `Bearer ${NOTION_API_KEY}`,
    'Notion-Version': NOTION_VERSION,
    'Content-Type': 'application/json',
  }
}

export async function getBlogPosts() {
  if (!NOTION_API_KEY || !NOTION_BLOG_DATABASE_ID) {
    return []
  }

  const res = await fetch(`${NOTION_API_BASE}/databases/${NOTION_BLOG_DATABASE_ID}/query`, {
    method: 'POST',
    headers: notionHeaders(),
    body: JSON.stringify({
      sorts: [{ property: 'Created', direction: 'descending' }],
    }),
    next: { revalidate: 60 },
  })

  if (!res.ok) return []
  const data = await res.json()
  return data.results
}

export async function getPageContent(pageId: string) {
  if (!NOTION_API_KEY) return null

  const res = await fetch(`${NOTION_API_BASE}/blocks/${pageId}/children`, {
    headers: notionHeaders(),
    next: { revalidate: 60 },
  })

  if (!res.ok) return null
  const data = await res.json()
  return data.results
}
