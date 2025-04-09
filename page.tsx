"use client"

import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import { useEffect, useRef } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Home() {
  const skillsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Add any client-side initialization here
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b border-gray-800">
        <Link className="flex items-center justify-center" href="#">
          <span className="font-bold">Portfolio</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:text-gray-300 transition-colors" href="#about">
            About
          </Link>
          <Link className="text-sm font-medium hover:text-gray-300 transition-colors" href="#projects">
            Projects
          </Link>
          <Link className="text-sm font-medium hover:text-gray-300 transition-colors" href="#contact">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2 animate-on-scroll">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none animate-text-glow">
                  John Doe
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">Full Stack Developer</p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row animate-on-scroll">
                <Button className="bg-white text-black hover:bg-gray-200" asChild>
                  <Link href="#contact">
                    Contact Me <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-gray-800" asChild>
                  <Link href="#projects">View My Work</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4 animate-on-scroll">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">About Me</h2>
                <p className="text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I'm a passionate full stack developer with 5 years of experience building web applications. I
                  specialize in React, Node.js, and modern web technologies. I love creating elegant solutions to
                  complex problems and am constantly learning new technologies to improve my skills.
                </p>
                <p className="text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  When I'm not coding, you can find me hiking, reading, or experimenting with new recipes in the
                  kitchen.
                </p>
              </div>
              <div className="space-y-4 animate-on-scroll">
                <h3 className="text-xl font-bold">Skills</h3>
                <div ref={skillsRef} className="skills-container overflow-hidden">
                  <div className="skills-scroll flex flex-wrap gap-2 py-2 animate-scroll hover:pause">
                    <Badge className="bg-gray-800 text-white hover:bg-gray-700">JavaScript</Badge>
                    <Badge className="bg-gray-800 text-white hover:bg-gray-700">TypeScript</Badge>
                    <Badge className="bg-gray-800 text-white hover:bg-gray-700">React</Badge>
                    <Badge className="bg-gray-800 text-white hover:bg-gray-700">Next.js</Badge>
                    <Badge className="bg-gray-800 text-white hover:bg-gray-700">Node.js</Badge>
                    <Badge className="bg-gray-800 text-white hover:bg-gray-700">Express</Badge>
                    <Badge className="bg-gray-800 text-white hover:bg-gray-700">MongoDB</Badge>
                    <Badge className="bg-gray-800 text-white hover:bg-gray-700">PostgreSQL</Badge>
                    <Badge className="bg-gray-800 text-white hover:bg-gray-700">Tailwind CSS</Badge>
                    <Badge className="bg-gray-800 text-white hover:bg-gray-700">Git</Badge>
                    <Badge className="bg-gray-800 text-white hover:bg-gray-700">Docker</Badge>
                    <Badge className="bg-gray-800 text-white hover:bg-gray-700">AWS</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2 animate-on-scroll">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">My Projects</h2>
                <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Here are some of my recent projects. Each one presented unique challenges and opportunities for
                  growth.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:gap-12">
              <Card className="bg-gray-900 border-gray-800 animate-on-scroll hover:scale-105 transition-transform duration-300">
                <CardHeader>
                  <CardTitle className="text-white">E-commerce Platform</CardTitle>
                  <CardDescription className="text-gray-400">
                    A full-featured online store with payment processing
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video overflow-hidden rounded-lg bg-gray-800">
                    <img
                      src="/placeholder.svg?height=225&width=400"
                      alt="E-commerce Platform"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Badge variant="outline" className="border-gray-700 text-gray-300">
                      React
                    </Badge>
                    <Badge variant="outline" className="border-gray-700 text-gray-300">
                      Node.js
                    </Badge>
                    <Badge variant="outline" className="border-gray-700 text-gray-300">
                      MongoDB
                    </Badge>
                    <Badge variant="outline" className="border-gray-700 text-gray-300">
                      Stripe
                    </Badge>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full border-white text-white hover:bg-gray-800" asChild>
                    <Link href="#">View Project</Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card className="bg-gray-900 border-gray-800 animate-on-scroll hover:scale-105 transition-transform duration-300">
                <CardHeader>
                  <CardTitle className="text-white">Task Management App</CardTitle>
                  <CardDescription className="text-gray-400">
                    A collaborative task tracker with real-time updates
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video overflow-hidden rounded-lg bg-gray-800">
                    <img
                      src="/placeholder.svg?height=225&width=400"
                      alt="Task Management App"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Badge variant="outline" className="border-gray-700 text-gray-300">
                      Next.js
                    </Badge>
                    <Badge variant="outline" className="border-gray-700 text-gray-300">
                      TypeScript
                    </Badge>
                    <Badge variant="outline" className="border-gray-700 text-gray-300">
                      PostgreSQL
                    </Badge>
                    <Badge variant="outline" className="border-gray-700 text-gray-300">
                      Socket.io
                    </Badge>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full border-white text-white hover:bg-gray-800" asChild>
                    <Link href="#">View Project</Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card className="bg-gray-900 border-gray-800 animate-on-scroll hover:scale-105 transition-transform duration-300">
                <CardHeader>
                  <CardTitle className="text-white">Weather Dashboard</CardTitle>
                  <CardDescription className="text-gray-400">A real-time weather visualization tool</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video overflow-hidden rounded-lg bg-gray-800">
                    <img
                      src="/placeholder.svg?height=225&width=400"
                      alt="Weather Dashboard"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Badge variant="outline" className="border-gray-700 text-gray-300">
                      React
                    </Badge>
                    <Badge variant="outline" className="border-gray-700 text-gray-300">
                      Chart.js
                    </Badge>
                    <Badge variant="outline" className="border-gray-700 text-gray-300">
                      Weather API
                    </Badge>
                    <Badge variant="outline" className="border-gray-700 text-gray-300">
                      Tailwind CSS
                    </Badge>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full border-white text-white hover:bg-gray-800" asChild>
                    <Link href="#">View Project</Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card className="bg-gray-900 border-gray-800 animate-on-scroll hover:scale-105 transition-transform duration-300">
                <CardHeader>
                  <CardTitle className="text-white">Fitness Tracker</CardTitle>
                  <CardDescription className="text-gray-400">
                    A mobile-first app for tracking workouts and progress
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video overflow-hidden rounded-lg bg-gray-800">
                    <img
                      src="/placeholder.svg?height=225&width=400"
                      alt="Fitness Tracker"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Badge variant="outline" className="border-gray-700 text-gray-300">
                      React Native
                    </Badge>
                    <Badge variant="outline" className="border-gray-700 text-gray-300">
                      Firebase
                    </Badge>
                    <Badge variant="outline" className="border-gray-700 text-gray-300">
                      Redux
                    </Badge>
                    <Badge variant="outline" className="border-gray-700 text-gray-300">
                      D3.js
                    </Badge>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full border-white text-white hover:bg-gray-800" asChild>
                    <Link href="#">View Project</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2 animate-on-scroll">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get in Touch</h2>
                <p className="max-w-[600px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I'm always open to new opportunities and collaborations. Feel free to reach out!
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row animate-on-scroll">
                <Button className="bg-white text-black hover:bg-gray-200 flex items-center gap-2" asChild>
                  <Link href="mailto:john.doe@example.com">
                    <Mail className="h-4 w-4" />
                    Email Me
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-gray-800 flex items-center gap-2"
                  asChild
                >
                  <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                    GitHub
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-gray-800 flex items-center gap-2"
                  asChild
                >
                  <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-800">
        <p className="text-xs text-gray-400">© 2025 John Doe. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:text-gray-300 transition-colors" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:text-gray-300 transition-colors" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}
