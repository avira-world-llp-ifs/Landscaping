// // // // // // import Link from "next/link";
// // // // // // import { useState } from "react";

// // // // // // type NavItem = {
// // // // // //   title: string;
// // // // // //   description: string;
// // // // // //   items: { label: string; href: string }[];
// // // // // // };

// // // // // // const NAV_ITEMS: NavItem[] = [
// // // // // //   {
// // // // // //     title: "Services",
// // // // // //     description: "Explore our wide range of professional services.",
// // // // // //     items: [
// // // // // //       { label: "Web Development", href: "/services/web-development" },
// // // // // //       { label: "Mobile Apps", href: "/services/mobile-apps" },
// // // // // //       { label: "SEO", href: "/services/seo" },
// // // // // //     ],
// // // // // //   },
// // // // // //   {
// // // // // //     title: "Products",
// // // // // //     description: "Discover our innovative products.",
// // // // // //     items: [
// // // // // //       { label: "SaaS Platform", href: "/products/saas-platform" },
// // // // // //       { label: "E-commerce", href: "/products/e-commerce" },
// // // // // //       { label: "AI Tools", href: "/products/ai-tools" },
// // // // // //     ],
// // // // // //   },
// // // // // //   {
// // // // // //     title: "About Us",
// // // // // //     description: "Learn more about our company and culture.",
// // // // // //     items: [
// // // // // //       { label: "Our Team", href: "/about/our-team" },
// // // // // //       { label: "Careers", href: "/about/careers" },
// // // // // //       { label: "Testimonials", href: "/about/testimonials" },
// // // // // //     ],
// // // // // //   },
// // // // // // ];

// // // // // // export default function Navbar() {
// // // // // //   const [activeTab, setActiveTab] = useState<string>("");
// // // // // //   const [hoveredTab, setHoveredTab] = useState<string | null>(null);

// // // // // //   return (
// // // // // //     <nav className="relative bg-white shadow-md">
// // // // // //       <div className="container mx-auto px-4 py-4 flex items-center justify-between">
// // // // // //         {/* Logo */}
// // // // // //         <Link href="/" className="flex-shrink-0">
// // // // // //           <img src="/logo.png" alt="Logo" className="h-10" />
// // // // // //         </Link>

// // // // // //         {/* Main Navigation */}
// // // // // //         <div className="flex space-x-8">
// // // // // //           {NAV_ITEMS.map((navItem) => (
// // // // // //             <div
// // // // // //               key={navItem.title}
// // // // // //               className="relative group"
// // // // // //               onMouseEnter={() => setHoveredTab(navItem.title)}
// // // // // //               onMouseLeave={() => setHoveredTab(null)}
// // // // // //             >
// // // // // //               <button
// // // // // //                 onClick={() => setActiveTab(navItem.title)}
// // // // // //                 className={`text-lg font-medium transition-colors ${
// // // // // //                   activeTab === navItem.title
// // // // // //                     ? "text-yellow-600"
// // // // // //                     : "text-gray-700 hover:text-gray-900"
// // // // // //                 }`}
// // // // // //               >
// // // // // //                 {navItem.title}
// // // // // //               </button>
// // // // // //               {/* Yellow Underline Indicator for active tab */}
// // // // // //               {activeTab === navItem.title && (
// // // // // //                 <div className="absolute bottom-0 left-0 w-full h-1 bg-yellow-500" />
// // // // // //               )}

// // // // // //               {/* Dropdown Menu */}
// // // // // //               {hoveredTab === navItem.title && (
// // // // // //                 <div
// // // // // //                   className="absolute left-0 mt-2 w-64 bg-white border rounded-lg shadow-lg z-10"
// // // // // //                   onMouseEnter={() => setHoveredTab(navItem.title)}
// // // // // //                   onMouseLeave={() => setHoveredTab(null)}
// // // // // //                 >
// // // // // //                   <div className="flex">
// // // // // //                     {/* Description Column */}
// // // // // //                     <div className="w-1/3 p-4 bg-gray-50 border-r border-gray-200">
// // // // // //                       <p className="text-sm text-gray-600">{navItem.description}</p>
// // // // // //                     </div>
// // // // // //                     {/* Items Column */}
// // // // // //                     <div className="w-2/3 p-4">
// // // // // //                       <ul className="space-y-2">
// // // // // //                         {navItem.items.map((item) => (
// // // // // //                           <li key={item.label}>
// // // // // //                             <Link href={item.href} className="block text-gray-700 hover:text-yellow-600">
// // // // // //                               {item.label}
// // // // // //                             </Link>
// // // // // //                           </li>
// // // // // //                         ))}
// // // // // //                       </ul>
// // // // // //                     </div>
// // // // // //                   </div>
// // // // // //                 </div>
// // // // // //               )}
// // // // // //             </div>
// // // // // //           ))}
// // // // // //         </div>

// // // // // //         {/* Contact Us Button */}
// // // // // //         <div>
// // // // // //           <Link href="/contact" className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-lg transition">
// // // // // //             Contact Us
// // // // // //           </Link>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </nav>
// // // // // //   );
// // // // // // }
// // // // // "use client";

// // // // // import { useState } from "react";
// // // // // import Link from "next/link";

// // // // // export default function MegaMenuNavbar() {
// // // // //   const [hoveredTab, setHoveredTab] = useState<string | null>(null);

// // // // //   return (
// // // // //     <nav className="relative bg-white shadow">
// // // // //       <div className="container mx-auto px-6 py-4 flex items-center justify-between">
// // // // //         {/* Logo */}
// // // // //         <Link href="/" className="text-xl font-bold text-gray-800">
// // // // //           MyCompany
// // // // //         </Link>

// // // // //         {/* Nav Items */}
// // // // //         <ul className="flex space-x-8">
// // // // //           <li
// // // // //             className="relative group"
// // // // //             onMouseEnter={() => setHoveredTab("our-expertise")}
// // // // //             onMouseLeave={() => setHoveredTab(null)}
// // // // //           >
// // // // //             <button className="text-gray-700 font-medium hover:text-gray-900 focus:outline-none">
// // // // //               Our Expertise
// // // // //             </button>
// // // // //             {/* Mega Menu */}
// // // // //             {hoveredTab === "our-expertise" && (
// // // // //               <div
// // // // //                 className="absolute left-0 top-full mt-2 w-[60rem] bg-white border border-gray-200 shadow-lg z-50"
// // // // //                 onMouseEnter={() => setHoveredTab("our-expertise")}
// // // // //                 onMouseLeave={() => setHoveredTab(null)}
// // // // //               >
// // // // //                 {/* Main Content Area */}
// // // // //                 <div className="p-6">
// // // // //                   {/* Top Section: Description & Columns */}
// // // // //                   <div className="flex space-x-6">
// // // // //                     {/* Left Column: Description */}
// // // // //                     <div className="w-1/3 border-r border-gray-200 pr-4">
// // // // //                       <h2 className="text-xl font-semibold mb-2 text-gray-800">
// // // // //                         Our Expertise
// // // // //                       </h2>
// // // // //                       <p className="text-sm text-gray-600">
// // // // //                         Discover the people, projects, services, and markets
// // // // //                         that make us a top-tier global design and delivery firm.
// // // // //                       </p>
// // // // //                     </div>
// // // // //                     {/* Right Columns: Items */}
// // // // //                     <div className="flex-1 grid grid-cols-2 gap-4">
// // // // //                       <div className="space-y-2">
// // // // //                         <Link href="/buildings" className="block hover:text-orange-600">
// // // // //                           Buildings
// // // // //                         </Link>
// // // // //                         <Link href="/environment" className="block hover:text-orange-600">
// // // // //                           Environment
// // // // //                         </Link>
// // // // //                         <Link href="/transportation" className="block hover:text-orange-600">
// // // // //                           Transportation
// // // // //                         </Link>
// // // // //                         <Link href="/community-development" className="block hover:text-orange-600">
// // // // //                           Community Development
// // // // //                         </Link>
// // // // //                       </div>
// // // // //                       <div className="space-y-2">
// // // // //                         <Link href="/federal-gov" className="block hover:text-orange-600">
// // // // //                           Federal Government
// // // // //                         </Link>
// // // // //                         <Link href="/water" className="block hover:text-orange-600">
// // // // //                           Water
// // // // //                         </Link>
// // // // //                         <Link href="/energy" className="block hover:text-orange-600">
// // // // //                           Energy
// // // // //                         </Link>
// // // // //                         <Link href="/mining" className="block hover:text-orange-600">
// // // // //                           Mining, Minerals &amp; Metals
// // // // //                         </Link>
// // // // //                         <Link href="/program-management" className="block hover:text-orange-600">
// // // // //                           Program &amp; Construction Management
// // // // //                         </Link>
// // // // //                       </div>
// // // // //                     </div>
// // // // //                   </div>
// // // // //                   {/* Bottom Section: Global Initiatives */}
// // // // //                   <div className="mt-6 border-t border-gray-200 pt-4">
// // // // //                     <h3 className="text-lg font-semibold text-gray-800 mb-3">
// // // // //                       Global Initiatives
// // // // //                     </h3>
// // // // //                     <div className="grid grid-cols-4 gap-4">
// // // // //                       {/* Placeholder examples */}
// // // // //                       <Link href="/climate-solutions" className="block text-sm text-gray-700 hover:text-orange-600">
// // // // //                         Climate Solutions
// // // // //                       </Link>
// // // // //                       <Link href="/digital" className="block text-sm text-gray-700 hover:text-orange-600">
// // // // //                         Digital (Stantec.io)
// // // // //                       </Link>
// // // // //                       <Link href="/coastal-resilience" className="block text-sm text-gray-700 hover:text-orange-600">
// // // // //                         Coastal Resilience
// // // // //                       </Link>
// // // // //                       <Link href="/ecosystem-restoration" className="block text-sm text-gray-700 hover:text-orange-600">
// // // // //                         Ecosystem Restoration
// // // // //                       </Link>
// // // // //                       <Link href="/energy-transition" className="block text-sm text-gray-700 hover:text-orange-600">
// // // // //                         Energy Transition
// // // // //                       </Link>
// // // // //                       <Link href="/smart-cities" className="block text-sm text-gray-700 hover:text-orange-600">
// // // // //                         Smart Cities
// // // // //                       </Link>
// // // // //                       {/* Add more items as needed */}
// // // // //                     </div>
// // // // //                   </div>
// // // // //                 </div>
// // // // //               </div>
// // // // //             )}
// // // // //           </li>

// // // // //           {/* Add more main nav items if needed */}
// // // // //         </ul>

// // // // //         {/* Contact Us Button */}
// // // // //         <Link href="/contact" className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition">
// // // // //           Contact Us
// // // // //         </Link>
// // // // //       </div>
// // // // //     </nav>
// // // // //   );
// // // // // }
// // // // "use client";

// // // // import { useState } from "react";
// // // // import Link from "next/link";
// // // // import { ChevronDown } from "lucide-react";

// // // // export default function MegaMenuNavbar() {
// // // //   const [hoveredTab, setHoveredTab] = useState<string | null>(null);

// // // //   return (
// // // //     <nav className="relative bg-white shadow">
// // // //       <div className="container mx-auto px-6 py-4 flex items-center justify-between">
// // // //         {/* Logo */}
// // // //         <Link href="/" className="text-xl font-bold text-gray-800">
// // // //           MyCompany
// // // //         </Link>

// // // //         {/* Nav Items */}
// // // //         <ul className="flex space-x-8">
// // // //           <li
// // // //             className="relative group"
// // // //             onMouseEnter={() => setHoveredTab("our-expertise")}
// // // //             onMouseLeave={() => setHoveredTab(null)}
// // // //           >
// // // //             <button className="text-gray-700 font-medium hover:text-gray-900 focus:outline-none">
// // // //               Our Expertise <ChevronDown/>
// // // //             </button>

// // // //             {/* Centered Mega Menu */}
// // // //             {hoveredTab === "our-expertise" && (
// // // //               <div
// // // //                 className="absolute top-full left-1/2 transform -translate-x-1/2 w-[60rem] bg-white border border-gray-200 shadow-lg z-50"
// // // //                 onMouseEnter={() => setHoveredTab("our-expertise")}
// // // //                 onMouseLeave={() => setHoveredTab(null)}
// // // //               >
// // // //                 {/* Main Content Area */}
// // // //                 <div className="p-6">
// // // //                   {/* Top Section: Description & Columns */}
// // // //                   <div className="flex space-x-6">
// // // //                     {/* Left Column: Description */}
// // // //                     <div className="w-1/3 border-r border-gray-200 pr-4">
// // // //                       <h2 className="text-xl font-semibold mb-2 text-gray-800">
// // // //                         Our Expertise
// // // //                       </h2>
// // // //                       <p className="text-sm text-gray-600">
// // // //                         Discover the people, projects, services, and markets
// // // //                         that make us a top-tier global design and delivery firm.
// // // //                       </p>
// // // //                     </div>
// // // //                     {/* Right Columns: Items */}
// // // //                     <div className="flex-1 grid grid-cols-2 gap-4">
// // // //                       <div className="space-y-2">
// // // //                         <Link href="/buildings" className="block hover:text-orange-600">
// // // //                           Buildings
// // // //                         </Link>
// // // //                         <Link href="/environment" className="block hover:text-orange-600">
// // // //                           Environment
// // // //                         </Link>
// // // //                         <Link href="/transportation" className="block hover:text-orange-600">
// // // //                           Transportation
// // // //                         </Link>
// // // //                         <Link href="/community-development" className="block hover:text-orange-600">
// // // //                           Community Development
// // // //                         </Link>
// // // //                       </div>
// // // //                       <div className="space-y-2">
// // // //                         <Link href="/federal-gov" className="block hover:text-orange-600">
// // // //                           Federal Government
// // // //                         </Link>
// // // //                         <Link href="/water" className="block hover:text-orange-600">
// // // //                           Water
// // // //                         </Link>
// // // //                         <Link href="/energy" className="block hover:text-orange-600">
// // // //                           Energy
// // // //                         </Link>
// // // //                         <Link href="/mining" className="block hover:text-orange-600">
// // // //                           Mining, Minerals &amp; Metals
// // // //                         </Link>
// // // //                         <Link href="/program-management" className="block hover:text-orange-600">
// // // //                           Program &amp; Construction Management
// // // //                         </Link>
// // // //                       </div>
// // // //                     </div>
// // // //                   </div>
// // // //                   {/* Bottom Section: Global Initiatives */}
// // // //                   <div className="mt-6 border-t border-gray-200 pt-4">
// // // //                     <h3 className="text-lg font-semibold text-gray-800 mb-3">
// // // //                       Global Initiatives
// // // //                     </h3>
// // // //                     <div className="grid grid-cols-4 gap-4">
// // // //                       <Link href="/climate-solutions" className="block text-sm text-gray-700 hover:text-orange-600">
// // // //                         Climate Solutions
// // // //                       </Link>
// // // //                       <Link href="/digital" className="block text-sm text-gray-700 hover:text-orange-600">
// // // //                         Digital (Stantec.io)
// // // //                       </Link>
// // // //                       <Link href="/coastal-resilience" className="block text-sm text-gray-700 hover:text-orange-600">
// // // //                         Coastal Resilience
// // // //                       </Link>
// // // //                       <Link href="/ecosystem-restoration" className="block text-sm text-gray-700 hover:text-orange-600">
// // // //                         Ecosystem Restoration
// // // //                       </Link>
// // // //                       <Link href="/energy-transition" className="block text-sm text-gray-700 hover:text-orange-600">
// // // //                         Energy Transition
// // // //                       </Link>
// // // //                       <Link href="/smart-cities" className="block text-sm text-gray-700 hover:text-orange-600">
// // // //                         Smart Cities
// // // //                       </Link>
// // // //                     </div>
// // // //                   </div>
// // // //                 </div>
// // // //               </div>
// // // //             )}
// // // //           </li>

// // // //           {/* Add more main nav items if needed */}
// // // //         </ul>

// // // //         {/* Contact Us Button */}
// // // //         <Link
// // // //           href="/contact"
// // // //           className="px-4 py-2 border-2 border-orange-500 bg-white text-black font-semibold rounded-lg transition-colors duration-300 hover:bg-orange-500 hover:text-black" style={{borderRadius:"100px"}}
// // // //         >
// // // //           Contact Us
// // // //         </Link>
// // // //       </div>
// // // //     </nav>
// // // //   );
// // // // }
// // // "use client";

// // // import Link from "next/link";
// // // import { useState } from "react";

// // // type NavColumn = { label: string; href: string }[];
// // // type NavItem = {
// // //   title: string;
// // //   description: string;
// // //   items: NavColumn; // Array of links for the dropdown columns
// // //   globalInitiatives?: { label: string; href: string }[];
// // // };

// // // const NAV_ITEMS: NavItem[] = [
// // //   {
// // //     title: "Industries",
// // //     description: "Explore our diverse industries and discover innovative solutions tailored for each market.",
// // //     items: [
// // //       { label: "Energy", href: "/industries/energy" },
// // //       { label: "Buildings", href: "/industries/buildings" },
// // //       { label: "Transportation", href: "/industries/transportation" },
// // //       { label: "Water", href: "/industries/water" },
// // //     ],
// // //     globalInitiatives: [
// // //       { label: "Sustainability", href: "/global/sustainability" },
// // //       { label: "Innovation", href: "/global/innovation" },
// // //       { label: "Smart Infrastructure", href: "/global/smart-infrastructure" },
// // //     ],
// // //   },
// // //   {
// // //     title: "Services",
// // //     description: "Discover our comprehensive services that bring expertise from consulting to design and engineering.",
// // //     items: [
// // //       { label: "Consulting", href: "/services/consulting" },
// // //       { label: "Project Management", href: "/services/project-management" },
// // //       { label: "Engineering", href: "/services/engineering" },
// // //       { label: "Architecture", href: "/services/architecture" },
// // //     ],
// // //     globalInitiatives: [
// // //       { label: "Digital Transformation", href: "/global/digital-transformation" },
// // //       { label: "Sustainability", href: "/global/sustainability" },
// // //     ],
// // //   },
// // // ];

// // // export default function MegaMenuNavbar() {
// // //   const [hoveredTab, setHoveredTab] = useState<string | null>(null);

// // //   return (
// // //     <nav className="relative bg-white shadow">
// // //       <div className="container mx-auto px-6 py-4 flex items-center justify-between">
// // //         {/* Logo */}
// // //         <Link href="/" className="text-xl font-bold text-gray-800">
// // //           MyCompany
// // //         </Link>

// // //         {/* Main Navigation Items */}
// // //         <ul className="flex space-x-8">
// // //           {NAV_ITEMS.map((navItem) => (
// // //             <li
// // //               key={navItem.title}
// // //               className="relative group"
// // //               onMouseEnter={() => setHoveredTab(navItem.title)}
// // //               onMouseLeave={() => setHoveredTab(null)}
// // //             >
// // //               <button className="flex items-center text-lg font-medium transition-colors focus:outline-none text-gray-700 hover:text-gray-900">
// // //                 {navItem.title}
// // //                 {/* Orange downward triangle */}
// // //                 <span className="ml-1 text-orange-500 text-xs">&#9660;</span>
// // //               </button>

// // //               {/* Dropdown (Mega Menu) */}
// // //               {hoveredTab === navItem.title && (
// // //                 <div
// // //                   className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[60rem] bg-white border border-gray-200 shadow-lg z-50"
// // //                   onMouseEnter={() => setHoveredTab(navItem.title)}
// // //                   onMouseLeave={() => setHoveredTab(null)}
// // //                 >
// // //                   <div className="p-6">
// // //                     {/* Top Section: Description and Columns */}
// // //                     <div className="flex space-x-6">
// // //                       {/* Left Column: Description */}
// // //                       <div className="w-1/3 border-r border-gray-200 pr-4">
// // //                         <h2 className="text-xl font-semibold mb-2 text-gray-800">{navItem.title}</h2>
// // //                         <p className="text-sm text-gray-600">{navItem.description}</p>
// // //                       </div>
// // //                       {/* Right Column: Items */}
// // //                       <div className="flex-1 grid grid-cols-2 gap-4">
// // //                         {navItem.items.map((item) => (
// // //                           <Link
// // //                             key={item.label}
// // //                             href={item.href}
// // //                             className="block text-gray-700 hover:text-orange-600"
// // //                           >
// // //                             {item.label}
// // //                           </Link>
// // //                         ))}
// // //                       </div>
// // //                     </div>
// // //                     {/* Bottom Section: Global Initiatives */}
// // //                     {navItem.globalInitiatives && navItem.globalInitiatives.length > 0 && (
// // //                       <div className="mt-6 border-t border-gray-200 pt-4">
// // //                         <h3 className="text-lg font-semibold text-gray-800 mb-3">Global Initiatives</h3>
// // //                         <div className="grid grid-cols-3 gap-4">
// // //                           {navItem.globalInitiatives.map((gi) => (
// // //                             <Link
// // //                               key={gi.label}
// // //                               href={gi.href}
// // //                               className="block text-sm text-gray-700 hover:text-orange-600"
// // //                             >
// // //                               {gi.label}
// // //                             </Link>
// // //                           ))}
// // //                         </div>
// // //                       </div>
// // //                     )}
// // //                   </div>
// // //                 </div>
// // //               )}
// // //             </li>
// // //           ))}
// // //         </ul>

// // //         {/* Contact Us Button */}
// // //         <Link href="/contact" className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition">
// // //           Contact Us
// // //         </Link>
// // //       </div>
// // //     </nav>
// // //   );
// // // }
// // "use client";

// // import Link from "next/link";
// // import { useState } from "react";

// // type NavItem = {
// //   title: string;
// //   description: string;
// //   items: { label: string; href: string }[];
// //   globalInitiatives?: { label: string; href: string }[];
// // };

// // const NAV_ITEMS: NavItem[] = [
// //   {
// //     title: "Industries",
// //     description:
// //       "Explore our diverse industries and discover innovative solutions tailored for each market.",
// //     items: [
// //       { label: "Energy", href: "/industries/energy" },
// //       { label: "Buildings", href: "/industries/buildings" },
// //       { label: "Transportation", href: "/industries/transportation" },
// //       { label: "Water", href: "/industries/water" },
// //     ],
// //     globalInitiatives: [
// //       { label: "Sustainability", href: "/global/sustainability" },
// //       { label: "Innovation", href: "/global/innovation" },
// //       { label: "Smart Infrastructure", href: "/global/smart-infrastructure" },
// //     ],
// //   },
// //   {
// //     title: "Services",
// //     description:
// //       "Discover our comprehensive services from consulting to design, engineering and project management.",
// //     items: [
// //       { label: "Consulting", href: "/services/consulting" },
// //       { label: "Project Management", href: "/services/project-management" },
// //       { label: "Engineering", href: "/services/engineering" },
// //       { label: "Architecture", href: "/services/architecture" },
// //     ],
// //     globalInitiatives: [
// //       { label: "Digital Transformation", href: "/global/digital-transformation" },
// //       { label: "Sustainability", href: "/global/sustainability" },
// //     ],
// //   },
// // ];

// // export default function MegaMenuNavbar() {
// //   // hoveredItem holds the nav item whose dropdown is active
// //   const [hoveredItem, setHoveredItem] = useState<NavItem | null>(null);

// //   return (
// //     <nav className="relative bg-white shadow-md">
// //       <div className="container mx-auto px-4 py-4 flex items-center justify-between">
// //         {/* Logo */}
// //         <Link href="/" className="flex-shrink-0">
// //           <img src="/logo.png" alt="Logo" className="h-10" />
// //         </Link>

// //         {/* Main Navigation */}
// //         <ul className="flex space-x-8">
// //           {NAV_ITEMS.map((item) => (
// //             <li
// //               key={item.title}
// //               className="relative group"
// //               onMouseEnter={() => setHoveredItem(item)}
// //               onMouseLeave={() => setHoveredItem(null)}
// //             >
// //               <button className="flex items-center text-lg font-medium text-gray-700 hover:text-gray-900 focus:outline-none">
// //                 {item.title}
// //                 {/* Orange downward triangle */}
// //                 <span className="ml-1 text-orange-500 text-xs">&#9660;</span>
// //               </button>
// //             </li>
// //           ))}
// //         </ul>

// //         {/* Contact Us Button */}
// //         <Link
// //           href="/contact"
// //           className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg transition"
// //         >
// //           Contact Us
// //         </Link>
// //       </div>

// //       {/* Mega Menu Dropdown: Always positioned at the same spot */}
// //       {hoveredItem && (
// //         <div
// //           className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-full max-w-7xl bg-white border border-gray-200 shadow-lg z-50"
// //           onMouseEnter={() => setHoveredItem(hoveredItem)}
// //           onMouseLeave={() => setHoveredItem(null)}
// //         >
// //           <div className="p-6">
// //             {/* Top Section: Description and Items */}
// //             <div className="flex space-x-6">
// //               {/* Left Column: Description */}
// //               <div className="w-1/3 border-r border-gray-200 pr-4">
// //                 <h2 className="text-xl font-semibold mb-2 text-gray-800">
// //                   {hoveredItem.title}
// //                 </h2>
// //                 <p className="text-sm text-gray-600">{hoveredItem.description}</p>
// //               </div>
// //               {/* Right Column: Menu Items */}
// //               <div className="flex-1 grid grid-cols-2 gap-4">
// //                 {hoveredItem.items.map((link) => (
// //                   <Link
// //                     key={link.label}
// //                     href={link.href}
// //                     className="block text-gray-700 hover:text-orange-600"
// //                   >
// //                     {link.label}
// //                   </Link>
// //                 ))}
// //               </div>
// //             </div>
// //             {/* Bottom Section: Global Initiatives */}
// //             {hoveredItem.globalInitiatives && hoveredItem.globalInitiatives.length > 0 && (
// //               <div className="mt-6 border-t border-gray-200 pt-4">
// //                 <h3 className="text-lg font-semibold text-gray-800 mb-3">
// //                   Global Initiatives
// //                 </h3>
// //                 <div className="grid grid-cols-3 gap-4">
// //                   {hoveredItem.globalInitiatives.map((gi) => (
// //                     <Link
// //                       key={gi.label}
// //                       href={gi.href}
// //                       className="block text-sm text-gray-700 hover:text-orange-600"
// //                     >
// //                       {gi.label}
// //                     </Link>
// //                   ))}
// //                 </div>
// //               </div>
// //             )}
// //           </div>
// //         </div>
// //       )}
// //     </nav>
// //   );
// // }
// // "use client";

// // import Link from "next/link";
// // import { useState, useRef } from "react";

// // type NavItem = {
// //   title: string;
// //   description: string;
// //   items: { label: string; href: string }[];
// //   globalInitiatives?: { label: string; href: string }[];
// // };

// // const NAV_ITEMS: NavItem[] = [
// //   {
// //     title: "Industries",
// //     description:
// //       "Explore our diverse industries and discover innovative solutions tailored for each market.",
// //     items: [
// //       { label: "Energy", href: "/industries/energy" },
// //       { label: "Buildings", href: "/industries/buildings" },
// //       { label: "Transportation", href: "/industries/transportation" },
// //       { label: "Water", href: "/industries/water" },
// //     ],
// //     globalInitiatives: [
// //       { label: "Sustainability", href: "/global/sustainability" },
// //       { label: "Innovation", href: "/global/innovation" },
// //       { label: "Smart Infrastructure", href: "/global/smart-infrastructure" },
// //     ],
// //   },
// //   {
// //     title: "Services",
// //     description:
// //       "Discover our comprehensive services from consulting to design, engineering and project management.",
// //     items: [
// //       { label: "Consulting", href: "/services/consulting" },
// //       { label: "Project Management", href: "/services/project-management" },
// //       { label: "Engineering", href: "/services/engineering" },
// //       { label: "Architecture", href: "/services/architecture" },
// //     ],
// //     globalInitiatives: [
// //       { label: "Digital Transformation", href: "/global/digital-transformation" },
// //       { label: "Sustainability", href: "/global/sustainability" },
// //     ],
// //   },
// // ];

// // export default function MegaMenuNavbar() {
// //   // hoveredItem holds the nav item whose dropdown is active
// //   const [hoveredItem, setHoveredItem] = useState<NavItem | null>(null);
// //   // Ref to store a timeout ID for delaying onMouseLeave
// //   const timeoutRef = useRef<NodeJS.Timeout | null>(null);

// //   const handleMouseEnter = (item: NavItem) => {
// //     if (timeoutRef.current) {
// //       clearTimeout(timeoutRef.current);
// //       timeoutRef.current = null;
// //     }
// //     setHoveredItem(item);
// //   };

// //   const handleMouseLeave = () => {
// //     // Delay hiding the menu by 300ms
// //     timeoutRef.current = setTimeout(() => {
// //       setHoveredItem(null);
// //     }, 300);
// //   };

// //   return (
// //     <nav className="relative bg-white shadow-md">
// //       <div className="container mx-auto px-4 py-4 flex items-center justify-between">
// //         {/* Logo */}
// //         <Link href="/" className="text-xl font-bold text-gray-800">
// //           MyCompany
// //         </Link>

// //         {/* Main Navigation Items */}
// //         <ul className="flex space-x-8">
// //           {NAV_ITEMS.map((item) => (
// //             <li
// //               key={item.title}
// //               className="relative group"
// //               onMouseEnter={() => handleMouseEnter(item)}
// //               onMouseLeave={handleMouseLeave}
// //             >
// //               <button className="flex items-center text-lg font-medium text-gray-700 hover:text-gray-900 focus:outline-none">
// //                 {item.title}
// //                 <span className="ml-1 text-orange-500 text-xs">&#9660;</span>
// //               </button>
// //             </li>
// //           ))}
// //         </ul>

// //         <Link
// //           href="/contact"
// //           className="px-4 py-2 border-2 border-orange-500 bg-white text-black font-semibold rounded-lg transition-colors duration-300 hover:bg-orange-500 hover:text-black" style={{ borderRadius: "100px" }}
// //         >
// //           Contact Us
// //         </Link>
// //       </div>

// //       {/* Mega Menu Dropdown: Always positioned at the same spot */}
// //       {hoveredItem && (
// //         <div
// //           className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[60rem] bg-white border border-gray-200 shadow-lg z-50"
// //           onMouseEnter={() => handleMouseEnter(hoveredItem)}
// //           onMouseLeave={handleMouseLeave}
// //         >
// //           <div className="p-6">
// //             {/* Top Section: Description and Items */}
// //             <div className="flex space-x-6">
// //               {/* Left Column: Description */}
// //               <div className="w-1/3 border-r border-gray-200 pr-4">
// //                 <h2 className="text-xl font-semibold mb-2 text-gray-800">
// //                   {hoveredItem.title}
// //                 </h2>
// //                 <p className="text-sm text-gray-600">{hoveredItem.description}</p>
// //               </div>
// //               {/* Right Column: Menu Items */}
// //               <div className="flex-1 grid grid-cols-2 gap-4">
// //                 {hoveredItem.items.map((link) => (
// //                   <Link
// //                     key={link.label}
// //                     href={link.href}
// //                     className="block text-gray-700 hover:text-orange-600"
// //                   >
// //                     {link.label}
// //                   </Link>
// //                 ))}
// //               </div>
// //             </div>
// //             {/* Bottom Section: Global Initiatives */}
// //             {hoveredItem.globalInitiatives && hoveredItem.globalInitiatives.length > 0 && (
// //               <div className="mt-6 border-t border-gray-200 pt-4">
// //                 <h3 className="text-lg font-semibold text-gray-800 mb-3">
// //                   Global Initiatives
// //                 </h3>
// //                 <div className="grid grid-cols-3 gap-4">
// //                   {hoveredItem.globalInitiatives.map((gi) => (
// //                     <Link
// //                       key={gi.label}
// //                       href={gi.href}
// //                       className="block text-sm text-gray-700 hover:text-orange-600"
// //                     >
// //                       {gi.label}
// //                     </Link>
// //                   ))}
// //                 </div>
// //               </div>
// //             )}
// //           </div>
// //         </div>
// //       )}
// //     </nav>
// //   );
// // }

// "use client";

// import Link from "next/link";
// import { useState, useRef } from "react";

// type NavItem = {
//   title: string;
//   description: string;
//   items: { label: string; href: string }[];
//   globalInitiatives?: { label: string; href: string }[];
// };

// const NAV_ITEMS: NavItem[] = [
//   {
//     title: "Industries",
//     description:
//       "Explore our diverse industries and discover innovative solutions tailored for each market.",
//     items: [
//       { label: "Energy", href: "/industries/energy" },
//       { label: "Buildings", href: "/industries/buildings" },
//       { label: "Transportation", href: "/industries/transportation" },
//       { label: "Water", href: "/industries/water" },
//     ],
//     globalInitiatives: [
//       { label: "Sustainability", href: "/global/sustainability" },
//       { label: "Innovation", href: "/global/innovation" },
//       { label: "Smart Infrastructure", href: "/global/smart-infrastructure" },
//     ],
//   },
//   {
//     title: "Services",
//     description:
//       "Discover our comprehensive services from consulting to design, engineering and project management.",
//     items: [
//       { label: "Consulting", href: "/services/consulting" },
//       { label: "Project Management", href: "/services/project-management" },
//       { label: "Engineering", href: "/services/engineering" },
//       { label: "Architecture", href: "/services/architecture" },
//     ],
//     globalInitiatives: [
//       { label: "Digital Transformation", href: "/global/digital-transformation" },
//       { label: "Sustainability", href: "/global/sustainability" },
//     ],
//   },
// ];

// export default function MegaMenuNavbar() {
//   // hoveredItem holds the nav item whose dropdown is active
//   const [hoveredItem, setHoveredItem] = useState<NavItem | null>(null);
//   // activeTab for the tab that is selected
//   const [activeTab, setActiveTab] = useState<string>("");
//   // Ref to store a timeout ID for delaying onMouseLeave
//   const timeoutRef = useRef<NodeJS.Timeout | null>(null);

//   const handleMouseEnter = (item: NavItem) => {
//     if (timeoutRef.current) {
//       clearTimeout(timeoutRef.current);
//       timeoutRef.current = null;
//     }
//     setHoveredItem(item);
//   };

//   const handleMouseLeave = () => {
//     // Delay hiding the menu by 300ms
//     timeoutRef.current = setTimeout(() => {
//       setHoveredItem(null);
//     }, 300);
//   };

//   return (
//     <nav className="relative bg-white shadow-md">
//       <div className="container mx-auto px-4 py-4 flex items-center justify-between">
//         {/* Logo */}
//         <Link href="/" className="flex-shrink-0">
//           <img src="/logo.png" alt="Logo" className="h-10" />
//         </Link>

//         {/* Main Navigation Items */}
//         <ul className="flex space-x-8">
//           {NAV_ITEMS.map((item) => (
//             <li
//               key={item.title}
//               className="relative group"
//               onMouseEnter={() => handleMouseEnter(item)}
//               onMouseLeave={handleMouseLeave}
//             >
//               <button
//                 onClick={() => setActiveTab(item.title)}
//                 className="relative flex items-center text-lg font-medium transition-colors focus:outline-none text-gray-700 hover:text-gray-900"
//               >
//                 {item.title}
//                 {/* Orange downward triangle */}
//                 <span className="ml-1 text-orange-500 text-xs">&#9660;</span>
//                 {/* Orange underline on hover */}
//                 {hoveredItem?.title === item.title && (
//                   <div className="absolute -bottom-1 left-0 w-full h-1 bg-orange-500" />
//                 )}
//               </button>
//             </li>
//           ))}
//         </ul>

//         {/* Contact Us Button */}
//         <Link
//           href="/contact"
//           className="px-4 py-2 border-2 border-orange-500 bg-white text-black font-semibold rounded-full transition-colors duration-300 hover:bg-orange-500 hover:text-white"
//         >
//           Contact Us
//         </Link>
//       </div>

//       {/* Mega Menu Dropdown: Always positioned at the same spot */}
//       {hoveredItem && (
//         <div
//           className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-full max-w-7xl bg-white border border-gray-200 shadow-lg z-50"
//           onMouseEnter={() => handleMouseEnter(hoveredItem)}
//           onMouseLeave={handleMouseLeave}
//         >
//           <div className="p-6">
//             {/* Top Section: Description and Items */}
//             <div className="flex space-x-6">
//               {/* Left Column: Description */}
//               <div className="w-1/3 border-r border-gray-200 pr-4">
//                 <h2 className="text-xl font-semibold mb-2 text-gray-800">
//                   {hoveredItem.title}
//                 </h2>
//                 <p className="text-sm text-gray-600">{hoveredItem.description}</p>
//               </div>
//               {/* Right Column: Menu Items */}
//               <div className="flex-1 grid grid-cols-2 gap-4">
//                 {hoveredItem.items.map((link) => (
//                   <Link
//                     key={link.label}
//                     href={link.href}
//                     className="block text-gray-700 hover:text-orange-600"
//                   >
//                     {link.label}
//                   </Link>
//                 ))}
//               </div>
//             </div>
//             {/* Bottom Section: Global Initiatives */}
//             {hoveredItem.globalInitiatives && hoveredItem.globalInitiatives.length > 0 && (
//               <div className="mt-6 border-t border-gray-200 pt-4">
//                 <h3 className="text-lg font-semibold text-gray-800 mb-3">
//                   Global Initiatives
//                 </h3>
//                 <div className="grid grid-cols-3 gap-4">
//                   {hoveredItem.globalInitiatives.map((gi) => (
//                     <Link
//                       key={gi.label}
//                       href={gi.href}
//                       className="block text-sm text-gray-700 hover:text-orange-600"
//                     >
//                       {gi.label}
//                     </Link>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }
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
    title: "Services",
    description:
      "Discover our comprehensive services from consulting to design, engineering and project management.",
    items: [
      { label: "Consulting", href: "/services/consulting" },
      { label: "Project Management", href: "/services/project-management" },
      { label: "Engineering", href: "/services/engineering" },
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
        <Link href="/" className="flex-shrink-0">
          <img src="logo.jpg" alt="Logo" className="h-10" />
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
                <span className="ml-1 text-orange-500 text-xs">&#9660;</span>
                {/* Animated Orange Underline */}
                {hoveredItem?.title === item.title && (
                  <motion.div
                    layout
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.3 }}
                    className="absolute -bottom-1 left-0 w-full h-1 bg-orange-500"
                  />
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* Contact Us Button */}
        <Link
          href="/contact"
          className="px-4 py-2 border-2 border-orange-500 bg-white text-black font-semibold rounded-full transition-colors duration-300 hover:bg-orange-500 hover:text-white"
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
