const stats = [
  { label: "Active Students", value: "15,000+" },
  { label: "Course Completion Rate", value: "94%" },
  { label: "Industry Partners", value: "200+" },
  { label: "Job Placement Rate", value: "87%" },
]

export function StatsSection() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance">
            Trusted by Thousands of Learners
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80 text-pretty">
            Join a community of successful professionals who transformed their careers with us
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold sm:text-5xl">{stat.value}</div>
              <div className="mt-2 text-sm text-primary-foreground/80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
