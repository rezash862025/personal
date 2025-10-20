type FeatureProps = {
  title: string
  points: string[]
}
export default function Feature({ title, points }: FeatureProps) {
  return (
    <div className="card p-6">
      <h3 className="font-semibold text-lg">{title}</h3>
      <ul className="mt-3 space-y-2 text-slate-300 list-disc ml-5">
        {points.map((p, i) => <li key={i}>{p}</li>)}
      </ul>
    </div>
  )
}
