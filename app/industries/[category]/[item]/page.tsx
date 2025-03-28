import { notFound } from "next/navigation"
import IndustryDesign from "./industrydesign"
import { getIndustryData } from "@/data/industries-data"
import { industriesData } from "@/components/data/industries"

export default function IndustryItemPage({ params }: { params: { category: string; item: string } }) {
  // Try to get data from both sources to ensure we find something
  let industryData

  try {
    // First try to get data from the industries-data.ts file
    industryData = getIndustryData(params.category, params.item)

    // If that fails, try to get data from the components/data/industries.ts file
    if (
      !industryData &&
      industriesData &&
      industriesData[params.category] &&
      industriesData[params.category].subitems
    ) {
      industryData = industriesData[params.category].subitems[params.item]
    }
  } catch (error) {
    console.error("Error fetching industry data:", error)
  }

  // If the industry doesn't exist, show the 404 page
  if (!industryData) {
    console.log(`Industry not found: category=${params.category}, item=${params.item}`)
    notFound()
  }

  // Get the parent title from industriesData if available
  let parentTitle = params.category
  try {
    if (industriesData && industriesData[params.category]) {
      parentTitle = industriesData[params.category].title || params.category
    }
  } catch (error) {
    console.error("Error getting parent title:", error)
  }

  return (
    <IndustryDesign
      data={industryData}
      type="industry"
      parentTitle={industriesData[params.category]?.title || params.category}
      parentPath={`/industries/${params.category}`}
      category="Industries"
      categoryPath="/industries"
    />
  )
}

// Generate static params for all industry items
export function generateStaticParams() {
  // This would normally come from your data source
  // For now, we'll return an empty array, and it will be generated on-demand
  return []
}

