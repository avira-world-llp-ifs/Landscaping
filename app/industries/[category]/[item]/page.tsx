import { notFound } from "next/navigation"
import IndustryDesign from "./industrydesign"
import { getIndustryData } from "@/data/industries-data"
import { industriesData } from "@/components/data/industries"

export default function IndustryItemPage({ params }: { params: { category: string; item: string } }) {
  // Try to get data from both sources to ensure we find something
  const industryData =
    getIndustryData(params.category, params.item) || industriesData[params.category]?.subitems?.[params.item]

  // If the industry doesn't exist, show the 404 page
  if (!industryData) {
    console.log(`Industry not found: category=${params.category}, item=${params.item}`)
    notFound()
  }

  return (
    <IndustryDesign
      data={industryData}
      type="industry"
      parentTitle={industriesData[params.category]?.title || params.category}
    />
  )
}

