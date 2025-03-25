import ServiceDetailHeader from "@/components/ServiceDetail/ServiceDetailHeader"
import ServiceDetailBody from "@/components/ServiceDetail/ServiceDetailBody"
import { getTechData } from "@/data/tech-data"
import { notFound } from "next/navigation"

export default function TechDetailPage({ params }: { params: { category: string; item: string } }) {
  // Get the tech data based on the category and item params
  const techData = getTechData(params.category, params.item)

  // If the tech doesn't exist, show the 404 page
  if (!techData) {
    notFound()
  }

  // Ensure all required properties exist for ServiceDetailBody
  const serviceData = {
    title: techData.title,
    description: techData.description,
    content: techData.description || "", // Fallback if content is missing
    planningWork: {
      title: "Technology Implementation",
      description:
        techData.sections?.[0]?.content || "Our implementation process ensures successful technology adoption.",
      features: techData.sections?.[0]?.features || [],
    },
    additionalInfo: techData.sections?.[1]?.content || "",
    additionalFeatures: techData.sections?.[1]?.features || [],
    tabContent: {
      materials: {
        title: "Technology Features",
        image: "/placeholder.svg?height=300&width=400",
        content: "Explore the key features of this technology solution.",
      },
      design: {
        title: "Implementation Process",
        image: "/placeholder.svg?height=300&width=400",
        content: "Our implementation process is designed to minimize disruption and maximize value.",
      },
      care: {
        title: "Maintenance & Updates",
        image: "/placeholder.svg?height=300&width=400",
        content: "We provide ongoing maintenance and updates to keep your technology current.",
      },
      support: {
        title: "Technical Support",
        hasForm: true,
      },
    },
  }

  return (
    <div>
      <ServiceDetailHeader title={techData.title} />
      <ServiceDetailBody serviceData={serviceData} />
    </div>
  )
}

// Generate static params for all tech categories and items
export function generateStaticParams() {
  // This would normally come from your data source
  // For now, we'll return an empty array, and it will be generated on-demand
  return []
}

