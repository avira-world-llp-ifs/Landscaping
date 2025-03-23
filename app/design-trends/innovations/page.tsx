import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Calendar } from "lucide-react"

const articles = [
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
    title: "3D Printing in Construction: Beyond the Prototype",
    excerpt:
      "How 3D printing technology is moving from experimental prototypes to full-scale construction projects around the world.",
    date: "January 15, 2023",
    author: "Sophia Williams",
    category: "Innovations",
    image: "/placeholder.svg?height=400&width=600",
    href: "/design-trends/innovations/3d-printing-construction",
  },
  {
    title: "AI-Powered Design Tools Transforming the Industry",
    excerpt:
      "Exploring how artificial intelligence is augmenting human creativity and streamlining the design process across disciplines.",
    date: "December 5, 2022",
    author: "James Wilson",
    category: "Innovations",
    image: "/placeholder.svg?height=400&width=600",
    href: "/design-trends/innovations/ai-design-tools",
  },
  {
    title: "Biomimicry: Nature-Inspired Design Solutions",
    excerpt:
      "How designers are looking to nature's time-tested patterns and strategies to create more sustainable and efficient solutions.",
    date: "November 20, 2022",
    author: "Olivia Martinez",
    category: "Innovations",
    image: "/placeholder.svg?height=400&width=600",
    href: "/design-trends/innovations/biomimicry",
  },
  {
    title: "Virtual Reality: The New Design Review Standard",
    excerpt:
      "How VR technology is transforming client presentations and design reviews by offering immersive spatial experiences.",
    date: "October 8, 2022",
    author: "Daniel Lee",
    category: "Innovations",
    image: "/placeholder.svg?height=400&width=600",
    href: "/design-trends/innovations/vr-design-review",
  },
  {
    title: "Self-Healing Building Materials",
    excerpt:
      "Innovative materials that can repair themselves are extending building lifespans and reducing maintenance costs.",
    date: "September 15, 2022",
    author: "Rachel Green",
    category: "Innovations",
    image: "/placeholder.svg?height=400&width=600",
    href: "/design-trends/innovations/self-healing-materials",
  },
]

export default function InnovationsPage() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h2 className="text-3xl font-bold mb-6">Innovations in Design</h2>
          <p className="text-gray-600 mb-6 text-lg">
            Discover cutting-edge technologies and innovative approaches that are reshaping the design landscape. From
            smart materials to AI-powered tools, these innovations are pushing the boundaries of what's possible in
            design and construction.
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

