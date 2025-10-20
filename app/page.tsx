import Hero from '@/components/Hero'
import Feature from '@/components/Feature'
import Testimonials from '@/components/Testimonials'
import ContactForm from '@/components/ContactForm'

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-40 bg-slate-900/60 backdrop-blur border-b border-slate-800">
        <div className="container h-16 flex items-center justify-between">
          <a href="/" className="text-lg font-semibold">Reza Shalchian</a>
          <nav className="text-sm text-slate-300 flex gap-4">
            <a href="#topics" className="hover:text-white">Topics</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <Hero />

        <section id="topics" className="container py-16">
          <h2 className="text-2xl font-bold">Mentorship topics</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <Feature title="Software Architecture" points={[
              'Domain-Driven Design (DDD), modular monoliths, microservices',
              'Event-driven systems, messaging (Kafka), CQRS, SAGA patterns',
              'Code reviews & refactoring (SOLID, Clean Architecture)',
            ]} />
            <Feature title="Cloud & DevOps" points={[
              'AWS foundations, VPC, EC2, IAM, CI/CD pipelines',
              'Observability, cost awareness, production readiness',
              'Security basics and deployment strategies',
            ]} />
            <Feature title="Full‑Stack & Careers" points={[
              'Java, Spring, Node/Express, React, TypeScript',
              'Testing strategies, performance, troubleshooting',
              'Portfolio building, interview prep, career coaching',
            ]} />
          </div>
        </section>


        <section className="container py-16">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card p-6 md:col-span-2">
              <h3 className="font-semibold text-lg">AI‑powered teaching</h3>
              <p className="text-slate-300 mt-2">
                We’ll use AI to accelerate your learning, not replace fundamentals. Sessions include
                practical prompts, Copilot-assisted refactors, and reviews on how to use AI responsibly:
              </p>
              <ul className="list-disc ml-5 mt-3 space-y-2 text-slate-300">
                <li>Prompt patterns for debugging, design, and docs</li>
                <li>Turning ChatGPT output into production-quality code</li>
                <li>Safeguards: privacy, correctness, and licensing</li>
              </ul>
            </div>
            <div className="card p-6">
              <h3 className="font-semibold text-lg">Tools we’ll use</h3>
              <ul className="mt-3 space-y-2 text-slate-300 list-disc ml-5">
                <li>ChatGPT for design & research</li>
                <li>GitHub Copilot for IDE assistance</li>
                <li>Code review checklists & linters</li>
              </ul>
            </div>
          </div>
        </section>


        <Testimonials />

        <section className="container py-16">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="card p-6">
              <h3 className="font-semibold text-lg">How it works</h3>
              <ol className="mt-3 space-y-2 list-decimal ml-5 text-slate-300">
                <li>Tell me your goals in the form.</li>
                <li>We schedule a 20‑min intro call (free).</li>
                <li>We agree on a plan: weekly sessions, async feedback, or a short bootcamp.</li>
              </ol>
              <p className="text-dim text-sm mt-3">Flexible, outcome‑focused, and tailored to you or your team.</p>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-800 py-6 text-center text-sm text-dim">
        © {new Date().getFullYear()} Reza Shalchian — Mentorship & Training
      </footer>
    </div>
  )
}
