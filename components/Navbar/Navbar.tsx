"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"

// Update the NavItem type to include image URLs for global initiatives
type NavItem = {
  title: string
  description: string
  items: { label: string; href: string }[]
  globalInitiatives?: { label: string; href: string; image: string }[]
}

// Update the NAV_ITEMS array to include image URLs for global initiatives
const NAV_ITEMS: NavItem[] = [
  {
    title: "General Services",
    description: "Discover our comprehensive services from consulting to design, engineering and project management.",
    items: [
      { label: "Specialized consultancy", href: "/services/consulting" },
      { label: "Interior Design", href: "/services/project-management" },
      { label: "Landscape Architecture", href: "/services/engineering" },
      { label: "Architecture", href: "/services/architecture" },
    ],
    globalInitiatives: [
      {
        label: "Digital Transformation",
        href: "/global/digital-transformation",
        image: "/luxury.jpg",
      },
      { label: "Sustainability", href: "/global/sustainability", image: "/luxury.jpg" },
    ],
  },
  {
    title: "Single Services",
    description:
      "Discover our comprehensive design services from architecture to interior design and landscape architecture.",
    items: [
      { label: "Architecture Services", href: "/services/architecture" },
      { label: "Interior Design", href: "/services/interior-design" },
      { label: "Landscape Architecture", href: "/services/landscape-architecture" },
    ],
    globalInitiatives: [
      { label: "Sustainable Design", href: "/global/sustainable-design", image: "/luxury.jpg" },
      {
        label: "Innovative Materials",
        href: "/global/innovative-materials",
        image: "/luxury.jpg",
      },
    ],
  },
  {
    title: "Tech Services",
    description: "Explore our cutting-edge technology tools and software solutions for design and project management.",
    items: [
      { label: "Design and Drafting Software", href: "/tech/design-drafting" },
      { label: "Landscape Design Software", href: "/tech/landscape-design" },
      { label: "Project Management Tools", href: "/tech/project-management" },
      { label: "Rendering & Visualization", href: "/tech/rendering-visualization" },
      { label: "Surveying and GIS Tools", href: "/tech/surveying-gis" },
      { label: "Visualization & AR Tools", href: "/tech/visualization-ar" },
      { label: "Estimation & Budgeting", href: "/tech/estimation-budgeting" },
      { label: "Green Design Tools", href: "/tech/green-design" },
      { label: "Presentation Tools", href: "/tech/presentation" },
    ],
    globalInitiatives: [
      {
        label: "Digital Transformation",
        href: "/global/digital-transformation",
        image: "/luxury.jpg",
      },
      { label: "BIM Implementation", href: "/global/bim-implementation", image: "/luxury.jpg" },
      { label: "AR/VR in Design", href: "/global/ar-vr-design", image: "/luxury.jpg" },
    ],
  },
  {
    title: "Industries",
    description: "Explore our diverse industries and discover innovative solutions tailored for each market.",
    items: [
      { label: "Residential & Luxury Homes", href: "/industries/residential-luxury-homes" },
      { label: "Corporate & Office Spaces", href: "/industries/corporate-office-spaces" },
      { label: "Retail & Commercial", href: "/industries/retail-commercial" },
      { label: "Hospitality & Tourism", href: "/industries/hospitality-tourism" },
      { label: "Healthcare & Wellness", href: "/industries/healthcare-wellness" },
      { label: "Education & Institutions", href: "/industries/education-institutions" },
      { label: "Cultural & Heritage Conservation", href: "/industries/cultural-heritage" },
      { label: "Urban & Public Spaces", href: "/industries/urban-public-spaces" },
      { label: "Event & Exhibition Spaces", href: "/industries/event-exhibition-spaces" },
    ],
    globalInitiatives: [
      { label: "Sustainability", href: "/global/sustainability", image: "/luxury.jpg" },
      { label: "Innovation", href: "/global/innovation", image: "/luxury.jpg" },
      {
        label: "Smart Infrastructure",
        href: "/global/smart-infrastructure",
        image: "/luxury.jpg",
      },
    ],
  },
  {
    title: "Design Trends",
    description: "Stay at the forefront of design with our curated collection of trends, insights, and inspirations.",
    items: [
      { label: "Latest Industry Insights", href: "/design-trends/industry-insights" },
      { label: "Innovations", href: "/design-trends/innovations" },
      { label: "Inspirations", href: "/design-trends/inspirations" },
    ],
    globalInitiatives: [
      { label: "Sustainability", href: "/global/sustainability", image: "/luxury.jpg" },
      { label: "Innovation", href: "/global/innovation", image: "/luxury.jpg" },
      {
        label: "Smart Infrastructure",
        href: "/global/smart-infrastructure",
        image: "/luxury.jpg",
      },
    ],
  },
  {
    title: "Collaborative Network",
    description: "Connect, hire, and collaborate with professionals.",
    items: [
      { label: "Find a Designer", href: "/network/find-designer" },
      { label: "Project Collaborations", href: "/network/project-collaborations" },
      { label: "Talent Directory", href: "/network/talent-directory" },
      { label: "Marketplace for Design Services", href: "/network/marketplace" },
      { label: "Community & Networking Hub", href: "/network/community-hub" },
    ],
    globalInitiatives: [
      {
        label: "Digital Transformation",
        href: "/global/digital-transformation",
        image: "/luxury.jpg",
      },
      { label: "Sustainability", href: "/global/sustainability", image: "/luxury.jpg" },
    ],
  },
]

// Export NAV_ITEMS so it can be imported by the SubNavbar component
export { NAV_ITEMS }

export default function MegaMenuNavbar() {
  const pathname = usePathname() || ""
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [hoveredItem, setHoveredItem] = useState<NavItem | null>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Handle scroll event to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [scrolled])

  const handleMouseEnter = (item: NavItem) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
    setHoveredItem(item)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setHoveredItem(null)
    }, 300)
  }

  return (
    <nav
      className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#003087] shadow-lg" : "bg-white"
      }`}
    >
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 relative z-10">
            {scrolled ? (
              <Image
                src="/inverseWhiteLogo.png"
                alt="Design Studio Logo"
                width={120}
                height={60}
                className="h-12 w-auto"
              />
            ) : (
              <Image src="/LogoNew.png" alt="Design Studio Logo" width={120} height={60} className="h-12 w-auto" />
            )}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Main Navigation Items */}
            <ul className="flex space-x-6 relative">
              {NAV_ITEMS.slice(0, 4).map((item) => (
                <li
                  key={item.title}
                  className="relative group py-4"
                  onMouseEnter={() => handleMouseEnter(item)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    className={`relative flex items-center text-sm font-medium transition-all focus:outline-none ${
                      scrolled
                        ? "text-white hover:text-gray-200 hover:font-bold"
                        : "text-gray-700 hover:text-gray-900 hover:font-bold"
                    }`}
                  >
                    {item.title}
                    <span className={`ml-1 text-xs ${scrolled ? "text-white" : "text-[#003087]"}`}>&#9660;</span>
                    {/* Animated Underline */}
                    {hoveredItem?.title === item.title && (
                      <motion.div
                        layout
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        transition={{ duration: 0.3 }}
                        className="absolute -bottom-1 left-0 w-full h-0.5"
                        style={{ background: scrolled ? "#ffffff" : "#003087" }}
                      />
                    )}
                  </button>
                </li>
              ))}

              {/* Portfolio Link */}
              <li className="relative group py-4">
                <Link
                  href="/portfolio"
                  className={`relative flex items-center text-sm font-medium transition-all focus:outline-none ${
                    scrolled
                      ? "text-white hover:text-gray-200 hover:font-bold"
                      : "text-gray-700 hover:text-gray-900 hover:font-bold"
                  }`}
                >
                  Portfolio
                  {/* Add hover effect similar to dropdown items */}
                  {pathname === "/portfolio" && (
                    <motion.div
                      layout
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      transition={{ duration: 0.3 }}
                      className="absolute -bottom-1 left-0 w-full h-0.5"
                      style={{ background: scrolled ? "#ffffff" : "#003087" }}
                    />
                  )}
                </Link>
              </li>

              {/* Design Trends Dropdown */}
              <li
                className="relative group py-4"
                onMouseEnter={() => handleMouseEnter(NAV_ITEMS[4])}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={`relative flex items-center text-sm font-medium transition-all focus:outline-none ${
                    scrolled
                      ? "text-white hover:text-gray-200 hover:font-bold"
                      : "text-gray-700 hover:text-gray-900 hover:font-bold"
                  }`}
                >
                  {NAV_ITEMS[4].title}
                  <span className={`ml-1 text-xs ${scrolled ? "text-white" : "text-[#003087]"}`}>&#9660;</span>
                  {/* Animated Underline */}
                  {hoveredItem?.title === NAV_ITEMS[4].title && (
                    <motion.div
                      layout
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      transition={{ duration: 0.3 }}
                      className="absolute -bottom-1 left-0 w-full h-0.5"
                      style={{ background: scrolled ? "#ffffff" : "#003087" }}
                    />
                  )}
                </button>
              </li>

              {/* Collaborative Network Dropdown - Styled as a button */}
              <li
                className="relative group py-2"
                onMouseEnter={() => handleMouseEnter(NAV_ITEMS[5])}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={`group px-4 py-1.5 border-2 text-sm font-medium rounded-full transition-colors duration-300 flex items-center ${
                    scrolled
                      ? "border-white text-white hover:bg-white hover:text-[#003087]"
                      : "border-[#003087] text-[#003087] hover:bg-[#003087] hover:text-white"
                  }`}
                >
                  {NAV_ITEMS[5].title}
                  <span
                    className={`ml-1 text-xs transition-colors duration-300 ${
                      scrolled ? "text-white group-hover:text-[#003087]" : "text-[#003087] group-hover:text-white"
                    }`}
                  >
                    &#9660;
                  </span>
                </button>
              </li>
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-700 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X size={24} className={scrolled ? "text-white" : "text-[#003087]"} />
            ) : (
              <Menu size={24} className={scrolled ? "text-white" : "text-[#003087]"} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-lg mobile-menu-container">
          <div className="container mx-auto px-4 py-4">
            <ul className="space-y-4 max-h-[70vh] overflow-y-auto">
              {NAV_ITEMS.slice(0, 4).map((item) => (
                <li key={item.title} className="py-2">
                  <div className="flex flex-col">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-800">{item.title}</span>
                    </div>
                    <div className="mt-2 ml-4 space-y-2">
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.label}
                          href={subItem.href}
                          className="block text-sm text-gray-600 hover:text-[#003087] hover:font-bold transition-all"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </li>
              ))}

              <li className="py-2">
                <Link
                  href="/portfolio"
                  className="block font-medium text-gray-800 hover:text-[#003087] hover:font-bold transition-all"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Portfolio
                </Link>
              </li>

              {NAV_ITEMS.slice(4, 5).map((item) => (
                <li key={item.title} className="py-2">
                  <div className="flex flex-col">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-800">{item.title}</span>
                    </div>
                    <div className="mt-2 ml-4 space-y-2">
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.label}
                          href={subItem.href}
                          className="block text-sm text-gray-600 hover:text-[#003087] hover:font-bold transition-all"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </li>
              ))}

              <li className="pt-4 border-t border-gray-200">
                <div className="flex flex-col">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-800">Collaborative Network</span>
                  </div>
                  <div className="mt-2 ml-4 space-y-2">
                    {NAV_ITEMS[5].items.map((subItem) => (
                      <Link
                        key={subItem.label}
                        href={subItem.href}
                        className="block text-sm text-gray-600 hover:text-[#003087] hover:font-bold transition-all"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* Mega Menu Dropdown: Always positioned at the same spot */}
      {hoveredItem && !mobileMenuOpen && (
        <div
          className="absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-100 hidden lg:block"
          onMouseEnter={() => handleMouseEnter(hoveredItem)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="container mx-auto p-6">
            {/* Top Section: Description and Items */}
            <div className="flex space-x-6">
              {/* Left Column: Description */}
              <div className="w-1/4 border-r pr-4" style={{ borderColor: "var(--bs-blue)" }}>
                <h2 className="text-lg font-semibold mb-2 text-gray-800">{hoveredItem.title}</h2>
                <p className="text-sm text-gray-600">{hoveredItem.description}</p>
              </div>
              {/* Right Column: Menu Items */}
              <div className="flex-1 grid grid-cols-3 gap-x-4 gap-y-2">
                {hoveredItem.items.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="block text-sm py-1 text-gray-700 hover:text-[#003087] hover:font-bold transition-all"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            {/* Bottom Section: Global Initiatives */}
            {hoveredItem.globalInitiatives && hoveredItem.globalInitiatives.length > 0 && (
              <div className="mt-8 pt-6 relative">
                <div className="flex items-center mb-4">
                  <h3 className="text-lg font-medium text-gray-700 mr-4">Global Initiatives</h3>
                  <div className="flex-grow h-px bg-gray-200"></div>
                </div>
                <div className="grid grid-cols-3 gap-x-6 gap-y-6">
                  {hoveredItem.globalInitiatives.map((gi) => (
                    <Link
                      key={gi.label}
                      href={gi.href}
                      className="flex flex-col items-center text-center text-sm text-gray-700 hover:text-[#003087] p-3 rounded-md hover:bg-gray-50 transition-all"
                    >
                      <span className="font-medium mb-3">{gi.label}</span>
                      <div className="relative w-24 h-24 rounded-md overflow-hidden">
                        <Image src={gi.image || "/placeholder.svg"} alt={gi.label} fill className="object-cover" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}

