const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://leadforge.ai'

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'LeadForge AI',
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    description: 'AI-powered B2B lead generation agency based in Ferney-Voltaire.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Ferney-Voltaire',
      addressCountry: 'FR',
    },
    founder: {
      '@type': 'Person',
      name: 'Michel Fox Berens',
    },
    sameAs: [],
  }
}

export function serviceJsonLd(name: string, description: string, price: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: {
      '@type': 'Organization',
      name: 'LeadForge AI',
    },
    offers: {
      '@type': 'Offer',
      price,
      priceCurrency: 'EUR',
    },
  }
}

export function faqJsonLd(items: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}
