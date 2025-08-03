"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Video, Download, ExternalLink, Clock, Star, Users, Lightbulb, PenTool, Target, ArrowRight } from "lucide-react"
import Link from "next/link"

const resourceCategories = [
  {
    title: "Writing Guides",
    icon: <PenTool className="w-6 h-6" />,
    description: "Master the craft of poetry with our comprehensive guides",
    resources: [
      {
        title: "The Art of Metaphor",
        type: "Guide",
        duration: "15 min read",
        difficulty: "Beginner",
        description: "Learn to create powerful metaphors that resonate with readers",
        featured: true,
      },
      {
        title: "Rhythm and Meter in Modern Poetry",
        type: "Guide",
        duration: "20 min read",
        difficulty: "Intermediate",
        description: "Understanding the musical elements of verse",
        featured: false,
      },
      {
        title: "Finding Your Poetic Voice",
        type: "Guide",
        duration: "12 min read",
        difficulty: "Beginner",
        description: "Discover and develop your unique style",
        featured: false,
      },
    ],
  },
  {
    title: "Poetry Forms",
    icon: <Target className="w-6 h-6" />,
    description: "Explore traditional and contemporary poetry structures",
    resources: [
      {
        title: "Mastering the Sonnet",
        type: "Tutorial",
        duration: "25 min read",
        difficulty: "Intermediate",
        description: "Complete guide to writing Shakespearean and Petrarchan sonnets",
        featured: true,
      },
      {
        title: "Free Verse Fundamentals",
        type: "Guide",
        duration: "18 min read",
        difficulty: "Beginner",
        description: "Breaking free from traditional constraints",
        featured: false,
      },
      {
        title: "Haiku: Capturing Moments",
        type: "Tutorial",
        duration: "10 min read",
        difficulty: "Beginner",
        description: "The art of brevity in Japanese poetry",
        featured: false,
      },
    ],
  },
  {
    title: "Inspiration & Prompts",
    icon: <Lightbulb className="w-6 h-6" />,
    description: "Spark your creativity with curated writing exercises",
    resources: [
      {
        title: "365 Daily Poetry Prompts",
        type: "Collection",
        duration: "Year-long",
        difficulty: "All Levels",
        description: "A prompt for every day to keep your creativity flowing",
        featured: true,
      },
      {
        title: "Nature-Inspired Writing",
        type: "Prompt Series",
        duration: "30 prompts",
        difficulty: "Beginner",
        description: "Find poetry in the natural world around you",
        featured: false,
      },
      {
        title: "Emotional Landscapes",
        type: "Workshop",
        duration: "45 min",
        difficulty: "Intermediate",
        description: "Mapping feelings through verse",
        featured: false,
      },
    ],
  },
  {
    title: "Video Workshops",
    icon: <Video className="w-6 h-6" />,
    description: "Learn from master poets through video content",
    resources: [
      {
        title: "Poetry Reading Techniques",
        type: "Video",
        duration: "35 min",
        difficulty: "All Levels",
        description: "Bring your poems to life through performance",
        featured: true,
      },
      {
        title: "Workshop: Editing Your Work",
        type: "Video",
        duration: "42 min",
        difficulty: "Intermediate",
        description: "The art of revision and refinement",
        featured: false,
      },
      {
        title: "Building a Poetry Collection",
        type: "Masterclass",
        duration: "1 hour",
        difficulty: "Advanced",
        description: "Curating and organizing your best work",
        featured: false,
      },
    ],
  },
]

const featuredResources = [
  {
    title: "The Complete Poet's Handbook",
    author: "Dr. Margaret Whitfield",
    type: "eBook",
    pages: 284,
    rating: 4.8,
    downloads: 12847,
    description: "A comprehensive guide covering everything from basic techniques to advanced poetic forms.",
    cover: "/placeholder.svg?height=200&width=150",
  },
  {
    title: "Voices of the Modern Era",
    author: "Various Artists",
    type: "Audio Collection",
    duration: "3h 45m",
    rating: 4.9,
    downloads: 8934,
    description: "Listen to contemporary poets reading their most celebrated works.",
    cover: "/placeholder.svg?height=200&width=150",
  },
  {
    title: "Poetry in the Digital Age",
    author: "Prof. James Chen",
    type: "Video Course",
    lessons: 12,
    rating: 4.7,
    downloads: 5672,
    description: "Adapting traditional poetry for modern platforms and audiences.",
    cover: "/placeholder.svg?height=200&width=150",
  },
]

export default function Resources() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-all duration-700">
      {/* Background elements */}
      <div className="fixed inset-0 opacity-20 dark:opacity-10 pointer-events-none parchment-bg" />

      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-amber-200/50 dark:border-slate-700/50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <img src="/images/metaphora-logo.jpg" alt="Metaphora Logo" className="w-8 h-8 object-contain" />
            <span className="text-xl font-serif font-bold text-slate-800 dark:text-amber-100">Metaphora</span>
          </Link>

          <div className="flex items-center space-x-4">
            <Link href="/community">
              <Button variant="ghost" className="font-serif text-slate-700 dark:text-amber-200">
                Community
              </Button>
            </Link>
            <Link href="/auth/signin">
              <Button className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-serif">
                Sign In
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <h1 className="text-5xl font-serif font-bold text-slate-800 dark:text-amber-100 mb-4">Poetry Resources</h1>
          <p className="text-xl text-slate-600 dark:text-amber-300 font-serif max-w-3xl mx-auto">
            Discover guides, tutorials, and inspiration to elevate your poetry. From beginner basics to advanced
            techniques, find everything you need to grow as a poet.
          </p>
        </motion.div>

        {/* Featured Resources */}
        <section className="mb-16">
          <h2 className="text-3xl font-serif font-bold text-slate-800 dark:text-amber-100 mb-8">Featured Resources</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredResources.map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border border-amber-200/50 dark:border-slate-600/50 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="flex space-x-4 mb-4">
                      <img
                        src={resource.cover || "/placeholder.svg"}
                        alt={resource.title}
                        className="w-20 h-28 object-cover rounded border border-amber-200"
                      />
                      <div className="flex-1">
                        <Badge className="mb-2 bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200">
                          {resource.type}
                        </Badge>
                        <h3 className="font-serif font-bold text-slate-800 dark:text-amber-100 mb-1">
                          {resource.title}
                        </h3>
                        <p className="text-sm text-slate-600 dark:text-amber-400 font-serif">by {resource.author}</p>
                      </div>
                    </div>

                    <p className="text-slate-700 dark:text-amber-200 font-serif text-sm mb-4 leading-relaxed">
                      {resource.description}
                    </p>

                    <div className="flex items-center justify-between text-xs text-slate-500 dark:text-amber-400 font-serif mb-4">
                      <div className="flex items-center space-x-4">
                        <span className="flex items-center">
                          <Star className="w-3 h-3 mr-1 text-amber-500" />
                          {resource.rating}
                        </span>
                        <span className="flex items-center">
                          <Download className="w-3 h-3 mr-1" />
                          {resource.downloads.toLocaleString()}
                        </span>
                      </div>
                      <span>
                        {resource.type === "eBook" && `${resource.pages} pages`}
                        {resource.type === "Audio Collection" && resource.duration}
                        {resource.type === "Video Course" && `${resource.lessons} lessons`}
                      </span>
                    </div>

                    <Button className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-serif">
                      <Download className="w-4 h-4 mr-2" />
                      Access Resource
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Resource Categories */}
        <section>
          <h2 className="text-3xl font-serif font-bold text-slate-800 dark:text-amber-100 mb-8">Browse by Category</h2>
          <div className="space-y-12">
            {resourceCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: categoryIndex * 0.1 }}
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-3 bg-amber-100 dark:bg-amber-900/30 rounded-lg text-amber-600 dark:text-amber-400">
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-slate-800 dark:text-amber-100">
                      {category.title}
                    </h3>
                    <p className="text-slate-600 dark:text-amber-300 font-serif">{category.description}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {category.resources.map((resource, resourceIndex) => (
                    <Card
                      key={resourceIndex}
                      className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border border-amber-200/50 dark:border-slate-600/50 shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      {resource.featured && (
                        <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 text-sm font-serif">
                          <Star className="w-4 h-4 inline mr-2" />
                          Featured
                        </div>
                      )}
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-3">
                          <Badge variant="outline" className="text-amber-600 border-amber-300">
                            {resource.type}
                          </Badge>
                          <Badge
                            variant="secondary"
                            className={`text-xs ${
                              resource.difficulty === "Beginner"
                                ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                                : resource.difficulty === "Intermediate"
                                  ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                                  : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                            }`}
                          >
                            {resource.difficulty}
                          </Badge>
                        </div>

                        <h4 className="font-serif font-bold text-slate-800 dark:text-amber-100 mb-2">
                          {resource.title}
                        </h4>

                        <p className="text-slate-700 dark:text-amber-200 font-serif text-sm mb-4 leading-relaxed">
                          {resource.description}
                        </p>

                        <div className="flex items-center justify-between text-xs text-slate-500 dark:text-amber-400 font-serif mb-4">
                          <span className="flex items-center">
                            <Clock className="w-3 h-3 mr-1" />
                            {resource.duration}
                          </span>
                        </div>

                        <Button
                          variant="outline"
                          className="w-full font-serif border-amber-300 text-amber-700 hover:bg-amber-50 dark:border-amber-600 dark:text-amber-300 dark:hover:bg-amber-900/20 bg-transparent"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Resource
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-700 dark:to-orange-700 border-0 shadow-2xl">
            <CardContent className="p-12">
              <h2 className="text-4xl font-serif font-bold text-white mb-4">Ready to Start Your Poetry Journey?</h2>
              <p className="text-xl text-amber-100 font-serif mb-8 max-w-2xl mx-auto">
                Join our community of poets and get access to exclusive resources, workshops, and personalized feedback
                on your work.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/auth/signup">
                  <Button size="lg" className="bg-white text-amber-600 hover:bg-amber-50 font-serif text-lg px-8 py-4">
                    <Users className="w-5 h-5 mr-2" />
                    Join the Community
                  </Button>
                </Link>
                <Link href="/community">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-amber-600 font-serif text-lg px-8 py-4 bg-transparent"
                  >
                    Explore Poetry
                    <ArrowRight className="w-5 h-5 ml-2" />
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
