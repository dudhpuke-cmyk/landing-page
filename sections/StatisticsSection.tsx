export default function StatisticsSection() {
  const stats = [
    { number: '7', label: 'Years Experience' },
    { number: '3', label: 'Total Animals' },
    { number: '30+', label: 'Happy Customers' },
  ]

  return (
    <section className="section-spacing bg-brand-green text-white">
      <div className="container-page">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="mb-2 text-4xl font-bold sm:text-5xl lg:text-6xl">{stat.number}</div>
              <div className="text-sm font-medium sm:text-base">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
