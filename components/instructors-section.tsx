import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Linkedin, Twitter } from "lucide-react"

const instructors = [
  {
    name: "Dr. Alex Morgan",
    title: "Cybersecurity Expert",
    experience: "15+ years",
    image: "/cybersecurity-expert.jpg",
    bio: "Former CISO at Fortune 500 companies, certified ethical hacker with expertise in penetration testing and digital forensics.",
    specialties: ["Ethical Hacking", "Network Security", "Digital Forensics"],
    credentials: ["CISSP", "CEH", "CISM"],
  },
  {
    name: "Prof. Maria Santos",
    title: "AI Research Scientist",
    experience: "12+ years",
    image: "/ai-researcher-woman.jpg",
    bio: "PhD in Machine Learning from MIT, published researcher with 50+ papers in top-tier AI conferences and journals.",
    specialties: ["Deep Learning", "NLP", "Computer Vision"],
    credentials: ["PhD MIT", "Google AI", "IEEE Fellow"],
  },
  {
    name: "Michael Chen",
    title: "Digital Marketing Strategist",
    experience: "10+ years",
    image: "/marketing-strategist.png",
    bio: "Built and scaled marketing teams at multiple unicorn startups, expert in growth hacking and performance marketing.",
    specialties: ["Growth Marketing", "SEO/SEM", "Analytics"],
    credentials: ["Google Ads", "HubSpot", "Facebook Blueprint"],
  },
]

export function InstructorsSection() {
  return (
    <section id="instructors" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance animate-fadeInUp">
            Learn from Industry Leaders
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty animate-fadeInUp">
            Our instructors are seasoned professionals with decades of real-world experience
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {instructors.map((instructor, index) => (
            <Card
              key={index}
              className="text-center border-2 hover:border-primary/50 transition-all duration-500 hover:shadow-lg hover:scale-105 animate-fadeInUp"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8">
                <Avatar className="mx-auto h-24 w-24 mb-6 animate-pulse">
                  <AvatarImage src={instructor.image || "/placeholder.svg"} alt={instructor.name} />
                  <AvatarFallback className="text-lg">
                    {instructor.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>

                <h3 className="text-xl font-bold text-foreground mb-1">{instructor.name}</h3>
                <p className="text-primary font-semibold mb-2">{instructor.title}</p>
                <p className="text-sm text-muted-foreground mb-4">{instructor.experience} experience</p>

                <p className="text-sm text-muted-foreground mb-6 text-pretty">{instructor.bio}</p>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-2">Specialties</h4>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {instructor.specialties.map((specialty, i) => (
                        <Badge
                          key={i}
                          variant="secondary"
                          className="text-xs transition-transform duration-300 hover:scale-110"
                        >
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-2">Credentials</h4>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {instructor.credentials.map((credential, i) => (
                        <Badge
                          key={i}
                          variant="outline"
                          className="text-xs transition-transform duration-300 hover:scale-110"
                        >
                          {credential}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex justify-center space-x-4 mt-6">
                  <button className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-125">
                    <Linkedin className="h-5 w-5" />
                  </button>
                  <button className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-125">
                    <Twitter className="h-5 w-5" />
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
