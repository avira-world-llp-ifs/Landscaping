import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Calendar } from "lucide-react"

const articles = [
  {
    title: "Minimalism Reimagined: New Approaches to Simplicity",
    excerpt:
      "How designers are reinterpreting minimalist principles with warmth, texture, and personality for contemporary spaces.",
    date: "January 12, 2023",
    author: "Emma Rodriguez",
    category: "Inspirations",
    image: "/placeholder.svg?height=400&width=600",
    href: "/design-trends/inspirations/minimalism-reimagined",
  },
  {
    title: "Global Design Influences: Cross-Cultural Inspirations",
    excerpt:
      "Exploring how designers are drawing inspiration from diverse cultural traditions to create rich, meaningful spaces.",
    date: "December 18, 2022",
    author: "Aiden Patel",
    category: "Inspirations",
    image: "/placeholder.svg?height=400&width=600",
    href: "/design-trends/inspirations/cross-cultural",
  },
  {
    title: "Color Psychology in Spatial Design",
    excerpt:
      "Understanding how color choices impact mood, behavior, and perception in interior and architectural design.",
    date: "November 5, 2022",
    author: "Sophia Anderson",
    category: "Inspirations",
    image: "/placeholder.svg?height=400&width=600",
    href: "/design-trends/inspirations/color-psychology",
  },
  {
    title: "Adaptive Reuse: Breathing New Life into Historic Structures",
    excerpt:
      "Showcasing remarkable projects that transform abandoned or underutilized buildings into vibrant new spaces.",
    date: "October 22, 2022",
    author: "Lucas Martin",
    category: "Inspirations",
    image: "/placeholder.svg?height=400&width=600",
    href: "/design-trends/inspirations/adaptive-reuse",
  },
  {
    title: "Biophilic Design: Connecting Spaces with Nature",
    excerpt:
      "How designers are incorporating natural elements and patterns to create healthier, more restorative environments.",
    date: "September 30, 2022",
    author: "Olivia Taylor",
    category: "Inspirations",
    image: "/placeholder.svg?height=400&width=600",
    href: "/design-trends/inspirations/biophilic-design",
  },
  {
    title: "Artisanal Craftsmanship in Modern Design",
    excerpt:
      "The revival of traditional crafts and handmade elements in contemporary design, celebrating human skill and authenticity.",
    date: "August 15, 2022",
    author: "Noah Wilson",
    category: "Inspirations",
    image: "/placeholder.svg?height=400&width=600",
    href: "/design-trends/inspirations/artisanal-craftsmanship",
  },
]

export default function InspirationsPage() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h2 className="text-3xl font-bold mb-6">Design Inspirations</h2>
          <p className="text-gray-600 mb-6 text-lg">
            Explore creative ideas and inspirational projects from around the world. Discover how designers are pushing
            boundaries, reimagining spaces, and creating environments that inspire, comfort, and delight.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {articles.map((article, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:-translate-y-2"
            >
              <div className="relative h-48">
                <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
                <div className="absolute top-4 left-4 bg-[#003087] text-white text-xs font-medium px-2 py-1 rounded">
                  {article.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar size={14} className="mr-1" />
                  <span>{article.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#003087]">{article.title}</h3>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">By {article.author}</span>
                  <Link
                    href={article.href}
                    className="inline-flex items-center text-[#003087] font-medium hover:underline"
                  >
                    Read More
                    <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/design-trends" className="inline-flex items-center text-[#003087] font-medium hover:underline">
            Back to Design Trends
            <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  )
}

