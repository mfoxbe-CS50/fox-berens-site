import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/landing/Hero'
import { ProblemSolution } from '@/components/landing/ProblemSolution'
import { ServicesOverview } from '@/components/landing/ServicesOverview'
import { HowItWorks } from '@/components/landing/HowItWorks'
import { SocialProof } from '@/components/landing/SocialProof'
import { Differentiators } from '@/components/landing/Differentiators'
import { CtaFinal } from '@/components/landing/CtaFinal'

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <ProblemSolution />
        <ServicesOverview />
        <HowItWorks />
        <SocialProof />
        <Differentiators />
        <CtaFinal />
      </main>
      <Footer />
    </div>
  )
}
