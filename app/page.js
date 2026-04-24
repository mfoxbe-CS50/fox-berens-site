export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,255,178,0.08),transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 text-accent text-xs font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Agence IA pour la generation de leads B2B
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              Vos prochains clients{" "}
              <span className="gradient-text">ne vous attendent pas.</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-muted leading-relaxed max-w-2xl">
              Fox Berens Operations identifie, qualifie et engage vos prospects B2B grace a l'intelligence artificielle. Pour les PME du Grand Geneve et du bassin franco-suisse.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-accent text-dark font-semibold px-8 py-3.5 rounded-lg hover:bg-accent/90 transition-colors text-base"
              >
                Reserver un appel decouverte
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l7-7M5 5h7v7"/></svg>
              </a>
              <a
                href="/services"
                className="inline-flex items-center justify-center gap-2 border border-dark-border text-light font-medium px-8 py-3.5 rounded-lg hover:border-muted transition-colors text-base"
              >
                Decouvrir nos services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-20 border-t border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent"><path d="M12 2a4 4 0 014 4v1a1 1 0 001 1h1a4 4 0 010 8h-1a1 1 0 00-1 1v1a4 4 0 01-8 0v-1a1 1 0 00-1-1H6a4 4 0 010-8h1a1 1 0 001-1V6a4 4 0 014-4z"/></svg>
                ),
                title: "Propulse par l'IA",
                desc: "Scraping intelligent, scoring predictif et outreach automatise. Nos agents IA travaillent 24/7 pour identifier vos meilleurs prospects.",
              },
              {
                icon: (
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-cyan"><path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"/><path d="M13 13l6 6"/></svg>
                ),
                title: "Oriente resultats",
                desc: "Pas de vanity metrics. On mesure les leads qualifies, les rendez-vous obtenus et le pipeline genere. Votre ROI est notre priorite.",
              },
              {
                icon: (
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-violet"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/><path d="M2 12h20"/></svg>
                ),
                title: "Expertise locale",
                desc: "Bases a Ferney-Voltaire, nous connaissons le tissu economique du Grand Geneve. Bilingue francais-anglais, nous parlons le langage de vos prospects.",
              },
            ].map((item, i) => (
              <div key={i} className="gradient-border rounded-xl p-6 hover:glow-accent transition-shadow duration-500">
                <div className="w-12 h-12 rounded-lg bg-dark-light flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-light mb-2">{item.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-dark-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Quatre formules, <span className="gradient-text">un objectif</span>
            </h2>
            <p className="mt-4 text-muted max-w-2xl mx-auto">
              De l'audit initial au modele performance, chaque formule est concue pour accelerer votre acquisition client.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { tier: "01", name: "Audit & Setup", price: "Des 2 000 CHF", desc: "Diagnostic de votre pipeline actuel et feuille de route IA personnalisee." },
              { tier: "02", name: "Lead Gen Manage", price: "4 000 CHF/mois", desc: "Scraping, outreach multicanal et scoring de leads. On genere, vous concluez." },
              { tier: "03", name: "Chatbot IA", price: "3 000 CHF setup", desc: "Agent conversationnel 24/7 qui qualifie vos visiteurs et capture des leads." },
              { tier: "04", name: "Performance", price: "1 500 CHF + commission", desc: "Retainer reduit, paiement au lead qualifie. On partage le risque." },
            ].map((s, i) => (
              <div key={i} className="gradient-border rounded-xl p-6 flex flex-col">
                <span className="text-xs font-mono text-accent mb-3">{s.tier}</span>
                <h3 className="text-lg font-semibold text-light mb-2">{s.name}</h3>
                <p className="text-sm text-muted mb-4 flex-1">{s.desc}</p>
                <p className="text-accent font-semibold text-sm">{s.price}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a href="/services" className="inline-flex items-center gap-2 text-accent text-sm font-medium hover:underline">
              Voir le detail des formules
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l7-7M5 5h7v7"/></svg>
            </a>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 border-t border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ils nous font <span className="gradient-text">confiance</span>
          </h2>
          <p className="text-muted mb-12 max-w-xl mx-auto">
            Nos premiers clients temoignent de l'impact de notre approche IA sur leur acquisition B2B.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { quote: "En 3 mois, Fox Berens a genere plus de leads qualifies que notre equipe commerciale en un an.", author: "Directeur Commercial", company: "PME Tech, Geneve" },
              { quote: "L'approche data-driven a completement transforme notre prospection. On ne travaille plus a l'aveugle.", author: "CEO", company: "SaaS B2B, Lausanne" },
              { quote: "Le chatbot IA capture des leads meme le week-end. Un vrai game changer pour notre business.", author: "Fondatrice", company: "Agence digitale, Annecy" },
            ].map((t, i) => (
              <div key={i} className="gradient-border rounded-xl p-6 text-left">
                <svg width="24" height="24" fill="currentColor" className="text-accent/30 mb-4"><path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"/></svg>
                <p className="text-sm text-light leading-relaxed mb-4">{t.quote}</p>
                <p className="text-xs text-muted">{t.author} â€” {t.company}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-20 bg-dark-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold">
                Dernieres <span className="gradient-text">reflexions</span>
              </h2>
              <p className="mt-2 text-muted">Strategies, analyses et retours d'experience sur la prospection B2B.</p>
            </div>
            <a href="/blog" className="hidden sm:inline-flex items-center gap-2 text-accent text-sm font-medium hover:underline">
              Tous les articles
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l7-7M5 5h7v7"/></svg>
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Pourquoi 80% des PME romandes perdent des clients sans le savoir", category: "Strategie", excerpt: "La majorite des PME en Suisse romande n'ont aucun systeme structure de suivi des leads. Resultat : des opportunites perdues chaque semaine sans meme s'en rendre compte." },
              { title: "L'IA dans la prospection B2B : ce qui marche vraiment en 2026", category: "IA & Tech", excerpt: "Entre le battage mediatique et la realite terrain, qu'est-ce qui fonctionne concretement dans la prospection B2B assistee par l'IA ? Tour d'horizon des outils et methodes qui livrent des resultats." },
              { title: "5 signaux que votre prospection B2B a besoin d'un reset", category: "Diagnostic", excerpt: "Taux de reponse en chute libre, pipeline vide, dependance au bouche-a-oreille... Si vous reconnaissez ces signaux, il est temps de repenser votre approche." },
            ].map((post, i) => (
              <article key={i} className="gradient-border rounded-xl overflow-hidden flex flex-col">
                <div className="h-48 bg-gradient-to-br from-dark-card via-dark-light to-dark-card flex items-center justify-center">
                  <span className="text-6xl font-bold text-dark-border font-[family-name:var(--font-heading)]">0{i + 1}</span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[10px] font-semibold uppercase tracking-wider bg-accent/10 text-accent px-2.5 py-1 rounded-full">{post.category}</span>
                    <span className="text-xs text-muted">24 avril 2026</span>
                  </div>
                  <h3 className="text-base font-semibold text-light mb-2 leading-snug">{post.title}</h3>
                  <p className="text-sm text-muted mb-4 flex-1 leading-relaxed">{post.excerpt}</p>
                  <a href="/blog" className="text-accent text-sm font-medium hover:underline inline-flex items-center gap-1">
                    Lire l'article
                    <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l7-7M5 5h7v7"/></svg>
                  </a>
                </div>
              </article>
            ))}
          </div>
          <div className="sm:hidden text-center mt-8">
            <a href="/blog" className="text-accent text-sm font-medium hover:underline">Tous les articles &rarr;</a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-dark-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Pret a <span className="gradient-text">accelerer</span> votre prospection ?
          </h2>
          <p className="text-muted mb-8 max-w-xl mx-auto">
            Reservez un appel decouverte de 30 minutes. On analyse votre situation, on identifie les quick wins et on vous propose un plan d'action concret.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-accent text-dark font-semibold px-8 py-3.5 rounded-lg hover:bg-accent/90 transition-colors text-base"
          >
            Reserver un appel decouverte
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l7-7M5 5h7v7"/></svg>
          </a>
        </div>
      </section>
    </>
  );
}
