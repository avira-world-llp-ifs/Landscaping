"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

type SubNavItem = {
  name: string
  href: string
}

// Update the subNavMapping to include all possible sections
const subNavMapping: Record<string, SubNavItem[]> = {
  // Services categories
  "/services": [
    { name: "Consulting", href: "/services/consulting" },
    { name: "Project Management", href: "/services/project-management" },
    { name: "Engineering", href: "/services/engineering" },
    { name: "Architecture", href: "/services/architecture" },
    { name: "Interior Design", href: "/services/interior-design" },
  ],
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
  "/tech": [
    { name: "Design & Drafting", href: "/tech/design-drafting" },
    { name: "Landscape Design", href: "/tech/landscape-design" },
    { name: "Project Management", href: "/tech/project-management" },
    { name: "Rendering & Visualization", href: "/tech/rendering-visualization" },
    { name: "Surveying & GIS", href: "/tech/surveying-gis" },
    { name: "Visualization & AR", href: "/tech/visualization-ar" },
  ],
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
  "/tech/surveying-gis": [
    { name: "ArcGIS", href: "/tech/surveying-gis/arcgis" },
    { name: "QGIS", href: "/tech/surveying-gis/qgis" },
    { name: "Trimble", href: "/tech/surveying-gis/trimble" },
    { name: "Leica", href: "/tech/surveying-gis/leica" },
  ],
  "/tech/visualization-ar": [
    { name: "Unity", href: "/tech/visualization-ar/unity" },
    { name: "Unreal Engine", href: "/tech/visualization-ar/unreal-engine" },
    { name: "ARKit", href: "/tech/visualization-ar/arkit" },
    { name: "ARCore", href: "/tech/visualization-ar/arcore" },
  ],

  // Industry categories
  "/industries": [
    { name: "Residential & Luxury Homes", href: "/industries/residential-luxury-homes" },
    { name: "Corporate & Office Spaces", href: "/industries/corporate-office-spaces" },
    { name: "Retail & Commercial", href: "/industries/retail-commercial" },
    { name: "Hospitality & Tourism", href: "/industries/hospitality-tourism" },
    { name: "Healthcare & Wellness", href: "/industries/healthcare-wellness" },
  ],
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

  // Design Trends
  "/design-trends": [
    { name: "Industry Insights", href: "/design-trends/industry-insights" },
    { name: "Innovations", href: "/design-trends/innovations" },
    { name: "Inspirations", href: "/design-trends/inspirations" },
  ],
  "/design-trends/industry-insights": [
    { name: "Biophilic Design", href: "/design-trends/industry-insights/biophilic-design" },
    { name: "Sustainable Architecture", href: "/design-trends/industry-insights/sustainable-architecture" },
    { name: "Digital Transformation", href: "/design-trends/industry-insights/digital-transformation" },
    { name: "Adaptive Reuse", href: "/design-trends/industry-insights/adaptive-reuse" },
    { name: "Inclusive Design", href: "/design-trends/industry-insights/inclusive-design" },
    { name: "Remote Work Impact", href: "/design-trends/industry-insights/remote-work-office-design" },
  ],
  "/design-trends/innovations": [
    { name: "Smart Materials", href: "/design-trends/innovations/smart-materials" },
    { name: "3D Printing", href: "/design-trends/innovations/3d-printing-construction" },
    { name: "AI Design Tools", href: "/design-trends/innovations/ai-design-tools" },
    { name: "Biomimicry", href: "/design-trends/innovations/biomimicry" },
    { name: "VR Design Review", href: "/design-trends/innovations/vr-design-review" },
    { name: "Self-Healing Materials", href: "/design-trends/innovations/self-healing-materials" },
  ],
  "/design-trends/inspirations": [
    { name: "Minimalism Reimagined", href: "/design-trends/inspirations/minimalism-reimagined" },
    { name: "Cross-Cultural Design", href: "/design-trends/inspirations/cross-cultural" },
    { name: "Color Psychology", href: "/design-trends/inspirations/color-psychology" },
    { name: "Adaptive Reuse", href: "/design-trends/inspirations/adaptive-reuse" },
    { name: "Biophilic Design", href: "/design-trends/inspirations/biophilic-design" },
    { name: "Artisanal Craftsmanship", href: "/design-trends/inspirations/artisanal-craftsmanship" },
  ],

  // Network
  "/network": [
    { name: "Find a Designer", href: "/network/find-designer" },
    { name: "Project Collaborations", href: "/network/project-collaborations" },
    { name: "Talent Directory", href: "/network/talent-directory" },
    { name: "Marketplace", href: "/network/marketplace" },
    { name: "Community Hub", href: "/network/community-hub" },
  ],
  "/network/find-designer": [
    { name: "Interior Designers", href: "/network/find-designer/interior" },
    { name: "Architects", href: "/network/find-designer/architects" },
    { name: "Landscape Designers", href: "/network/find-designer/landscape" },
    { name: "Industrial Designers", href: "/network/find-designer/industrial" },
    { name: "Visualizers", href: "/network/find-designer/visualizers" },
  ],
  "/network/project-collaborations": [
    { name: "Residential Projects", href: "/network/project-collaborations/residential" },
    { name: "Commercial Projects", href: "/network/project-collaborations/commercial" },
    { name: "Sustainable Projects", href: "/network/project-collaborations/sustainable" },
    { name: "Cultural Projects", href: "/network/project-collaborations/cultural" },
    { name: "Hospitality Projects", href: "/network/project-collaborations/hospitality" },
  ],
  "/network/talent-directory": [
    { name: "All Professionals", href: "/network/talent-directory/all" },
    { name: "Architects", href: "/network/talent-directory/architects" },
    { name: "Interior Designers", href: "/network/talent-directory/interior-designers" },
    { name: "Landscape Architects", href: "/network/talent-directory/landscape-architects" },
    { name: "Consultants", href: "/network/talent-directory/consultants" },
    { name: "Visualizers", href: "/network/talent-directory/visualizers" },
  ],
  "/network/marketplace": [
    { name: "All Services", href: "/network/marketplace/all" },
    { name: "Interior Design", href: "/network/marketplace/interior-design" },
    { name: "Architecture", href: "/network/marketplace/architecture" },
    { name: "Visualization", href: "/network/marketplace/visualization" },
    { name: "Landscape", href: "/network/marketplace/landscape" },
    { name: "Consultation", href: "/network/marketplace/consultation" },
  ],
  "/network/community-hub": [
    { name: "Discussions", href: "/network/community-hub/discussions" },
    { name: "Events", href: "/network/community-hub/events" },
    { name: "Groups", href: "/network/community-hub/groups" },
    { name: "Resources", href: "/network/community-hub/resources" },
    { name: "Mentorship", href: "/network/community-hub/mentorship" },
  ],

  // Portfolio
  "/portfolio": [
    { name: "All Projects", href: "/portfolio/all" },
    { name: "Residential", href: "/portfolio/residential" },
    { name: "Commercial", href: "/portfolio/commercial" },
    { name: "Hospitality", href: "/portfolio/hospitality" },
    { name: "Institutional", href: "/portfolio/institutional" },
    { name: "Urban Design", href: "/portfolio/urban-design" },
    { name: "Interior Design", href: "/portfolio/interior-design" },
  ],
  "/portfolio/residential": [
    { name: "Luxury Homes", href: "/portfolio/residential/luxury-homes" },
    { name: "Apartments", href: "/portfolio/residential/apartments" },
    { name: "Villas", href: "/portfolio/residential/villas" },
    { name: "Sustainable Homes", href: "/portfolio/residential/sustainable-homes" },
  ],
  "/portfolio/commercial": [
    { name: "Office Buildings", href: "/portfolio/commercial/office-buildings" },
    { name: "Retail Spaces", href: "/portfolio/commercial/retail-spaces" },
    { name: "Corporate Headquarters", href: "/portfolio/commercial/corporate-headquarters" },
    { name: "Mixed-Use Developments", href: "/portfolio/commercial/mixed-use" },
  ],
  "/portfolio/hospitality": [
    { name: "Hotels", href: "/portfolio/hospitality/hotels" },
    { name: "Resorts", href: "/portfolio/hospitality/resorts" },
    { name: "Restaurants", href: "/portfolio/hospitality/restaurants" },
    { name: "Boutique Hotels", href: "/portfolio/hospitality/boutique-hotels" },
  ],
  "/portfolio/institutional": [
    { name: "Educational", href: "/portfolio/institutional/educational" },
    { name: "Healthcare", href: "/portfolio/institutional/healthcare" },
    { name: "Cultural", href: "/portfolio/institutional/cultural" },
    { name: "Government", href: "/portfolio/institutional/government" },
  ],
  "/portfolio/urban-design": [
    { name: "Master Planning", href: "/portfolio/urban-design/master-planning" },
    { name: "Public Spaces", href: "/portfolio/urban-design/public-spaces" },
    { name: "Urban Renewal", href: "/portfolio/urban-design/urban-renewal" },
    { name: "Transit-Oriented Development", href: "/portfolio/urban-design/transit-oriented" },
  ],
  "/portfolio/interior-design": [
    { name: "Residential Interiors", href: "/portfolio/interior-design/residential" },
    { name: "Commercial Interiors", href: "/portfolio/interior-design/commercial" },
    { name: "Hospitality Interiors", href: "/portfolio/interior-design/hospitality" },
    { name: "Retail Interiors", href: "/portfolio/interior-design/retail" },
  ],

  // About
  "/about": [
    { name: "Our Story", href: "/about/our-story" },
    { name: "Our Team", href: "/about/our-team" },
    { name: "Our Process", href: "/about/our-process" },
    { name: "Careers", href: "/about/careers" },
    { name: "Awards & Recognition", href: "/about/awards" },
  ],

  // Contact
  "/contact": [
    { name: "General Inquiries", href: "/contact/general" },
    { name: "Project Inquiries", href: "/contact/project" },
    { name: "Career Inquiries", href: "/contact/careers" },
    { name: "Media Inquiries", href: "/contact/media" },
    { name: "Office Locations", href: "/contact/locations" },
  ],
}

export default function SubNavbar() {
  const pathname = usePathname() || ""
  const [subNavItems, setSubNavItems] = useState<SubNavItem[]>([])
  const [activeItem, setActiveItem] = useState<string>("")
  const [debugInfo, setDebugInfo] = useState({ pathname: "", availablePaths: [], matchingPath: "" })

  // Update the useEffect hook to determine which main navigation item is active and show its subitems
  useEffect(() => {
    // Extract the first segment of the path to determine the main section
    const pathSegments = pathname.split("/").filter(Boolean)
    const mainSection = pathSegments.length > 0 ? `/${pathSegments[0]}` : ""

    // Map of main sections to their subitems
    const mainSectionSubitems: Record<string, SubNavItem[]> = {
      "/services": [
        { name: "Consulting", href: "/services/consulting" },
        { name: "Project Management", href: "/services/project-management" },
        { name: "Engineering", href: "/services/engineering" },
        { name: "Architecture", href: "/services/architecture" },
        { name: "Interior Design", href: "/services/interior-design" },
      ],
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
      "/portfolio": [
        { name: "All Projects", href: "/portfolio/all" },
        { name: "Residential", href: "/portfolio/residential" },
        { name: "Commercial", href: "/portfolio/commercial" },
        { name: "Hospitality", href: "/portfolio/hospitality" },
        { name: "Institutional", href: "/portfolio/institutional" },
        { name: "Urban Design", href: "/portfolio/urban-design" },
        { name: "Interior Design", href: "/portfolio/interior-design" },
      ],
      "/design-trends": [
        { name: "Industry Insights", href: "/design-trends/industry-insights" },
        { name: "Innovations", href: "/design-trends/innovations" },
        { name: "Inspirations", href: "/design-trends/inspirations" },
      ],
      "/network": [
        { name: "Find a Designer", href: "/network/find-designer" },
        { name: "Project Collaborations", href: "/network/project-collaborations" },
        { name: "Talent Directory", href: "/network/talent-directory" },
        { name: "Marketplace", href: "/network/marketplace" },
        { name: "Community Hub", href: "/network/community-hub" },
      ],
    }

    // If we have a second path segment, check if it has its own subitems
    if (pathSegments.length > 1) {
      const subSection = `/${pathSegments[0]}/${pathSegments[1]}`
      if (subNavMapping[subSection]) {
        setSubNavItems(subNavMapping[subSection])

        // Set active item
        const currentPath = pathname
        const activeSubItem = subNavMapping[subSection].find(
          (item) => currentPath === item.href || currentPath.startsWith(`${item.href}/`),
        )
        setActiveItem(activeSubItem?.href || "")
        return
      }
    }

    // If we're in a main section that has subitems, show those
    if (mainSection && mainSectionSubitems[mainSection]) {
      setSubNavItems(mainSectionSubitems[mainSection])

      // Set active item
      const currentPath = pathname
      const activeSubItem = mainSectionSubitems[mainSection].find(
        (item) => currentPath === item.href || currentPath.startsWith(`${item.href}/`),
      )
      setActiveItem(activeSubItem?.href || "")
    } else {
      // If we're not in a recognized section, don't show any subitems
      setSubNavItems([])
      setActiveItem("")
    }
  }, [pathname])

  // Don't render anything if there are no sub-nav items
  if (subNavItems.length === 0) {
    return null
  }

  // Update the SubNavbar component to ensure it doesn't overlap with the hero

  // Modify the return statement to include a position relative
  return (
    <div className="bg-[#003087] shadow-md relative" id="sub-navbar">
      <div className="container mx-auto px-4 overflow-x-auto">
        <div className="flex justify-center items-center">
          {subNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`px-6 py-4 text-white font-medium transition-all hover:bg-[#004db3] whitespace-nowrap ${
                activeItem === item.href
                  ? "bg-[#004db3] relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-[#ff5e14]"
                  : ""
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Debug info - remove in production */}
      {process.env.NODE_ENV === "development" && (
        <div className="hidden">
          <p>Current pathname: {debugInfo.pathname}</p>
          <p>Matching path: {debugInfo.matchingPath}</p>
          <p>Available paths: {debugInfo.availablePaths.join(", ")}</p>
        </div>
      )}
    </div>
  )
}

