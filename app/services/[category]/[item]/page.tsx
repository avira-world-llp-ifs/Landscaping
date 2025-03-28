import ServiceDetailHeader from "@/components/ServiceDetail/ServiceDetailHeader"
import ServiceDetailBody from "@/components/ServiceDetail/ServiceDetailBody"
import { getServiceData, getServiceCategory } from "@/data/services-data"
import { notFound } from "next/navigation"

export default function ServiceDetailPage({ params }: { params: { category: string; item: string } }) {
  // Get the service data based on the category and item params
  const serviceData = getServiceData(params.category, params.item)

  // If the service doesn't exist, show the 404 page
  if (!serviceData) {
    notFound()
  }

  // Ensure all required properties exist for ServiceDetailBody
  const enhancedServiceData = {
    title: serviceData.title,
    description: serviceData.description,
    content: serviceData.description || "", // Fallback if content is missing
    planningWork: {
      title: "Planning & Implementation",
      description: serviceData.sections?.[0]?.content || "Our detailed planning ensures successful implementation.",
      features: serviceData.sections?.[0]?.features || [],
    },
    additionalInfo: serviceData.sections?.[1]?.content || "",
    additionalFeatures: serviceData.sections?.[1]?.features || [],
    tabContent: {
      materials: {
        title: "Quality Materials",
        image: "/placeholder.svg?height=300&width=400",
        content: "We use only the highest quality materials for all our projects.",
      },
      design: {
        title: "Design Process",
        image: "/placeholder.svg?height=300&width=400",
        content: "Our design process is collaborative and iterative to ensure your vision is realized.",
      },
      care: {
        title: "Ongoing Support",
        image: "/placeholder.svg?height=300&width=400",
        content: "We provide ongoing support and maintenance for all our services.",
      },
      support: {
        title: "Customer Support",
        hasForm: true,
      },
    },
  }

  return (
    <div>
      <ServiceDetailHeader
        title={serviceData.title}
        category="Services"
        categoryPath="/services"
        parentTitle={getServiceCategory(params.category)?.title}
        parentPath={`/services/${params.category}`}
      />
      <ServiceDetailBody serviceData={enhancedServiceData} />
    </div>
  )
}

// Generate static params for all service categories and items
export function generateStaticParams() {
  // This would normally come from your data source
  // For now, we'll return an empty array, and it will be generated on-demand
  return []
}

