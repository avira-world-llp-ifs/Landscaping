import ServiceDetailHeader from "@/components/ServiceDetail/ServiceDetailHeader"
import ServiceDetailBody from "@/components/ServiceDetail/ServiceDetailBody"
import { getIndustryData } from "@/data/industries-data"
import { notFound } from "next/navigation"

export default function IndustryDetailPage({ params }: { params: { category: string; item: string } }) {
  // Get the industry data based on the category and item params
  const industryData = getIndustryData(params.category, params.item)

  // If the industry doesn't exist, show the 404 page
  if (!industryData) {
    notFound()
  }

  // Ensure all required properties exist for ServiceDetailBody
  const serviceData = {
    title: industryData.title,
    description: industryData.description,
    content: industryData.description || "", // Fallback if content is missing
    planningWork: {
      title: "Industry Approach",
      description:
        industryData.sections?.[0]?.content || "Our approach is tailored to the specific needs of this industry.",
      features: industryData.sections?.[0]?.features || [],
    },
    additionalInfo: industryData.sections?.[1]?.content || "",
    additionalFeatures: industryData.sections?.[1]?.features || [],
    tabContent: {
      materials: {
        title: "Industry Standards",
        image: "/placeholder.svg?height=300&width=400",
        content: "We adhere to the highest industry standards in all our work.",
      },
      design: {
        title: "Industry Solutions",
        image: "/placeholder.svg?height=300&width=400",
        content: "Our solutions are designed specifically for the unique challenges of this industry.",
      },
      care: {
        title: "Ongoing Support",
        image: "/placeholder.svg?height=300&width=400",
        content: "We provide ongoing support and maintenance for all our industry solutions.",
      },
      support: {
        title: "Industry Support",
        hasForm: true,
      },
    },
  }

  return (
    <div>
      <ServiceDetailHeader title={industryData.title} />
      <ServiceDetailBody serviceData={serviceData} />
    </div>
  )
}

// Generate static params for all industry categories and items
export function generateStaticParams() {
  // This would normally come from your data source
  // For now, we'll return an empty array, and it will be generated on-demand
  return []
}

