import Link from "next/link"
import { ArrowRight, Users, Briefcase, UserPlus, ShoppingBag, MessageCircle } from "lucide-react"

const networkServices = [
  {
    title: "Find a Designer",
    description: "Connect with qualified design professionals for your specific project needs",
    icon: <Users className="h-8 w-8 text-[#003087]" />,
    image: "/placeholder.svg?height=250&width=400",
    href: "/network/find-designer",
  },
  {
    title: "Project Collaborations",
    description: "Discover opportunities to collaborate on exciting design projects",
    icon: <Briefcase className="h-8 w-8 text-[#003087]" />,
    image: "/placeholder.svg?height=250&width=400",
    href: "/network/project-collaborations",
  },
  {
    title: "Talent Directory",
    description: "Browse our curated directory of design professionals and specialists",
    icon: <UserPlus className="h-8 w-8 text-[#003087]" />,
    image: "/placeholder.svg?height=250&width=400",
    href: "/network/talent-directory",
  },
  {
    title: "Marketplace for Design Services",
    description: "Find and offer specialized design services for projects of all sizes",
    icon: <ShoppingBag className="h-8 w-8 text-[#003087]" />,
    image: "/placeholder.svg?height=250&width=400",
    href: "/network/marketplace",
  },
  {
    title: "Community & Networking Hub",
    description: "Connect with fellow designers, share ideas, and grow your professional network",
    icon: <MessageCircle className="h-8 w-8 text-[#003087]" />,
    image: "/placeholder.svg?height=250&width=400",
    href: "/network/community-hub",
  },
]

export default function NetworkPage() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h2 className="text-3xl font-bold mb-6">Collaborative Network</h2>
          <p className="text-gray-600 mb-6 text-lg">
            Connect with design professionals, discover collaboration opportunities, and access specialized services
            through our collaborative network. Whether you're looking for talent or offering your expertise, our
            platform brings the design community together.
          </p>
        </div>

        <h3 className="text-2xl font-bold mb-8 text-center">Our Network Services</h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {networkServices.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:-translate-y-2"
            >
              <div className="p-6">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-[#003087]">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link
                  href={service.href}
                  className="inline-flex items-center text-[#003087] font-medium hover:underline"
                >
                  Explore
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

