import { Search, Filter, MapPin, Star, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const designers = [
  {
    id: 1,
    name: "Sarah Johnson",
    title: "Interior Designer",
    location: "New York, NY",
    rating: 4.9,
    reviews: 124,
    specialties: ["Residential", "Commercial", "Sustainable Design"],
    image: "/placeholder.svg?height=300&width=300",
    profile: "/network/designer/sarah-johnson",
  },
  {
    id: 2,
    name: "Michael Chen",
    title: "Architectural Designer",
    location: "San Francisco, CA",
    rating: 4.8,
    reviews: 98,
    specialties: ["Modern", "Minimalist", "Urban"],
    image: "/placeholder.svg?height=300&width=300",
    profile: "/network/designer/michael-chen",
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    title: "Landscape Architect",
    location: "Miami, FL",
    rating: 4.7,
    reviews: 87,
    specialties: ["Tropical", "Sustainable", "Residential"],
    image: "/placeholder.svg?height=300&width=300",
    profile: "/network/designer/emma-rodriguez",
  },
  {
    id: 4,
    name: "David Wilson",
    title: "Industrial Designer",
    location: "Chicago, IL",
    rating: 4.9,
    reviews: 112,
    specialties: ["Furniture", "Lighting", "Product Design"],
    image: "/placeholder.svg?height=300&width=300",
    profile: "/network/designer/david-wilson",
  },
  {
    id: 5,
    name: "Olivia Taylor",
    title: "Interior Stylist",
    location: "Los Angeles, CA",
    rating: 4.8,
    reviews: 76,
    specialties: ["Residential", "Luxury", "Contemporary"],
    image: "/placeholder.svg?height=300&width=300",
    profile: "/network/designer/olivia-taylor",
  },
  {
    id: 6,
    name: "James Martinez",
    title: "Architectural Visualizer",
    location: "Austin, TX",
    rating: 4.6,
    reviews: 64,
    specialties: ["3D Rendering", "VR/AR", "Concept Design"],
    image: "/placeholder.svg?height=300&width=300",
    profile: "/network/designer/james-martinez",
  },
]

export default function FindDesignerPage() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h2 className="text-3xl font-bold mb-6">Find a Designer</h2>
          <p className="text-gray-600 mb-6 text-lg">
            Connect with qualified design professionals for your specific project needs. Browse our curated network of
            talented designers, architects, and specialists to find the perfect match for your vision.
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-10">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Search by name, specialty, or location"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#003087]"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            <div className="flex gap-2">
              <button className="flex items-center px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
                <Filter className="h-5 w-5 mr-2 text-[#003087]" />
                <span>Filters</span>
              </button>
              <button className="px-6 py-2 bg-[#003087] text-white rounded-md hover:bg-[#002060]">Search</button>
            </div>
          </div>
        </div>

        {/* Designers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {designers.map((designer) => (
            <div
              key={designer.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:-translate-y-2"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="relative h-16 w-16 rounded-full overflow-hidden mr-4">
                    <Image
                      src={designer.image || "/placeholder.svg"}
                      alt={designer.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#003087]">{designer.name}</h3>
                    <p className="text-gray-600">{designer.title}</p>
                  </div>
                </div>
                <div className="flex items-center mb-3 text-sm">
                  <MapPin size={14} className="mr-1 text-gray-500" />
                  <span className="text-gray-600">{designer.location}</span>
                </div>
                <div className="flex items-center mb-4">
                  <div className="flex items-center mr-2">
                    <Star size={14} className="text-yellow-500" />
                    <span className="ml-1 font-medium">{designer.rating}</span>
                  </div>
                  <span className="text-sm text-gray-500">({designer.reviews} reviews)</span>
                </div>
                <div className="mb-4">
                  <h4 className="text-sm font-medium mb-2">Specialties:</h4>
                  <div className="flex flex-wrap gap-2">
                    {designer.specialties.map((specialty, index) => (
                      <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
                <Link
                  href={designer.profile}
                  className="inline-flex items-center text-[#003087] font-medium hover:underline"
                >
                  View Profile
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

