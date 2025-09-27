import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Star } from "lucide-react"

const plans = [
  {
    name: "Individual Course",
    description: "Perfect for focused learning",
    price: "$249",
    period: "per course",
    features: [
      "Access to one complete course",
      "Lifetime access to materials",
      "Certificate of completion",
      "Community forum access",
      "Mobile app access",
      "Basic email support",
    ],
    popular: false,
  },
  {
    name: "All-Access Pass",
    description: "Best value for comprehensive learning",
    price: "$599",
    period: "all courses",
    originalPrice: "$947",
    features: [
      "Access to ALL current courses",
      "Access to future course releases",
      "Priority instructor support",
      "1-on-1 mentorship sessions",
      "Career guidance and job placement",
      "Advanced project reviews",
      "Industry networking events",
      "Lifetime updates",
    ],
    popular: true,
  },
  {
    name: "Corporate Training",
    description: "Tailored for teams and organizations",
    price: "Custom",
    period: "contact us",
    features: [
      "Customized curriculum",
      "Dedicated account manager",
      "Team progress tracking",
      "Bulk enrollment discounts",
      "On-site training options",
      "Custom certificates",
      "Advanced analytics",
      "24/7 priority support",
    ],
    popular: false,
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 sm:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Choose Your Learning Investment
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Flexible pricing options designed to fit your learning goals and budget
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative ${plan.popular ? "border-primary border-2 shadow-lg scale-105" : "border-2"}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1">
                    <Star className="w-3 h-3 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-8">
                <CardTitle className="text-xl">{plan.name}</CardTitle>
                <CardDescription className="text-pretty">{plan.description}</CardDescription>
                <div className="mt-4">
                  {plan.originalPrice && (
                    <span className="text-lg text-muted-foreground line-through mr-2">{plan.originalPrice}</span>
                  )}
                  <span className="text-4xl font-bold text-primary">{plan.price}</span>
                  <span className="text-muted-foreground ml-1">/{plan.period}</span>
                </div>
                {plan.originalPrice && (
                  <Badge variant="secondary" className="mt-2">
                    Save ${Number.parseInt(plan.originalPrice.slice(1)) - Number.parseInt(plan.price.slice(1))}
                  </Badge>
                )}
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${plan.popular ? "bg-primary hover:bg-primary/90" : ""}`}
                  variant={plan.popular ? "default" : "outline"}
                  size="lg"
                >
                  {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            All plans include a 30-day money-back guarantee. No questions asked.
          </p>
        </div>
      </div>
    </section>
  )
}
