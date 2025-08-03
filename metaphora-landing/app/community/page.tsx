"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Plus, Search, TrendingUp, BookOpen, Crown, Globe } from "lucide-react"
import Link from "next/link"

const featuredCommunities = [
  {
    id: 1,
    name: "Moonlight Poets",
    description: "A community for poets who find inspiration in the night sky and celestial beauty.",
    members: 2847,
    poems: 12394,
    category: "Nature",
    image: "🌙",
    isVerified: true,
    recentActivity: "2 hours ago",
  },
  {
    id: 2,
    name: "Urban Verses",
    description: "Street poetry, city life, and the rhythm of metropolitan existence.",
    members: 1923,
    poems: 8756,
    category: "Urban",
    image: "🏙️",
    isVerified: true,
    recentActivity: "5 hours ago",
  },
  {
    id: 3,
    name: "Love & Heartbreak",
    description: "Express your deepest emotions through verses of love, loss, and healing.",
    members: 3456,
    poems: 15678,
    category: "Romance",
    image: "💝",
    isVerified: true,
    recentActivity: "1 hour ago",
  },
  {
    id: 4,
    name: "Haiku Masters",
    description: "Traditional and modern haiku poetry in the spirit of Japanese aesthetics.",
    members: 1567,
    poems: 9234,
    category: "Traditional",
    image: "🌸",
    isVerified: false,
    recentActivity: "3 hours ago",
  },
  {
    id: 5,
    name: "Spoken Word Society",
    description: "Performance poetry, slam poetry, and the art of spoken verse.",
    members: 2134,
    poems: 6789,
    category: "Performance",
    image: "🎤",
    isVerified: true,
    recentActivity: "30 minutes ago",
  },
  {
    id: 6,
    name: "Nature's Voice",
    description: "Poetry inspired by the natural world, seasons, and environmental themes.",
    members: 1876,
    poems: 7543,
    category: "Nature",
    image: "🌿",
    isVerified: false,
    recentActivity: "4 hours ago",
  },
]

const categories = [
  { name: "All", icon: "🌟", count: 156 },
  { name: "Nature", icon: "🌿", count: 34 },
  { name: "Romance", icon: "💝", count: 28 },
  { name: "Urban", icon: "🏙️", count: 19 },
  { name: "Traditional", icon: "🌸", count: 23 },
  { name: "Performance", icon: "🎤", count: 15 },
  { name: "Spiritual", icon: "🕯️", count: 12 },
  { name: "Experimental", icon: "🎨", count: 25 },
]

export default function Community() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 transition-all duration-700">
      {/* Background elements */}
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
            <Link href="/ai-poems">
              <Button variant="ghost" className="font-serif text-slate-700">
                🤖 AI Poems
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

      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <h1 className="text-5xl font-serif font-bold text-slate-800 mb-4 flex items-center justify-center">
            <Users className="w-12 h-12 mr-4 text-amber-600" />
            Poetry Communities
          </h1>
          <p className="text-xl text-slate-600 font-serif max-w-3xl mx-auto mb-8">
            Join existing communities or create your own literary circle. Connect with poets who share your passion and
            style.
          </p>

          {/* Main Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-serif text-xl px-12 py-6 rounded-full shadow-2xl"
              >
                <Users className="w-6 h-6 mr-3" />
                Join a Community
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/community/create">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-2 border-amber-600 text-amber-700 hover:bg-amber-600 hover:text-white font-serif text-xl px-12 py-6 rounded-full shadow-2xl"
                >
                  <Plus className="w-6 h-6 mr-3" />
                  Create Community
                </Button>
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search communities..."
              className="w-full pl-12 pr-4 py-3 bg-white/80 border border-amber-200 rounded-lg font-serif text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map((category) => (
              <Button
                key={category.name}
                variant="outline"
                size="sm"
                className="whitespace-nowrap font-serif border-amber-300 text-amber-700 hover:bg-amber-50 bg-transparent"
              >
                <span className="mr-2">{category.icon}</span>
                {category.name} ({category.count})
              </Button>
            ))}
          </div>
        </div>

        {/* Featured Communities */}
        <section className="mb-12">
          <h2 className="text-3xl font-serif font-bold text-slate-800 mb-8 flex items-center">
            <Crown className="w-8 h-8 mr-3 text-amber-600" />
            Featured Communities
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCommunities.map((community, index) => (
              <motion.div
                key={community.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <Card className="bg-white/90 backdrop-blur-sm border border-amber-200/50 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="text-4xl">{community.image}</div>
                        <div>
                          <CardTitle className="font-serif text-slate-800 flex items-center">
                            {community.name}
                            {community.isVerified && (
                              <div className="ml-2 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                                <span className="text-white text-xs">✓</span>
                              </div>
                            )}
                          </CardTitle>
                          <div className="flex items-center space-x-2 mt-1">
                            <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full font-serif">
                              {community.category}
                            </span>
                            <span className="text-xs text-slate-500 font-serif">Active {community.recentActivity}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <p className="text-slate-600 font-serif text-sm leading-relaxed mb-4">{community.description}</p>

                    <div className="flex items-center justify-between text-xs text-slate-500 font-serif mb-4">
                      <div className="flex items-center space-x-4">
                        <span className="flex items-center">
                          <Users className="w-3 h-3 mr-1" />
                          {community.members.toLocaleString()} members
                        </span>
                        <span className="flex items-center">
                          <BookOpen className="w-3 h-3 mr-1" />
                          {community.poems.toLocaleString()} poems
                        </span>
                      </div>
                      <div className="flex items-center">
                        <TrendingUp className="w-3 h-3 mr-1 text-green-500" />
                        <span className="text-green-600">Growing</span>
                      </div>
                    </div>

                    <Button className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-serif">
                      Join Community
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Community Stats */}
        <section className="mb-12">
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { label: "Total Communities", value: "156", icon: "🏘️", color: "from-blue-500 to-blue-600" },
              { label: "Active Poets", value: "12,847", icon: "👥", color: "from-green-500 to-green-600" },
              { label: "Poems Shared", value: "89,234", icon: "📝", color: "from-purple-500 to-purple-600" },
              { label: "Daily Interactions", value: "2,456", icon: "💬", color: "from-orange-500 to-orange-600" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-white/90 backdrop-blur-sm border border-amber-200/50 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div
                      className={`w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center text-2xl`}
                    >
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-serif font-bold text-slate-800 mb-1">{stat.value}</div>
                    <div className="text-sm font-serif text-slate-600">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <Card className="bg-gradient-to-r from-amber-600 to-orange-600 border-0 shadow-2xl">
            <CardContent className="p-12">
              <div className="text-6xl mb-6">🖋️</div>
              <h2 className="text-4xl font-serif font-bold text-white mb-4">Ready to Start Your Own Community?</h2>
              <p className="text-xl text-amber-100 font-serif mb-8 max-w-2xl mx-auto">
                Create a space for poets who share your vision. Build a community around your favorite themes, styles,
                or inspirations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/community/create">
                  <Button size="lg" className="bg-white text-amber-600 hover:bg-amber-50 font-serif text-lg px-8 py-4">
                    <Plus className="w-5 h-5 mr-2" />
                    Create Your Community
                  </Button>
                </Link>
                <Link href="/auth/signup">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-amber-600 font-serif text-lg px-8 py-4 bg-transparent"
                  >
                    <Globe className="w-5 h-5 mr-2" />
                    Join Metaphora
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}
