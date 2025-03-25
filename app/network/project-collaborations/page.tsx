import { Users, Calendar, ArrowRight, MapPin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const collaborationProjects = [
  {
    id: 1,
    title: "Sustainable Urban Housing Development",
    description:
      "Seeking architects, landscape designers, and sustainability consultants for an innovative urban housing project focused on community living and environmental responsibility.",
    location: "Portland, OR",
    deadline: "April 30, 2023",
    team: 4,
    categories: ["Residential", "Sustainable", "Urban"],
    image: "/placeholder.svg?height=300&width=500",
    link: "/network/project-collaborations/sustainable-urban-housing",
  },
  {
    id: 2,
    title: "Boutique Hotel Renovation",
    description:
      "Looking for interior designers and lighting specialists to collaborate on the renovation of a historic building into a boutique hotel that preserves its architectural heritage.",
    location: "Charleston, SC",
    deadline: "May 15, 2023",
    team: 3,
    categories: ["Hospitality", "Historic", "Renovation"],
    image: "/placeholder.svg?height=300&width=500",
    link: "/network/project-collaborations/boutique-hotel-renovation",
  },
  {
    id: 3,
    title: "Modern Wellness Center Design",
    description:
      "Collaboration opportunity for architects, interior designers, and wellness specialists to create a holistic health center that promotes healing through thoughtful design.",
    location: "Denver, CO",
    deadline: "June 1, 2023",
    team: 5,
    categories: ["Healthcare", "Wellness", "Modern"],
    image: "/placeholder.svg?height=300&width=500",
    link: "/network/project-collaborations/wellness-center",
  },
  {
    id: 4,
    title: "Tech Startup Office Space",
    description:
      "Seeking innovative designers to create a flexible, collaborative workspace for a growing tech company that reflects their creative culture and supports hybrid work models.",
    location: "Austin, TX",
    deadline: "May 20, 2023",
    team: 3,
    categories: ["Commercial", "Office", "Tech"],
    image: "/placeholder.svg?height=300&width=500",
    link: "/network/project-collaborations/tech-startup-office",
  },
  {
    id: 5,
    title: "Community Arts Center",
    description:
      "Collaboration opportunity for architects, acoustic specialists, and accessibility consultants to design an inclusive community arts center that serves diverse populations.",
    location: "Minneapolis, MN",
    deadline: "June 15, 2023",
    team: 6,
    categories: ["Cultural", "Public", "Inclusive"],
    image: "/placeholder.svg?height=300&width=500",
    link: "/network/project-collaborations/community-arts-center",
  },
  {
    id: 6,
    title: "Sustainable Restaurant Design",
    description:
      "Looking for designers with experience in sustainable hospitality design to create an eco-friendly farm-to-table restaurant with minimal environmental impact.",
    location: "Seattle, WA",
    deadline: "May 30, 2023",
    team: 4,
    categories: ["Hospitality", "Sustainable", "Restaurant"],
    image: "/placeholder.svg?height=300&width=500",
    link: "/network/project-collaborations/sustainable-restaurant",
  },
]

export default function ProjectCollaborationsPage() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h2 className="text-3xl font-bold mb-6">Project Collaborations</h2>
          <p className="text-gray-600 mb-6 text-lg">
            Discover opportunities to collaborate on exciting design projects with professionals from around the world.
            Join forces with talented individuals to create innovative solutions and expand your portfolio.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button className="px-4 py-2 bg-[#003087] text-white rounded-md">All Projects</button>
          <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">Residential</button>
          <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">Commercial</button>
          <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">Sustainable</button>
          <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">Cultural</button>
          <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">Hospitality</button>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {collaborationProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:-translate-y-2"
            >
              <div className="relative h-48">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-[#003087]">{project.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>

                <div className="flex items-center mb-3 text-sm">
                  <MapPin size={14} className="mr-1 text-gray-500" />
                  <span className="text-gray-600">{project.location}</span>
                </div>

                <div className="flex items-center mb-3 text-sm">
                  <Calendar size={14} className="mr-1 text-gray-500" />
                  <span className="text-gray-600">Deadline: {project.deadline}</span>
                </div>

                <div className="flex items-center mb-4 text-sm">
                  <Users size={14} className="mr-1 text-gray-500" />
                  <span className="text-gray-600">Team Size: {project.team}</span>
                </div>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.categories.map((category, index) => (
                      <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                        {category}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  href={project.link}
                  className="inline-flex items-center text-[#003087] font-medium hover:underline"
                >
                  View Project
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

