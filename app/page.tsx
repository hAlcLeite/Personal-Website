"use client"

import { useState, useEffect, useRef } from "react"
import { Github, Linkedin, Mail, Instagram, ArrowDown, ExternalLink, MapPin } from "lucide-react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BlurFade } from "@/components/magicui/blur-fade"
import { FlickeringGrid } from "@/components/magicui/flickering-grid"
import { ShimmerButton } from "@/components/magicui/shimmer-button"
import Image from "next/image"

export default function Home() {
  const [activeSection, setActiveSection] = useState("home")
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isInProjectsSection, setIsInProjectsSection] = useState(false)
  const projectsSectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "work-experience", "projects", "technical-skills", "extracurriculars", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (projectsSectionRef.current) {
        const rect = projectsSectionRef.current.getBoundingClientRect()
        const isInSection = e.clientY >= rect.top && e.clientY <= rect.bottom
        setIsInProjectsSection(isInSection)

        if (isInSection) {
          setMousePosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top + window.scrollY - projectsSectionRef.current.offsetTop,
          })
        }
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-primary font-bold text-xl">
            HL
          </Link>
          <div className="hidden md:flex space-x-6 items-center">
            {["About", "Work Experience", "Projects", "Technical Skills", "Extracurriculars", "Contact"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === item.toLowerCase().replace(" ", "-") ? "text-primary" : "text-foreground/80"
                }`}
              >
                {item}
              </Link>
            ))}
            <Link
              href="#"
              className="text-sm font-medium transition-colors hover:text-primary text-foreground/80 hover:bg-primary/10 px-3 py-2 rounded-md border border-primary/20"
            >
              Resume
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="home" className="relative pt-32 pb-16 min-h-screen flex items-center">
        <FlickeringGrid
          className="absolute inset-0 z-0 [mask-image:radial-gradient(circle_at_center,white,transparent)]"
          squareSize={4}
          gridGap={6}
          color="#60A5FA"
          maxOpacity={0.5}
          flickerChance={0.1}
        />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <BlurFade>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-primary">Henrique Alcantara Leite</h1>
            <p className="text-xl text-muted-foreground mb-8">Computer Science Student at Western University</p>
            <div className="flex gap-4 justify-center">
              <ShimmerButton
                background="hsl(var(--primary))"
                shimmerColor="hsl(var(--primary-foreground))"
                onClick={() => {
                  window.location.href = "#about"
                }}
              >
                <span className="text-primary-foreground text-sm font-medium leading-none tracking-tight lg:text-lg">
                  Learn More
                </span>
              </ShimmerButton>
              <a
                href="#contact"
                className="flex items-center gap-2 font-bold underline hover:text-primary/80 transition-colors"
              >
                Contact Me <ArrowDown className="h-4 w-4" />
              </a>
            </div>
          </BlurFade>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <BlurFade>
            <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
            <div className="bg-background/50 backdrop-blur-sm border border-primary/20 rounded-lg p-8 max-w-4xl mx-auto">
              <div className="text-foreground/80 space-y-4">
                <p>
                  I'm 20 years old and I'm going into my 3rd year in Computer Science student at Western University, specializing in AI, machine
                  learning.
                </p>
                <p>
                  Professionally, I'm a Global Wealth Data Analyst at Scotiabank, where I'm currently developing Power BI dashboards, as well as Excel Macros and VBA scripts to automate manual compliance 
                  and client onboarding processes, with the goal of streamlining operations and reducing the team's administrative workload. Previously, I worked at
                  Autumn, helping shape growth strategy through market sizing and financial modeling.
                </p>
                <p>
                  In the upcoming school year, I'll be serving as VP of Cybersecurity for Western Cyber Society and a
                  Project Manager for Western AI, where I'll lead initiatives focused on applied machine learning and
                  cybersecurity innovation.
                </p>
                <p>
                  Born in Brazil and now based in Canada, I'm passionate about solving real-world problems through code,
                  machine learning, and technical innovation.
                </p>
                <p>
                  <span className="font-medium text-foreground/80">Interests:</span> Machine Learning & AI,
                  Cybersecurity, Weightlifting, Golf, American Football, Grunge & Classic Rock, Ancient History, Star
                  Wars, Dune.
                </p>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Work Experience Section */}
      <section id="work-experience" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <BlurFade>
            <h2 className="text-3xl font-bold mb-8 text-center">Work Experience</h2>
            <div className="space-y-8 max-w-4xl mx-auto">
              <BlurFade delay={0.1}>
                <Card className="bg-background/50 backdrop-blur-sm border-primary/20">
                  <CardHeader className="flex flex-row items-start gap-4 pb-2">
                    <div className="w-12 h-12 rounded overflow-hidden">
                      <Image
                        src="/images/scotiabank-logo.png"
                        alt="Scotiabank"
                        width={48}
                        height={48}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="space-y-1 flex-1">
                      <CardTitle className="text-xl font-bold">Global Wealth Data Analyst</CardTitle>
                      <p className="text-muted-foreground">Scotiabank</p>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <MapPin className="h-3 w-3" />
                        <span>Toronto, Hybrid</span>
                      </div>
                    </div>
                    <div className="text-primary text-sm">May 2025 – August 2025</div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-foreground/80 mt-2 space-y-2">
                      <p>
                        Currently developing Excel Macros and VBA scripts to automate manual compliance and client onboarding processes, 
                        with the goal of streamlining operations and reducing the team's administrative workload.
                      </p>
                      <p>
                        Engineering Python-based web scraping tools to aggregate and qualify new client leads from public
                        financial registries and business directories, enhancing the efficiency of outreach campaigns.
                      </p>
                      <p>
                        Engineered Power BI dashboards integrating Charles River data, enabling real-time visualization 
                        of portfolio exposures and reducing risk analysis time by 30%.
                      </p>
                      <p>
                        Conducting in-depth research on fixed income investment strategies, analyzing yield curves,
                        credit spreads, and duration to inform portfolio construction and risk management decisions.
                      </p>
                    </CardDescription>
                  </CardContent>
                  <CardFooter>
                    <div className="flex flex-wrap gap-2">
                      {["Excel", "VBA", "Python", "Web Scraping", "Power BI", "Financial Modeling", "Fixed Income"].map((tag) => (
                        <Badge key={tag} variant="outline" className="bg-background/50 text-primary border-primary/30">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardFooter>
                </Card>
              </BlurFade>

              <BlurFade delay={0.2}>
                <Card className="bg-background/50 backdrop-blur-sm border-primary/20">
                  <CardHeader className="flex flex-row items-start gap-4 pb-2">
                    <div className="w-12 h-12 rounded overflow-hidden">
                      <Image
                        src="/images/autumn-logo.png"
                        alt="Autumn"
                        width={48}
                        height={48}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="space-y-1 flex-1">
                      <CardTitle className="text-xl font-bold">Business Development Intern</CardTitle>
                      <Link
                        href="https://www.autumn.co/"
                        target="_blank"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        Autumn
                      </Link>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <MapPin className="h-3 w-3" />
                        <span>New York, Remote</span>
                      </div>
                    </div>
                    <div className="text-primary text-sm">May 2024 – August 2024</div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-foreground/80 mt-2 space-y-2">
                      <p>
                        Autumn is a seed-funded startup based in New York that operates an end-of-life digital
                        marketplace, connecting bereaved communities with service providers to manage life after loss.
                      </p>
                      <p>
                        Conducted Total Addressable Market (TAM), Serviceable Available Market (SAM), and Serviceable
                        Obtainable Market (SOM) analyses to refine market strategy, uncovering a 15% underserved
                        customer segment in the end-of-life services industry.
                      </p>
                      <p>
                        Built dynamic financial models to forecast future earnings under various pricing strategies,
                        directly supporting the launch of a tiered subscription model projected to increase revenue by
                        20%.
                      </p>
                      <p>
                        Researched and evaluated monetization strategies across adjacent industries, informing long-term
                        growth planning and investor pitch materials.
                      </p>
                      <p>
                        Performed market sizing and competitive landscape analysis to benchmark product viability and
                        identify expansion opportunities.
                      </p>
                    </CardDescription>
                  </CardContent>
                  <CardFooter>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Market Research",
                        "Financial Modeling",
                        "TAM/SAM/SOM Analysis",
                        "Competitive Analysis",
                        "Revenue Strategy",
                      ].map((tag) => (
                        <Badge key={tag} variant="outline" className="bg-background/50 text-primary border-primary/30">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardFooter>
                </Card>
              </BlurFade>

              <BlurFade delay={0.3}>
                <Card className="bg-background/50 backdrop-blur-sm border-primary/20">
                  <CardHeader className="flex flex-row items-start gap-4 pb-2">
                    <div className="w-12 h-12 rounded bg-primary/20 flex items-center justify-center overflow-hidden">
                      <div className="w-full h-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                        NX
                      </div>
                    </div>
                    <div className="space-y-1 flex-1">
                      <CardTitle className="text-xl font-bold">Co-Founder</CardTitle>
                      <p className="text-muted-foreground">NX Media</p>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <MapPin className="h-3 w-3" />
                        <span>Remote</span>
                      </div>
                    </div>
                    <div className="text-primary text-sm">May 2022 – September 2022</div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-foreground/80 mt-2">
                      <p>Social Media Marketing Agency for E-commerce businesses.</p>
                    </CardDescription>
                  </CardContent>
                  <CardFooter>
                    <div className="flex flex-wrap gap-2">
                      {["Social Media Marketing", "E-commerce", "Business Development"].map((tag) => (
                        <Badge key={tag} variant="outline" className="bg-background/50 text-primary border-primary/30">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardFooter>
                </Card>
              </BlurFade>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Projects Section with Mouse Follower */}
      <section ref={projectsSectionRef} id="projects" className="py-20 bg-muted/50 relative overflow-hidden">
        {/* Mouse Follower Effect */}
        {isInProjectsSection && (
          <div
            className="absolute pointer-events-none z-10 transition-all duration-75 ease-out"
            style={{
              left: mousePosition.x - 100,
              top: mousePosition.y - 100,
              width: 200,
              height: 200,
            }}
          >
            <div className="w-full h-full rounded-full bg-gradient-to-r from-primary/20 via-primary/10 to-transparent blur-xl animate-pulse" />
            <div className="absolute inset-4 rounded-full bg-gradient-to-r from-primary/30 via-primary/20 to-transparent blur-lg" />
            <div className="absolute inset-8 rounded-full bg-primary/40 blur-md" />
          </div>
        )}

        <div className="container mx-auto px-4 relative z-20">
          <BlurFade>
            <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <BlurFade delay={0.1}>
                <Card className="bg-background/50 backdrop-blur-sm border-primary/20 h-full flex flex-col hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold">VocalGuard: AI Voice Cloning Detection</CardTitle>
                    <p className="text-primary text-sm">September 2024 – March 2025</p>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="mb-4 overflow-hidden rounded-md">
                      <Image
                        src="/images/ai-voice-detection.png"
                        alt="AI Voice Detection Visualization"
                        width={400}
                        height={200}
                        className="w-full h-32 object-cover"
                      />
                    </div>
                    <CardDescription className="text-foreground/80 mt-2 space-y-2">
                      <p>
                        AI-powered system designed to detect AI-generated voice clones used in phone scams and
                        cyberattacks, leveraging machine learning techniques to analyze audio files and identify
                        synthetic speech with high accuracy.
                      </p>
                      <p>
                        Led a team of 5 developers to build a full-stack cybersecurity solution that detects
                        AI-generated voice scams in real-time. Processing raw audio with Mel spectrograms & LFCC
                        features, training a ML model to classify real vs. cloned voices.
                      </p>
                      <p>
                        Using random forest, the model achieved over 87% accuracy. Won the Best Real-World Application
                        Award at Toronto Tech Expo, sponsored by Slalom.
                      </p>
                    </CardDescription>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center">
                    <div className="flex flex-wrap gap-2">
                      {["Python", "PyTorch", "React.js", "FastAPI", "TypeScript", "TailwindCSS"].map((tag) => (
                        <Badge key={tag} variant="outline" className="bg-background/50 text-primary border-primary/30">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Link
                      href="https://www.linkedin.com/feed/update/urn:li:activity:7308559845937299456/"
                      target="_blank"
                      className="text-primary hover:text-primary/80"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Link>
                  </CardFooter>
                </Card>
              </BlurFade>

              <BlurFade delay={0.2}>
                <Card className="bg-background/50 backdrop-blur-sm border-primary/20 h-full flex flex-col hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold">Thermal Road User Detection System</CardTitle>
                    <p className="text-primary text-sm">March 2025</p>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="mb-4 overflow-hidden rounded-md">
                      <Image
                        src="/images/thermal-detection.png"
                        alt="Thermal Detection System"
                        width={400}
                        height={200}
                        className="w-full h-32 object-cover"
                      />
                    </div>
                    <CardDescription className="text-foreground/80 mt-2 space-y-2">
                      <p>
                        Developed as part of the Automotive Innovation Challenge hosted by Western University
                        Engineering Faculty and sponsored by General Motors.
                      </p>
                      <p>
                        Real-time road user detection system using thermal imaging technology, specifically designed to
                        improve pedestrian and cyclist safety in low-visibility conditions by detecting and classifying
                        pedestrians, bicycles, and vehicles.
                      </p>
                      <p>
                        Implemented Faster R-CNN with ResNet50-FPN backbone, achieving 87% mean average precision and
                        high detection accuracy across different classes.
                      </p>
                    </CardDescription>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center">
                    <div className="flex flex-wrap gap-2">
                      {["Python", "PyTorch", "Computer Vision", "Raspberry Pi"].map((tag) => (
                        <Badge key={tag} variant="outline" className="bg-background/50 text-primary border-primary/30">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Link
                      href="https://github.com/hAlcLeite/Thermal-road-user-detection"
                      target="_blank"
                      className="text-primary hover:text-primary/80"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Link>
                  </CardFooter>
                </Card>
              </BlurFade>

              <BlurFade delay={0.3}>
                <Card className="bg-background/50 backdrop-blur-sm border-primary/20 h-full flex flex-col hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold">London Bus Time Prediction</CardTitle>
                    <p className="text-primary text-sm">October 2024 – April 2025</p>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="mb-4 overflow-hidden rounded-md">
                      <Image
                        src="/images/webpage-ltc.png"
                        alt="Bus Prediction Analytics Dashboard"
                        width={400}
                        height={200}
                        className="w-full h-32 object-cover"
                      />
                    </div>
                    <CardDescription className="text-foreground/80 mt-2 space-y-2">
                      <p>
                        A machine learning-based system for predicting bus arrival times in London, Ontario. This project
                        uses a Bidirectional LSTM neural network to provide accurate predictions for various bus routes.
                      </p>
                      <p>
                        Led a team of six developers in collaboration with the Mobility Technology (MoTech) research
                        group under Dr. Yili Tang at Western University.
                      </p>
                      <p>
                        Integrated real-time bus location data from the City of London transit portal and incorporated
                        weather APIs to refine prediction accuracy.
                      </p>
                    </CardDescription>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center">
                    <div className="flex flex-wrap gap-2">
                      {["Python", "PyTorch", "Streamlit", "RESTful APIs", "Docker"].map((tag) => (
                        <Badge key={tag} variant="outline" className="bg-background/50 text-primary border-primary/30">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Link
                      href="https://github.com/WesternDeveloperSociety/WDS_LTC_BUS"
                      target="_blank"
                      className="text-primary hover:text-primary/80"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Link>
                  </CardFooter>
                </Card>
              </BlurFade>

              <BlurFade delay={0.4}>
                <Card className="bg-background/50 backdrop-blur-sm border-primary/20 h-full flex flex-col hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold">Virtual Pet Game</CardTitle>
                    <p className="text-primary text-sm">March 2025 – April 2025</p>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="mb-4 overflow-hidden rounded-md">
                      <Image
                        src="/images/pet-game.png"
                        alt="Virtual Pet Game Interface"
                        width={400}
                        height={200}
                        className="w-full h-32 object-cover"
                      />
                    </div>
                    <CardDescription className="text-foreground/80 mt-2 space-y-2">
                      <p>
                        A virtual pet simulation game developed using Java 23+, featuring interactive pet care mechanics
                        and parental controls.
                      </p>
                      <p>
                        Built with Java Swing and AWT for the user interface, the project implements data persistence
                        through CSV files and includes comprehensive unit testing with JUnit 5.
                      </p>
                      <p>
                        The game demonstrates our team's ability to create engaging applications while maintaining clean
                        code architecture and following agile development principles.
                      </p>
                    </CardDescription>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center">
                    <div className="flex flex-wrap gap-2">
                      {["Java 23+", "Java Swing/AWT", "Javax.audio", "JUnit 5", "Git", "CSV"].map((tag) => (
                        <Badge key={tag} variant="outline" className="bg-background/50 text-primary border-primary/30">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Link href="mailto:hleite@uwo.ca" className="text-primary hover:text-primary/80">
                      <Mail className="h-4 w-4" />
                    </Link>
                  </CardFooter>
                </Card>
              </BlurFade>

              <BlurFade delay={0.5}>
                <Card className="bg-background/50 backdrop-blur-sm border-primary/20 h-full flex flex-col hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold">Personal Portfolio Website</CardTitle>
                    <p className="text-primary text-sm">June 2025</p>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardDescription className="text-foreground/80 mt-2 space-y-2">
                      <p>
                        Modern, responsive personal portfolio website built with Next.js and featuring advanced
                        animations and interactive elements.
                      </p>
                      <p>
                        Showcases professional experience, projects, and technical skills with a dark theme design
                        inspired by modern web applications.
                      </p>
                      <p>
                        Implements smooth scroll animations, flickering grid backgrounds, and shimmer button effects for
                        an engaging user experience.
                      </p>
                    </CardDescription>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center">
                    <div className="flex flex-wrap gap-2">
                      {["Next.js", "TypeScript", "TailwindCSS", "Framer Motion", "Node.js"].map((tag) => (
                        <Badge key={tag} variant="outline" className="bg-background/50 text-primary border-primary/30">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Link
                      href="https://github.com/hAlcLeite/Personal-Website"
                      target="_blank"
                      className="text-primary hover:text-primary/80"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Link>
                  </CardFooter>
                </Card>
              </BlurFade>

              <BlurFade delay={0.6}>
                <Card className="bg-background/50 backdrop-blur-sm border-primary/20 h-full flex flex-col hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold">Black-Scholes Option Pricing Model Dashboard</CardTitle>
                    <p className="text-primary text-sm">August 2024 – September 2024</p>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="mb-4 overflow-hidden rounded-md">
                      <Image
                        src="/images/blackscholes-dashboard.jpg"
                        alt="Black-Scholes Financial Dashboard"
                        width={400}
                        height={200}
                        className="w-full h-32 object-cover"
                      />
                    </div>
                    <CardDescription className="text-foreground/80 mt-2 space-y-2">
                      <p>
                        Developed a Python-based tool for options pricing, profit and loss (PnL) calculation, and
                        real-time financial data integration.
                      </p>
                      <p>
                        This project uses the Black-Scholes model to price European call and put options, along with
                        custom-built modules to track and analyze option portfolios.
                      </p>
                      <p>
                        By integrating with the Yahoo Finance API, the tool ensures accurate and real-time market data
                        to enhance the precision of options pricing and PnL calculations.
                      </p>
                    </CardDescription>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center">
                    <div className="flex flex-wrap gap-2">
                      {["Python", "Streamlit", "Yahoo Finance API", "Matplotlib", "Pandas", "NumPy"].map((tag) => (
                        <Badge key={tag} variant="outline" className="bg-background/50 text-primary border-primary/30">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Link
                      href="https://github.com/hAlcLeite/Black_Scholes_Model"
                      target="_blank"
                      className="text-primary hover:text-primary/80"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Link>
                  </CardFooter>
                </Card>
              </BlurFade>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="tech-stack" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <BlurFade>
            <h2 className="text-3xl font-bold mb-8 text-center">Technical Skills</h2>
            <div className="bg-background/50 backdrop-blur-sm border border-primary/20 rounded-lg p-8 max-w-4xl mx-auto">
              <div className="text-foreground/80 space-y-4">
                <div>
                  <h3 className="font-bold">Languages:</h3>
                  <p>Python, Java, C, SQL, JavaScript, TypeScript, R, VBA</p>
                </div>
                <div>
                  <h3 className="font-bold">Frontend:</h3>
                  <p>HTML/CSS, JavaScript, React.js</p>
                </div>
                <div>
                  <h3 className="font-bold">Backend:</h3>
                  <p>Python, Java, C, Node.js, Flask, FastAPI</p>
                </div>
                 <div>
                  <h3 className="font-bold">Frameworks:</h3>
                  <p>Next.js, TailwindCSS, Framer Motion</p>
                </div>
                <div>
                  <h3 className="font-bold">Machine Learning & AI:</h3>
                  <p>PyTorch, scikit-learn, Hugging Face</p>
                </div>
                <div>
                  <h3 className="font-bold">Data Science & Analytics:</h3>
                  <p>Pandas, NumPy, Streamlit, Google Analytics, Kaggle</p>
                </div>
                <div>
                  <h3 className="font-bold">Data Visualization:</h3>
                  <p>Excel, PowerBI, R, Matplotlib</p>
                </div>
                 <div>
                  <h3 className="font-bold">Design:</h3>
                  <p>Figma, Canva</p>
                </div>
                <div>
                  <h3 className="font-bold">Tools & Methodologies:</h3>
                  <p>UNIX, VS Code, Git, GitHub, Gitlab, Agile, Scrum, Jira, RESTful APIs, Docker, MS Access</p>
                </div>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Extracurriculars Section */}
      <section id="extracurriculars" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <BlurFade>
            <h2 className="text-3xl font-bold mb-8 text-center">Extracurricular Activities</h2>
            <div className="space-y-8 max-w-4xl mx-auto">
              <Tabs defaultValue="2024-2025" className="w-full">
                <TabsList className="grid w-full grid-cols-4 mb-8">
                  <TabsTrigger value="high-school" className="text-sm">
                    High School
                  </TabsTrigger>
                  <TabsTrigger value="2023-2024" className="text-sm">
                    2023-2024
                  </TabsTrigger>
                  <TabsTrigger value="2024-2025" className="text-sm">
                    2024-2025
                  </TabsTrigger>
                  <TabsTrigger value="2025-2026" className="text-sm">
                    2025-2026
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="high-school">
                  <BlurFade>
                    <div className="space-y-4">
                      <Card className="bg-background/50 backdrop-blur-sm border-primary/20">
                        <CardHeader className="flex flex-row items-start gap-4 pb-2">
                          <div className="w-12 h-12 rounded bg-primary/20 flex items-center justify-center overflow-hidden">
                            <div className="w-full h-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                              🏈
                            </div>
                          </div>
                          <div className="space-y-1 flex-1">
                            <CardTitle className="text-xl font-bold">Senior Boys Football</CardTitle>
                            <p className="text-muted-foreground">High School</p>
                          </div>
                        </CardHeader>
                      </Card>

                      <Card className="bg-background/50 backdrop-blur-sm border-primary/20">
                        <CardHeader className="flex flex-row items-start gap-4 pb-2">
                          <div className="w-12 h-12 rounded bg-primary/20 flex items-center justify-center overflow-hidden">
                            <div className="w-full h-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                              🏉
                            </div>
                          </div>
                          <div className="space-y-1 flex-1">
                            <CardTitle className="text-xl font-bold">Senior Boys Rugby</CardTitle>
                            <p className="text-muted-foreground">High School</p>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="text-foreground/80 mt-2">
                            <p>2x OFSAA Quarter Finalists</p>
                          </CardDescription>
                        </CardContent>
                      </Card>

                      <Card className="bg-background/50 backdrop-blur-sm border-primary/20">
                        <CardHeader className="flex flex-row items-start gap-4 pb-2">
                          <div className="w-12 h-12 rounded bg-primary/20 flex items-center justify-center overflow-hidden">
                            <div className="w-full h-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                              IC
                            </div>
                          </div>
                          <div className="space-y-1 flex-1">
                            <CardTitle className="text-xl font-bold">Investment Club Co-President</CardTitle>
                            <p className="text-muted-foreground">High School</p>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="text-foreground/80 mt-2">
                            <p>
                              Lead club with over 100 members, held weekly workshops related to finance and alternative
                              investments as well as stock trading competitions.
                            </p>
                          </CardDescription>
                        </CardContent>
                      </Card>

                      <Card className="bg-background/50 backdrop-blur-sm border-primary/20">
                        <CardHeader className="flex flex-row items-start gap-4 pb-2">
                          <div className="w-12 h-12 rounded bg-primary/20 flex items-center justify-center overflow-hidden">
                            <div className="w-full h-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                              WC
                            </div>
                          </div>
                          <div className="space-y-1 flex-1">
                            <CardTitle className="text-xl font-bold">
                              Founder and President of Weightlifting Club
                            </CardTitle>
                            <p className="text-muted-foreground">High School</p>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="text-foreground/80 mt-2">
                            <p>
                              Founded club with over 50 members. Centered around supporting a healthy and active
                              lifestyle.
                            </p>
                          </CardDescription>
                        </CardContent>
                      </Card>

                      <Card className="bg-background/50 backdrop-blur-sm border-primary/20">
                        <CardHeader className="flex flex-row items-start gap-4 pb-2">
                          <div className="w-12 h-12 rounded bg-primary/20 flex items-center justify-center overflow-hidden">
                            <div className="w-full h-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                              SC
                            </div>
                          </div>
                          <div className="space-y-1 flex-1">
                            <CardTitle className="text-xl font-bold">FinTech Specialist</CardTitle>
                            <p className="text-muted-foreground">Startup Club</p>
                          </div>
                        </CardHeader>
                      </Card>

                      <Card className="bg-background/50 backdrop-blur-sm border-primary/20">
                        <CardHeader className="flex flex-row items-start gap-4 pb-2">
                          <div className="w-12 h-12 rounded bg-primary/20 flex items-center justify-center overflow-hidden">
                            <div className="w-full h-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                              MUN
                            </div>
                          </div>
                          <div className="space-y-1 flex-1">
                            <CardTitle className="text-xl font-bold">Delegate</CardTitle>
                            <p className="text-muted-foreground">Model UN</p>
                          </div>
                        </CardHeader>
                      </Card>
                    </div>
                  </BlurFade>
                </TabsContent>

                <TabsContent value="2023-2024">
                  <BlurFade>
                    <div className="space-y-4">
                      <Card className="bg-background/50 backdrop-blur-sm border-primary/20">
                        <CardHeader className="flex flex-row items-start gap-4 pb-2">
                          <div className="w-12 h-12 rounded overflow-hidden">
                            <Image
                              src="/images/western-investment-club.jpg"
                              alt="Western Investment Club"
                              width={48}
                              height={48}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="space-y-1 flex-1">
                            <CardTitle className="text-xl font-bold">Research Analyst – TMT & Industrials</CardTitle>
                            <p className="text-muted-foreground">Western Investment Club</p>
                          </div>
                          <div className="text-primary text-sm">September 2023 – April 2024</div>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="text-foreground/80 mt-2 space-y-2">
                            <p>
                              Conducted equity research and valuation analyses within the Telecommunications, Media, and
                              Technology (TMT) and Industrials sectors.
                            </p>
                            <p>
                              Built comprehensive financial models, including Discounted Cash Flow (DCF) analyses, to
                              assess investment opportunities.
                            </p>
                            <p>
                              Participated in stock pitch competitions, presenting investment theses supported by
                              fundamental analysis and industry trends.
                            </p>
                            <p>
                              Developed a long position on Caterpillar Inc. (NYSE: CAT), articulating a bullish outlook
                              based on macroeconomic indicators and company performance metrics.
                            </p>
                          </CardDescription>
                        </CardContent>
                      </Card>

                      <Card className="bg-background/50 backdrop-blur-sm border-primary/20">
                        <CardHeader className="flex flex-row items-start gap-4 pb-2">
                          <div className="w-12 h-12 rounded overflow-hidden">
                            <Image
                              src="/images/western-algo-logo.png"
                              alt="Western Algorithmic Trading Club"
                              width={48}
                              height={48}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="space-y-1 flex-1">
                            <CardTitle className="text-xl font-bold">Alternative Data Developer</CardTitle>
                            <p className="text-muted-foreground">Western Algorithmic Trading Club</p>
                          </div>
                          <div className="text-primary text-sm">December 2023 – April 2024</div>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="text-foreground/80 mt-2">
                            <p>
                              Contributed to developing a Commodity Sentiment Analysis Algorithm, which predicts market
                              trends by analyzing social media sentiment. Utilizing Python, Reddit API, and language
                              models.
                            </p>
                          </CardDescription>
                        </CardContent>
                      </Card>
                    </div>
                  </BlurFade>
                </TabsContent>

                <TabsContent value="2024-2025">
                  <BlurFade>
                    <div className="space-y-4">
                      <Card className="bg-background/50 backdrop-blur-sm border-primary/20">
                        <CardHeader className="flex flex-row items-start gap-4 pb-2">
                          <div className="w-12 h-12 rounded overflow-hidden">
                            <Image
                              src="/images/western-dev-society.jpg"
                              alt="Western Developers Society"
                              width={48}
                              height={48}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="space-y-1 flex-1">
                            <CardTitle className="text-xl font-bold">Team Lead</CardTitle>
                            <p className="text-muted-foreground">Western Developers Society</p>
                          </div>
                          <div className="text-primary text-sm">October 2024 – April 2025</div>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="text-foreground/80 mt-2">
                            <p>
                              Leading a team of six developers in collaboration with the Mobility Technology (MoTech)
                              research group under Dr. Yili Tang at Western University. Leveraging machine learning to
                              enhance bus arrival time predictions in London, Ontario.
                            </p>
                          </CardDescription>
                        </CardContent>
                      </Card>

                      <Card className="bg-background/50 backdrop-blur-sm border-primary/20">
                        <CardHeader className="flex flex-row items-start gap-4 pb-2">
                          <div className="w-12 h-12 rounded overflow-hidden">
                            <Image
                              src="/images/western-cyber-society.jpg"
                              alt="Western Cyber Society"
                              width={48}
                              height={48}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="space-y-1 flex-1">
                            <CardTitle className="text-xl font-bold">Project Manager</CardTitle>
                            <p className="text-muted-foreground">Western Cyber Society</p>
                          </div>
                          <div className="text-primary text-sm">September 2024 – April 2025</div>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="text-foreground/80 mt-2 space-y-2">
                            <p>
                              Led a team of 5 developers to build a full-stack cybersecurity solution capable of
                              detecting AI-generated voice scams in real-time, achieving over 87% accuracy using a
                              Random Forest classifier.
                            </p>
                            <p>
                              Presented technical workshops on cybersecurity topics, educating peers on emerging threats
                              and defensive strategies.
                            </p>
                            <p>
                              The project, VocalGuard, won the Best Real-World Application Award at the Toronto Tech
                              Expo (TTE), sponsored by Slalom Consulting.
                            </p>
                          </CardDescription>
                        </CardContent>
                      </Card>

                      <Card className="bg-background/50 backdrop-blur-sm border-primary/20">
                        <CardHeader className="flex flex-row items-start gap-4 pb-2">
                          <div className="w-12 h-12 rounded overflow-hidden">
                            <Image
                              src="/images/western-quantum-club.jpg"
                              alt="Western Quantum Club"
                              width={48}
                              height={48}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="space-y-1 flex-1">
                            <CardTitle className="text-xl font-bold">Developer & Researcher</CardTitle>
                            <p className="text-muted-foreground">Western Quantum Club</p>
                          </div>
                          <div className="text-primary text-sm">October 2024 – April 2025</div>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="text-foreground/80 mt-2 space-y-2">
                            <p>
                              Collaborated on a research project applying quantum computing techniques to portfolio
                              optimization, formulating the problem as a QUBO (Quadratic Unconstrained Binary
                              Optimization).
                            </p>
                            <p>
                              Utilized cleaned 5-year historical data from sector ETFs via Yahoo Finance API and
                              conducted sensitivity analysis across return assumptions.
                            </p>
                            <p>
                              Implemented a simulated quantum optimization pipeline to minimize portfolio risk and
                              maximize expected return under realistic constraints.
                            </p>
                            <p>
                              Applied Sharpe ratio evaluation, volatility clustering insights, and multi-asset
                              covariance modeling for constructing robust portfolios.
                            </p>
                            <p>
                              Presented findings to the club, showcasing a practical quantum finance use case with
                              future scalability toward higher-order moment-based modeling and quantum options pricing.
                            </p>
                          </CardDescription>
                        </CardContent>
                      </Card>

                      <Card className="bg-background/50 backdrop-blur-sm border-primary/20">
                        <CardHeader className="flex flex-row items-start gap-4 pb-2">
                          <div className="w-12 h-12 rounded overflow-hidden">
                            <Image
                              src="/images/ivey-fintech.jpg"
                              alt="Ivey Fintech"
                              width={48}
                              height={48}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="space-y-1 flex-1">
                            <CardTitle className="text-xl font-bold">Consulting Analyst</CardTitle>
                            <p className="text-muted-foreground">Ivey Fintech</p>
                          </div>
                          <div className="text-primary text-sm">October 2024 – April 2025</div>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="text-foreground/80 mt-2 space-y-2">
                            <p>
                              Served as a pro-bono consulting analyst for Venn (formerly Vault), a fintech startup
                              offering SME-focused multi-currency corporate cards and invoicing tools.
                            </p>
                            <p>
                              Conducted extensive market sizing analysis, including demographic targeting and SME
                              segmentation, to identify expansion opportunities across Canada.
                            </p>
                            <p>
                              Benchmarked Venn's product suite against leading competitors (e.g., Wise, Brex, Float),
                              identifying feature gaps and value-added service opportunities.
                            </p>
                            <p>
                              Collaborated in client communications, report development, and final presentations to
                              executive stakeholders.
                            </p>
                          </CardDescription>
                        </CardContent>
                      </Card>
                    </div>
                  </BlurFade>
                </TabsContent>

                <TabsContent value="2025-2026">
                  <BlurFade>
                    <div className="space-y-4">
                      <Card className="bg-background/50 backdrop-blur-sm border-primary/20">
                        <CardHeader className="flex flex-row items-start gap-4 pb-2">
                          <div className="w-12 h-12 rounded overflow-hidden">
                            <Image
                              src="/images/western-cyber-society.jpg"
                              alt="Western Cyber Society"
                              width={48}
                              height={48}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="space-y-1 flex-1">
                            <CardTitle className="text-xl font-bold">VP of Cybersecurity</CardTitle>
                            <p className="text-muted-foreground">Western Cyber Society</p>
                          </div>
                          <div className="text-primary text-sm">May 2025 – Present</div>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="text-foreground/80 mt-2">
                            <p>
                              Western University's largest tech club with an emphasis on AI, Cybersecurity, and
                              Mainframe.
                            </p>
                          </CardDescription>
                        </CardContent>
                      </Card>

                      <Card className="bg-background/50 backdrop-blur-sm border-primary/20">
                        <CardHeader className="flex flex-row items-start gap-4 pb-2">
                          <div className="w-12 h-12 rounded overflow-hidden">
                            <Image
                              src="/images/western-ai.jpg"
                              alt="Western AI"
                              width={48}
                              height={48}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="space-y-1 flex-1">
                            <CardTitle className="text-xl font-bold">Project Manager</CardTitle>
                            <p className="text-muted-foreground">Western AI</p>
                          </div>
                          <div className="text-primary text-sm">2025 – 2026</div>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="text-foreground/80 mt-2 space-y-2">
                            <p>
                              Leading initiatives focused on applied machine learning and AI innovation within the
                              academic community.
                            </p>
                            <p>
                              Currently managing a project that leverages neural networks to enhance options pricing
                              models, aiming to improve accuracy over traditional Black-Scholes models by incorporating
                              market volatility and other dynamic factors.
                            </p>
                          </CardDescription>
                        </CardContent>
                      </Card>
                    </div>
                  </BlurFade>
                </TabsContent>
              </Tabs>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Contact Section with Uniform Hover Effects */}
      <section id="contact" className="py-20 bg-muted/50 relative">
        <FlickeringGrid
          className="absolute inset-0 z-0 opacity-50 [mask-image:radial-gradient(circle_at_center,white,transparent)]"
          squareSize={4}
          gridGap={6}
          color="#60A5FA"
          maxOpacity={0.3}
          flickerChance={0.05}
        />
        <div className="container mx-auto px-4 relative z-10">
          <BlurFade>
            <h2 className="text-3xl font-bold mb-8 text-center">Contact</h2>
            <div className="flex flex-wrap justify-center gap-6 max-w-2xl mx-auto">
              <Link href="https://linkedin.com/in/henrique-leite-3251a4209/" target="_blank" rel="noopener noreferrer">
                <ShimmerButton
                  background="hsl(var(--primary))"
                  shimmerColor="hsl(var(--primary-foreground))"
                  className="flex items-center gap-2 hover:bg-red-600 transition-colors duration-300"
                >
                  <Linkedin className="h-5 w-5 text-primary-foreground" />
                  <span className="text-primary-foreground">LinkedIn</span>
                </ShimmerButton>
              </Link>

              <Link href="https://github.com/hAlcLeite" target="_blank" rel="noopener noreferrer">
                <ShimmerButton
                  background="hsl(var(--primary))"
                  shimmerColor="hsl(var(--primary-foreground))"
                  className="flex items-center gap-2 hover:bg-pink-600 transition-colors duration-300"
                >
                  <Github className="h-5 w-5 text-primary-foreground" />
                  <span className="text-primary-foreground">GitHub</span>
                </ShimmerButton>
              </Link>

              <Link href="mailto:hleite@uwo.ca">
                <ShimmerButton
                  background="hsl(var(--primary))"
                  shimmerColor="hsl(var(--primary-foreground))"
                  className="flex items-center gap-2 hover:bg-red-600 transition-colors duration-300"
                >
                  <Mail className="h-5 w-5 text-primary-foreground" />
                  <span className="text-primary-foreground">Email</span>
                </ShimmerButton>
              </Link>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-background border-t border-border">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} Henrique Alcantara Leite. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
