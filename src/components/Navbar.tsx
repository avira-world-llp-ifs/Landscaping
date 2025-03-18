"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

type SubNavItem = {
  name: string;
  href: string;
};

type SubNavData = {
  [key: string]: SubNavItem[];
};

const subNavData: SubNavData = {
  "/markets": [
    { name: "Market 1", href: "/markets/market1" },
    { name: "Market 2", href: "/markets/market2" },
  ],
  "/services/consulting": [
    { name: "Service 1", href: "/services/consulting/service1" },
    { name: "Service 2", href: "/services/consulting/service2" },
  ],
  "/projects": [],
  "/people": [],
};
type NavItem = {
  title: string;
  description: string;
  items: { label: string; href: string }[];
  globalInitiatives?: { label: string; href: string }[];
};

const NAV_ITEMS: NavItem[] = [

  {
    title: "General Services",
    description:
      "Discover our comprehensive services from consulting to design, engineering and project management.",
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
      "Discover our comprehensive services from consulting to design, engineering and project management.",
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
    title: "Tech Services",
    description:
      "Discover our comprehensive services from consulting to design, engineering and project management.",
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
    title: "Industries",
    description:
      "Explore our diverse industries and discover innovative solutions tailored for each market.",
    items: [
      { label: "Energy", href: "/industries/energy" },
      { label: "Buildings", href: "/industries/buildings" },
      { label: "Transportation", href: "/industries/transportation" },
      { label: "Water", href: "/industries/water" },
    ],
    globalInitiatives: [
      { label: "Sustainability", href: "/global/sustainability" },
      { label: "Innovation", href: "/global/innovation" },
      { label: "Smart Infrastructure", href: "/global/smart-infrastructure" },
    ],
  },
  {
    title: "Portfolio",
    description:
      "Explore our diverse industries and discover innovative solutions tailored for each market.",
    items: [
      { label: "Energy", href: "/industries/energy" },
      { label: "Buildings", href: "/industries/buildings" },
      { label: "Transportation", href: "/industries/transportation" },
      { label: "Water", href: "/industries/water" },
    ],
    globalInitiatives: [
      { label: "Sustainability", href: "/global/sustainability" },
      { label: "Innovation", href: "/global/innovation" },
      { label: "Smart Infrastructure", href: "/global/smart-infrastructure" },
    ],
  },
  {
    title: "Design Trends",
    description:
      "Explore our diverse industries and discover innovative solutions tailored for each market.",
    items: [
      { label: "Latest industry insights", href: "/industries/energy" },
      { label: "Innovations", href: "/industries/buildings" },
      { label: "Inspirations", href: "/industries/transportation" },
    ],
    globalInitiatives: [
      { label: "Sustainability", href: "/global/sustainability" },
      { label: "Innovation", href: "/global/innovation" },
      { label: "Smart Infrastructure", href: "/global/smart-infrastructure" },
    ],
  },
  {
    title: "Collabrative Network",
    description:
      "Discover our comprehensive services from consulting to design, engineering and project management.",
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
  

];

export default function MegaMenuNavbar({ setSubNavItems }: { setSubNavItems: (items: SubNavItem[]) => void }) {

  const pathname = usePathname() || "";

  useEffect(() => {
    const matchedCategory = Object.keys(subNavData).find((key) => pathname.startsWith(key)) || "";
    setSubNavItems(subNavData[matchedCategory] || []);
  }, [pathname]);


  const [hoveredItem, setHoveredItem] = useState<NavItem | null>(null);
  const [activeTab, setActiveTab] = useState<string>("");
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (item: NavItem) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setHoveredItem(item);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setHoveredItem(null);
    }, 300);
  };

  return (
    <nav className="relative bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        {/* <Link href="/" className="flex-shrink-0"  style={{backgroundColor:'blue'}}>
          <img src="LogoNew.png" alt="Logo"   style={{justifyContent:"center",height:'50px'}} />
          <h5>Desgin Studio</h5>
        </Link> */}

<Link href="/" className="flex-shrink-0" style={{display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
  <img src="LogoNew.png" alt="Logo" style={{ height: '100px' }} />
  
</Link>


        {/* Main Navigation Items */}
        <ul className="flex space-x-8 relative">
          {NAV_ITEMS.map((item) => (
            <li
              key={item.title}
              className="relative group"
              onMouseEnter={() => handleMouseEnter(item)}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => setActiveTab(item.title)}
                className="relative flex items-center text-lg font-medium transition-colors focus:outline-none text-gray-700 hover:text-gray-900"
              >
                {item.title}
                <span className="ml-1 text-xs" style={{color:"#003087"}}>&#9660;</span>
                {/* Animated Orange Underline */}
                {hoveredItem?.title === item.title && (
                  <motion.div
                    layout
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.3 }}
                    className="absolute -bottom-1 left-0 w-full h-1"
                    style={{background:'#003087'}}
                  />
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* Contact Us Button */}
        <Link
          href="/contact"
          className="px-4 py-2 border-2 border-orange-500 bg-white text-black font-semibold rounded-full transition-colors duration-300 hover:#003087 hover:text-white"
        >
          Contact Us
        </Link>
      </div>

      {/* Mega Menu Dropdown: Always positioned at the same spot */}
      {hoveredItem && (
        <div
          className="absolute top-full left-1/2 transform -translate-x-1/2 w-full max-w-8xl bg-white border border-gray-200 shadow-lg z-100"
          onMouseEnter={() => handleMouseEnter(hoveredItem)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="p-6">
            {/* Top Section: Description and Items */}
            <div className="flex space-x-6">
              {/* Left Column: Description */}
              <div className="w-1/3 border-r border-gray-200 pr-4">
                <h2 className="text-xl font-semibold mb-2 text-gray-800">
                  {hoveredItem.title}
                </h2>
                <p className="text-sm text-gray-600">{hoveredItem.description}</p>
              </div>
              {/* Right Column: Menu Items */}
              <div className="flex-1 grid grid-cols-2 gap-4">
                {hoveredItem.items.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="block text-gray-700 hover:text-orange-600"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            {/* Bottom Section: Global Initiatives */}
            {hoveredItem.globalInitiatives && hoveredItem.globalInitiatives.length > 0 && (
              <div className="mt-6 border-t border-gray-200 pt-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  Global Initiatives
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  {hoveredItem.globalInitiatives.map((gi) => (
                    <Link
                      key={gi.label}
                      href={gi.href}
                      className="block text-sm text-gray-700 hover:text-orange-600"
                    >
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
  );
}
