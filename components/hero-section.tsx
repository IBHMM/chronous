import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Shield, Brain, TrendingUp } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background py-20 sm:py-32">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 flex justify-center">
            <div className="inline-flex items-center rounded-full border bg-muted px-3 py-1 text-sm">
              <span className="text-primary font-medium">New Course Launch</span>
              <ArrowRight className="ml-2 h-4 w-4 text-primary" />
            </div>
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl text-balance">
            Master the Future of <span className="text-primary">Technology</span>
          </h1>

          <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto text-pretty">
            Transform your career with comprehensive courses in Information Security, Artificial Intelligence, and
            Digital Marketing. Learn from industry experts and build skills that matter in today's digital world.
          </p>

          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg" className="h-12 px-8">
              Start Learning Today
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="h-12 px-8 bg-transparent">
              <Play className="mr-2 h-4 w-4" />
              Watch Demo
            </Button>
          </div>

          {/* <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="flex flex-col items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">Information Security</h3>
              <p className="mt-2 text-sm text-muted-foreground text-center">
                Protect digital assets and learn cybersecurity fundamentals
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Brain className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">Artificial Intelligence</h3>
              <p className="mt-2 text-sm text-muted-foreground text-center">
                Build intelligent systems and understand machine learning
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">Digital Marketing</h3>
              <p className="mt-2 text-sm text-muted-foreground text-center">
                Master modern marketing strategies and analytics
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  )
}
