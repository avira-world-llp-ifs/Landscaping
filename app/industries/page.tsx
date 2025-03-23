import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { industryCategories } from "@/data/industries-data"

export default function IndustriesPage() {
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
          {industryCategories.map((industry) => (
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

