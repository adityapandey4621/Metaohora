"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Heart, MessageCircle, Eye, Search, BookOpen, Star, TrendingUp, Clock } from "lucide-react"
import Link from "next/link"

const moodEmojis = [
  { emoji: "😊", mood: "Happy", count: 234 },
  { emoji: "😢", mood: "Sad", count: 189 },
  { emoji: "😍", mood: "Love", count: 456 },
  { emoji: "😌", mood: "Peaceful", count: 167 },
  { emoji: "🔥", mood: "Passionate", count: 298 },
  { emoji: "🌅", mood: "Hopeful", count: 145 },
  { emoji: "💭", mood: "Thoughtful", count: 203 },
  { emoji: "🌙", mood: "Mysterious", count: 178 },
  { emoji: "🌿", mood: "Nature", count: 267 },
  { emoji: "⚡", mood: "Energetic", count: 134 },
]

const poems = [
  {
    id: 1,
    title: "Whispers of Eternity",
    author: "Elena Rosewood",
    avatar: "/placeholder.svg?height=40&width=40",
    content: `In shadows deep where silence dwells,
And time itself forgets to flow,
The heart remembers what it tells
Of love that only poets know.

Each whispered word a sacred vow,
Each line a bridge across the years,
Where past and future meet somehow
In verses born of joy and tears.`,
    mood: "😌",
    moodLabel: "Peaceful",
    likes: 247,
    comments: 18,
    views: 1203,
    timeAgo: "2 hours ago",
    tags: ["eternity", "love", "time", "whispers"],
    featured: true,
    community: "Moonlight Poets",
  },
  {
    id: 2,
    title: "Urban Symphony",
    author: "Marcus Chen",
    avatar: "/placeholder.svg?height=40&width=40",
    content: `The city breathes in concrete and steel,
A rhythm born of footsteps on the street.
Each honking horn, each turning of the wheel,
Composes songs where strangers' heartbeats meet.

In coffee shops and subway cars below,
Stories unfold in whispers soft and low,
While neon lights paint dreams in colors bright,
And urban poets find their voice tonight.`,
    mood: "⚡",
    moodLabel: "Energetic",
    likes: 156,
    comments: 12,
    views: 543,
    timeAgo: "5 hours ago",
    tags: ["urban", "city", "rhythm", "energy"],
    featured: false,
    community: "Urban Verses",
  },
  {
    id: 3,
    title: "The Garden of Words",
    author: "Sophia Blackthorne",
    avatar: "/placeholder.svg?height=40&width=40",
    content: `I plant my verses in the fertile ground
Of imagination's endless, verdant field.
Each metaphor a seed that can be found
Growing into truths that time revealed.

The harvest comes in seasons of the heart,
When readers find the beauty in each part,
And words bloom wild like flowers in the spring,
Teaching broken souls how they can sing.`,
    mood: "🌿",
    moodLabel: "Nature",
    likes: 198,
    comments: 24,
    views: 721,
    timeAgo: "1 day ago",
    tags: ["garden", "metaphor", "growth", "nature"],
    featured: false,
    community: "Nature's Voice",
  },
  {
    id: 4,
    title: "Midnight Confessions",
    author: "Alexander Night",
    avatar: "/placeholder.svg?height=40&width=40",
    content: `When darkness falls and silence reigns supreme,
I whisper secrets to the listening night.
The moon becomes my confidant, it seems,
As shadows dance in pale celestial light.

These midnight hours hold my deepest fears,
My hopes, my dreams, my unspoken desires,
While stars above collect my silent tears
And kindle in my soul poetic fires.`,
    mood: "🌙",
    moodLabel: "Mysterious",
    likes: 289,
    comments: 31,
    views: 892,
    timeAgo: "3 hours ago",
    tags: ["midnight", "secrets", "moon", "mystery"],
    featured: true,
    community: "Moonlight Poets",
  },
  {
    id: 5,
    title: "Love's Sweet Surrender",
    author: "Isabella Rose",
    avatar: "/placeholder.svg?height=40&width=40",
    content: `In your eyes I found my home,
A place where hearts can freely roam.
Your touch ignites my very soul,
Making broken spirits whole.

Love's sweet surrender calls to me,
In whispered words of poetry.
Together we write our story true,
In verses painted me and you.`,
    mood: "😍",
    moodLabel: "Love",
    likes: 412,
    comments: 45,
    views: 1456,
    timeAgo: "6 hours ago",
    tags: ["love", "romance", "surrender", "together"],
    featured: false,
    community: "Love & Heartbreak",
  },
  {
    id: 6,
    title: "Morning's First Light",
    author: "David Sunrise",
    avatar: "/placeholder.svg?height=40&width=40",
    content: `Dawn breaks with golden promises,
Painting hope across the sky.
Yesterday's sorrows fade away
As morning birds begin to fly.

Each sunrise brings a chance to start,
To mend what's broken in the heart.
The light reminds us we're alive,
And gives us strength to hope and thrive.`,
    mood: "🌅",
    moodLabel: "Hopeful",
    likes: 167,
    comments: 19,
    views: 634,
    timeAgo: "8 hours ago",
    tags: ["dawn", "hope", "sunrise", "renewal"],
    featured: false,
    community: "Nature's Voice",
  },
]

export default function Poems() {
  const [selectedMood, setSelectedMood] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState("recent")

  const filteredPoems = poems.filter((poem) => {
    const matchesMood = !selectedMood || poem.moodLabel === selectedMood
    const matchesSearch =
      !searchQuery ||
      poem.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      poem.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      poem.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))

    return matchesMood && matchesSearch
  })

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
            <Link href="/community">
              <Button variant="ghost" className="font-serif text-slate-700">
                👥 Community
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

      <div className="container mx-auto px-6 py-8 relative z-10">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <h1 className="text-5xl font-serif font-bold text-slate-800 mb-4 flex items-center justify-center">
            <BookOpen className="w-12 h-12 mr-4 text-amber-600" />
            Poetry Collection
          </h1>
          <p className="text-xl text-slate-600 font-serif max-w-3xl mx-auto">
            Discover beautiful poetry from our community, sorted by mood and emotion. Find verses that speak to your
            soul.
          </p>
        </motion.div>

        {/* Mood Filter Bar */}
        <section className="mb-8">
          <h2 className="text-2xl font-serif font-bold text-slate-800 mb-4 text-center">How are you feeling today?</h2>
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            <button
              onClick={() => setSelectedMood(null)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full border transition-all duration-200 ${
                !selectedMood
                  ? "bg-amber-100 border-amber-300 text-amber-800"
                  : "bg-white border-amber-200 text-slate-600 hover:bg-amber-50"
              }`}
            >
              <span>🌟</span>
              <span className="font-serif">All Moods</span>
            </button>
            {moodEmojis.map((item) => (
              <button
                key={item.mood}
                onClick={() => setSelectedMood(item.mood)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full border transition-all duration-200 ${
                  selectedMood === item.mood
                    ? "bg-amber-100 border-amber-300 text-amber-800"
                    : "bg-white border-amber-200 text-slate-600 hover:bg-amber-50"
                }`}
              >
                <span className="text-lg">{item.emoji}</span>
                <span className="font-serif">{item.mood}</span>
                <Badge variant="secondary" className="text-xs">
                  {item.count}
                </Badge>
              </button>
            ))}
          </div>
        </section>

        {/* Search and Sort */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <Input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search poems, authors, or tags..."
              className="pl-12 font-serif bg-white/80 border-amber-200 focus:border-amber-500"
            />
          </div>
          <div className="flex gap-2">
            <Button
              variant={sortBy === "recent" ? "default" : "outline"}
              onClick={() => setSortBy("recent")}
              className="font-serif"
            >
              <Clock className="w-4 h-4 mr-2" />
              Recent
            </Button>
            <Button
              variant={sortBy === "popular" ? "default" : "outline"}
              onClick={() => setSortBy("popular")}
              className="font-serif"
            >
              <TrendingUp className="w-4 h-4 mr-2" />
              Popular
            </Button>
            <Button
              variant={sortBy === "featured" ? "default" : "outline"}
              onClick={() => setSortBy("featured")}
              className="font-serif"
            >
              <Star className="w-4 h-4 mr-2" />
              Featured
            </Button>
          </div>
        </div>

        {/* Poems Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {filteredPoems.map((poem, index) => (
            <motion.div
              key={poem.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.01 }}
            >
              <Card className="bg-white/90 backdrop-blur-sm border border-amber-200/50 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                {poem.featured && (
                  <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 text-sm font-serif flex items-center">
                    <Star className="w-4 h-4 mr-2" />
                    Featured Poem
                  </div>
                )}

                <CardContent className="p-6">
                  {/* Author Info */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <img
                        src={poem.avatar || "/placeholder.svg"}
                        alt={poem.author}
                        className="w-10 h-10 rounded-full border-2 border-amber-300"
                      />
                      <div>
                        <h4 className="font-serif font-semibold text-slate-800">{poem.author}</h4>
                        <div className="flex items-center space-x-2">
                          <Badge variant="outline" className="text-xs text-amber-600 border-amber-300">
                            {poem.community}
                          </Badge>
                          <span className="text-xs text-slate-500 font-serif">{poem.timeAgo}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl">{poem.mood}</span>
                      <Badge variant="secondary" className="text-xs">
                        {poem.moodLabel}
                      </Badge>
                    </div>
                  </div>

                  {/* Poem Content */}
                  <h3 className="text-2xl font-serif font-bold text-slate-800 mb-3">{poem.title}</h3>
                  <div className="bg-amber-50/80 p-4 rounded-lg mb-4 border-l-4 border-amber-500 relative">
                    <div className="absolute -top-2 -left-2 text-2xl">📝</div>
                    <p className="text-slate-700 font-serif leading-relaxed whitespace-pre-line text-sm">
                      {poem.content}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {poem.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-amber-600 border-amber-300 text-xs">
                        #{tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Engagement */}
                  <div className="flex items-center justify-between pt-4 border-t border-amber-200/50">
                    <div className="flex items-center space-x-6">
                      <button className="flex items-center space-x-2 text-slate-600 hover:text-red-500 transition-colors">
                        <Heart className="w-5 h-5" />
                        <span className="font-serif">{poem.likes}</span>
                      </button>
                      <button className="flex items-center space-x-2 text-slate-600 hover:text-blue-500 transition-colors">
                        <MessageCircle className="w-5 h-5" />
                        <span className="font-serif">{poem.comments}</span>
                      </button>
                      <span className="flex items-center space-x-2 text-slate-500">
                        <Eye className="w-4 h-4" />
                        <span className="font-serif text-sm">{poem.views}</span>
                      </span>
                    </div>
                    <Button variant="ghost" size="sm" className="text-amber-600 hover:text-amber-800">
                      Read Full Poem
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-serif text-lg px-8 py-4">
            Load More Poems
          </Button>
        </div>
      </div>
    </div>
  )
}
