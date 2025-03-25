import { MessageCircle, Users, Calendar, ArrowRight, Clock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const discussions = [
  {
    id: 1,
    title: "Sustainable Materials for Residential Projects",
    excerpt:
      "Looking for recommendations on sustainable materials that are both eco-friendly and durable for a residential renovation project.",
    author: "Sarah Johnson",
    authorImage: "/placeholder.svg?height=100&width=100",
    date: "2 days ago",
    replies: 24,
    category: "Materials & Resources",
    link: "/network/community-hub/discussions/sustainable-materials",
  },
  {
    id: 2,
    title: "Best Practices for Remote Client Presentations",
    excerpt:
      "What tools and techniques are you using for remote client presentations? Looking to improve my virtual presentation workflow.",
    author: "Michael Chen",
    authorImage: "/placeholder.svg?height=100&width=100",
    date: "4 days ago",
    replies: 18,
    category: "Business & Practice",
    link: "/network/community-hub/discussions/remote-presentations",
  },
  {
    id: 3,
    title: "Integrating Biophilic Design in Urban Spaces",
    excerpt:
      "Discussing strategies for incorporating biophilic design elements in dense urban environments with limited green space.",
    author: "Emma Rodriguez",
    authorImage: "/placeholder.svg?height=100&width=100",
    date: "1 week ago",
    replies: 32,
    category: "Design Theory",
    link: "/network/community-hub/discussions/biophilic-urban-design",
  },
]

const events = [
  {
    id: 1,
    title: "Sustainable Design Summit 2023",
    date: "May 15-17, 2023",
    time: "9:00 AM - 5:00 PM",
    location: "Virtual Event",
    description:
      "Join leading experts in sustainable design for three days of presentations, workshops, and networking opportunities.",
    image: "/placeholder.svg?height=200&width=400",
    link: "/network/community-hub/events/sustainable-design-summit",
  },
  {
    id: 2,
    title: "Portfolio Review Workshop",
    date: "April 28, 2023",
    time: "1:00 PM - 4:00 PM",
    location: "Virtual Event",
    description:
      "Get feedback on your portfolio from industry professionals and learn how to showcase your work effectively.",
    image: "/placeholder.svg?height=200&width=400",
    link: "/network/community-hub/events/portfolio-review-workshop",
  },
]

const groups = [
  {
    id: 1,
    name: "Sustainable Design Collective",
    members: 1245,
    description:
      "A community of designers committed to sustainable practices and environmental responsibility in all aspects of design.",
    image: "/placeholder.svg?height=200&width=400",
    link: "/network/community-hub/groups/sustainable-design-collective",
  },
  {
    id: 2,
    name: "Digital Design Tools",
    members: 876,
    description:
      "Discuss and share tips, tutorials, and resources related to digital design tools and software for design professionals.",
    image: "/placeholder.svg?height=200&width=400",
    link: "/network/community-hub/groups/digital-design-tools",
  },
  {
    id: 3,
    name: "Women in Design",
    members: 1532,
    description:
      "A supportive community for women in all design disciplines to connect, share experiences, and advance in their careers.",
    image: "/placeholder.svg?height=200&width=400",
    link: "/network/community-hub/groups/women-in-design",
  },
]

export default function CommunityHubPage() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h2 className="text-3xl font-bold mb-6">Community & Networking Hub</h2>
          <p className="text-gray-600 mb-6 text-lg">
            Connect with fellow designers, share ideas, and grow your professional network. Our community hub offers
            discussions, events, and groups to help you stay connected and inspired.
          </p>
        </div>

        {/* Discussions Section */}
        <div className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-bold">Recent Discussions</h3>
            <Link
              href="/network/community-hub/discussions"
              className="inline-flex items-center text-[#003087] font-medium hover:underline"
            >
              View All
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>

          <div className="space-y-6">
            {discussions.map((discussion) => (
              <div
                key={discussion.id}
                className="bg-white rounded-lg shadow-md p-6 transition-transform hover:-translate-y-1"
              >
                <Link href={discussion.link} className="block">
                  <h4 className="text-xl font-bold mb-3 text-[#003087]">{discussion.title}</h4>
                  <p className="text-gray-600 mb-4">{discussion.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="relative h-8 w-8 rounded-full overflow-hidden mr-3">
                        <Image
                          src={discussion.authorImage || "/placeholder.svg"}
                          alt={discussion.author}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <span className="text-sm font-medium">{discussion.author}</span>
                      <span className="mx-2 text-gray-400">•</span>
                      <span className="text-sm text-gray-500">{discussion.date}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <MessageCircle size={14} className="mr-1" />
                      <span>{discussion.replies} replies</span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Events Section */}
        <div className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-bold">Upcoming Events</h3>
            <Link
              href="/network/community-hub/events"
              className="inline-flex items-center text-[#003087] font-medium hover:underline"
            >
              View All
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {events.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:-translate-y-2"
              >
                <div className="relative h-48">
                  <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-3 text-[#003087]">{event.title}</h4>
                  <div className="flex items-center mb-2 text-sm">
                    <Calendar size={14} className="mr-1 text-gray-500" />
                    <span className="text-gray-600">{event.date}</span>
                  </div>
                  <div className="flex items-center mb-3 text-sm">
                    <Clock size={14} className="mr-1 text-gray-500" />
                    <span className="text-gray-600">{event.time}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  <Link
                    href={event.link}
                    className="inline-flex items-center text-[#003087] font-medium hover:underline"
                  >
                    Learn More
                    <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Groups Section */}
        <div className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-bold">Popular Groups</h3>
            <Link
              href="/network/community-hub/groups"
              className="inline-flex items-center text-[#003087] font-medium hover:underline"
            >
              View All
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {groups.map((group) => (
              <div
                key={group.id}
                className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:-translate-y-2"
              >
                <div className="relative h-40">
                  <Image src={group.image || "/placeholder.svg"} alt={group.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-2 text-[#003087]">{group.name}</h4>
                  <div className="flex items-center mb-3 text-sm">
                    <Users size={14} className="mr-1 text-gray-500" />
                    <span className="text-gray-600">{group.members} members</span>
                  </div>
                  <p className="text-gray-600 mb-4">{group.description}</p>
                  <Link
                    href={group.link}
                    className="inline-flex items-center text-[#003087] font-medium hover:underline"
                  >
                    Join Group
                    <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
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

