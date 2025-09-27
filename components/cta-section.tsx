import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 sm:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance">
            Ready to Transform Your Career?
          </h2>
          <p className="mt-6 text-lg text-primary-foreground/90 text-pretty">
            Join thousands of professionals who have already advanced their careers with Chronous Education. Start your
            journey today and unlock your potential in the world of technology.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" variant="secondary" className="h-12 px-8">
              Start Learning Today
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 px-8 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
            >
              Schedule a Demo
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
            <div className="flex items-center justify-center">
              <CheckCircle className="h-5 w-5 mr-2 text-primary-foreground/80" />
              <span>30-day money-back guarantee</span>
            </div>
            <div className="flex items-center justify-center">
              <CheckCircle className="h-5 w-5 mr-2 text-primary-foreground/80" />
              <span>Lifetime access to materials</span>
            </div>
            <div className="flex items-center justify-center">
              <CheckCircle className="h-5 w-5 mr-2 text-primary-foreground/80" />
              <span>Industry-recognized certificates</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
