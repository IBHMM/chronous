"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary animate-pulse">
              <span className="text-lg font-bold text-primary-foreground">C</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#courses"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 hover:scale-105"
            >
              Courses
            </a>
            <a
              href="#features"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 hover:scale-105"
            >
              Features
            </a>
            <a
              href="#instructors"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 hover:scale-105"
            >
              Instructors
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 hover:scale-105"
            >
              Contact
            </a>
          </nav>

          <div className="hidden md:flex items-center">
            <Button size="sm" className="transition-transform duration-300 hover:scale-105">
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden transition-transform duration-300 hover:scale-110"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden animate-fadeIn">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t">
              <a
                href="#courses"
                className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                Courses
              </a>
              <a
                href="#features"
                className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                Features
              </a>
              <a
                href="#instructors"
                className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                Instructors
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                Contact
              </a>
              <div className="px-3 py-2">
                <Button size="sm" className="w-full">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
