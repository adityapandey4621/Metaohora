"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  BookOpen,
  Scroll,
  Quote,
  Sparkles,
  Heart,
  Eye,
  MessageCircle,
  Leaf,
  Users,
  Edit3,
  Library,
  ArrowRight,
  Star,
  Award,
  Calendar,
  Trophy,
  Feather,
} from "lucide-react"
import Link from "next/link"

// Aesthetic floating words
const floatingWords = [
  "Regret",
  "Enchanting",
  "Melancholy",
  "Serendipity",
  "Ephemeral",
  "Wanderlust",
  "Solitude",
  "Reverie",
  "Nostalgia",
  "Ethereal",
  "Whimsical",
  "Luminous",
  "Tranquil",
  "Mystique",
  "Eloquent",
  "Sublime",
  "Graceful",
  "Timeless",
  "Poignant",
  "Serene",
  "Vellichor",
  "Saudade",
  "Hiraeth",
  "Petrichor",
]

// Floating words component
const FloatingWords = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {floatingWords.map((word, index) => (
        <motion.div
          key={word}
          className="absolute text-amber-600/20 font-serif text-lg font-italic select-none"
          initial={{
            x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1200),
            y: (typeof window !== "undefined" ? window.innerHeight : 800) + 50,
            opacity: 0,
          }}
          animate={{
            x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1200),
            y: -50,
            opacity: [0, 0.7, 0.7, 0],
            rotate: [0, Math.random() * 20 - 10],
          }}
          transition={{
            duration: 12 + Math.random() * 8,
            delay: index * 1.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        >
          {word}
        </motion.div>
      ))}
    </div>
  )
}

// Enhanced floating leaves and quills
const FloatingElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`leaf-${i}`}
          className="absolute opacity-15"
          initial={{
            x: -100,
            y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 800),
            rotate: 0,
          }}
          animate={{
            x: (typeof window !== "undefined" ? window.innerWidth : 1200) + 100,
            y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 800) + Math.sin(i) * 100,
            rotate: 360,
          }}
          transition={{
            duration: 20 + Math.random() * 15,
            delay: i * 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        >
          <Leaf className="w-6 h-6 text-amber-600" />
        </motion.div>
      ))}

      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`feather-${i}`}
          className="absolute opacity-20"
          initial={{
            x: (typeof window !== "undefined" ? window.innerWidth : 1200) + 100,
            y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 800),
            rotate: 0,
          }}
          animate={{
            x: -100,
            y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 800) + Math.sin(i) * 80,
            rotate: -360,
          }}
          transition={{
            duration: 25 + Math.random() * 10,
            delay: i * 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        >
          <Feather className="w-5 h-5 text-amber-700" />
        </motion.div>
      ))}
    </div>
  )
}

// Enhanced cursor with ink spill effect
const EnhancedCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [inkSpills, setInkSpills] = useState<
    Array<{
      id: number
      x: number
      y: number
      size: number
    }>
  >([])

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })

      if (Math.random() > 0.94) {
        const newSpill = {
          id: Date.now() + Math.random(),
          x: e.clientX + (Math.random() - 0.5) * 30,
          y: e.clientY + (Math.random() - 0.5) * 30,
          size: Math.random() * 40 + 20,
        }
        setInkSpills((prev) => [...prev.slice(-5), newSpill])
      }
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      setIsHovering(target.tagName === "BUTTON" || target.tagName === "A" || target.classList.contains("hoverable"))
    }

    window.addEventListener("mousemove", updateMousePosition)
    window.addEventListener("mouseover", handleMouseOver)

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
      window.removeEventListener("mouseover", handleMouseOver)
    }
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      setInkSpills((prev) => prev.slice(1))
    }, 3000)
    return () => clearTimeout(timer)
  }, [inkSpills])

  return (
    <>
      <div
        className="fixed pointer-events-none z-50 mix-blend-difference"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: `scale(${isHovering ? 1.5 : 1})`,
          transition: "transform 0.2s ease",
        }}
      >
        <div className="w-6 h-6 bg-amber-600 rounded-full opacity-80" />
      </div>

      {inkSpills.map((spill) => (
        <motion.div
          key={spill.id}
          className="fixed pointer-events-none z-40"
          style={{
            left: spill.x - spill.size / 2,
            top: spill.y - spill.size / 2,
            width: spill.size,
            height: spill.size,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1.5 }}
          exit={{ opacity: 0, scale: 2 }}
          transition={{ duration: 3, ease: "easeOut" }}
        >
          <div
            className="w-full h-full rounded-full"
            style={{
              background: `radial-gradient(circle, 
                rgba(139, 69, 19, 0.5) 0%, 
                rgba(139, 69, 19, 0.3) 25%, 
                rgba(139, 69, 19, 0.15) 50%, 
                rgba(139, 69, 19, 0.05) 75%, 
                transparent 100%)`,
            }}
          />
        </motion.div>
      ))}
    </>
  )
}

// Fast typewriter effect component
const TypewriterText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setTimeout(
      () => {
        if (currentIndex < text.length) {
          setDisplayText((prev) => prev + text[currentIndex])
          setCurrentIndex((prev) => prev + 1)
        }
      },
      delay + currentIndex * 25, // Made it faster (was 50)
    )

    return () => clearTimeout(timer)
  }, [currentIndex, text, delay])

  return (
    <span className="relative">
      {displayText}
      {currentIndex < text.length && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.6, repeat: Number.POSITIVE_INFINITY }}
          className="inline-block w-0.5 h-6 bg-amber-600 ml-1"
        />
      )}
    </span>
  )
}

export default function MetaphoraLanding() {
  const { scrollYProgress } = useScroll()
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  const features = [
    {
      icon: <Edit3 className="w-8 h-8" />,
      title: "Poetry Studio",
      description: "Craft your verses with our sophisticated editor, designed for the discerning poet.",
      image: "🖋️",
    },
    {
      icon: <Library className="w-8 h-8" />,
      title: "Literary Collections",
      description: "Curate your works into beautiful collections that honor the written word.",
      image: "📚",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Vibrant Communities",
      description: "Join or create poetry communities and connect with fellow writers.",
      image: "👥",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "AI Poetry Assistant",
      description: "Let AI help you craft poems based on your mood and preferred style.",
      image: "🤖",
    },
  ]

  const events = [
    {
      title: "Autumn Poetry Challenge",
      date: "Oct 25-31, 2024",
      description: "Write about the changing seasons and win amazing prizes",
      participants: 234,
      prize: "Featured Publication",
      icon: "🍂",
    },
    {
      title: "Moonlight Poetry Workshop",
      date: "Nov 5, 2024",
      description: "Learn advanced techniques from published poets",
      participants: 89,
      prize: "Certificate",
      icon: "🌙",
    },
    {
      title: "Love Sonnet Competition",
      date: "Nov 14, 2024",
      description: "Craft the perfect sonnet about modern love",
      participants: 156,
      prize: "Cash Prize $500",
      icon: "💝",
    },
  ]

  const featuredPoems = [
    {
      title: "Whispers of Eternity",
      author: "A. Blackwood",
      excerpt: "In shadows deep where silence dwells,\nAnd time itself forgets to flow...",
      likes: 247,
      views: 1203,
      mood: "😌",
    },
    {
      title: "The Golden Hour",
      author: "M. Sterling",
      excerpt: "When daylight fades to amber dreams,\nAnd evening paints the sky in gold...",
      likes: 189,
      views: 892,
      mood: "🌅",
    },
    {
      title: "Echoes of the Heart",
      author: "L. Ashworth",
      excerpt: "Between the lines of what we say,\nLie truths too deep for common words...",
      likes: 156,
      views: 734,
      mood: "💭",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 relative overflow-hidden cursor-none transition-all duration-700">
      <EnhancedCursor />
      <FloatingWords />
      <FloatingElements />

      {/* Enhanced parchment texture overlay */}
      <div className="fixed inset-0 opacity-20 pointer-events-none transition-opacity duration-500 parchment-bg" />

      {/* Navigation */}
      <motion.nav
        className="fixed top-0 w-full z-40 bg-white/80 backdrop-blur-md border-b border-amber-200/50 transition-all duration-500"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 hoverable">
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-3">
              <img src="/images/metaphora-logo.jpg" alt="Metaphora Logo" className="w-10 h-10 object-contain" />
              <div>
                <div className="text-2xl font-serif font-bold text-slate-800">Metaphora</div>
                <div className="text-xs font-serif text-slate-600 -mt-1">A Community for Poets</div>
              </div>
            </motion.div>
          </Link>

          <div className="hidden md:flex space-x-8">
            {[
              { name: "Poems", href: "/poems", icon: "📖" },
              { name: "Community", href: "/community", icon: "👥" },
              { name: "AI Poems", href: "/ai-poems", icon: "🤖" },
              { name: "Resources", href: "/resources", icon: "📚" },
              { name: "About", href: "/about", icon: "ℹ️" },
            ].map((item) => (
              <Link key={item.name} href={item.href}>
                <motion.div
                  className="text-slate-700 hover:text-amber-600 font-serif text-lg relative hoverable transition-colors duration-300 flex items-center space-x-2"
                  whileHover={{ y: -2 }}
                >
                  <span className="text-sm">{item.icon}</span>
                  <span>{item.name}</span>
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-600 origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </Link>
            ))}
          </div>

          <Link href="/auth/signup">
            <Button className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-serif hoverable shadow-lg">
              <Sparkles className="w-4 h-4 mr-2" />
              Join the Circle
            </Button>
          </Link>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <motion.div className="absolute inset-0 opacity-10" style={{ y: backgroundY }}>
          <div className="w-full h-full bg-gradient-to-br from-amber-200 via-orange-200 to-rose-200" />
        </motion.div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-8"
          >
            <div className="flex justify-center mb-6">
              <motion.div className="relative" whileHover={{ scale: 1.1, rotate: 5 }} transition={{ duration: 0.3 }}>
                <img src="/images/metaphora-logo.jpg" alt="Metaphora Logo" className="w-32 h-32 object-contain" />
                <motion.div
                  className="absolute -top-2 -right-2 text-2xl"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  🖋️
                </motion.div>
              </motion.div>
            </div>

            <h1 className="text-6xl md:text-8xl font-serif font-bold text-slate-800 mb-4 relative">
              <span className="inline-block relative">
                Metaphora
                <motion.div
                  className="absolute -top-4 -right-4 w-10 h-10"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                >
                  <Sparkles className="w-10 h-10 text-amber-500" />
                </motion.div>
              </span>
            </h1>

            <motion.p
              className="text-2xl md:text-3xl text-slate-600 font-serif italic mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              <TypewriterText text="Where Words Become Worlds" delay={1000} />
            </motion.p>
          </motion.div>

          <motion.div
            className="bg-white/90 backdrop-blur-sm border border-amber-200/50 rounded-2xl p-8 mb-12 max-w-2xl mx-auto shadow-2xl transition-all duration-500 relative"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <div className="absolute -top-3 -left-3 text-3xl">📜</div>
            <div className="absolute -top-3 -right-3 text-3xl">🖋️</div>
            <div className="text-left font-serif text-slate-700 text-xl leading-relaxed">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 2, duration: 2, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <TypewriterText
                  text="In twilight's gentle embrace, where shadows dance with light,
The poet's quill finds purpose in the canvas of the night.
Each word a brushstroke painted on the parchment of the soul,
Where metaphors bloom eternal, making broken spirits whole."
                  delay={2000}
                />
              </motion.div>
            </div>
            <p className="text-right text-amber-600 font-serif italic mt-4">— Featured on Metaphora</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link href="/auth/signup">
              <Button
                size="lg"
                className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-serif text-xl px-12 py-6 rounded-full shadow-2xl hoverable relative overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10 flex items-center">
                  <Scroll className="w-6 h-6 mr-3" />
                  Begin Your Literary Journey
                </span>
              </Button>
            </Link>

            <Link href="/poems">
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-amber-600 text-amber-700 hover:bg-amber-600 hover:text-white font-serif text-xl px-12 py-6 rounded-full shadow-2xl hoverable"
              >
                <BookOpen className="w-6 h-6 mr-3" />
                Explore Poetry
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-serif font-bold text-slate-800 mb-6">Your Literary Arsenal</h2>
            <p className="text-xl text-slate-600 font-serif max-w-3xl mx-auto">
              Discover the tools that transform mere words into timeless literature, crafted for those who understand
              the sacred art of poetry.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, x: -20 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                animate={{
                  y: [0, -5, 0],
                  rotate: [0, 1, -1, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: index * 0.5,
                }}
              >
                <Card className="bg-white/80 backdrop-blur-sm border border-amber-200/50 shadow-xl hover:shadow-2xl transition-all duration-300 hoverable h-full relative overflow-hidden">
                  <div className="absolute top-4 right-4 text-3xl">{feature.image}</div>
                  <CardContent className="p-8 text-center h-full flex flex-col">
                    <motion.div
                      className="text-amber-600 mb-6 flex justify-center"
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.5 }}
                    >
                      {feature.icon}
                    </motion.div>
                    <h3 className="text-xl font-serif font-semibold text-slate-800 mb-4">{feature.title}</h3>
                    <p className="text-slate-600 font-serif leading-relaxed flex-grow">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Poetry Events & Challenges */}
      <section className="py-24 bg-gradient-to-r from-amber-100/50 to-orange-100/50 relative">
        <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23d4a574' fillOpacity='0.1'%3E%3Cpath d='M30 30c0-11 9-20 20-20s20 9 20 20-9 20-20 20-20-9-20-20zm0-30c0-11 9-20 20-20s20 9 20 20-9 20-20 20-20-9-20-20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="container mx-auto px-6 relative">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-serif font-bold text-slate-800 mb-6 flex items-center justify-center">
              <Trophy className="w-12 h-12 mr-4 text-amber-600" />
              Poetry Events & Challenges
            </h2>
            <p className="text-xl text-slate-600 font-serif max-w-3xl mx-auto">
              Join our vibrant community events, participate in challenges, and showcase your poetic talents.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, rotateY: 90 }}
                whileInView={{ opacity: 1, rotateY: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ rotateY: 5, scale: 1.02 }}
                animate={{
                  y: [0, -8, 0],
                  rotate: [0, 0.5, -0.5, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: index * 0.7,
                }}
                className="perspective-1000"
              >
                <Card className="bg-white/90 backdrop-blur-sm border border-amber-200/50 shadow-xl hover:shadow-2xl transition-all duration-300 hoverable h-full relative overflow-hidden">
                  <div className="absolute top-4 right-4 text-4xl">{event.icon}</div>
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      <Calendar className="w-5 h-5 text-amber-600 mr-2" />
                      <span className="text-sm font-serif text-amber-600 font-semibold">{event.date}</span>
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-slate-800 mb-3">{event.title}</h3>
                    <p className="text-slate-700 font-serif leading-relaxed mb-6">{event.description}</p>

                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center text-slate-600">
                        <Users className="w-4 h-4 mr-2" />
                        <span className="font-serif text-sm">{event.participants} participants</span>
                      </div>
                      <div className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-serif">
                        🏆 {event.prize}
                      </div>
                    </div>

                    <Button className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-serif">
                      <Star className="w-4 h-4 mr-2" />
                      Join Event
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Verses Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-serif font-bold text-slate-800 mb-6 flex items-center justify-center">
              <Quote className="w-12 h-12 mr-4 text-amber-600" />
              Featured Verses
            </h2>
            <p className="text-xl text-slate-600 font-serif max-w-3xl mx-auto">
              Discover the latest masterpieces from our community, sorted by mood and emotion.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredPoems.map((poem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, rotateX: 5 }}
                animate={{
                  y: [0, -6, 0],
                  rotate: [0, 0.8, -0.8, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: index * 0.8,
                }}
                className="perspective-1000"
              >
                <Card className="bg-white/90 backdrop-blur-sm border border-amber-200/50 shadow-xl hover:shadow-2xl transition-all duration-300 hoverable h-full relative overflow-hidden">
                  <div className="absolute top-4 right-4 text-3xl">{poem.mood}</div>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-serif font-semibold text-slate-800 mb-2">{poem.title}</h3>
                    <p className="text-amber-600 font-serif mb-4">by {poem.author}</p>
                    <div className="bg-amber-50/80 p-4 rounded-lg mb-6 border-l-4 border-amber-500 relative">
                      <div className="absolute -top-2 -left-2 text-2xl">📝</div>
                      <p className="text-slate-700 font-serif italic leading-relaxed whitespace-pre-line">
                        {poem.excerpt}
                      </p>
                    </div>
                    <div className="flex items-center justify-between text-slate-600">
                      <div className="flex items-center space-x-4">
                        <span className="flex items-center">
                          <Heart className="w-4 h-4 mr-1" />
                          {poem.likes}
                        </span>
                        <span className="flex items-center">
                          <Eye className="w-4 h-4 mr-1" />
                          {poem.views}
                        </span>
                      </div>
                      <Button variant="ghost" size="sm" className="text-amber-600 hover:text-amber-800 hoverable">
                        <MessageCircle className="w-4 h-4 mr-1" />
                        Read More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/poems">
              <Button className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-serif text-lg px-8 py-4 rounded-full shadow-lg hoverable">
                Discover More Poetry
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-amber-600 to-orange-600 relative">
        <div className="absolute inset-0 opacity-20">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10-10c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="container mx-auto px-6 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="flex justify-center mb-6">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                className="text-6xl"
              >
                🖋️
              </motion.div>
            </div>
            <h2 className="text-5xl font-serif font-bold text-white mb-6">Ready to Share Your Voice?</h2>
            <p className="text-xl text-amber-100 font-serif mb-8 leading-relaxed">
              Join thousands of poets who have found their literary home at Metaphora. Share your work, connect with
              fellow writers, and let AI help you craft the perfect verse.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/auth/signup">
                <Button
                  size="lg"
                  className="bg-white text-amber-600 hover:bg-amber-50 font-serif text-xl px-12 py-6 rounded-full shadow-2xl hoverable"
                >
                  <Star className="w-6 h-6 mr-3" />
                  Start Writing Today
                </Button>
              </Link>

              <Link href="/ai-poems">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-amber-600 font-serif text-xl px-12 py-6 rounded-full shadow-2xl hoverable bg-transparent"
                >
                  <span className="mr-3">🤖</span>
                  Try AI Poetry
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-amber-100 py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img src="/images/metaphora-logo.jpg" alt="Metaphora Logo" className="w-10 h-10 object-contain" />
                <h3 className="text-2xl font-serif font-bold">Metaphora</h3>
              </div>
              <p className="font-serif text-amber-200 leading-relaxed">
                Where words become worlds, and every poet finds their voice in the grand symphony of literature.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-serif font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 font-serif text-amber-200">
                <li>
                  <Link href="/poems" className="hover:text-amber-100 transition-colors hoverable">
                    Poetry Collection
                  </Link>
                </li>
                <li>
                  <Link href="/community" className="hover:text-amber-100 transition-colors hoverable">
                    Communities
                  </Link>
                </li>
                <li>
                  <Link href="/ai-poems" className="hover:text-amber-100 transition-colors hoverable">
                    AI Poetry
                  </Link>
                </li>
                <li>
                  <Link href="/resources" className="hover:text-amber-100 transition-colors hoverable">
                    Resources
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-serif font-semibold mb-4">Community</h4>
              <ul className="space-y-2 font-serif text-amber-200">
                <li>
                  <Link href="/challenges" className="hover:text-amber-100 transition-colors hoverable">
                    Poetry Challenges
                  </Link>
                </li>
                <li>
                  <Link href="/workshops" className="hover:text-amber-100 transition-colors hoverable">
                    Workshops
                  </Link>
                </li>
                <li>
                  <Link href="/events" className="hover:text-amber-100 transition-colors hoverable">
                    Events
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-amber-100 transition-colors hoverable">
                    About Us
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-serif font-semibold mb-4">Support</h4>
              <ul className="space-y-2 font-serif text-amber-200">
                <li>
                  <Link href="/help" className="hover:text-amber-100 transition-colors hoverable">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-amber-100 transition-colors hoverable">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-amber-100 transition-colors hoverable">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-amber-100 transition-colors hoverable">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-12 pt-8 text-center">
            <p className="font-serif text-amber-200">
              © 2024 Metaphora. All rights reserved. Crafted with reverence for the written word.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
