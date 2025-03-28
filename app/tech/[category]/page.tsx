import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { getTechCategory, getTechItemsByCategory, type TechItem } from "@/data/tech-data"
import ServiceDetailHeader from "@/components/ServiceDetail/ServiceDetailHeader"

export default function TechCategoryPage({ params }: { params: { category: string } }) {
  // Get the category data
  const categoryData = getTechCategory(params.category)

  // If the category doesn't exist, show the 404 page
  if (!categoryData) {
    notFound()
  }

  // Get the tech items for this category
  const techItems = getTechItemsByCategory(params.category) || []

  return (
    <div>
      <ServiceDetailHeader title={categoryData.title} category="Technology" categoryPath="/tech" />

      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-6">{categoryData.title}</h2>
            <p className="text-gray-600 mb-6 text-lg">{categoryData.description}</p>

            <div className="bg-gray-50 p-8 rounded-lg mb-12">
              <h3 className="text-xl font-bold mb-4 text-[#003087]">
                {categoryData.subtitle || "Why the right technology matters"}
              </h3>
              <p className="mb-6">{categoryData.overview}</p>
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-8 text-center">Our {categoryData.title} Tools</h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {techItems.map((item: TechItem, index: number) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:-translate-y-2"
              >
                <div className="relative h-48">
                  <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-[#003087]">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.shortDescription || item.description}</p>
                  <Link
                    href={`/tech/${params.category}/${item.slug}`}
                    className="inline-flex items-center text-[#003087] font-medium hover:underline"
                  >
                    Learn more
                    <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// Generate static params for all tech categories
export function generateStaticParams() {
  // This would normally come from your data source
  // For now, we'll return an empty array, and it will be generated on-demand
  return []
}

