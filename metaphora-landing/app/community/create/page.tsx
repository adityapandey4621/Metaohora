"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { ArrowLeft, Users, Settings, Upload, BookOpen, ImageIcon, Lock, Globe, Crown } from "lucide-react"
import Link from "next/link"

const categories = [
  { name: "Nature", icon: "🌿" },
  { name: "Romance", icon: "💝" },
  { name: "Urban", icon: "🏙️" },
  { name: "Traditional", icon: "🌸" },
  { name: "Performance", icon: "🎤" },
  { name: "Spiritual", icon: "🕯️" },
  { name: "Experimental", icon: "🎨" },
  { name: "Healing", icon: "💚" },
]

const privacyOptions = [
  {
    value: "public",
    label: "Public",
    description: "Anyone can find and join your community",
    icon: <Globe className="w-5 h-5" />,
  },
  {
    value: "private",
    label: "Private",
    description: "Only invited members can join",
    icon: <Lock className="w-5 h-5" />,
  },
]

export default function CreateCommunity() {
  const [isSignedIn, setIsSignedIn] = useState(false) // This would come from auth context
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    privacy: "public",
    rules: "",
    coverImage: null as File | null,
  })
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])

  const handleCategoryToggle = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category],
    )
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!isSignedIn) {
      // Redirect to sign in
      window.location.href = "/auth/signin"
      return
    }
    console.log("Creating community:", { ...formData, categories: selectedCategories })
  }

  if (!isSignedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 flex items-center justify-center p-6">
        <div className="fixed inset-0 opacity-20 pointer-events-none parchment-bg" />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center relative z-10"
        >
          <Card className="bg-white/90 backdrop-blur-sm border border-amber-200/50 shadow-2xl max-w-md mx-auto">
            <CardContent className="p-12">
              <div className="text-6xl mb-6">🔐</div>
              <h2 className="text-3xl font-serif font-bold text-slate-800 mb-4">Sign In Required</h2>
              <p className="text-slate-600 font-serif mb-8 leading-relaxed">
                To create your own poetry community, you need to be signed in to Metaphora. Join our literary circle and
                start building your community today.
              </p>
              <div className="space-y-4">
                <Link href="/auth/signin">
                  <Button className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-serif text-lg py-3">
                    Sign In to Continue
                  </Button>
                </Link>
                <Link href="/auth/signup">
                  <Button
                    variant="outline"
                    className="w-full font-serif border-amber-300 text-amber-700 hover:bg-amber-50 bg-transparent"
                  >
                    Create New Account
                  </Button>
                </Link>
                <Link href="/community">
                  <Button variant="ghost" className="w-full font-serif text-slate-600">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Communities
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50">
      <div className="fixed inset-0 opacity-20 pointer-events-none parchment-bg" />

      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-amber-200/50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/community" className="flex items-center space-x-3">
            <ArrowLeft className="w-5 h-5" />
            <img src="/images/metaphora-logo.jpg" alt="Metaphora Logo" className="w-8 h-8 object-contain" />
            <span className="text-xl font-serif font-bold text-slate-800">Back to Communities</span>
          </Link>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="font-serif text-slate-700">
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </Button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-8 relative z-10">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <h1 className="text-5xl font-serif font-bold text-slate-800 mb-4 flex items-center justify-center">
            <Crown className="w-12 h-12 mr-4 text-amber-600" />
            Create Your Community
          </h1>
          <p className="text-xl text-slate-600 font-serif max-w-3xl mx-auto">
            Build a space where poets can gather, share their work, and grow together. Your community, your rules, your
            vision.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Basic Information */}
            <Card className="bg-white/90 backdrop-blur-sm border border-amber-200/50 shadow-lg">
              <CardHeader>
                <CardTitle className="font-serif text-slate-800 flex items-center">
                  <Users className="w-6 h-6 mr-3 text-amber-600" />
                  Basic Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="font-serif text-slate-700">
                    Community Name
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g., Moonlight Poets, Urban Verses..."
                    className="font-serif bg-white/50 border-amber-200 focus:border-amber-500"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description" className="font-serif text-slate-700">
                    Description
                  </Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Describe what your community is about, what kind of poetry you focus on, and what members can expect..."
                    className="min-h-24 font-serif bg-white/50 border-amber-200 focus:border-amber-500"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label className="font-serif text-slate-700">Categories</Label>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                      <button
                        key={category.name}
                        type="button"
                        onClick={() => handleCategoryToggle(category.name)}
                        className={`flex items-center space-x-2 px-3 py-2 rounded-full border transition-all duration-200 ${
                          selectedCategories.includes(category.name)
                            ? "bg-amber-100 border-amber-300 text-amber-800"
                            : "bg-white border-amber-200 text-slate-600 hover:bg-amber-50"
                        }`}
                      >
                        <span>{category.icon}</span>
                        <span className="font-serif text-sm">{category.name}</span>
                      </button>
                    ))}
                  </div>
                  <p className="text-sm text-slate-500 font-serif">
                    Select categories that best describe your community
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Privacy Settings */}
            <Card className="bg-white/90 backdrop-blur-sm border border-amber-200/50 shadow-lg">
              <CardHeader>
                <CardTitle className="font-serif text-slate-800 flex items-center">
                  <Settings className="w-6 h-6 mr-3 text-amber-600" />
                  Privacy & Access
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <Label className="font-serif text-slate-700">Who can join your community?</Label>
                  {privacyOptions.map((option) => (
                    <div
                      key={option.value}
                      className={`p-4 rounded-lg border cursor-pointer transition-all duration-200 ${
                        formData.privacy === option.value
                          ? "bg-amber-50 border-amber-300"
                          : "bg-white border-amber-200 hover:bg-amber-25"
                      }`}
                      onClick={() => setFormData({ ...formData, privacy: option.value })}
                    >
                      <div className="flex items-start space-x-3">
                        <input
                          type="radio"
                          name="privacy"
                          value={option.value}
                          checked={formData.privacy === option.value}
                          onChange={() => setFormData({ ...formData, privacy: option.value })}
                          className="mt-1"
                        />
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            {option.icon}
                            <span className="font-serif font-semibold text-slate-800">{option.label}</span>
                          </div>
                          <p className="text-sm text-slate-600 font-serif">{option.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Community Rules */}
            <Card className="bg-white/90 backdrop-blur-sm border border-amber-200/50 shadow-lg">
              <CardHeader>
                <CardTitle className="font-serif text-slate-800 flex items-center">
                  <BookOpen className="w-6 h-6 mr-3 text-amber-600" />
                  Community Guidelines
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="rules" className="font-serif text-slate-700">
                    Community Rules (Optional)
                  </Label>
                  <Textarea
                    id="rules"
                    value={formData.rules}
                    onChange={(e) => setFormData({ ...formData, rules: e.target.value })}
                    placeholder="Set guidelines for your community. For example:
• Be respectful and constructive in feedback
• Original work only
• No spam or self-promotion
• Keep discussions poetry-related"
                    className="min-h-32 font-serif bg-white/50 border-amber-200 focus:border-amber-500"
                  />
                  <p className="text-sm text-slate-500 font-serif">
                    Clear guidelines help maintain a positive environment for all members
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Cover Image */}
            <Card className="bg-white/90 backdrop-blur-sm border border-amber-200/50 shadow-lg">
              <CardHeader>
                <CardTitle className="font-serif text-slate-800 flex items-center">
                  <ImageIcon className="w-6 h-6 mr-3 text-amber-600" />
                  Community Image
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="border-2 border-dashed border-amber-300 rounded-lg p-8 text-center">
                  <ImageIcon className="w-12 h-12 mx-auto text-amber-400 mb-4" />
                  <p className="font-serif text-slate-600 mb-4">Upload a cover image for your community</p>
                  <Button
                    type="button"
                    variant="outline"
                    className="font-serif border-amber-300 text-amber-700 hover:bg-amber-50 bg-transparent"
                  >
                    <Upload className="w-4 h-4 mr-2" />
                    Choose Image
                  </Button>
                  <p className="text-sm text-slate-500 font-serif mt-2">Recommended: 1200x400px, JPG or PNG</p>
                </div>
              </CardContent>
            </Card>

            {/* Submit */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                type="submit"
                size="lg"
                className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-serif text-lg px-12 py-4"
              >
                <Crown className="w-5 h-5 mr-2" />
                Create Community
              </Button>
              <Link href="/community">
                <Button
                  type="button"
                  size="lg"
                  variant="outline"
                  className="font-serif border-amber-300 text-amber-700 hover:bg-amber-50 px-12 py-4 bg-transparent"
                >
                  Cancel
                </Button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
