export default function Testimonials() {
  return (
    <section className="border-t border-slate-800">
      <div className="container py-16">
        <h2 className="text-2xl font-bold">What students say</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {[
            { quote: 'Clear, practical, and immediately useful in my job.', name: 'Software Dev, Montreal' },
            { quote: 'Best explanation of event-driven architecture I’ve heard.', name: 'Backend Engineer' },
            { quote: 'Actionable feedback on my projects and interviews.', name: 'CS Grad' },
          ].map((t, i) => (
            <figure className="card p-6" key={i}>
              <blockquote className="text-slate-200">“{t.quote}”</blockquote>
              <figcaption className="mt-3 text-xs text-dim">— {t.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
