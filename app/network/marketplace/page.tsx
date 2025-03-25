import { Star, ArrowRight, DollarSign } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const services = [
  {
    id: 1,
    title: "Custom Interior Design Consultation",
    description:
      "Professional interior design consultation tailored to your specific needs, including space planning, color schemes, and furniture selection.",
    price: "$150/hour",
    rating: 4.9,
    reviews: 87,
    categories: ["Interior Design", "Consultation", "Residential"],
    image: "/placeholder.svg?height=300&width=500",
    link: "/network/marketplace/interior-design-consultation",
  },
  {
    id: 2,
    title: "Architectural 3D Rendering",
    description:
      "High-quality 3D renderings of your architectural projects, including exterior views, interior spaces, and aerial perspectives.",
    price: "$300-$800",
    rating: 4.8,
    reviews: 64,
    categories: ["Visualization", "3D Rendering", "Architecture"],
    image: "/placeholder.svg?height=300&width=500",
    link: "/network/marketplace/architectural-3d-rendering",
  },
  {
    id: 3,
    title: "Landscape Design Package",
    description:
      "Comprehensive landscape design services including site analysis, concept development, planting plans, and material selection.",
    price: "$1,200-$3,500",
    rating: 4.7,
    reviews: 52,
    categories: ["Landscape", "Outdoor", "Residential"],
    image: "/placeholder.svg?height=300&width=500",
    link: "/network/marketplace/landscape-design-package",
  },
  {
    id: 4,
    title: "Furniture Design & Fabrication",
    description:
      "Custom furniture design and fabrication services, from concept sketches to final production of unique, handcrafted pieces.",
    price: "Custom Quote",
    rating: 4.9,
    reviews: 41,
    categories: ["Furniture", "Custom", "Fabrication"],
    image: "/placeholder.svg?height=300&width=500",
    link: "/network/marketplace/furniture-design-fabrication",
  },
  {
    id: 5,
    title: "Commercial Space Planning",
    description:
      "Strategic space planning for commercial environments, optimizing workflow, employee experience, and client interactions.",
    price: "$2,500-$5,000",
    rating: 4.8,
    reviews: 38,
    categories: ["Commercial", "Space Planning", "Office"],
    image: "/placeholder.svg?height=300&width=500",
    link: "/network/marketplace/commercial-space-planning",
  },
  {
    id: 6,
    title: "Sustainable Design Consultation",
    description:
      "Expert consultation on sustainable design strategies, material selection, energy efficiency, and green building certification.",
    price: "$175/hour",
    rating: 4.9,
    reviews: 29,
    categories: ["Sustainable", "Consultation", "Green Building"],
    image: "/placeholder.svg?height=300&width=500",
    link: "/network/marketplace/sustainable-design-consultation",
  },
]

export default function MarketplacePage() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h2 className="text-3xl font-bold mb-6">Marketplace for Design Services</h2>
          <p className="text-gray-600 mb-6 text-lg">
            Find and offer specialized design services for projects of all sizes. Our marketplace connects clients with
            talented professionals offering a wide range of design-related services to meet your specific needs.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button className="px-4 py-2 bg-[#003087] text-white rounded-md">All Services</button>
          <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">Interior Design</button>
          <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">Architecture</button>
          <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">Visualization</button>
          <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">Landscape</button>
          <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">Consultation</button>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:-translate-y-2"
            >
              <div className="relative h-48">
                <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-[#003087]">{service.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{service.description}</p>

                <div className="flex items-center mb-3">
                  <DollarSign size={16} className="mr-1 text-gray-500" />
                  <span className="font-medium">{service.price}</span>
                </div>

                <div className="flex items-center mb-4">
                  <div className="flex items-center mr-2">
                    <Star size={14} className="text-yellow-500" />
                    <span className="ml-1 font-medium">{service.rating}</span>
                  </div>
                  <span className="text-sm text-gray-500">({service.reviews} reviews)</span>
                </div>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {service.categories.map((category, index) => (
                      <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                        {category}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  href={service.link}
                  className="inline-flex items-center text-[#003087] font-medium hover:underline"
                >
                  View Service
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/network" className="inline-flex items-center text-[#003087] font-medium hover:underline">
            Back to Collaborative Network
            <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  )
}

