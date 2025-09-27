import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Clock,
  Users,
  Star,
  Shield,
  Brain,
  TrendingUp,
  Lock,
  Database,
  Network,
  Bot,
  BarChartBig as ChartBar,
  Target,
} from "lucide-react"

const courses = [
  {
    id: 1,
    title: "Complete Information Security Mastery",
    description:
      "Comprehensive cybersecurity training covering ethical hacking, network security, and digital forensics.",
    icon: Shield,
    duration: "12 weeks",
    students: "2,847",
    rating: 4.9,
    level: "Beginner to Advanced",
    modules: [
      { icon: Lock, title: "Ethical Hacking & Penetration Testing" },
      { icon: Database, title: "Database Security & Encryption" },
      { icon: Network, title: "Network Security & Firewalls" },
    ],
  },
  {
    id: 2,
    title: "AI & Machine Learning Bootcamp",
    description: "Master artificial intelligence, machine learning algorithms, and deep learning frameworks.",
    icon: Brain,
    duration: "16 weeks",
    students: "3,521",
    rating: 4.8,
    level: "Intermediate",
    modules: [
      { icon: Bot, title: "Neural Networks & Deep Learning" },
      { icon: ChartBar, title: "Data Science & Analytics" },
      { icon: Brain, title: "Natural Language Processing" },
    ],
  },
  {
    id: 3,
    title: "Digital Marketing Excellence",
    description: "Complete digital marketing strategy including SEO, social media, and conversion optimization.",
    icon: TrendingUp,
    duration: "10 weeks",
    students: "4,192",
    rating: 4.7,
    level: "All Levels",
    modules: [
      { icon: Target, title: "SEO & Content Marketing" },
      { icon: ChartBar, title: "Analytics & Performance Tracking" },
      { icon: TrendingUp, title: "Social Media & Paid Advertising" },
    ],
  },
]

export function CoursesSection() {
  return (
    <section id="courses" className="py-20 sm:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance animate-fadeInUp">
            Choose Your Learning Path
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty animate-fadeInUp">
            Comprehensive courses designed by industry experts to accelerate your career in technology
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, index) => {
            const IconComponent = course.icon
            return (
              <Card
                key={course.id}
                className="relative overflow-hidden border-2 hover:border-primary/50 transition-all duration-500 hover:shadow-lg hover:scale-105 animate-fadeInUp"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 animate-pulse">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <Badge variant="secondary">{course.level}</Badge>
                  </div>
                  <CardTitle className="text-xl text-balance">{course.title}</CardTitle>
                  <CardDescription className="text-pretty">{course.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Clock className="mr-1 h-4 w-4" />
                      {course.duration}
                    </div>
                    <div className="flex items-center">
                      <Users className="mr-1 h-4 w-4" />
                      {course.students} students
                    </div>
                    <div className="flex items-center">
                      <Star className="mr-1 h-4 w-4 fill-yellow-400 text-yellow-400" />
                      {course.rating}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm text-foreground">What you'll learn:</h4>
                    {course.modules.map((module, index) => {
                      const ModuleIcon = module.icon
                      return (
                        <div key={index} className="flex items-center text-sm text-muted-foreground">
                          <ModuleIcon className="mr-2 h-4 w-4 text-primary" />
                          {module.title}
                        </div>
                      )
                    })}
                  </div>

                  <div className="pt-4 border-t">
                    <Button className="w-full transition-transform duration-300 hover:scale-105">Learn More</Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
