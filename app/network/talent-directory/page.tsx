import { Search, Filter, MapPin, ArrowRight, Briefcase } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const professionals = [
  {
    id: 1,
    name: "Sarah Johnson",
    title: "Interior Designer",
    location: "New York, NY",
    experience: "8 years",
    specialties: ["Residential", "Commercial", "Sustainable Design"],
    image: "/placeholder.svg?height=300&width=300",
    profile: "/network/talent/sarah-johnson",
  },
  {
    id: 2,
    name: "Michael Chen",
    title: "Architectural Designer",
    location: "San Francisco, CA",
    experience: "12 years",
    specialties: ["Modern", "Minimalist", "Urban"],
    image: "/placeholder.svg?height=300&width=300",
    profile: "/network/talent/michael-chen",
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    title: "Landscape Architect",
    location: "Miami, FL",
    experience: "6 years",
    specialties: ["Tropical", "Sustainable", "Residential"],
    image: "/placeholder.svg?height=300&width=300",
    profile: "/network/talent/emma-rodriguez",
  },
  {
    id: 4,
    name: "David Wilson",
    title: "Industrial Designer",
    location: "Chicago, IL",
    experience: "15 years",
    specialties: ["Furniture", "Lighting", "Product Design"],
    image: "/placeholder.svg?height=300&width=300",
    profile: "/network/talent/david-wilson",
  },
  {
    id: 5,
    name: "Olivia Taylor",
    title: "Interior Stylist",
    location: "Los Angeles, CA",
    experience: "7 years",
    specialties: ["Residential", "Luxury", "Contemporary"],
    image: "/placeholder.svg?height=300&width=300",
    profile: "/network/talent/olivia-taylor",
  },
  {
    id: 6,
    name: "James Martinez",
    title: "Architectural Visualizer",
    location: "Austin, TX",
    experience: "9 years",
    specialties: ["3D Rendering", "VR/AR", "Concept Design"],
    image: "/placeholder.svg?height=300&width=300",
    profile: "/network/talent/james-martinez",
  },
  {
    id: 7,
    name: "Sophia Lee",
    title: "Urban Planner",
    location: "Boston, MA",
    experience: "11 years",
    specialties: ["Urban Design", "Community Planning", "Sustainable Development"],
    image: "/placeholder.svg?height=300&width=300",
    profile: "/network/talent/sophia-lee",
  },
  {
    id: 8,
    name: "Robert Garcia",
    title: "Lighting Designer",
    location: "Seattle, WA",
    experience: "10 years",
    specialties: ["Architectural Lighting", "Residential", "Commercial"],
    image: "/placeholder.svg?height=300&width=300",
    profile: "/network/talent/robert-garcia",
  },
  {
    id: 9,
    name: "Emily Thompson",
    title: "Sustainable Design Consultant",
    location: "Portland, OR",
    experience: "8 years",
    specialties: ["LEED Certification", "Green Building", "Energy Efficiency"],
    image: "/placeholder.svg?height=300&width=300",
    profile: "/network/talent/emily-thompson",
  },
]

export default function TalentDirectoryPage() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h2 className="text-3xl font-bold mb-6">Talent Directory</h2>
          <p className="text-gray-600 mb-6 text-lg">
            Browse our curated directory of design professionals and specialists. Find the perfect talent for your
            project needs, from architects and interior designers to specialized consultants and visualizers.
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

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button className="px-4 py-2 bg-[#003087] text-white rounded-md">All Professionals</button>
          <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">Architects</button>
          <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">Interior Designers</button>
          <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">Landscape Architects</button>
          <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">Consultants</button>
          <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">Visualizers</button>
        </div>

        {/* Professionals Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {professionals.map((professional) => (
            <div
              key={professional.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:-translate-y-2"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="relative h-16 w-16 rounded-full overflow-hidden mr-4">
                    <Image
                      src={professional.image || "/placeholder.svg"}
                      alt={professional.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#003087]">{professional.name}</h3>
                    <p className="text-gray-600">{professional.title}</p>
                  </div>
                </div>
                <div className="flex items-center mb-3 text-sm">
                  <MapPin size={14} className="mr-1 text-gray-500" />
                  <span className="text-gray-600">{professional.location}</span>
                </div>
                <div className="flex items-center mb-4 text-sm">
                  <Briefcase size={14} className="mr-1 text-gray-500" />
                  <span className="text-gray-600">Experience: {professional.experience}</span>
                </div>
                <div className="mb-4">
                  <h4 className="text-sm font-medium mb-2">Specialties:</h4>
                  <div className="flex flex-wrap gap-2">
                    {professional.specialties.map((specialty, index) => (
                      <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
                <Link
                  href={professional.profile}
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

