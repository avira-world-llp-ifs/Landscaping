"use client"

import { useState } from "react"
import { industriesData } from "@/components/data/industries"
import { getIndustryItemsByCategory } from "@/data/industries-data"

export default function DebugPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  // Get all categories from both data sources
  const industriesDataCategories = Object.keys(industriesData || {})
  const industriesDataItems = selectedCategory ? industriesData[selectedCategory]?.subitems || {} : {}

  const dataIndustriesCategories = [
    "residential-luxury-homes",
    "corporate-office-spaces",
    "retail-commercial",
    "hospitality-tourism",
    "healthcare-wellness",
  ]
  const dataIndustriesItems = selectedCategory ? getIndustryItemsByCategory(selectedCategory) : []

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Industries Data Debug</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">From components/data/industries.ts</h2>
          <div className="mb-4">
            <h3 className="font-semibold mb-2">Available Categories:</h3>
            <ul className="list-disc pl-5">
              {industriesDataCategories.map((category) => (
                <li key={category} className="mb-1">
                  <button
                    onClick={() => setSelectedCategory(category)}
                    className={`text-blue-600 hover:underline ${selectedCategory === category ? "font-bold" : ""}`}
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {selectedCategory && (
            <div>
              <h3 className="font-semibold mb-2">Items in {selectedCategory}:</h3>
              <ul className="list-disc pl-5">
                {Object.keys(industriesDataItems).map((item) => (
                  <li key={item} className="mb-1">
                    <a
                      href={`/industries/${selectedCategory}/${item}`}
                      className="text-blue-600 hover:underline"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {item} - {industriesDataItems[item].title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">From data/industries-data.ts</h2>
          <div className="mb-4">
            <h3 className="font-semibold mb-2">Available Categories:</h3>
            <ul className="list-disc pl-5">
              {dataIndustriesCategories.map((category) => (
                <li key={category} className="mb-1">
                  <button
                    onClick={() => setSelectedCategory(category)}
                    className={`text-blue-600 hover:underline ${selectedCategory === category ? "font-bold" : ""}`}
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {selectedCategory && (
            <div>
              <h3 className="font-semibold mb-2">Items in {selectedCategory}:</h3>
              <ul className="list-disc pl-5">
                {dataIndustriesItems.map((item) => (
                  <li key={item.slug} className="mb-1">
                    <a
                      href={`/industries/${selectedCategory}/${item.slug}`}
                      className="text-blue-600 hover:underline"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {item.slug} - {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

