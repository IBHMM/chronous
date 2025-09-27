import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Cybersecurity Analyst",
    company: "TechCorp",
    image: "/professional-woman-diverse.png",
    content:
      "The Information Security course completely transformed my career. I went from a junior IT role to a cybersecurity analyst in just 6 months. The hands-on labs were incredible!",
    rating: 5,
  },
  {
    name: "Marcus Rodriguez",
    role: "AI Engineer",
    company: "DataFlow Inc",
    image: "/professional-man.jpg",
    content:
      "The AI bootcamp exceeded my expectations. The instructors are world-class, and the project-based learning approach helped me build a portfolio that landed me my dream job.",
    rating: 5,
  },
  {
    name: "Emily Watson",
    role: "Digital Marketing Manager",
    company: "GrowthLab",
    image: "/professional-woman-marketing.png",
    content:
      "I doubled my marketing ROI within 3 months of completing the Digital Marketing course. The strategies are practical and immediately applicable to real business scenarios.",
    rating: 5,
  },
  {
    name: "David Kim",
    role: "Security Consultant",
    company: "SecureNet",
    image: "/professional-man-security.jpg",
    content:
      "As someone who switched careers into cybersecurity, this course provided the perfect foundation. The certification helped me stand out in a competitive job market.",
    rating: 5,
  },
  {
    name: "Lisa Thompson",
    role: "Data Scientist",
    company: "Analytics Pro",
    image: "/professional-woman-data.jpg",
    content:
      "The AI course content is cutting-edge and constantly updated. I learned techniques that I use daily in my role as a data scientist. Highly recommend!",
    rating: 5,
  },
  {
    name: "James Wilson",
    role: "Growth Hacker",
    company: "StartupX",
    image: "/professional-man-startup.jpg",
    content:
      "The digital marketing strategies I learned helped me scale our startup's user acquisition by 300%. The ROI on this course was incredible.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 sm:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance animate-fadeInUp">
            Success Stories from Our Students
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty animate-fadeInUp">
            Hear from professionals who transformed their careers with Chronous Education
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-2 hover:border-primary/50 transition-all duration-500 hover:shadow-lg hover:scale-105 animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 text-pretty">"{testimonial.content}"</p>
                <div className="flex items-center space-x-3">
                  <Avatar>
                    <AvatarImage src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
