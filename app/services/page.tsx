"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  ArrowRight,
  Check,
  X,
  Phone,
  Mail,
  Calendar,
  FileText,
  Code,
  Palette,
  Smartphone,
  Zap,
  Shield,
  Users,
  MapPin,
  Clock,
  Star,
  ChevronRight,
  Award,
  Target,
  Lightbulb,
  HeartHandshake,
  TrendingUp,
  CheckCircle
} from "lucide-react"
import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"

// Custom hook for intersection observer
interface UseOnScreenOptions {
  rootMargin?: string
}

function useOnScreen(
  ref: React.RefObject<Element>,
  rootMargin: UseOnScreenOptions["rootMargin"] = "0px"
): boolean {
  const [isIntersecting, setIntersecting] = useState<boolean>(false)
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]: IntersectionObserverEntry[]) => setIntersecting(entry.isIntersecting),
      { rootMargin }
    )
    
    if (ref.current) {
      observer.observe(ref.current)
    }
    
    return () => observer.disconnect()
  }, [ref, rootMargin])
  
  return isIntersecting
}

export default function ServicesPage() {
  const [activePhase, setActivePhase] = useState(0)
  const phaseRefs = [useRef(null), useRef(null), useRef(null), useRef(null)]
  
  // Check which phase is in view
  const phase1Visible = useOnScreen(phaseRefs[0], "-100px")
  const phase2Visible = useOnScreen(phaseRefs[1], "-100px")
  const phase3Visible = useOnScreen(phaseRefs[2], "-100px")
  const phase4Visible = useOnScreen(phaseRefs[3], "-100px")
  
  useEffect(() => {
    if (phase4Visible) setActivePhase(3)
    else if (phase3Visible) setActivePhase(2)
    else if (phase2Visible) setActivePhase(1)
    else if (phase1Visible) setActivePhase(0)
  }, [phase1Visible, phase2Visible, phase3Visible, phase4Visible])

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
        {/* Hero Section avec image */}
        <section className="relative isolate container mx-auto w-full py-16 md:py-24 lg:py-28">
          <div className="relative z-10 px-4 md:px-6">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="mx-auto max-w-2xl text-left">
                <Badge
                  variant="secondary"
                  className="mb-4 rounded-full px-4 py-1.5 text-sm font-medium shadow-sm hover-glow scroll-animate opacity-0 translate-y-4 transition-all duration-700"
                  data-delay="100"
                >
                  <span className="text-foreground mr-1">✦</span>
                  Expertise Val d'Oise
                </Badge>

                <h1
                  className="mb-6 bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-5xl scroll-animate opacity-0 translate-y-4 transition-all duration-700"
                  data-delay="200"
                >
                  Services de Développement Web Sur-Mesure
                </h1>

                <p
                  className="text-muted-foreground mb-8 text-lg leading-relaxed md:text-xl scroll-animate opacity-0 translate-y-4 transition-all duration-700"
                  data-delay="300"
                >
                  Des solutions concrètes pour booster votre business en ligne, adaptées à votre métier et à votre budget.
                  Je privilégie la qualité et la transparence pour des résultats qui durent.
                </p>

                <div
                  className="flex flex-col gap-4 sm:flex-row scroll-animate opacity-0 translate-y-4 transition-all duration-700"
                  data-delay="400"
                >
                  <Link href="/contact">
                    <Button size="lg" className="h-12 rounded-full px-8 text-base shadow-md hover-lift">
                      Obtenir un Devis Personnalisé
                      <ArrowRight className="ml-2 size-4" />
                    </Button>
                  </Link>
                  <Link href="#pricing">
                    <Button
                      variant="outline"
                      size="lg"
                      className="h-12 rounded-full border-primary/20 px-8 text-base hover-lift hover:border-primary/50 bg-transparent"
                    >
                      Voir les formules
                      <ChevronRight className="ml-2 size-4" />
                    </Button>
                  </Link>
                </div>
              </div>

              <div
                className="relative hidden lg:block scroll-animate opacity-0 translate-y-4 transition-all duration-700"
                data-delay="500"
              >
                <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 z-10"></div>
                  <div className="absolute inset-0 flex items-center justify-center z-20">
                    <div className="text-center p-8">
                      <div className="bg-background/80 backdrop-blur rounded-xl p-6 shadow-lg">
                        <Code className="w-12 h-12 text-primary mx-auto mb-4" />
                        <h3 className="font-semibold text-lg mb-2">Développement Sur-Mesure</h3>
                        <p className="text-sm text-muted-foreground">Val d'Oise & Île-de-France</p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Value Proposition Section avec icônes visuelles */}
        <section className="w-full py-16 md:py-24 bg-muted/30 relative overflow-hidden isolate">
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(from_var(--muted-foreground)_r_g_b_/_0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(from_var(--muted-foreground)_r_g_b_/_0.05)_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>
          <div className="container mx-auto px-4 md:px-6 relative">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2
                className="text-3xl md:text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80 scroll-animate opacity-0 translate-y-4 transition-all duration-700"
                data-delay="100"
              >
                Ce que je vous apporte concrètement
              </h2>
              <p
                className="max-w-[800px] text-muted-foreground md:text-lg scroll-animate opacity-0 translate-y-4 transition-all duration-700"
                data-delay="200"
              >
                Une expertise ciblée sur ce qui fonctionne vraiment pour les professionnels du Val d'Oise
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <Card className="scroll-animate opacity-0 translate-y-4 transition-all duration-700 text-center group" data-delay="300">
                <CardContent className="p-6">
                  <div className="bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors mx-auto flex size-20 items-center justify-center rounded-full mb-4">
                    <div className="relative h-12 w-12">
                      <Palette className="size-12" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Design Professionnel</h3>
                  <p className="text-muted-foreground">
                    Sites modernes et élégants qui vous représentent parfaitement et inspirent confiance
                  </p>
                </CardContent>
              </Card>

              <Card className="scroll-animate opacity-0 translate-y-4 transition-all duration-700 text-center group" data-delay="400">
                <CardContent className="p-6">
                  <div className="bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors mx-auto flex size-20 items-center justify-center rounded-full mb-4">
                    <div className="relative h-12 w-12">
                      <Smartphone className="size-12" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Mobile-First</h3>
                  <p className="text-muted-foreground">
                    Optimisé pour les 76% de visiteurs sur mobile avec une expérience fluide
                  </p>
                </CardContent>
              </Card>

              <Card className="scroll-animate opacity-0 translate-y-4 transition-all duration-700 text-center group" data-delay="500">
                <CardContent className="p-6">
                  <div className="bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors mx-auto flex size-20 items-center justify-center rounded-full mb-4">
                    <div className="relative h-12 w-12">
                      <Zap className="size-12" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Performance</h3>
                  <p className="text-muted-foreground">
                    Sites ultra-rapides pour un meilleur référencement et une expérience utilisateur optimale
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Professional Process Section with Interactive Timeline */}
        <section className="w-full py-20 md:py-28 bg-background relative">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <Badge
                variant="secondary"
                className="rounded-full px-4 py-1.5 text-sm font-medium shadow-sm hover-glow scroll-animate opacity-0 translate-y-4 transition-all duration-700"
                data-delay="100"
              >
                <span className="mr-1 text-primary">✦</span> Méthodologie Professionnelle
              </Badge>
              <h2
                className="text-3xl md:text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80 scroll-animate opacity-0 translate-y-4 transition-all duration-700"
                data-delay="200"
              >
                Un Processus Structuré pour des Résultats Exceptionnels
              </h2>
              <p
                className="max-w-[800px] text-muted-foreground md:text-lg scroll-animate opacity-0 translate-y-4 transition-all duration-700"
                data-delay="300"
              >
                Contrairement à beaucoup de développeurs, je ne me contente pas de coder. J'applique une méthodologie éprouvée qui garantit votre succès en ligne.
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="relative">
                {/* Progress line with animated fill */}
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block">
                  <div 
                    className="absolute top-0 left-0 w-full h-full bg-primary origin-top transition-all duration-1000"
                    style={{ transform: `scaleY(${activePhase / 3})` }}
                  ></div>
                </div>
                
                {/* Progress indicator (mobile) */}
                <div className="md:hidden mb-8 bg-muted rounded-full h-2">
                  <div 
                    className="bg-primary h-2 rounded-full transition-all duration-700"
                    style={{ width: `${((activePhase + 1) / 4) * 100}%` }}
                  ></div>
                </div>
                
                {/* Process Steps */}
                <div className="space-y-12 md:space-y-16">
                  {/* Phase 1: Discovery */}
                  <div ref={phaseRefs[0]} className="flex flex-col md:flex-row gap-8 scroll-animate opacity-0 translate-y-4 transition-all duration-700" data-delay="400">
                    <div className="md:w-1/3 md:text-right md:pr-8">
                      <div className="flex items-center md:justify-end gap-4 mb-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/70 text-primary-foreground font-bold shadow-lg flex-shrink-0">
                          1
                        </div>
                        <h3 className="text-xl font-bold md:text-right">Découverte & Stratégie</h3>
                      </div>
                      <p className="text-muted-foreground md:text-right">
                        (Semaine 1-2) - Nous posons les fondations de votre succès
                      </p>
                    </div>
                    <div className="md:w-2/3 md:pl-8">
                      <Card className="hover-lift">
                        <CardContent className="p-6">
                          <div className="grid md:grid-cols-2 gap-6">
                            <div>
                              <h4 className="font-semibold mb-3 flex items-center gap-2">
                                <Lightbulb className="w-4 h-4 text-primary" />
                                Ce que nous faisons :
                              </h4>
                              <ul className="space-y-2">
                                <li className="flex items-start gap-2">
                                  <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                  <span>Analyse approfondie de votre marché et concurrents</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                  <span>Définition de vos objectifs business précis</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                  <span>Audit de votre présence digitale actuelle</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                  <span>Stratégie de contenu sur-mesure</span>
                                </li>
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-semibold mb-3 flex items-center gap-2">
                                <FileText className="w-4 h-4 text-primary" />
                                Livrables :
                              </h4>
                              <ul className="space-y-2 text-sm text-muted-foreground">
                                <li>• Cahier des charges détaillé</li>
                                <li>• Plan stratégique digital</li>
                                <li>• Personas clients définis</li>
                                <li>• Calendrier de projet</li>
                              </ul>
                              <div className="mt-4 p-3 bg-muted rounded-lg">
                                <p className="text-sm font-medium flex items-center gap-2">
                                  <MapPin className="w-4 h-4 text-primary" />
                                  <span>Spécialité Val d'Oise : Analyse des spécificités locales</span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  {/* Phase 2: Conception */}
                  <div ref={phaseRefs[1]} className="flex flex-col md:flex-row gap-8 scroll-animate opacity-0 translate-y-4 transition-all duration-700" data-delay="500">
                    <div className="md:w-1/3 md:text-right md:pr-8">
                      <div className="flex items-center md:justify-end gap-4 mb-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/70 text-primary-foreground font-bold shadow-lg flex-shrink-0">
                          2
                        </div>
                        <h3 className="text-xl font-bold md:text-right">Conception & Design</h3>
                      </div>
                      <p className="text-muted-foreground md:text-right">
                        (Semaine 2-3) - Nous donnons vie à votre vision
                      </p>
                    </div>
                    <div className="md:w-2/3 md:pl-8">
                      <Card className="hover-lift">
                        <CardContent className="p-6">
                          <div className="grid md:grid-cols-2 gap-6">
                            <div>
                              <h4 className="font-semibold mb-3 flex items-center gap-2">
                                <Palette className="w-4 h-4 text-primary" />
                                Ce que nous faisons :
                              </h4>
                              <ul className="space-y-2">
                                <li className="flex items-start gap-2">
                                  <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                  <span>Création de l'architecture du site (sitemap)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                  <span>Design d'interface sur-mesure et responsive</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                  <span>Maquettes interactives pour validation</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                  <span>Stratégie SEO technique intégrée</span>
                                </li>
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-semibold mb-3 flex items-center gap-2">
                                <Target className="w-4 h-4 text-primary" />
                                Livrables :
                              </h4>
                              <ul className="space-y-2 text-sm text-muted-foreground">
                                <li>• Maquettes design approbation client</li>
                                <li>• Architecture technique validée</li>
                                <li>• Guide de style et charte graphique</li>
                                <li>• Plan d'optimisation SEO</li>
                              </ul>
                              <div className="mt-4 p-3 bg-primary/5 rounded-lg border border-primary/10">
                                <p className="text-sm font-medium text-primary">
                                  "80% de mes clients valident les designs dès le premier jet"
                                </p>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  {/* Phase 3: Development */}
                  <div ref={phaseRefs[2]} className="flex flex-col md:flex-row gap-8 scroll-animate opacity-0 translate-y-4 transition-all duration-700" data-delay="600">
                    <div className="md:w-1/3 md:text-right md:pr-8">
                      <div className="flex items-center md:justify-end gap-4 mb-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/70 text-primary-foreground font-bold shadow-lg flex-shrink-0">
                          3
                        </div>
                        <h3 className="text-xl font-bold md:text-right">Développement & Intégration</h3>
                      </div>
                      <p className="text-muted-foreground md:text-right">
                        (Semaine 3-5) - Transformation du design en réalité technique
                      </p>
                    </div>
                    <div className="md:w-2/3 md:pl-8">
                      <Card className="hover-lift">
                        <CardContent className="p-6">
                          <div className="grid md:grid-cols-2 gap-6">
                            <div>
                              <h4 className="font-semibold mb-3 flex items-center gap-2">
                                <Code className="w-4 h-4 text-primary" />
                                Ce que nous faisons :
                              </h4>
                              <ul className="space-y-2">
                                <li className="flex items-start gap-2">
                                  <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                  <span>Développement front-end et back-end sur-mesure</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                  <span>Intégration de tous les contenus</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                  <span>Optimisation performance et vitesse</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                  <span>Tests multi-navigateurs et multi-appareils</span>
                                </li>
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-semibold mb-3 flex items-center gap-2">
                                <Shield className="w-4 h-4 text-primary" />
                                Technologies :
                              </h4>
                              <ul className="space-y-2 text-sm text-muted-foreground">
                                <li>• Next.js & React (performances optimales)</li>
                                <li>• Tailwind CSS (design cohérent)</li>
                                <li>• Intégration SEO technique avancée</li>
                                <li>• Hébergement haute disponibilité</li>
                              </ul>
                              <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                                <Clock className="w-4 h-4" />
                                <span>Tests qualité : 50+ points de contrôle</span>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  {/* Phase 4: Launch */}
                  <div ref={phaseRefs[3]} className="flex flex-col md:flex-row gap-8 scroll-animate opacity-0 translate-y-4 transition-all duration-700" data-delay="700">
                    <div className="md:w-1/3 md:text-right md:pr-8">
                      <div className="flex items-center md:justify-end gap-4 mb-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/70 text-primary-foreground font-bold shadow-lg flex-shrink-0">
                          4
                        </div>
                        <h3 className="text-xl font-bold md:text-right">Formation & Livraison</h3>
                      </div>
                      <p className="text-muted-foreground md:text-right">
                        (Semaine 5-6) - Votre autonomie, ma priorité
                      </p>
                    </div>
                    <div className="md:w-2/3 md:pl-8">
                      <Card className="hover-lift">
                        <CardContent className="p-6">
                          <div className="grid md:grid-cols-2 gap-6">
                            <div>
                              <h4 className="font-semibold mb-3 flex items-center gap-2">
                                <Users className="w-4 h-4 text-primary" />
                                Ce que nous faisons :
                              </h4>
                              <ul className="space-y-2">
                                <li className="flex items-start gap-2">
                                  <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                  <span>Formation personnalisée à l'utilisation</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                  <span>Mise en ligne et configuration finale</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                  <span>Support technique post-livraison</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                  <span>Documentation complète</span>
                                </li>
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-semibold mb-3 flex items-center gap-2">
                                <Award className="w-4 h-4 text-primary" />
                                Garanties incluses :
                              </h4>
                              <ul className="space-y-2 text-sm text-muted-foreground">
                                <li>• Support gratuit 30 jours après livraison</li>
                                <li>• Documentation complète et personnalisée</li>
                                <li>• Formation en présentiel (Val d'Oise) ou visio</li>
                                <li>• Certificat d'optimisation SEO fourni</li>
                              </ul>
                              <div className="mt-4 p-3 bg-green-50 rounded-lg border border-green-200">
                                <p className="text-sm font-medium text-green-800 flex items-center gap-2">
                                  <HeartHandshake className="w-4 h-4" />
                                  <span>Votre satisfaction garantie à 100%</span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Value Proposition Footer */}
            <div className="text-center mt-16 scroll-animate opacity-0 translate-y-4 transition-all duration-700" data-delay="800">
              <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20 max-w-3xl mx-auto">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Pourquoi cette méthodologie fait la différence ?</h3>
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div>
                      <div className="bg-primary/10 text-primary w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Shield className="w-6 h-6" />
                      </div>
                      <h4 className="font-semibold mb-2">Sans surprise</h4>
                      <p className="text-sm text-muted-foreground">Prix fixe, délais respectés, résultat garanti</p>
                    </div>
                    <div>
                      <div className="bg-primary/10 text-primary w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                        <MapPin className="w-6 h-6" />
                      </div>
                      <h4 className="font-semibold mb-2">Expertise locale</h4>
                      <p className="text-sm text-muted-foreground">Je comprends votre marché Val d'Oise</p>
                    </div>
                    <div>
                      <div className="bg-primary/10 text-primary w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Star className="w-6 h-6" />
                      </div>
                      <h4 className="font-semibold mb-2">Qualité premium</h4>
                      <p className="text-sm text-muted-foreground">Standards professionnels, rien de bâclé</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="mt-8">
                <Link href="/contact">
                  <Button size="lg" className="h-12 rounded-full px-8 text-base shadow-md hover-lift">
                    <Calendar className="mr-2 size-4" />
                    Planifier un appel découverte
                    <ArrowRight className="ml-2 size-4" />
                  </Button>
                </Link>
                <p className="text-muted-foreground mt-4 text-sm">
                  15 minutes au téléphone = une stratégie claire pour votre projet
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Client Results Section */}
        <section className="w-full py-16 md:py-24 bg-muted/50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <Badge
                variant="secondary"
                className="rounded-full px-4 py-1.5 text-sm font-medium shadow-sm hover-glow scroll-animate opacity-0 translate-y-4 transition-all duration-700"
                data-delay="100"
              >
                <span className="mr-1 text-primary">✦</span> Résultats Concrets
              </Badge>
              <h2
                className="text-3xl md:text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80 scroll-animate opacity-0 translate-y-4 transition-all duration-700"
                data-delay="200"
              >
                Des Résultats qui Parlent d'eux-Mêmes
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center scroll-animate opacity-0 translate-y-4 transition-all duration-700" data-delay="300">
                <div className="bg-primary/10 text-primary w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">+120%</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Augmentation des demandes</h3>
                <p className="text-muted-foreground">Pour les artisans du Val d'Oise</p>
              </div>

              <div className="text-center scroll-animate opacity-0 translate-y-4 transition-all duration-700" data-delay="400">
                <div className="bg-primary/10 text-primary w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">4.9/5</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Satisfaction client</h3>
                <p className="text-muted-foreground">Sur Google et recommandations</p>
              </div>

              <div className="text-center scroll-animate opacity-0 translate-y-4 transition-all duration-700" data-delay="500">
                <div className="bg-primary/10 text-primary w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">2-3</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Semaines moyenne</h3>
                <p className="text-muted-foreground">Pour un site vitrine livré</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services/Pricing Section avec visuels */}
        <section id="pricing" className="w-full py-16 md:py-24 bg-background relative">
          <div className="container mx-auto px-4 md:px-6 relative">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <Badge
                variant="secondary"
                className="rounded-full px-4 py-1.5 text-sm font-medium shadow-sm hover-glow scroll-animate opacity-0 translate-y-4 transition-all duration-700"
                data-delay="100"
              >
                <span className="mr-1 text-primary">✦</span> Mes Offres
              </Badge>
              <h2
                className="text-3xl md:text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80 scroll-animate opacity-0 translate-y-4 transition-all duration-700"
                data-delay="200"
              >
                Des Solutions Adaptées à Votre Besoin
              </h2>
              <p
                className="max-w-[800px] text-muted-foreground md:text-lg scroll-animate opacity-0 translate-y-4 transition-all duration-700"
                data-delay="300"
              >
                Je me spécialise sur ce que je maîtrise parfaitement pour vous garantir un résultat exceptionnel
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Site Vitrine Premium */}
              <Card className="scroll-animate opacity-0 translate-y-4 transition-all duration-700 hover-lift group overflow-hidden" data-delay="400">
                <div className="relative h-48 w-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                    <div className="text-center p-6 bg-background/80 backdrop-blur rounded-xl">
                      <Palette className="w-12 h-12 text-primary mx-auto mb-2" />
                      <h3 className="font-semibold">Site Vitrine Premium</h3>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-70"></div>
                  <div className="absolute bottom-4 left-4">
                    <Badge className="bg-primary/90 backdrop-blur">Le plus populaire</Badge>
                  </div>
                </div>
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl">Site Vitrine Premium</CardTitle>
                  <CardDescription className="text-lg">
                    Votre présence en ligne professionnelle et efficace
                  </CardDescription>
                  <div className="mt-4">
                    <div className="text-3xl font-bold text-primary">1 200€ - 1 800€</div>
                    <div className="text-sm text-muted-foreground">Livraison en 2-3 semaines</div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span>Design responsive sur-mesure</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span>5 pages essentielles</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span>Optimisation SEO de base</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span>Formulaire de contact</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span>Formation à la gestion</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span>Hébergement 1 an inclus</span>
                    </li>
                  </ul>
                  <Link href="/devis">
                    <Button className="w-full">Choisir cette formule</Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Blog/Portfolio Basique */}
              <Card className="scroll-animate opacity-0 translate-y-4 transition-all duration-700 hover-lift group overflow-hidden" data-delay="500">
                <div className="relative h-48 w-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-blue-500/20 flex items-center justify-center">
                    <div className="text-center p-6 bg-background/80 backdrop-blur rounded-xl">
                      <FileText className="w-12 h-12 text-primary mx-auto mb-2" />
                      <h3 className="font-semibold">Blog/Portfolio</h3>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-70"></div>
                </div>
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl">Blog/Portfolio Basique</CardTitle>
                  <CardDescription className="text-lg">
                    Partagez votre expertise et attirez plus de clients
                  </CardDescription>
                  <div className="mt-4">
                    <div className="text-3xl font-bold text-primary">1 800€ - 2 500€</div>
                    <div className="text-sm text-muted-foreground">Livraison en 3-4 semaines</div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span>Tout du site vitrine premium</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span>Système de blog intégré</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span>Galerie portfolio avancée</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span>SEO avancé pour le contenu</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span>Catégories et tags</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span>Integration réseaux sociaux</span>
                    </li>
                  </ul>
                  <Link href="/devis">
                    <Button className="w-full">Choisir cette formule</Button>
                  </Link>
                </CardContent>
              </Card>
            </div>

            {/* Coming Soon - E-commerce */}
            <div className="max-w-2xl mx-auto mt-16 scroll-animate opacity-0 translate-y-4 transition-all duration-700" data-delay="600">
              <Card className="border-primary/20 bg-gradient-to-r from-primary/5 to-primary/10 overflow-hidden">
                <div className="relative h-48 w-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-orange-500/20 flex items-center justify-center">
                    <div className="text-center p-6 bg-background/80 backdrop-blur rounded-xl">
                      <TrendingUp className="w-12 h-12 text-primary mx-auto mb-2" />
                      <h3 className="font-semibold">E-commerce (Bientôt)</h3>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-primary/10"></div>
                </div>
                <CardContent className="p-6 flex flex-col md:flex-row items-center text-center md:text-left relative z-10">
                  <div className="flex-1 mb-4 md:mb-0">
                    <h3 className="text-xl font-bold mb-2">Solution E-commerce</h3>
                    <p className="text-muted-foreground mb-4">
                      Boutique en ligne complète pour vendre vos produits et services
                    </p>
                    <Badge variant="outline" className="bg-primary/10 text-primary">
                      Disponible début 2024
                    </Badge>
                  </div>
                  <div>
                    <Link href="/contact">
                      <Button variant="outline">
                        <Mail className="mr-2 w-4 h-4" />
                        Être informé du lancement
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-6">
                Des questions sur ces formules? Discutons-en gratuitement pendant 15 minutes.
              </p>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="rounded-full">
                  <Phone className="mr-2 w-4 h-4" />
                  Consultation téléphonique gratuite
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6">
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
                Tout Ce Que Vous Voulez Savoir
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="border-b">
                  <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary py-6">
                    Combien de temps faut-il pour créer un site vitrine ?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                    En moyenne 2-3 semaines pour un site vitrine premium. Cela inclut la phase de conception, développement, et vos validations. Je respecte toujours les délais convenus dans le devis.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border-b">
                  <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary py-6">
                    Proposez-vous un accompagnement après la livraison ?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                    Absolument ! Tous mes projets incluent 30 jours de support gratuit après la livraison, une formation personnalisée, et une documentation complète. Je propose également des forfaits de maintenance continue.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border-b">
                  <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary py-6">
                    Travaillez-vous à distance ou en présentiel dans le Val d'Oise ?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                    Les deux ! Je me déplace volontiers dans tout le Val d'Oise (Cergy, Pontoise, etc.) pour les rencontres importantes, mais la majorité du processus peut se faire à distance pour plus de flexibilité.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border-b">
                  <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary py-6">
                    Que se passe-t-il si je ne suis pas satisfait du résultat ?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                    Votre satisfaction est ma priorité. Si le résultat ne vous convient pas, nous travaillons ensemble jusqu'à ce qu'il réponde parfaitement à vos attentes. Je n'ai jamais eu besoin de recourir à cette garantie, mais elle existe pour vous rassurer.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-6">Une question plus spécifique ? Parlons-en directement.</p>
              <Link href="/contact">
                <Button size="lg" className="rounded-full">
                  <Phone className="mr-2 w-4 h-4" />
                  Poser ma question
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="w-full py-20 bg-gradient-to-r from-primary to-primary/80">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <div className="max-w-3xl mx-auto">
              <h2
                className="text-2xl md:text-3xl font-bold text-white mb-6 scroll-animate opacity-0 translate-y-4 transition-all duration-700"
                data-delay="100"
              >
                Prêt à Transformer Votre Présence en Ligne ?
              </h2>
              <p
                className="text-white/90 mb-8 text-lg scroll-animate opacity-0 translate-y-4 transition-all duration-700"
                data-delay="200"
              >
                Rejoignez les artisans et professionnels du Val d'Oise qui ont déjà boosté leur business avec un site web sur-mesure.
              </p>
              
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-gray-100 h-14 rounded-full px-10 text-lg font-bold shadow-lg scroll-animate opacity-0 translate-y-4 transition-all duration-700"
                  data-delay="300"
                >
                  🚀 Demander Mon Devis Personnalisé 🚀
                </Button>
              </Link>
              <p
                className="text-white/80 mt-4 text-sm scroll-animate opacity-0 translate-y-4 transition-all duration-700"
                data-delay="400"
              >
                (15 minutes au téléphone pour une stratégie claire et un devis précis)
              </p>
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
