// "use client"

// import Link from "next/link"
// import { usePathname } from "next/navigation"
// import { useEffect, useState } from "react"

// type SubNavItem = {
//   name: string
//   href: string
// }

// // Update the subNavMapping to use dynamic routes
// const subNavMapping: Record<string, SubNavItem[]> = {
//   // Services categories
//   "/services/consulting": [
//     { name: "Business Strategy", href: "/services/consulting/business-strategy" },
//     { name: "Market Analysis", href: "/services/consulting/market-analysis" },
//     { name: "Project Planning", href: "/services/consulting/project-planning" },
//     { name: "Feasibility Studies", href: "/services/consulting/feasibility-studies" },
//     { name: "Sustainability Consulting", href: "/services/consulting/sustainability" },
//   ],
//   "/services/project-management": [
//     { name: "Timeline Management", href: "/services/project-management/timeline" },
//     { name: "Budget Control", href: "/services/project-management/budget" },
//     { name: "Resource Allocation", href: "/services/project-management/resources" },
//     { name: "Quality Assurance", href: "/services/project-management/quality" },
//     { name: "Risk Management", href: "/services/project-management/risk" },
//   ],
//   "/services/engineering": [
//     { name: "Structural Engineering", href: "/services/engineering/structural" },
//     { name: "MEP Engineering", href: "/services/engineering/mep" },
//     { name: "Civil Engineering", href: "/services/engineering/civil" },
//     { name: "Environmental Engineering", href: "/services/engineering/environmental" },
//     { name: "Geotechnical Engineering", href: "/services/engineering/geotechnical" },
//   ],
//   "/services/architecture": [
//     { name: "Survey and Analysis", href: "/services/architecture/survey-analysis" },
//     { name: "Conceptual Design", href: "/services/architecture/conceptual-design" },
//     { name: "Design Development", href: "/services/architecture/design-development" },
//     { name: "Documentation", href: "/services/architecture/documentation" },
//     { name: "Construction", href: "/services/architecture/construction-supervision" },
//     { name: "Post-Completion", href: "/services/architecture/post-completion" },
//   ],
//   "/services/interior-design": [
//     { name: "Space Planning", href: "/services/interior-design/space-planning" },
//     { name: "Material Selection", href: "/services/interior-design/material-selection" },
//     { name: "Custom Design", href: "/services/interior-design/custom-design" },
//     { name: "Lighting", href: "/services/interior-design/lighting-automation" },
//     { name: "Styling", href: "/services/interior-design/aesthetic-styling" },
//     { name: "Installation", href: "/services/interior-design/installation-supervision" },
//   ],

//   // Tech categories
//   "/tech/design-drafting": [
//     { name: "AutoCAD", href: "/tech/design-drafting/autocad" },
//     { name: "SketchUp", href: "/tech/design-drafting/sketchup" },
//     { name: "Revit", href: "/tech/design-drafting/revit" },
//     { name: "Rhino", href: "/tech/design-drafting/rhino" },
//     { name: "Vectorworks", href: "/tech/design-drafting/vectorworks" },
//   ],
//   "/tech/landscape-design": [
//     { name: "Land F/X", href: "/tech/landscape-design/land-fx" },
//     { name: "AutoCAD Civil 3D", href: "/tech/landscape-design/autocad-civil-3d" },
//     { name: "Lumion", href: "/tech/landscape-design/lumion" },
//     { name: "Garden Planner", href: "/tech/landscape-design/garden-planner" },
//   ],
//   "/tech/project-management": [
//     { name: "Trello", href: "/tech/project-management/trello" },
//     { name: "Asana", href: "/tech/project-management/asana" },
//     { name: "BIM 360", href: "/tech/project-management/bim-360" },
//     { name: "Basecamp", href: "/tech/project-management/basecamp" },
//   ],
//   "/tech/rendering-visualization": [
//     { name: "V-Ray", href: "/tech/rendering-visualization/v-ray" },
//     { name: "Enscape", href: "/tech/rendering-visualization/enscape" },
//     { name: "Twinmotion", href: "/tech/rendering-visualization/twinmotion" },
//     { name: "Photoshop", href: "/tech/rendering-visualization/photoshop" },
//     { name: "Coreldraw", href: "/tech/rendering-visualization/coreldraw" },
//   ],

//   // Industry categories
//   "/industries/residential-luxury-homes": [
//     { name: "Luxury Villas", href: "/industries/residential-luxury-homes/luxury-villas" },
//     { name: "Penthouses", href: "/industries/residential-luxury-homes/penthouses" },
//     { name: "Smart Homes", href: "/industries/residential-luxury-homes/smart-homes" },
//     { name: "Eco-Friendly Homes", href: "/industries/residential-luxury-homes/eco-friendly" },
//   ],
//   "/industries/corporate-office-spaces": [
//     { name: "Open Offices", href: "/industries/corporate-office-spaces/open-offices" },
//     { name: "Executive Suites", href: "/industries/corporate-office-spaces/executive-suites" },
//     { name: "Coworking Spaces", href: "/industries/corporate-office-spaces/coworking" },
//     { name: "Conference Centers", href: "/industries/corporate-office-spaces/conference-centers" },
//   ],
//   "/industries/retail-commercial": [
//     { name: "Retail Stores", href: "/industries/retail-commercial/retail-stores" },
//     { name: "Shopping Malls", href: "/industries/retail-commercial/shopping-malls" },
//     { name: "Restaurants", href: "/industries/retail-commercial/restaurants" },
//     { name: "Entertainment Venues", href: "/industries/retail-commercial/entertainment" },
//   ],
//   "/industries/hospitality-tourism": [
//     { name: "Hotels", href: "/industries/hospitality-tourism/hotels" },
//     { name: "Resorts", href: "/industries/hospitality-tourism/resorts" },
//     { name: "Spas", href: "/industries/hospitality-tourism/spas" },
//     { name: "Tourist Attractions", href: "/industries/hospitality-tourism/attractions" },
//   ],
//   "/industries/healthcare-wellness": [
//     { name: "Hospitals", href: "/industries/healthcare-wellness/hospitals" },
//     { name: "Clinics", href: "/industries/healthcare-wellness/clinics" },
//     { name: "Wellness Centers", href: "/industries/healthcare-wellness/wellness-centers" },
//     { name: "Fitness Facilities", href: "/industries/healthcare-wellness/fitness" },
//   ],

//   // General category pages
//   "/tech": [
//     { name: "Design & Drafting", href: "/tech/design-drafting" },
//     { name: "Landscape Design", href: "/tech/landscape-design" },
//     { name: "Project Management", href: "/tech/project-management" },
//     { name: "Rendering & Visualization", href: "/tech/rendering-visualization" },
//     { name: "Surveying & GIS", href: "/tech/surveying-gis" },
//     { name: "Visualization & AR", href: "/tech/visualization-ar" },
//   ],
//   "/industries": [
//     { name: "Residential & Luxury Homes", href: "/industries/residential-luxury-homes" },
//     { name: "Corporate & Office Spaces", href: "/industries/corporate-office-spaces" },
//     { name: "Retail & Commercial", href: "/industries/retail-commercial" },
//     { name: "Hospitality & Tourism", href: "/industries/hospitality-tourism" },
//     { name: "Healthcare & Wellness", href: "/industries/healthcare-wellness" },
//   ],
//   "/services": [
//     { name: "Consulting", href: "/services/consulting" },
//     { name: "Project Management", href: "/services/project-management" },
//     { name: "Engineering", href: "/services/engineering" },
//     { name: "Architecture", href: "/services/architecture" },
//     { name: "Interior Design", href: "/services/interior-design" },
//   ],
// }

// export default function SubNavbar() {
//   const pathname = usePathname() || ""
//   const [subNavItems, setSubNavItems] = useState<SubNavItem[]>([])
//   const [activeItem, setActiveItem] = useState<string>("")

//   useEffect(() => {
//     // Find the matching path in our mapping
//     const matchingPath = Object.keys(subNavMapping).find((path) => pathname === path || pathname.startsWith(`${path}/`))

//     if (matchingPath) {
//       setSubNavItems(subNavMapping[matchingPath])

//       // Set active item based on current path
//       const currentSubItem = subNavMapping[matchingPath].find(
//         (item) => pathname === item.href || pathname.startsWith(`${item.href}/`),
//       )

//       if (currentSubItem) {
//         setActiveItem(currentSubItem.href)
//       } else {
//         setActiveItem("")
//       }
//     } else {
//       setSubNavItems([])
//       setActiveItem("")
//     }
//   }, [pathname])

//   // Don't render anything if there are no sub-nav items
//   if (subNavItems.length === 0) {
//     return null
//   }

//   return (
//     <div className="bg-[#003087] shadow-md">
//       <div className="container mx-auto px-4 overflow-x-auto">
//         <div className="flex justify-center items-center">
//           {subNavItems.map((item) => (
//             <Link
//               key={item.href}
//               href={item.href}
//               className={`px-6 py-4 text-white font-medium transition-all hover:bg-[#004db3] whitespace-nowrap ${
//                 activeItem === item.href
//                   ? "bg-[#004db3] relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-[#ff5e14]"
//                   : ""
//               }`}
//             >
//               {item.name}
//             </Link>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }

"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"

type SubNavItem = {
  name: string
  href: string
}

// Update the subNavMapping to use dynamic routes
const subNavMapping: Record<string, SubNavItem[]> = {
  // Services categories
  "/services/consulting": [
    { name: "Business Strategy", href: "/services/consulting/business-strategy" },
    { name: "Market Analysis", href: "/services/consulting/market-analysis" },
    { name: "Project Planning", href: "/services/consulting/project-planning" },
    { name: "Feasibility Studies", href: "/services/consulting/feasibility-studies" },
    { name: "Sustainability Consulting", href: "/services/consulting/sustainability" },
  ],
  "/services/project-management": [
    { name: "Timeline Management", href: "/services/project-management/timeline" },
    { name: "Budget Control", href: "/services/project-management/budget" },
    { name: "Resource Allocation", href: "/services/project-management/resources" },
    { name: "Quality Assurance", href: "/services/project-management/quality" },
    { name: "Risk Management", href: "/services/project-management/risk" },
  ],
  "/services/engineering": [
    { name: "Structural Engineering", href: "/services/engineering/structural" },
    { name: "MEP Engineering", href: "/services/engineering/mep" },
    { name: "Civil Engineering", href: "/services/engineering/civil" },
    { name: "Environmental Engineering", href: "/services/engineering/environmental" },
    { name: "Geotechnical Engineering", href: "/services/engineering/geotechnical" },
  ],
  "/services/architecture": [
    { name: "Survey and Analysis", href: "/services/architecture/survey-analysis" },
    { name: "Conceptual Design", href: "/services/architecture/conceptual-design" },
    { name: "Design Development", href: "/services/architecture/design-development" },
    { name: "Documentation", href: "/services/architecture/documentation" },
    { name: "Construction", href: "/services/architecture/construction-supervision" },
    { name: "Post-Completion", href: "/services/architecture/post-completion" },
  ],
  "/services/interior-design": [
    { name: "Space Planning", href: "/services/interior-design/space-planning" },
    { name: "Material Selection", href: "/services/interior-design/material-selection" },
    { name: "Custom Design", href: "/services/interior-design/custom-design" },
    { name: "Lighting", href: "/services/interior-design/lighting-automation" },
    { name: "Styling", href: "/services/interior-design/aesthetic-styling" },
    { name: "Installation", href: "/services/interior-design/installation-supervision" },
  ],

  // Tech categories
  "/tech/design-drafting": [
    { name: "AutoCAD", href: "/tech/design-drafting/autocad" },
    { name: "SketchUp", href: "/tech/design-drafting/sketchup" },
    { name: "Revit", href: "/tech/design-drafting/revit" },
    { name: "Rhino", href: "/tech/design-drafting/rhino" },
    { name: "Vectorworks", href: "/tech/design-drafting/vectorworks" },
  ],
  "/tech/landscape-design": [
    { name: "Land F/X", href: "/tech/landscape-design/land-fx" },
    { name: "AutoCAD Civil 3D", href: "/tech/landscape-design/autocad-civil-3d" },
    { name: "Lumion", href: "/tech/landscape-design/lumion" },
    { name: "Garden Planner", href: "/tech/landscape-design/garden-planner" },
  ],
  "/tech/project-management": [
    { name: "Trello", href: "/tech/project-management/trello" },
    { name: "Asana", href: "/tech/project-management/asana" },
    { name: "BIM 360", href: "/tech/project-management/bim-360" },
    { name: "Basecamp", href: "/tech/project-management/basecamp" },
  ],
  "/tech/rendering-visualization": [
    { name: "V-Ray", href: "/tech/rendering-visualization/v-ray" },
    { name: "Enscape", href: "/tech/rendering-visualization/enscape" },
    { name: "Twinmotion", href: "/tech/rendering-visualization/twinmotion" },
    { name: "Photoshop", href: "/tech/rendering-visualization/photoshop" },
    { name: "Coreldraw", href: "/tech/rendering-visualization/coreldraw" },
  ],

  // Industry categories
  "/industries/residential-luxury-homes": [
    { name: "Luxury Villas", href: "/industries/residential-luxury-homes/luxury-villas" },
    { name: "Penthouses", href: "/industries/residential-luxury-homes/penthouses" },
    { name: "Smart Homes", href: "/industries/residential-luxury-homes/smart-homes" },
    { name: "Eco-Friendly Homes", href: "/industries/residential-luxury-homes/eco-friendly" },
  ],
  "/industries/corporate-office-spaces": [
    { name: "Open Offices", href: "/industries/corporate-office-spaces/open-offices" },
    { name: "Executive Suites", href: "/industries/corporate-office-spaces/executive-suites" },
    { name: "Coworking Spaces", href: "/industries/corporate-office-spaces/coworking" },
    { name: "Conference Centers", href: "/industries/corporate-office-spaces/conference-centers" },
  ],
  "/industries/retail-commercial": [
    { name: "Retail Stores", href: "/industries/retail-commercial/retail-stores" },
    { name: "Shopping Malls", href: "/industries/retail-commercial/shopping-malls" },
    { name: "Restaurants", href: "/industries/retail-commercial/restaurants" },
    { name: "Entertainment Venues", href: "/industries/retail-commercial/entertainment" },
  ],
  "/industries/hospitality-tourism": [
    { name: "Hotels", href: "/industries/hospitality-tourism/hotels" },
    { name: "Resorts", href: "/industries/hospitality-tourism/resorts" },
    { name: "Spas", href: "/industries/hospitality-tourism/spas" },
    { name: "Tourist Attractions", href: "/industries/hospitality-tourism/attractions" },
  ],
  "/industries/healthcare-wellness": [
    { name: "Hospitals", href: "/industries/healthcare-wellness/hospitals" },
    { name: "Clinics", href: "/industries/healthcare-wellness/clinics" },
    { name: "Wellness Centers", href: "/industries/healthcare-wellness/wellness-centers" },
    { name: "Fitness Facilities", href: "/industries/healthcare-wellness/fitness" },
  ],

  // General category pages
  "/tech": [
    { name: "Design & Drafting", href: "/tech/design-drafting" },
    { name: "Landscape Design", href: "/tech/landscape-design" },
    { name: "Project Management", href: "/tech/project-management" },
    { name: "Rendering & Visualization", href: "/tech/rendering-visualization" },
    { name: "Surveying & GIS", href: "/tech/surveying-gis" },
    { name: "Visualization & AR", href: "/tech/visualization-ar" },
  ],
  "/industries": [
    { name: "Residential & Luxury Homes", href: "/industries/residential-luxury-homes" },
    { name: "Corporate & Office Spaces", href: "/industries/corporate-office-spaces" },
    { name: "Retail & Commercial", href: "/industries/retail-commercial" },
    { name: "Hospitality & Tourism", href: "/industries/hospitality-tourism" },
    { name: "Healthcare & Wellness", href: "/industries/healthcare-wellness" },
  ],
  "/services": [
    { name: "Consulting", href: "/services/consulting" },
    { name: "Project Management", href: "/services/project-management" },
    { name: "Engineering", href: "/services/engineering" },
    { name: "Architecture", href: "/services/architecture" },
    { name: "Interior Design", href: "/services/interior-design" },
  ],
}

export default function SubNavbar() {
  const pathname = usePathname() || ""
  const [subNavItems, setSubNavItems] = useState<SubNavItem[]>([])
  const [activeItem, setActiveItem] = useState<string>("")
  const [isOpen, setIsOpen] = useState<boolean>(false) // Collapse state

  useEffect(() => {
    const matchingPath = Object.keys(subNavMapping).find(
      (path) => pathname === path || pathname.startsWith(`${path}/`)
    )

    if (matchingPath) {
      setSubNavItems(subNavMapping[matchingPath])
      const currentSubItem = subNavMapping[matchingPath].find(
        (item) => pathname === item.href || pathname.startsWith(`${item.href}/`)
      )
      setActiveItem(currentSubItem ? currentSubItem.href : "")
    } else {
      setSubNavItems([])
      setActiveItem("")
    }
  }, [pathname])

  if (subNavItems.length === 0) return null

  return (
    <div className="bg-[#003087] shadow-md">
      <div className="container mx-auto px-4 py-2">
        
        {/* Collapsible Button (Mobile) */}
        <div className="sm:hidden flex justify-between items-center">
          <span className="text-white text-lg font-semibold">Menu</span>
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Collapsible Menu (Mobile) */}
        <div className={`mt-2 ${isOpen ? "block" : "hidden"} sm:hidden`}>
          {subNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`block px-4 py-2 text-white hover:bg-[#004db3] transition-all
                ${activeItem === item.href ? "bg-[#004db3]" : ""}`}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Inline Links (Desktop) */}
        <div className="hidden sm:flex justify-center space-x-6">
          {subNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-white font-medium transition-all px-4 py-2 hover:bg-[#004db3] rounded-md
                ${activeItem === item.href ? "bg-[#004db3]" : ""}`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
