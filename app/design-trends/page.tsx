import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Calendar } from "lucide-react"

const trendCategories = [
  {
    title: "Latest Industry Insights",
    description: "Stay informed with the latest developments and innovations in design",
    image: "/placeholder.svg?height=300&width=500",
    href: "/design-trends/industry-insights",
  },
  {
    title: "Innovations",
    description: "Discover cutting-edge technologies and innovative approaches in design",
    image: "/placeholder.svg?height=300&width=500",
    href: "/design-trends/innovations",
  },
  {
    title: "Inspirations",
    description: "Explore creative ideas and inspirational projects from around the world",
    image: "/placeholder.svg?height=300&width=500",
    href: "/design-trends/inspirations",
  },
]

const featuredArticles = [
  {
    title: "Biophilic Design: Bringing Nature Indoors",
    excerpt:
      "Explore how biophilic design principles are transforming interior spaces and improving wellbeing through connection with nature.",
    date: "March 15, 2023",
    author: "Sarah Johnson",
    category: "Industry Insights",
    image: "/placeholder.svg?height=400&width=600",
    href: "/design-trends/industry-insights/biophilic-design",
  },
  {
    title: "The Rise of Smart Materials in Architecture",
    excerpt:
      "Discover how innovative smart materials are revolutionizing building design with adaptive, responsive, and sustainable properties.",
    date: "February 28, 2023",
    author: "Michael Chen",
    category: "Innovations",
    image: "/placeholder.svg?height=400&width=600",
    href: "/design-trends/innovations/smart-materials",
  },
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
]

export default function DesignTrendsPage() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h2 className="text-3xl font-bold mb-6">Design Trends</h2>
          <p className="text-gray-600 mb-6 text-lg">
            Stay at the forefront of design with our curated collection of trends, insights, and inspirations. Explore
            the latest innovations, industry developments, and creative ideas shaping the future of design.
          </p>
        </div>

        <h3 className="text-2xl font-bold mb-8 text-center">Featured Articles</h3>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {featuredArticles.map((article, index) => (
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
      </div>
    </div>
  )
}

