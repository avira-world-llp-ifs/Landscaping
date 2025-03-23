import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { techCategories } from "@/data/tech-data"

export default function TechPage() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technology Solutions</h2>
          <p className="text-gray-600">
            Explore our cutting-edge technology tools and software solutions for design and project management. We
            provide the latest tools to help you bring your vision to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((tech) => (
            <div
              key={tech.slug}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:-translate-y-2"
            >
              <div className="relative h-48">
                <Image src={tech.image || "/placeholder.svg"} alt={tech.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-[#003087]">{tech.title}</h3>
                <p className="text-gray-600 mb-4">{tech.description}</p>
                <Link
                  href={`/tech/${tech.slug}`}
                  className="inline-flex items-center text-[#003087] font-medium hover:underline"
                >
                  Explore Tools
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

