"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"

type NavItem = {
  title: string
  description: string
  items: { label: string; href: string }[]
  globalInitiatives?: { label: string; href: string }[]
}

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
      { label: "Digital Transformation", href: "/global/digital-transformation" },
      { label: "Sustainability", href: "/global/sustainability" },
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
      { label: "Sustainable Design", href: "/global/sustainable-design" },
      { label: "Innovative Materials", href: "/global/innovative-materials" },
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
      { label: "Digital Transformation", href: "/global/digital-transformation" },
      { label: "BIM Implementation", href: "/global/bim-implementation" },
      { label: "AR/VR in Design", href: "/global/ar-vr-design" },
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
      { label: "Sustainability", href: "/global/sustainability" },
      { label: "Innovation", href: "/global/innovation" },
      { label: "Smart Infrastructure", href: "/global/smart-infrastructure" },
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
      { label: "Sustainability", href: "/global/sustainability" },
      { label: "Innovation", href: "/global/innovation" },
      { label: "Smart Infrastructure", href: "/global/smart-infrastructure" },
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
      { label: "Digital Transformation", href: "/global/digital-transformation" },
      { label: "Sustainability", href: "/global/sustainability" },
    ],
  },
]

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#003087] shadow-lg" : "bg-transparent"
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
              {NAV_ITEMS.map((item) => (
                <li
                  key={item.title}
                  className="relative group"
                  onMouseEnter={() => handleMouseEnter(item)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    className={`relative flex items-center text-sm font-medium transition-colors focus:outline-none ${
                      scrolled ? "text-white hover:text-gray-200" : "text-gray-700 hover:text-gray-900"
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
            </ul>

            {/* Portfolio Link */}
            <Link
              href="/portfolio"
              className={`text-sm font-medium transition-colors ${
                scrolled ? "text-white hover:text-gray-200" : "text-gray-700 hover:text-gray-900"
              }`}
            >
              Portfolio
            </Link>

            {/* Contact Us Button */}
            <Link
              href="/contact"
              className={`px-4 py-1.5 border-2 text-sm font-medium rounded-full transition-colors duration-300 ${
                scrolled
                  ? "border-white text-white hover:bg-white hover:text-[#003087]"
                  : "border-[#003087] text-[#003087] hover:bg-[#003087] hover:text-white"
              }`}
            >
              Contact Us
            </Link>
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
        <div className="lg:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <ul className="space-y-4">
              {NAV_ITEMS.map((item) => (
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
                          className="block text-sm text-gray-600 hover:text-[#003087]"
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
                  className="block font-medium text-gray-800 hover:text-[#003087]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Portfolio
                </Link>
              </li>
              <li className="pt-4 border-t border-gray-200">
                <Link
                  href="/contact"
                  className="inline-block px-4 py-2 border-2 border-[#003087] text-[#003087] text-sm font-medium rounded-full hover:bg-[#003087] hover:text-white transition-colors duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact Us
                </Link>
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
              <div className="w-1/4 border-r border-gray-200 pr-4">
                <h2 className="text-lg font-semibold mb-2 text-gray-800">{hoveredItem.title}</h2>
                <p className="text-sm text-gray-600">{hoveredItem.description}</p>
              </div>
              {/* Right Column: Menu Items */}
              <div className="flex-1 grid grid-cols-3 gap-4">
                {hoveredItem.items.map((link) => (
                  <Link key={link.label} href={link.href} className="block text-sm text-gray-700 hover:text-[#003087]">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            {/* Bottom Section: Global Initiatives */}
            {hoveredItem.globalInitiatives && hoveredItem.globalInitiatives.length > 0 && (
              <div className="mt-6 border-t border-gray-200 pt-4">
                <h3 className="text-base font-semibold text-gray-800 mb-3">Global Initiatives</h3>
                <div className="grid grid-cols-3 gap-4">
                  {hoveredItem.globalInitiatives.map((gi) => (
                    <Link key={gi.label} href={gi.href} className="block text-sm text-gray-700 hover:text-[#003087]">
                      {gi.label}
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

