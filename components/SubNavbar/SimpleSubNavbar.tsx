"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

type SubNavItem = {
  name: string
  href: string
}

// Define the mapping between main navigation paths and their sub-items
const subNavMapping: Record<string, SubNavItem[]> = {
  // Architecture Services
  "/services/architecture": [
    { name: "Survey and Analysis", href: "/services/architecture/survey-analysis" },
    { name: "Conceptual Design", href: "/services/architecture/conceptual-design" },
    { name: "Design Development", href: "/services/architecture/design-development" },
    { name: "Documentation", href: "/services/architecture/documentation" },
    { name: "Construction", href: "/services/architecture/construction-supervision" },
    { name: "Post-Completion", href: "/services/architecture/post-completion" },
  ],

  // Interior Design
  "/services/interior-design": [
    { name: "Space Planning", href: "/services/interior-design/space-planning" },
    { name: "Material Selection", href: "/services/interior-design/material-selection" },
    { name: "Custom Design", href: "/services/interior-design/custom-design" },
    { name: "Lighting", href: "/services/interior-design/lighting-automation" },
    { name: "Styling", href: "/services/interior-design/aesthetic-styling" },
    { name: "Installation", href: "/services/interior-design/installation-supervision" },
  ],

  // Add more mappings for other sections as needed
}

export default function SimpleSubNavbar() {
  const pathname = usePathname() || ""
  const [subNavItems, setSubNavItems] = useState<SubNavItem[]>([])

  useEffect(() => {
    // Find the matching path in our mapping
    const matchingPath = Object.keys(subNavMapping).find((path) => pathname.startsWith(path) || pathname === path)

    if (matchingPath) {
      setSubNavItems(subNavMapping[matchingPath])
    } else {
      setSubNavItems([])
    }
  }, [pathname])

  // Don't render anything if there are no sub-nav items
  if (subNavItems.length === 0) {
    return null
  }

  return (
    <div className="border-b bg-white duration-600 ease-in-out" style={{ height: "58px" }}>
      <div className="container mx-auto px-4 py-2 flex gap-6">
        {subNavItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="px-4 py-2 hover:bg-[#003087] hover:text-white rounded-md transition-all"
            style={{ fontWeight: "bold", fontSize: "20px" }}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  )
}

