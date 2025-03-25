"use client"

import { notFound } from "next/navigation"
import IndustryDesign from "./industrydesign"
import { industriesData } from "@/components/data/industries"
import { getIndustryData } from "@/data/industries-data"

export default function IndustryPageClient({ params }: { params: { category: string; item: string } }) {
  if (!params?.category || !params?.item) {
    console.log("Missing parameters")
    notFound()
  }

  // Try to get data from both sources to ensure we find something
  const industryData =
    getIndustryData(params.category, params.item) || industriesData[params.category]?.subitems?.[params.item]

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

