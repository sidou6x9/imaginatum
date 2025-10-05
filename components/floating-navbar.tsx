"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
]

export function FloatingNavbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => setIsVisible(true), 100)
    
    // Add scroll effect
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => {
      clearTimeout(timer)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 mx-auto w-full px-4 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className={`bg-background/80 backdrop-blur-md border border-border/40 rounded-2xl shadow-lg transition-all duration-300 ${
          isScrolled ? 'py-2' : 'py-3'
        }`}>
          <div className="flex items-center justify-between px-6">
            {/* Logo/Brand Name - Left */}
            <Link 
              href="/" 
              className="text-foreground font-bold text-xl flex items-center hover:opacity-80 transition-opacity"
            >
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                VotreMarque
              </span>
            </Link>

            {/* Desktop Navigation - Center */}
            <div className="hidden lg:flex  items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
              {navLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-foreground/80 hover:text-foreground  hover:bg-stone-300 rounded-3xl p-2 transition-all duration-300 text-sm font-medium hover:text-md hover:shadow-lg transform ${
                    isVisible ? "opacity-100" : "opacity-0"
                  }`}
                  style={{
                    transitionDelay: `${index * 100}ms`,
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Contact Button - Right */}
            <div className="hidden md:flex items-center">
              <Link href="/contact">
                <Button 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-full px-6 py-2 shadow-md hover:shadow-lg transition-all"
                  size="sm"
                >
                  Contactez-moi
                </Button>
              </Link>
            </div>

            {/* Mobile Navigation Toggle */}
            <div className="lg:hidden flex items-center">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setIsOpen(!isOpen)} 
                className="p-2"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          {isOpen && (
            <div className="lg:hidden absolute top-full left-0 right-0 mt-2 bg-background/95 backdrop-blur-md border border-border/40 rounded-2xl shadow-lg overflow-hidden">
              <div className="py-2">
                {navLinks.map((link, index) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block px-6 py-3 text-foreground/80 hover:text-foreground hover:bg-muted/50 transition-all duration-300 text-sm font-medium ${
                      isVisible ? "opacity-100" : "opacity-0"
                    }`}
                    style={{
                      transitionDelay: `${index * 50}ms`,
                    }}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="border-t border-border/40 mt-2 pt-2 px-6">
                  <Link
                    href="/contact"
                    className="block w-full text-center bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-full px-4 py-2 shadow-md hover:shadow-lg transition-all text-sm"
                    onClick={() => setIsOpen(false)}
                  >
                    Contactez-moi
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
