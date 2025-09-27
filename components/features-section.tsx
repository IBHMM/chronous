import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Award, Users, Clock, Smartphone, HeadphonesIcon, CheckCircle, Globe, Zap } from "lucide-react"

const features = [
  {
    icon: BookOpen,
    title: "Expert-Led Curriculum",
    description: "Learn from industry professionals with real-world experience and cutting-edge knowledge.",
  },
  {
    icon: Award,
    title: "Industry Certifications",
    description: "Earn recognized certifications that validate your skills and boost your career prospects.",
  },
  {
    icon: Users,
    title: "Community Learning",
    description: "Join a vibrant community of learners, share knowledge, and build professional networks.",
  },
  {
    icon: Clock,
    title: "Flexible Schedule",
    description: "Learn at your own pace with 24/7 access to course materials and recorded sessions.",
  },
  {
    icon: Smartphone,
    title: "Mobile Learning",
    description: "Access courses on any device, anywhere. Continue learning on-the-go with our mobile app.",
  },
  {
    icon: HeadphonesIcon,
    title: "1-on-1 Support",
    description: "Get personalized guidance from instructors and dedicated support throughout your journey.",
  },
  {
    icon: CheckCircle,
    title: "Hands-On Projects",
    description: "Build real-world projects that demonstrate your skills to potential employers.",
  },
  {
    icon: Globe,
    title: "Global Recognition",
    description: "Our certificates are recognized worldwide by leading companies and organizations.",
  },
  {
    icon: Zap,
    title: "Latest Technology",
    description: "Stay ahead with courses updated regularly to reflect the latest industry trends and tools.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Why Choose Chronous Education?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            We provide everything you need to succeed in your technology career journey
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <Card key={index} className="border-0 shadow-none bg-transparent">
                <CardContent className="p-6 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="mt-6 text-lg font-semibold text-foreground">{feature.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground text-pretty">{feature.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
