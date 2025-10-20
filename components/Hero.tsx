'use client'

import Image from 'next/image'

export default function Hero() {
  return (
    <section className="border-b border-slate-800">
      <div className="container py-16 sm:py-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/60 px-3 py-1 text-xs text-slate-300">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-400"></span>
              AI‑assisted mentoring • ChatGPT · GitHub Copilot
            </div>
            <h1 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight">
              Level up your engineering with <span className="text-white">focused mentorship</span>
            </h1>
            <p className="mt-5 text-slate-300">
              I’m Reza Shalchian — Montreal-based engineer and educator. I help developers and teams grow in
              Software Architecture, Cloud Administration, Java/React/Node, and IoT/IIoT. Learn smarter with
              AI tools integrated into every session.
            </p>
            <ul className="mt-6 space-y-2 text-slate-300 list-disc ml-5">
              <li>✅ 15+ years in industry • 5+ years teaching</li>
              <li>✅ Hands-on guidance, pair-programming, and code reviews</li>
              <li>✅ Practical workflows using ChatGPT & Copilot</li>
            </ul>
            <div className="mt-6 flex gap-3">
              <a href="#contact" className="btn">Get mentorship</a>
              <a href="#topics" className="btn bg-transparent border border-slate-700 text-slate-200 hover:bg-slate-800">See topics</a>
            </div>
            <p className="mt-3 text-xs text-dim">Online or on-site • English / French • Flexible scheduling</p>
          </div>
          <div className="card overflow-hidden p-0">
            <Image
              src="/reza.jpg"
              alt="Reza Shalchian at his workstation"
              width={1200}
              height={1600}
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
