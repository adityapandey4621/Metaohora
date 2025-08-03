"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Sparkles, Wand2, Heart, Download, Share2, RefreshCw, Settings } from "lucide-react"
import Link from "next/link"

const moods = [
  { emoji: "😊", label: "Happy", description: "Joyful and uplifting verses" },
  { emoji: "😢", label: "Melancholy", description: "Thoughtful and introspective" },
  { emoji: "😍", label: "Romantic", description: "Love and passion" },
  { emoji: "🌅", label: "Hopeful", description: "Inspiring and optimistic" },
  { emoji: "😌", label: "Peaceful", description: "Calm and serene" },
  { emoji: "🔥", label: "Passionate", description: "Intense and powerful" },
  { emoji: "💭", label: "Contemplative", description: "Deep and philosophical" },
  { emoji: "🌙", label: "Mysterious", description: "Enigmatic and mystical" },
]

const languages = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "es", name: "Spanish", flag: "🇪🇸" },
  { code: "fr", name: "French", flag: "🇫🇷" },
  { code: "it", name: "Italian", flag: "🇮🇹" },
  { code: "pt", name: "Portuguese", flag: "🇵🇹" },
  { code: "de", name: "German", flag: "🇩🇪" },
]

const styles = [
  { name: "Free Verse", description: "Modern, unrhymed poetry" },
  { name: "Sonnet", description: "14-line traditional form" },
  { name: "Haiku", description: "Japanese 3-line form" },
  { name: "Ballad", description: "Narrative poem with rhythm" },
  { name: "Limerick", description: "Humorous 5-line poem" },
  { name: "Acrostic", description: "First letters spell a word" },
]

export default function AIPoems() {
  const [formData, setFormData] = useState({
    mood: "",
    topic: "",
    style: "Free Verse",
    language: "en",
    humanness: 50,
    length: "medium",
  })
  const [generatedPoem, setGeneratedPoem] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)

  const handleGenerate = async () => {
    setIsGenerating(true)

    // Simulate AI generation
    setTimeout(() => {
      const samplePoem = `In the garden of my dreams tonight,
Where ${formData.mood.toLowerCase()} thoughts take flight,
I find the words that speak so true,
Of ${formData.topic || "life's journey"} and morning dew.

Each verse a whisper from the heart,
Each line a work of living art,
Created by the mind's sweet dance,
In poetry's eternal trance.`

      setGeneratedPoem(samplePoem)
      setIsGenerating(false)
    }, 3000)
  }

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
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <h1 className="text-5xl font-serif font-bold text-slate-800 mb-4 flex items-center justify-center">
            <Wand2 className="w-12 h-12 mr-4 text-amber-600" />
            AI Poetry Generator
          </h1>
          <p className="text-xl text-slate-600 font-serif max-w-3xl mx-auto">
            Let artificial intelligence help you craft beautiful poetry. Describe your mood, choose your style, and
            watch as AI creates verses tailored to your emotions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Form */}
          <Card className="bg-white/90 backdrop-blur-sm border border-amber-200/50 shadow-lg">
            <CardHeader>
              <CardTitle className="font-serif text-slate-800 flex items-center">
                <Settings className="w-6 h-6 mr-3 text-amber-600" />
                Customize Your Poem
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Mood Selection */}
              <div className="space-y-3">
                <Label className="font-serif text-slate-700">What's your mood?</Label>
                <div className="grid grid-cols-2 gap-3">
                  {moods.map((mood) => (
                    <button
                      key={mood.label}
                      onClick={() => setFormData({ ...formData, mood: mood.label })}
                      className={`p-3 rounded-lg border text-left transition-all duration-200 ${
                        formData.mood === mood.label
                          ? "bg-amber-100 border-amber-300 text-amber-800"
                          : "bg-white border-amber-200 text-slate-600 hover:bg-amber-50"
                      }`}
                    >
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="text-lg">{mood.emoji}</span>
                        <span className="font-serif font-semibold">{mood.label}</span>
                      </div>
                      <p className="text-xs text-slate-500">{mood.description}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Topic */}
              <div className="space-y-2">
                <Label htmlFor="topic" className="font-serif text-slate-700">
                  Topic or Theme (Optional)
                </Label>
                <Input
                  id="topic"
                  value={formData.topic}
                  onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                  placeholder="e.g., love, nature, dreams, friendship..."
                  className="font-serif bg-white/50 border-amber-200 focus:border-amber-500"
                />
              </div>

              {/* Style */}
              <div className="space-y-3">
                <Label className="font-serif text-slate-700">Poetry Style</Label>
                <div className="grid grid-cols-2 gap-2">
                  {styles.map((style) => (
                    <button
                      key={style.name}
                      onClick={() => setFormData({ ...formData, style: style.name })}
                      className={`p-3 rounded-lg border text-left transition-all duration-200 ${
                        formData.style === style.name
                          ? "bg-amber-100 border-amber-300 text-amber-800"
                          : "bg-white border-amber-200 text-slate-600 hover:bg-amber-50"
                      }`}
                    >
                      <div className="font-serif font-semibold text-sm">{style.name}</div>
                      <p className="text-xs text-slate-500">{style.description}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Language */}
              <div className="space-y-3">
                <Label className="font-serif text-slate-700">Language</Label>
                <div className="grid grid-cols-3 gap-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => setFormData({ ...formData, language: lang.code })}
                      className={`p-2 rounded-lg border text-center transition-all duration-200 ${
                        formData.language === lang.code
                          ? "bg-amber-100 border-amber-300 text-amber-800"
                          : "bg-white border-amber-200 text-slate-600 hover:bg-amber-50"
                      }`}
                    >
                      <div className="text-lg mb-1">{lang.flag}</div>
                      <div className="font-serif text-xs">{lang.name}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Humanness Slider */}
              <div className="space-y-3">
                <Label className="font-serif text-slate-700">Humanness Level: {formData.humanness}%</Label>
                <div className="space-y-2">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={formData.humanness}
                    onChange={(e) => setFormData({ ...formData, humanness: Number.parseInt(e.target.value) })}
                    className="w-full h-2 bg-amber-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-slate-500 font-serif">
                    <span>🤖 More AI-like</span>
                    <span>👤 More Human-like</span>
                  </div>
                </div>
              </div>

              {/* Generate Button */}
              <Button
                onClick={handleGenerate}
                disabled={!formData.mood || isGenerating}
                className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-serif text-lg py-4"
              >
                {isGenerating ? (
                  <>
                    <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
                    Crafting Your Poem...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5 mr-2" />
                    Generate Poem
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          {/* Generated Poem */}
          <Card className="bg-white/90 backdrop-blur-sm border border-amber-200/50 shadow-lg">
            <CardHeader>
              <CardTitle className="font-serif text-slate-800 flex items-center">
                <Sparkles className="w-6 h-6 mr-3 text-amber-600" />
                Your AI-Generated Poem
              </CardTitle>
            </CardHeader>
            <CardContent>
              {!generatedPoem && !isGenerating && (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">🤖</div>
                  <p className="font-serif text-slate-600 mb-4">
                    Select your mood and preferences, then click "Generate Poem" to create your personalized verse.
                  </p>
                  <div className="text-sm text-slate-500 font-serif">
                    AI will craft a unique poem based on your choices
                  </div>
                </div>
              )}

              {isGenerating && (
                <div className="text-center py-12">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    className="text-6xl mb-4"
                  >
                    ✨
                  </motion.div>
                  <p className="font-serif text-slate-600 mb-4">AI is crafting your poem...</p>
                  <div className="text-sm text-slate-500 font-serif">This may take a few moments</div>
                </div>
              )}

              {generatedPoem && (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                  <div className="bg-amber-50/80 p-6 rounded-lg border-l-4 border-amber-500 relative">
                    <div className="absolute -top-2 -left-2 text-3xl">📜</div>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-serif font-bold text-slate-800 text-xl">{formData.mood} Poem</h3>
                      <div className="flex items-center space-x-2">
                        <Badge className="bg-amber-100 text-amber-800">{formData.style}</Badge>
                        <Badge variant="outline" className="border-amber-300 text-amber-700">
                          AI Generated
                        </Badge>
                      </div>
                    </div>
                    <p className="font-serif text-slate-700 leading-relaxed whitespace-pre-line text-lg">
                      {generatedPoem}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <Button
                      variant="outline"
                      className="font-serif border-amber-300 text-amber-700 hover:bg-amber-50 bg-transparent"
                    >
                      <Heart className="w-4 h-4 mr-2" />
                      Save Poem
                    </Button>
                    <Button
                      variant="outline"
                      className="font-serif border-amber-300 text-amber-700 hover:bg-amber-50 bg-transparent"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                    <Button
                      variant="outline"
                      className="font-serif border-amber-300 text-amber-700 hover:bg-amber-50 bg-transparent"
                    >
                      <Share2 className="w-4 h-4 mr-2" />
                      Share
                    </Button>
                    <Button
                      onClick={handleGenerate}
                      variant="outline"
                      className="font-serif border-amber-300 text-amber-700 hover:bg-amber-50 bg-transparent"
                    >
                      <RefreshCw className="w-4 h-4 mr-2" />
                      Generate Another
                    </Button>
                  </div>
                </motion.div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Recent AI Poems */}
        <section className="mt-16">
          <h2 className="text-3xl font-serif font-bold text-slate-800 mb-8 text-center">Recent AI Creations</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { mood: "😊", title: "Sunshine Dreams", author: "AI Assistant", likes: 45 },
              { mood: "🌙", title: "Midnight Whispers", author: "AI Assistant", likes: 67 },
              { mood: "💝", title: "Love's Algorithm", author: "AI Assistant", likes: 89 },
            ].map((poem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-white/80 backdrop-blur-sm border border-amber-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-2xl">{poem.mood}</span>
                      <Badge className="bg-purple-100 text-purple-800">AI</Badge>
                    </div>
                    <h3 className="font-serif font-bold text-slate-800 mb-2">{poem.title}</h3>
                    <p className="text-sm text-slate-600 font-serif mb-4">by {poem.author}</p>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center text-slate-500">
                        <Heart className="w-4 h-4 mr-1" />
                        {poem.likes}
                      </span>
                      <Button variant="ghost" size="sm" className="text-amber-600">
                        Read More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
