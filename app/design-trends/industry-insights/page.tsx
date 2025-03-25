import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Calendar } from "lucide-react"

const articles = [
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
    title: "The Future of Sustainable Architecture",
    excerpt:
      "How architects are responding to climate change with innovative approaches to sustainable building design and construction.",
    date: "February 10, 2023",
    author: "David Chen",
    category: "Industry Insights",
    image: "/placeholder.svg?height=400&width=600",
    href: "/design-trends/industry-insights/sustainable-architecture",
  },
  {
    title: "Digital Transformation in Interior Design",
    excerpt:
      "How technology is revolutionizing the interior design industry, from virtual reality presentations to AI-powered space planning.",
    date: "January 25, 2023",
    author: "Emily Rodriguez",
    category: "Industry Insights",
    image: "/placeholder.svg?height=400&width=600",
    href: "/design-trends/industry-insights/digital-transformation",
  },
  {
    title: "The Rise of Adaptive Reuse in Urban Development",
    excerpt:
      "Examining how designers are breathing new life into existing structures through creative adaptive reuse strategies.",
    date: "December 12, 2022",
    author: "Michael Thompson",
    category: "Industry Insights",
    image: "/placeholder.svg?height=400&width=600",
    href: "/design-trends/industry-insights/adaptive-reuse",
  },
  {
    title: "Inclusive Design: Creating Spaces for Everyone",
    excerpt:
      "How the design industry is embracing accessibility and inclusivity to create spaces that work for people of all abilities.",
    date: "November 30, 2022",
    author: "Jessica Kim",
    category: "Industry Insights",
    image: "/placeholder.svg?height=400&width=600",
    href: "/design-trends/industry-insights/inclusive-design",
  },
  {
    title: "The Impact of Remote Work on Office Design",
    excerpt:
      "Exploring how the shift to hybrid work models is transforming corporate office spaces and workplace design strategies.",
    date: "October 18, 2022",
    author: "Robert Garcia",
    category: "Industry Insights",
    image: "/placeholder.svg?height=400&width=600",
    href: "/design-trends/industry-insights/remote-work-office-design",
  },
]

export default function IndustryInsightsPage() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h2 className="text-3xl font-bold mb-6">Latest Industry Insights</h2>
          <p className="text-gray-600 mb-6 text-lg">
            Stay informed with the latest developments, trends, and innovations in the design industry. Our expert
            analysis and insights help you stay ahead of the curve and understand the forces shaping the future of
            design.
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

