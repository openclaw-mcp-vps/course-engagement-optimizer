export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-24">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Education Tech
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
          Stop Losing Students<br />
          <span className="text-[#58a6ff]">Mid-Course</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Course Engagement Optimizer tracks exactly where students drop off, delivers AI-powered content suggestions, and lets you A/B test lesson formats — all in one real-time dashboard.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-4 rounded-lg text-lg transition-colors"
        >
          Start Optimizing — $15/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-4">No credit card required for 14-day trial. Cancel anytime.</p>
      </section>

      {/* Features strip */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-24">
        {[
          { icon: '📉', title: 'Drop-off Heatmaps', desc: 'See exactly which lesson seconds cause students to quit.' },
          { icon: '🤖', title: 'AI Suggestions', desc: 'Get actionable rewrites and pacing fixes powered by AI.' },
          { icon: '🧪', title: 'A/B Testing', desc: 'Test two lesson formats and let data pick the winner.' }
        ].map(f => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <div className="text-3xl mb-3">{f.icon}</div>
            <h3 className="text-white font-semibold mb-2">{f.title}</h3>
            <p className="text-[#8b949e] text-sm">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-xs mb-4">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$15</p>
          <p className="text-[#8b949e] text-sm mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited courses tracked',
              'Real-time engagement dashboard',
              'AI content optimization',
              'A/B testing for lesson formats',
              'Drop-off heatmaps',
              'Email & Slack alerts'
            ].map(item => (
              <li key={item} className="flex items-center gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-10">FAQ</h2>
        <div className="space-y-6">
          {[
            {
              q: 'How does the tracking work?',
              a: 'You embed a lightweight JavaScript snippet into your course platform. It captures play/pause events, scroll depth, and completion signals without slowing down your content.'
            },
            {
              q: 'Which course platforms are supported?',
              a: 'Any platform that lets you add custom HTML or JavaScript — Teachable, Thinkific, Kajabi, Podia, WordPress LMS, and custom-built courses all work out of the box.'
            },
            {
              q: 'Can I cancel anytime?',
              a: 'Yes. Cancel with one click from your dashboard. You keep access until the end of your billing period with no questions asked.'
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs border-t border-[#30363d] pt-8">
        © {new Date().getFullYear()} Course Engagement Optimizer. All rights reserved.
      </footer>
    </main>
  )
}
