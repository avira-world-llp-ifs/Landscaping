import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import type { IndustryCategory } from "@/data/industries-data"

// Define a fallback array of industry categories in case the imported data is undefined
const fallbackIndustryCategories: IndustryCategory[] = [
  {
    slug: "residential-luxury-homes",
    title: "Residential & Luxury Homes",
    description: "Exceptional design for distinctive residential properties.",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    slug: "corporate-office-spaces",
    title: "Corporate & Office Spaces",
    description: "Functional and inspiring workspaces for productivity.",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    slug: "retail-commercial",
    title: "Retail & Commercial",
    description: "Engaging environments that enhance customer experience.",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    slug: "hospitality-tourism",
    title: "Hospitality & Tourism",
    description: "Creating memorable experiences through thoughtful design.",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    slug: "healthcare-wellness",
    title: "Healthcare & Wellness",
    description: "Healing environments that promote wellbeing.",
    image: "/placeholder.svg?height=300&width=500",
  },
]

export default function IndustriesPage() {
  // Import the data dynamically to avoid issues during prerendering
  let industryCategories: IndustryCategory[] = []
  try {
    // Try to import the data, but use fallback if it fails
    const { industryCategories: importedCategories } = require("@/data/industries-data")
    industryCategories = importedCategories || fallbackIndustryCategories
  } catch (error) {
    // If import fails, use the fallback data
    industryCategories = fallbackIndustryCategories
  }

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Industries We Serve</h2>
          <p className="text-gray-600">
            Our design expertise spans across various industries, each with unique requirements and challenges. Explore
            our industry-specific solutions tailored to meet your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industryCategories.map((industry: IndustryCategory) => (
            <div
              key={industry.slug}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:-translate-y-2"
            >
              <div className="relative h-48">
                <Image src={industry.image || "/placeholder.svg"} alt={industry.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-[#003087]">{industry.title}</h3>
                <p className="text-gray-600 mb-4">{industry.description}</p>
                <Link
                  href={`/industries/${industry.slug}`}
                  className="inline-flex items-center text-[#003087] font-medium hover:underline"
                >
                  Explore Solutions
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

