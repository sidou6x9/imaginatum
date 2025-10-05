"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Calendar,
  CheckCircle,
  ArrowRight,
  Linkedin,
  Facebook,
  Instagram,
  MailCheck
} from "lucide-react"
import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Ici vous intégrerez votre solution d'envoi d'email (Formspree, EmailJS, API Route, etc.)
    console.log("Form data submitted:", formData)
    setIsSubmitted(true)
    
    // Réinitialiser après 5 secondes
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: ""
      })
    }, 5000)
  }

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const delay = entry.target.getAttribute("data-delay") || "0"
          setTimeout(() => {
            entry.target.classList.add("animate-fade-up")
          }, Number.parseInt(delay))
          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)

    const elements = document.querySelectorAll(".scroll-animate")
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative isolate container mx-auto w-full py-16 md:py-24 lg:py-28">
          <div className="relative z-10 px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <Badge
                variant="secondary"
                className="mb-4 rounded-full px-4 py-1.5 text-sm font-medium shadow-sm hover-glow scroll-animate opacity-0 translate-y-4 transition-all duration-700"
                data-delay="100"
              >
                <span className="text-foreground mr-1">✦</span>
                Contactez-moi
              </Badge>

              <h1
                className="mb-6 bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-5xl scroll-animate opacity-0 translate-y-4 transition-all duration-700"
                data-delay="200"
              >
                Discutons de votre projet
              </h1>

              <p
                className="text-muted-foreground mb-8 text-lg leading-relaxed md:text-xl scroll-animate opacity-0 translate-y-4 transition-all duration-700"
                data-delay="300"
              >
                Prenons 15 minutes au téléphone pour échanger sur votre projet et voir comment je peux vous aider à développer votre présence en ligne.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Grid */}
        <section className="w-full py-16 md:py-24 bg-muted/30 relative overflow-hidden isolate">
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(from_var(--muted-foreground)_r_g_b_/_0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(from_var(--muted-foreground)_r_g_b_/_0.05)_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>
          <div className="container mx-auto px-4 md:px-6 relative">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Form */}
              <div className="scroll-animate opacity-0 translate-y-4 transition-all duration-700" data-delay="400">
                <Card className="border-border/40 hover-lift">
                  <CardHeader>
                    <CardTitle className="text-2xl flex items-center">
                      <MessageCircle className="mr-2 size-5 text-primary" />
                      Envoyez-moi un message
                    </CardTitle>
                    <CardDescription>
                      Remplissez ce formulaire et je vous réponds sous 24h
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {isSubmitted ? (
                      <div className="text-center py-8">
                        <CheckCircle className="mx-auto size-16 text-green-500 mb-4" />
                        <h3 className="text-xl font-bold mb-2">Message envoyé !</h3>
                        <p className="text-muted-foreground">
                          Merci pour votre message. Je vous contacte très rapidement.
                        </p>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium">
                              Nom complet *
                            </label>
                            <Input
                              id="name"
                              name="name"
                              placeholder="Votre nom"
                              required
                              value={formData.name}
                              onChange={handleChange}
                            />
                          </div>
                          <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium">
                              Email *
                            </label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              placeholder="votre@email.com"
                              required
                              value={formData.email}
                              onChange={handleChange}
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <label htmlFor="phone" className="text-sm font-medium">
                              Téléphone
                            </label>
                            <Input
                              id="phone"
                              name="phone"
                              type="tel"
                              placeholder="06 12 34 56 78"
                              value={formData.phone}
                              onChange={handleChange}
                            />
                          </div>
                          <div className="space-y-2">
                            <label htmlFor="service" className="text-sm font-medium">
                              Service intéressé
                            </label>
                            <select
                              id="service"
                              name="service"
                              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                              value={formData.service}
                              onChange={handleChange}
                            >
                              <option value="">Sélectionnez une option</option>
                              <option value="site-vitrine">Site Vitrine</option>
                              <option value="blog-portfolio">Blog/Portfolio</option>
                              <option value="ecommerce">E-commerce (bientôt disponible)</option>
                              <option value="autre">Autre projet</option>
                            </select>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="message" className="text-sm font-medium">
                            Votre message *
                          </label>
                          <Textarea
                            id="message"
                            name="message"
                            placeholder="Décrivez votre projet, vos objectifs, votre public cible..."
                            rows={5}
                            required
                            value={formData.message}
                            onChange={handleChange}
                          />
                        </div>

                        <Button type="submit" className="w-full h-12 rounded-full hover-scale">
                          <Send className="mr-2 size-4" />
                          Envoyer le message
                        </Button>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </div>

              {/* Contact Information */}
              <div className="space-y-6 scroll-animate opacity-0 translate-y-4 transition-all duration-700" data-delay="500">
                <Card className="border-border/40 hover-lift">
                  <CardHeader>
                    <CardTitle className="text-2xl">Mes coordonnées</CardTitle>
                    <CardDescription>
                      Plusieurs façons de me contacter pour discuter de votre projet
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-primary/10 text-primary size-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <Phone className="size-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Téléphone</h3>
                        <p className="text-muted-foreground">06 12 34 56 78</p>
                        <Link href="tel:+33612345678">
                          <Button variant="link" className="p-0 h-auto text-primary">
                            Appeler maintenant
                          </Button>
                        </Link>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-primary/10 text-primary size-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <Mail className="size-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Email</h3>
                        <p className="text-muted-foreground">contact@mondomaine.fr</p>
                        <Link href="mailto:contact@mondomaine.fr">
                          <Button variant="link" className="p-0 h-auto text-primary">
                            Envoyer un email
                          </Button>
                        </Link>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-primary/10 text-primary size-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <MapPin className="size-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Localisation</h3>
                        <p className="text-muted-foreground">Val d'Oise, Île-de-France</p>
                        <p className="text-sm text-muted-foreground">
                          Interventions possibles à Cergy, Pontoise et alentours
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-primary/10 text-primary size-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <Clock className="size-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Disponibilités</h3>
                        <p className="text-muted-foreground">Lun-Ven: 9h-18h</p>
                        <p className="text-sm text-muted-foreground">
                          Réponse sous 24h pour les emails
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Social Links */}
                <Card className="border-border/40 hover-lift">
                  <CardHeader>
                    <CardTitle className="text-2xl">Réseaux sociaux</CardTitle>
                    <CardDescription>
                      Suivez-moi pour voir mes dernières réalisations
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex space-x-4">
                      <Link href="#" className="bg-muted hover:bg-primary/10 size-12 rounded-full flex items-center justify-center transition-colors">
                        <Linkedin className="size-5" />
                      </Link>
                      <Link href="#" className="bg-muted hover:bg-primary/10 size-12 rounded-full flex items-center justify-center transition-colors">
                        <Facebook className="size-5" />
                      </Link>
                      <Link href="#" className="bg-muted hover:bg-primary/10 size-12 rounded-full flex items-center justify-center transition-colors">
                        <Instagram className="size-5" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Meeting Booking */}
                <Card className="border-border/40 hover-lift bg-primary/5">
                  <CardHeader>
                    <CardTitle className="text-2xl flex items-center">
                      <Calendar className="mr-2 size-5 text-primary" />
                      Réserver un appel
                    </CardTitle>
                    <CardDescription>
                      Planifions un appel de 15 minutes pour discuter de votre projet
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link href="#" target="_blank">
                      <Button className="w-full h-12 rounded-full hover-scale">
                        <Calendar className="mr-2 size-4" />
                        Choisir un créneau
                        <ArrowRight className="ml-2 size-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full py-16 md:py-24 bg-background relative">
          <div className="container mx-auto px-4 md:px-6 relative">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <Badge
                variant="secondary"
                className="rounded-full px-4 py-1.5 text-sm font-medium shadow-sm hover-glow scroll-animate opacity-0 translate-y-4 transition-all duration-700"
                data-delay="100"
              >
                <span className="mr-1 text-primary">✦</span> Questions Fréquentes
              </Badge>
              <h2
                className="text-3xl md:text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80 scroll-animate opacity-0 translate-y-4 transition-all duration-700"
                data-delay="200"
              >
                Questions sur le processus
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="scroll-animate opacity-0 translate-y-4 transition-all duration-700" data-delay="300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2 flex items-center">
                    <MailCheck className="mr-2 size-5 text-primary" />
                    Quel est votre délai de réponse ?
                  </h3>
                  <p className="text-muted-foreground">
                    Je réponds à tous les emails sous 24h ouvrées. Pour les appels, je vous propose généralement un créneau dans les 48h.
                  </p>
                </CardContent>
              </Card>

              <Card className="scroll-animate opacity-0 translate-y-4 transition-all duration-700" data-delay="400">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2 flex items-center">
                    <Calendar className="mr-2 size-5 text-primary" />
                    Proposez-vous une première consultation gratuite ?
                  </h3>
                  <p className="text-muted-foreground">
                    Absolument ! Nous pouvons planifier un appel de 15 à 30 minutes pour discuter de votre projet sans engagement.
                  </p>
                </CardContent>
              </Card>

              <Card className="scroll-animate opacity-0 translate-y-4 transition-all duration-700" data-delay="500">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2 flex items-center">
                    <MapPin className="mr-2 size-5 text-primary" />
                    Travaillez-vous à distance ou en présentiel ?
                  </h3>
                  <p className="text-muted-foreground">
                    Les deux ! Je peux vous rencontrer dans le Val d'Oise ou travailler à distance avec des outils de collaboration modernes.
                  </p>
                </CardContent>
              </Card>

              <Card className="scroll-animate opacity-0 translate-y-4 transition-all duration-700" data-delay="600">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2 flex items-center">
                    <Clock className="mr-2 size-5 text-primary" />
                    Quel est le délai pour commencer un projet ?
                  </h3>
                  <p className="text-muted-foreground">
                    Généralement 1 à 2 semaines après validation du devis, selon ma disponibilité et la complexité de votre projet.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="w-full py-16 md:py-24 bg-gradient-to-r from-primary to-primary/80">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <div className="max-w-3xl mx-auto">
              <h2
                className="text-2xl md:text-3xl font-bold text-white mb-6 scroll-animate opacity-0 translate-y-4 transition-all duration-700"
                data-delay="100"
              >
                Prêt à donner vie à votre projet ?
              </h2>
              <p
                className="text-white/90 mb-8 text-lg scroll-animate opacity-0 translate-y-4 transition-all duration-700"
                data-delay="200"
              >
                Contactez-moi aujourd'hui et obtenez un devis personnalisé pour votre site web
              </p>
              <div
                className="flex flex-col gap-4 sm:flex-row justify-center scroll-animate opacity-0 translate-y-4 transition-all duration-700"
                data-delay="300"
              >
                <Link href="tel:+33612345678">
                  <Button
                    size="lg"
                    className="bg-white text-primary hover:bg-gray-100 h-12 rounded-full px-8 font-bold shadow-lg"
                  >
                    <Phone className="mr-2 size-4" />
                    Appeler maintenant
                  </Button>
                </Link>
                <Link href="#contact-form">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white text-white hover:bg-white/10 h-12 rounded-full px-8 font-bold"
                  >
                    <Mail className="mr-2 size-4" />
                    Envoyer un message
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <style jsx>{`
          @keyframes fadeUp {
            from {
              opacity: 0;
              transform: translateY(1rem);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .animate-fade-up {
            animation: fadeUp 0.7s ease-out forwards;
          }
          
          .scroll-animate {
            opacity: 0;
            transform: translateY(1rem);
            transition: opacity 0.7s ease-out, transform 0.7s ease-out;
          }
          
          .scroll-animate.animate-fade-up {
            opacity: 1;
            transform: translateY(0);
          }
        `}</style>
      </main>
    </>
  )
}
