"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ArrowRight,
  Eye,
  Github,
  ExternalLink,
  Filter,
  Star,
  Calendar,
  Code,
  Palette,
  Smartphone,
  Zap,
  ChevronDown,
  MapPin
} from "lucide-react"
import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("all")
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  // Données des projets (à remplacer par vos propres projets)
  const projects = [
    {
      id: 1,
      title: "La Table Française",
      description: "Site vitrine pour un restaurant gastronomique avec système de réservation en ligne",
      image: "/placeholder.svg?height=400&width=600",
      category: "site-vitrine",
      technologies: ["Next.js", "Tailwind CSS", "Prisma"],
      featured: true,
      results: "+120% de réservations en ligne",
      link: "#",
      github: "#",
      year: 2024
    },
    {
      id: 2,
      title: "Artisan Menuisier Valdoisien",
      description: "Portfolio en ligne pour un artisan menuisier avec galerie de réalisations",
      image: "/placeholder.svg?height=400&width=600",
      category: "site-vitrine",
      technologies: ["React", "CSS Modules", "Node.js"],
      featured: false,
      results: "5 devis par semaine en moyenne",
      link: "#",
      github: "#",
      year: 2024
    },
    {
      id: 3,
      title: "Blog Littéraire",
      description: "Plateforme de blog pour un auteur avec système de commentaires et abonnements",
      image: "/placeholder.svg?height=400&width=600",
      category: "blog-portfolio",
      technologies: ["Next.js", "Tailwind CSS", "MongoDB"],
      featured: true,
      results: "200 abonnés en 2 mois",
      link: "#",
      github: "#",
      year: 2023
    },
    {
      id: 4,
      title: "Studio de Yoga",
      description: "Site présentiel avec planning des cours et formulaire d'inscription",
      image: "/placeholder.svg?height=400&width=600",
      category: "site-vitrine",
      technologies: ["HTML/CSS", "JavaScript", "PHP"],
      featured: false,
      results: "30 nouvelles inscriptions",
      link: "#",
      github: "#",
      year: 2023
    },
    {
      id: 5,
      title: "Portfolio Photographe",
      description: "Galerie portfolio pour un photographe professionnel avec filtres par catégorie",
      image: "/placeholder.svg?height=400&width=600",
      category: "blog-portfolio",
      technologies: ["React", "Framer Motion", "Firebase"],
      featured: false,
      results: "Exposition digitale des œuvres",
      link: "#",
      github: "#",
      year: 2023
    },
    {
      id: 6,
      title: "Site Association",
      description: "Présentation d'une association caritative avec formulaire de dons",
      image: "/placeholder.svg?height=400&width=600",
      category: "site-vitrine",
      technologies: ["WordPress", "Elementor", "Stripe"],
      featured: false,
      results: "Augmentation des dons de 40%",
      link: "#",
      github: "#",
      year: 2023
    }
  ]

  const filters = [
    { id: "all", label: "Tous les projets" },
    { id: "site-vitrine", label: "Sites vitrine" },
    { id: "blog-portfolio", label: "Blogs & Portfolios" },
    { id: "ecommerce", label: "E-commerce (bientôt)" }
  ]

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

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
                Mes Réalisations
              </Badge>

              <h1
                className="mb-6 bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-5xl scroll-animate opacity-0 translate-y-4 transition-all duration-700"
                data-delay="200"
              >
                Des projets concrets pour des résultats tangibles
              </h1>

              <p
                className="text-muted-foreground mb-8 text-lg leading-relaxed md:text-xl scroll-animate opacity-0 translate-y-4 transition-all duration-700"
                data-delay="300"
              >
                Découvrez une sélection de mes réalisations pour des professionnels du Val d'Oise et d'Île-de-France.
                Chaque projet est unique et conçu sur mesure pour répondre à des besoins spécifiques.
              </p>

              <div
                className="flex flex-col gap-4 sm:flex-row justify-center scroll-animate opacity-0 translate-y-4 transition-all duration-700"
                data-delay="400"
              >
                <Link href="/contact">
                  <Button size="lg" className="h-12 rounded-full px-8 text-base shadow-md hover-lift">
                    Discuter de mon projet
                    <ArrowRight className="ml-2 size-4" />
                  </Button>
                </Link>
                <Link href="#portfolio">
                  <Button
                    variant="outline"
                    size="lg"
                    className="h-12 rounded-full border-primary/20 px-8 text-base hover-lift hover:border-primary/50 bg-transparent"
                  >
                    Voir les projets
                    <ChevronDown className="ml-2 size-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="w-full py-16 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center scroll-animate opacity-0 translate-y-4 transition-all duration-700" data-delay="100">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">15+</div>
                <div className="text-muted-foreground">Projets livrés</div>
              </div>
              <div className="text-center scroll-animate opacity-0 translate-y-4 transition-all duration-700" data-delay="200">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">100%</div>
                <div className="text-muted-foreground">Clients satisfaits</div>
              </div>
              <div className="text-center scroll-animate opacity-0 translate-y-4 transition-all duration-700" data-delay="300">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">2+</div>
                <div className="text-muted-foreground">Ans d'expérience</div>
              </div>
              <div className="text-center scroll-animate opacity-0 translate-y-4 transition-all duration-700" data-delay="400">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">12</div>
                <div className="text-muted-foreground">Technologies maîtrisées</div>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="w-full py-16 md:py-24 bg-background relative">
          <div className="container mx-auto px-4 md:px-6 relative">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <Badge
                variant="secondary"
                className="rounded-full px-4 py-1.5 text-sm font-medium shadow-sm hover-glow scroll-animate opacity-0 translate-y-4 transition-all duration-700"
                data-delay="100"
              >
                <span className="mr-1 text-primary">✦</span> Mes Réalisations
              </Badge>
              <h2
                className="text-3xl md:text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80 scroll-animate opacity-0 translate-y-4 transition-all duration-700"
                data-delay="200"
              >
                Une sélection de mes projets
              </h2>
              <p
                className="max-w-[800px] text-muted-foreground md:text-lg scroll-animate opacity-0 translate-y-4 transition-all duration-700"
                data-delay="300"
              >
                Découvrez comment j'ai aidé des professionnels comme vous à développer leur présence en ligne
              </p>
            </div>

            {/* Filters */}
            <div className="mb-12 flex flex-col items-center scroll-animate opacity-0 translate-y-4 transition-all duration-700" data-delay="400">
              <div className="relative inline-block">
                <Button
                  variant="outline"
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                  className="rounded-full px-6 bg-transparent"
                >
                  <Filter className="mr-2 size-4" />
                  Filtrer les projets
                  <ChevronDown className={`ml-2 size-4 transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} />
                </Button>
                
                {isFilterOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-background border rounded-lg shadow-lg z-10">
                    {filters.map((filter) => (
                      <button
                        key={filter.id}
                        onClick={() => {
                          setActiveFilter(filter.id)
                          setIsFilterOpen(false)
                        }}
                        className={`w-full text-left px-4 py-2 hover:bg-muted transition-colors ${
                          activeFilter === filter.id ? 'bg-primary/10 text-primary' : ''
                        }`}
                      >
                        {filter.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              
              <div className="mt-4 flex flex-wrap justify-center gap-2">
                {filters.map((filter) => (
                  <Badge
                    key={filter.id}
                    variant={activeFilter === filter.id ? "default" : "outline"}
                    onClick={() => setActiveFilter(filter.id)}
                    className="cursor-pointer hover-glow"
                  >
                    {filter.label}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <Card 
                  key={project.id} 
                  className="overflow-hidden hover-lift group scroll-animate opacity-0 translate-y-4 transition-all duration-700"
                  data-delay={500 + (index * 100)}
                >
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {project.featured && (
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-amber-500">
                          <Star className="mr-1 size-3" />
                          Projet phare
                        </Badge>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                    <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {project.github && (
                        <Button size="icon" className="rounded-full h-8 w-8 bg-background/80 backdrop-blur">
                          <Github className="size-4" />
                        </Button>
                      )}
                      {project.link && (
                        <Button size="icon" className="rounded-full h-8 w-8 bg-background/80 backdrop-blur">
                          <ExternalLink className="size-4" />
                        </Button>
                      )}
                    </div>
                  </div>
                  
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                      <Badge variant="outline" className="flex items-center">
                        <Calendar className="mr-1 size-3" />
                        {project.year}
                      </Badge>
                    </div>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Zap className="mr-1 size-4 text-green-500" />
                      <span>{project.results}</span>
                    </div>
                    
                    <Button variant="outline" className="w-full mt-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Eye className="mr-2 size-4" />
                      Voir les détails
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className="text-center py-12 scroll-animate opacity-0 translate-y-4 transition-all duration-700" data-delay="500">
                <div className="bg-muted rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Filter className="size-8 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Aucun projet dans cette catégorie</h3>
                <p className="text-muted-foreground">D'autres projets seront bientôt disponibles dans cette catégorie.</p>
              </div>
            )}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="w-full py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <Badge
                variant="secondary"
                className="rounded-full px-4 py-1.5 text-sm font-medium shadow-sm hover-glow scroll-animate opacity-0 translate-y-4 transition-all duration-700"
                data-delay="100"
              >
                <span className="mr-1 text-primary">✦</span> Témoignages
              </Badge>
              <h2
                className="text-3xl md:text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80 scroll-animate opacity-0 translate-y-4 transition-all duration-700"
                data-delay="200"
              >
                Ce que disent mes clients
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="scroll-animate opacity-0 translate-y-4 transition-all duration-700" data-delay="300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-primary/20 text-primary flex size-12 items-center justify-center rounded-full font-bold">
                      M
                    </div>
                    <div>
                      <div className="font-semibold">Marc</div>
                      <div className="text-muted-foreground text-sm">Artisan plombier à Saint-Ouen-l'Aumône</div>
                    </div>
                  </div>
                  <div className="flex items-center mb-3">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="italic text-foreground">
                    "J'ai multiplié par 5 mes demandes de devis en 3 mois! Maintenant je dois refuser du travail. Un site parfaitement adapté à mon métier."
                  </p>
                </CardContent>
              </Card>

              <Card className="scroll-animate opacity-0 translate-y-4 transition-all duration-700" data-delay="400">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-primary/20 text-primary flex size-12 items-center justify-center rounded-full font-bold">
                      S
                    </div>
                    <div>
                      <div className="font-semibold">Sophie</div>
                      <div className="text-muted-foreground text-sm">Créatrice de bijoux à Cergy</div>
                    </div>
                  </div>
                  <div className="flex items-center mb-3">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="italic text-foreground">
                    "Mon site portfolio a vraiment mis en valeur mon travail. Les clients peuvent maintenant voir toutes mes créations et me contacter facilement."
                  </p>
                </CardContent>
              </Card>

              <Card className="scroll-animate opacity-0 translate-y-4 transition-all duration-700" data-delay="500">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-primary/20 text-primary flex size-12 items-center justify-center rounded-full font-bold">
                      T
                    </div>
                    <div>
                      <div className="font-semibold">Thomas</div>
                      <div className="text-muted-foreground text-sm">Restaurant à Pontoise</div>
                    </div>
                  </div>
                  <div className="flex items-center mb-3">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="italic text-foreground">
                    "Enfin un développeur qui parle humain! Compréhensif, patient et ultra-compétent. Mon site de réservation fonctionne parfaitement."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="w-full py-16 md:py-24 bg-background relative">
          <div className="container mx-auto px-4 md:px-6 relative">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <Badge
                variant="secondary"
                className="rounded-full px-4 py-1.5 text-sm font-medium shadow-sm hover-glow scroll-animate opacity-0 translate-y-4 transition-all duration-700"
                data-delay="100"
              >
                <span className="mr-1 text-primary">✦</span> Ma Méthode
              </Badge>
              <h2
                className="text-3xl md:text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80 scroll-animate opacity-0 translate-y-4 transition-all duration-700"
                data-delay="200"
              >
                Comment je travaille sur vos projets
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="text-center scroll-animate opacity-0 translate-y-4 transition-all duration-700" data-delay="300">
                <CardContent className="p-6">
                  <div className="bg-primary/10 text-primary mx-auto flex size-16 items-center justify-center rounded-full mb-4">
                    <Palette className="size-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Design Personnalisé</h3>
                  <p className="text-muted-foreground">
                    Création d'une identité visuelle unique qui représente parfaitement votre entreprise et attire vos clients idéaux.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center scroll-animate opacity-0 translate-y-4 transition-all duration-700" data-delay="400">
                <CardContent className="p-6">
                  <div className="bg-primary/10 text-primary mx-auto flex size-16 items-center justify-center rounded-full mb-4">
                    <Code className="size-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Développement Sur-Mesure</h3>
                  <p className="text-muted-foreground">
                    Développement de solutions adaptées à vos besoins spécifiques avec les technologies les plus modernes.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center scroll-animate opacity-0 translate-y-4 transition-all duration-700" data-delay="500">
                <CardContent className="p-6">
                  <div className="bg-primary/10 text-primary mx-auto flex size-16 items-center justify-center rounded-full mb-4">
                    <Smartphone className="size-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Optimisation Mobile</h3>
                  <p className="text-muted-foreground">
                    Sites parfaitement optimisés pour mobile, là où se trouvent la majorité de vos clients potentiels.
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
                Prêt à créer votre présence en ligne ?
              </h2>
              <p
                className="text-white/90 mb-8 text-lg scroll-animate opacity-0 translate-y-4 transition-all duration-700"
                data-delay="200"
              >
                Discutons de votre projet et créons ensemble un site qui boostera votre activité
              </p>
              <div
                className="flex flex-col gap-4 sm:flex-row justify-center scroll-animate opacity-0 translate-y-4 transition-all duration-700"
                data-delay="300"
              >
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-white text-primary hover:bg-gray-100 h-12 rounded-full px-8 font-bold shadow-lg"
                  >
                    Discuter de mon projet
                    <ArrowRight className="ml-2 size-4" />
                  </Button>
                </Link>
                <Link href="/services">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white text-white hover:bg-white/10 h-12 rounded-full px-8 font-bold"
                  >
                    Voir mes services
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
