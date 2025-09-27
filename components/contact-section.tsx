"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, User, MessageSquare, MapPin } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <section id="contact" className="py-20 sm:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance animate-fadeInUp">
            Get In Touch
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty animate-fadeInUp">
            Ready to start your learning journey? Send us your details and we'll get back to you with course
            information.
          </p>
        </div>

        <div className="mt-16 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="animate-fadeInUp">
              <div className="h-full border-2 hover:border-primary/50 transition-all duration-500">
                <div>
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 mr-2" />
                    Our Location
                  </div>
                  <div>Visit us at our San Francisco campus for in-person consultations</div>
                </div>
                <div className="p-0">
                  <div className="w-full h-96 rounded-b-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0197!2d-122.4194!3d37.7749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064b8b4b4b5%3A0x4b4b4b4b4b4b4b4b!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1234567890123"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Chronous Education Location"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-fadeInUp">
              <Card className="border-2 hover:border-primary/50 transition-all duration-500">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Contact Us</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll contact you with detailed course information
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="flex items-center">
                          <User className="w-4 h-4 mr-2" />
                          First Name
                        </Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => handleChange("firstName", e.target.value)}
                          required
                          className="transition-all duration-300 focus:scale-105"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="flex items-center">
                          <User className="w-4 h-4 mr-2" />
                          Last Name
                        </Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => handleChange("lastName", e.target.value)}
                          required
                          className="transition-all duration-300 focus:scale-105"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="flex items-center">
                        <Mail className="w-4 h-4 mr-2" />
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        required
                        className="transition-all duration-300 focus:scale-105"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="flex items-center">
                        <Phone className="w-4 h-4 mr-2" />
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        required
                        className="transition-all duration-300 focus:scale-105"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="course">Course Interest</Label>
                      <Select onValueChange={(value) => handleChange("course", value)}>
                        <SelectTrigger className="transition-all duration-300 focus:scale-105">
                          <SelectValue placeholder="Select a course you're interested in" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="information-security">Information Security</SelectItem>
                          <SelectItem value="ai-machine-learning">AI & Machine Learning</SelectItem>
                          <SelectItem value="digital-marketing">Digital Marketing</SelectItem>
                          <SelectItem value="all-courses">All Courses</SelectItem>
                          <SelectItem value="corporate-training">Corporate Training</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="flex items-center">
                        <MessageSquare className="w-4 h-4 mr-2" />
                        Message (Optional)
                      </Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleChange("message", e.target.value)}
                        placeholder="Tell us about your learning goals or any specific questions you have..."
                        className="min-h-[100px] transition-all duration-300 focus:scale-105"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full text-lg py-6 transition-transform duration-300 hover:scale-105"
                    >
                      Send Request
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
