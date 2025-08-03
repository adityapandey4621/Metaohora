"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Users, Sparkles, Heart, Edit3 } from "lucide-react"
import Link from "next/link"

const steps = [
  {
    number: "01",
    title: "Join Our Community",
    description:
      "Sign up for free and become part of our literary family. Create your profile and introduce yourself to fellow poets.",
    icon: <Users className="w-8 h-8" />,
    image: "👥",
  },
  {
    number: "02",
    title: "Explore & Discover",
    description:
      "Browse our vast collection of poems sorted by mood and emotion. Find verses that speak to your soul and discover new voices.",
    icon: <BookOpen className="w-8 h-8" />,
    image: "📖",
  },
  {
    number: "03",
    title: "Create & Share",
    description:
      "Write your own poetry using our elegant editor. Share your work with the community and receive thoughtful feedback.",
    icon: <Edit3 className="w-8 h-8" />,
    image: "✍️",
  },
  {
    number: "04",
    title: "Connect & Grow",
    description:
      "Join poetry communities, participate in challenges, and connect with writers who share your passion and style.",
    icon: <Heart className="w-8 h-8" />,
    image: "💝",
  },
]

const features = [
  {
    title: "Poetry Communities",
    description:
      "Join existing communities or create your own literary circle around specific themes, styles, or interests.",
    icon: "🏘️",
    color: "from-blue-500 to-blue-600",
  },
  {
    title: "AI Poetry Assistant",
    description:
      "Let AI help you craft poems based on your mood, preferred style, and chosen language with adjustable humanness.",
    icon: "🤖",
    color: "from-purple-500 to-purple-600",
  },
  {
    title: "Mood-Based Discovery",
    description: "Find poems that match your current emotions using our unique emoji-based mood sorting system.",
    icon: "😊",
    color: "from-green-500 to-green-600",
  },
  {
    title: "Interactive Feedback",
    description:
      "Comment on poems, share your thoughts, and engage in meaningful discussions about poetry and writing.",
    icon: "💬",
    color: "from-orange-500 to-orange-600",
  },
  {
    title: "Poetry Challenges",
    description:
      "Participate in regular writing challenges, contests, and themed events to improve your skills and win recognition.",
    icon: "🏆",
    color: "from-red-500 to-red-600",
  },
  {
    title: "Learning Resources",
    description:
      "Access guides, tutorials, and workshops to master different poetry forms and improve your writing craft.",
    icon: "📚",
    color: "from-indigo-500 to-indigo-600",
  },
]

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50">
      <div className="fixed inset-0 opacity-20 pointer-events-none parchment-bg" />

      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-amber-200/50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <img src="/images/metaphora-logo.jpg" alt="Metaphora Logo" className="w-8 h-8 object-contain" />
            <span className="text-xl font-serif font-bold text-slate-800">Metaphora</span>
          </Link>

          <div className="flex items-center space-x-4">
            <Link href="/poems">
              <Button variant="ghost" className="font-serif text-slate-700">
                📖 Poems
              </Button>
            </Link>
            <Link href="/community">
              <Button variant="ghost" className="font-serif text-slate-700">
                👥 Community
              </Button>
            </Link>
            <Link href="/auth/signup">
              <Button className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-serif">
                Join the Circle
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-8 relative z-10">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="text-5xl font-serif font-bold text-slate-800 mb-4 flex items-center justify-center">
            <Sparkles className="w-12 h-12 mr-4 text-amber-600" />
            About Metaphora
          </h1>
          <p className="text-xl text-slate-600 font-serif max-w-4xl mx-auto leading-relaxed">
            Welcome to Metaphora, where words become worlds and every poet finds their voice. We're more than just a
            platform – we're a thriving community dedicated to the art of poetry, connecting writers across the globe
            through the power of verse.
          </p>
        </motion.div>

        {/* Mission Statement */}
        <section className="mb-20">
          <Card className="bg-gradient-to-r from-amber-600 to-orange-600 border-0 shadow-2xl">
            <CardContent className="p-12 text-center">
              <div className="text-6xl mb-6">🖋️</div>
              <h2 className="text-4xl font-serif font-bold text-white mb-6">Our Mission</h2>
              <p className="text-xl text-amber-100 font-serif leading-relaxed max-w-3xl mx-auto">
                To create a sanctuary where poets can flourish, share their innermost thoughts, and connect with kindred
                spirits. We believe poetry has the power to heal, inspire, and transform lives – one verse at a time.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* How It Works */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-serif font-bold text-slate-800 mb-6">How Metaphora Works</h2>
            <p className="text-xl text-slate-600 font-serif max-w-3xl mx-auto">
              Getting started with Metaphora is simple. Follow these steps to begin your poetic journey with us.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <Card className="bg-white/90 backdrop-blur-sm border border-amber-200/50 shadow-lg hover:shadow-xl transition-all duration-300 h-full relative overflow-hidden">
                  <div className="absolute top-4 right-4 text-4xl">{step.image}</div>
                  <div className="absolute top-4 left-4 w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                    <span className="font-serif font-bold text-amber-800">{step.number}</span>
                  </div>
                  <CardContent className="p-8 pt-16">
                    <div className="text-amber-600 mb-4 flex justify-center">{step.icon}</div>
                    <h3 className="text-xl font-serif font-bold text-slate-800 mb-4 text-center">{step.title}</h3>
                    <p className="text-slate-600 font-serif leading-relaxed text-center">{step.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-serif font-bold text-slate-800 mb-6">Platform Features</h2>
            <p className="text-xl text-slate-600 font-serif max-w-3xl mx-auto">
              Discover all the tools and features that make Metaphora the perfect home for poets and poetry lovers.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <Card className="bg-white/90 backdrop-blur-sm border border-amber-200/50 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <CardContent className="p-8 text-center">
                    <div
                      className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center text-3xl`}
                    >
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-serif font-bold text-slate-800 mb-4">{feature.title}</h3>
                    <p className="text-slate-600 font-serif leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Community Stats */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-serif font-bold text-slate-800 mb-6">Our Growing Community</h2>
            <p className="text-xl text-slate-600 font-serif max-w-3xl mx-auto">
              Join thousands of poets who have already made Metaphora their creative home.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "15,000+", label: "Active Poets", icon: "👥", color: "from-blue-500 to-blue-600" },
              { number: "89,000+", label: "Poems Shared", icon: "📝", color: "from-green-500 to-green-600" },
              { number: "250+", label: "Communities", icon: "🏘️", color: "from-purple-500 to-purple-600" },
              { number: "500K+", label: "Monthly Reads", icon: "👁️", color: "from-orange-500 to-orange-600" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/90 backdrop-blur-sm border border-amber-200/50 shadow-lg text-center">
                  <CardContent className="p-8">
                    <div
                      className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center text-2xl`}
                    >
                      {stat.icon}
                    </div>
                    <div className="text-3xl font-serif font-bold text-slate-800 mb-2">{stat.number}</div>
                    <div className="text-slate-600 font-serif">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Card className="bg-gradient-to-r from-amber-600 to-orange-600 border-0 shadow-2xl">
              <CardContent className="p-12">
                <div className="text-6xl mb-6">✨</div>
                <h2 className="text-4xl font-serif font-bold text-white mb-6">Ready to Begin Your Journey?</h2>
                <p className="text-xl text-amber-100 font-serif mb-8 max-w-2xl mx-auto leading-relaxed">
                  Join our community of passionate poets and discover the magic of shared creativity. Your voice
                  matters, and your words can inspire others.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/auth/signup">
                    <Button
                      size="lg"
                      className="bg-white text-amber-600 hover:bg-amber-50 font-serif text-lg px-8 py-4"
                    >
                      <Sparkles className="w-5 h-5 mr-2" />
                      Join Metaphora Today
                    </Button>
                  </Link>
                  <Link href="/poems">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-2 border-white text-white hover:bg-white hover:text-amber-600 font-serif text-lg px-8 py-4 bg-transparent"
                    >
                      <BookOpen className="w-5 h-5 mr-2" />
                      Explore Poetry
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </section>
      </div>
    </div>
  )
}
