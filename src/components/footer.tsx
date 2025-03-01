// "use client";

// import Link from "next/link";

// export default function Footer() {
//   return (
//     <footer className="bg-white border-t border-gray-200 mt-12">
//       <div className="container mx-auto px-6 py-8">
//         {/* Top Section */}
//         <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-8">
//           {/* Contact Info */}
//           <div className="w-full md:w-1/4 mb-8 md:mb-0">
//             <img
//               src="/logo.png"
//               alt="Stantec Logo"
//               className="h-10 mb-4"
//             />
//             <p className="text-sm text-gray-600">
//               Phone: 1-866-XXXX-XXXX <br />
//               Media Inquiries: media@stantec.com
//             </p>
//           </div>

//           {/* Footer Columns */}
//           <div className="w-full md:w-3/4 grid grid-cols-2 md:grid-cols-6 gap-6 text-sm">
//             {/* Expertise */}
//             <div>
//               <h3 className="font-semibold text-gray-800 mb-3">expertise</h3>
//               <ul className="space-y-2 text-gray-600">
//                 <li><Link href="/buildings">Buildings</Link></li>
//                 <li><Link href="/community-development">Community Development</Link></li>
//                 <li><Link href="/energy">Energy</Link></li>
//                 <li><Link href="/environment">Environment</Link></li>
//                 <li><Link href="/federal-government">Federal Government</Link></li>
//                 <li><Link href="/mining">Mining, Minerals &amp; Metals</Link></li>
//                 <li><Link href="/transportation">Transportation</Link></li>
//                 <li><Link href="/water">Water</Link></li>
//                 <li><Link href="/markets">View All Markets</Link></li>
//                 <li><Link href="/services">View All Services</Link></li>
//               </ul>
//             </div>

//             {/* Initiatives */}
//             <div>
//               <h3 className="font-semibold text-gray-800 mb-3">initiatives</h3>
//               <ul className="space-y-2 text-gray-600">
//                 <li><Link href="/climate-solutions">Climate Solutions</Link></li>
//                 <li><Link href="/digital">Digital (Stantec.io)</Link></li>
//                 <li><Link href="/coastal-resilience">Coastal Resilience</Link></li>
//                 <li><Link href="/ecosystem-restoration">Ecosystem Restoration</Link></li>
//                 <li><Link href="/energy-transition">Energy Transition</Link></li>
//                 <li><Link href="/smart-cities">Smart Cities</Link></li>
//                 <li><Link href="/sustainability">Sustainability</Link></li>
//                 <li><Link href="/international-development">International Development</Link></li>
//               </ul>
//             </div>

//             {/* Ideas */}
//             <div>
//               <h3 className="font-semibold text-gray-800 mb-3">ideas</h3>
//               <ul className="space-y-2 text-gray-600">
//                 <li><Link href="/ideas">Visit Our Hub</Link></li>
//               </ul>
//             </div>

//             {/* Careers */}
//             <div>
//               <h3 className="font-semibold text-gray-800 mb-3">careers</h3>
//               <ul className="space-y-2 text-gray-600">
//                 <li><Link href="/jobs">Jobs</Link></li>
//                 <li><Link href="/graduates">Students &amp; Graduates</Link></li>
//                 <li><Link href="/search-apply">Search &amp; Apply</Link></li>
//               </ul>
//             </div>

//             {/* About */}
//             <div>
//               <h3 className="font-semibold text-gray-800 mb-3">about</h3>
//               <ul className="space-y-2 text-gray-600">
//                 <li><Link href="/company-overview">Company Overview</Link></li>
//                 <li><Link href="/board-of-directors">Board of Directors</Link></li>
//                 <li><Link href="/governance">Corporate Governance</Link></li>
//                 <li><Link href="/history">History</Link></li>
//                 <li><Link href="/indigenous-relations">Indigenous Relations</Link></li>
//                 <li><Link href="/innovation">Innovation</Link></li>
//                 <li><Link href="/inclusion-diversity-equity">Inclusion, Diversity &amp; Equity</Link></li>
//                 <li><Link href="/community-engagement">Community Engagement</Link></li>
//                 <li><Link href="/offices">Offices</Link></li>
//                 <li><Link href="/more-info">Find Out More</Link></li>
//               </ul>
//             </div>

//             {/* Investors */}
//             <div>
//               <h3 className="font-semibold text-gray-800 mb-3">investors</h3>
//               <ul className="space-y-2 text-gray-600">
//                 <li><Link href="/why-invest">Why Invest</Link></li>
//                 <li><Link href="/reports-filings">Financial Reports &amp; Filings</Link></li>
//                 <li><Link href="/presentations">Presentations &amp; Events</Link></li>
//                 <li><Link href="/investor-governance">Corporate Governance</Link></li>
//                 <li><Link href="/stock-info">Dividend &amp; Stock Info</Link></li>
//                 <li><Link href="/contact-investors">Contact Investors</Link></li>
//               </ul>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="border-t border-gray-200 pt-4 flex flex-col md:flex-row md:justify-between md:items-center text-sm text-gray-600">
//           <p className="mb-4 md:mb-0">
//             &copy; 2025 Stantec. All rights reserved.
//           </p>
//           <div className="space-x-4">
//             <Link href="/privacy-policy">Privacy Policy</Link>
//             <Link href="/sitemap">Sitemap</Link>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }
"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-6 py-8">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:justify-between mb-8">
          {/* Left Column: Logo & Contact Info */}
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <img
              src="/logo.png"
              alt="Stantec Logo"
              className="h-10 mb-4"
            />
            <p className="text-sm leading-6" >
              Phone: 1-866-XXXX-XXXX
              <br />
              Media Inquiries: media@stantec.com
            </p>
          </div>

          {/* Right Columns */}
          <div className="w-full md:w-3/4 grid grid-cols-2 md:grid-cols-6 gap-6 text-sm">
            {/* Expertise */}
            <div>
              <h3 className="mb-3 uppercase font-semibold tracking-wide" style={{color:"rgba(237,102,49)"}}>expertise</h3>
              <ul className="space-y-1 leading-6">
                <li>Buildings</li>
                <li>Community Development</li>
                <li>Energy</li>
                <li>Environment</li>
                <li>Federal Government</li>
                <li>Mining, Minerals &amp; Metals</li>
                <li>Transportation</li>
                <li>Water</li>
                <li>View All Markets</li>
                <li>View All Services</li>
              </ul>
            </div>

            {/* Initiatives */}
            <div>
              <h3 className="mb-3 uppercase font-semibold tracking-wide" style={{color:"rgba(237,102,49)"}}>initiatives</h3>
              <ul className="space-y-1 leading-6">
                <li>Climate Solutions</li>
                <li>Digital (Stantec.io)</li>
                <li>Coastal Resilience</li>
                <li>Ecosystem Restoration</li>
                <li>Energy Transition</li>
                <li>Smart Cities</li>
                <li>Sustainability</li>
                <li>International Development</li>
              </ul>
            </div>

            {/* Ideas */}
            <div>
              <h3 className="mb-3 uppercase font-semibold tracking-wide" style={{color:"rgba(237,102,49)"}}>ideas</h3>
              <ul className="space-y-1 leading-6">
                <li>Visit Our Hub</li>
              </ul>
            </div>

            {/* Careers */}
            <div>
              <h3 className="mb-3 uppercase font-semibold tracking-wide" style={{color:"rgba(237,102,49)"}}>careers</h3>
              <ul className="space-y-1 leading-6">
                <li>Jobs</li>
                <li>Students &amp; Graduates</li>
                <li>Search &amp; Apply</li>
              </ul>
            </div>

            {/* About */}
            <div>
              <h3 className="mb-3 uppercase font-semibold tracking-wide" style={{color:"rgba(237,102,49)"}}>about</h3>
              <ul className="space-y-1 leading-6">
                <li>Company Overview</li>
                <li>Board of Directors</li>
                <li>Corporate Governance</li>
                <li>History</li>
                <li>Indigenous Relations</li>
                <li>Innovation</li>
                <li>Inclusion, Diversity &amp; Equity</li>
                <li>Community Engagement</li>
                <li>Find an Office</li>
                <li>More Info</li>
              </ul>
            </div>

            {/* Investors */}
            <div>
              <h3 className="mb-3 uppercase font-semibold tracking-wide" style={{color:"rgba(237,102,49)"}}>investors</h3>
              <ul className="space-y-1 leading-6">
                <li>Why Invest</li>
                <li>Financial Reports &amp; Filings</li>
                <li>Presentations &amp; Events</li>
                <li>Corporate Governance</li>
                <li>Dividend &amp; Stock Info</li>
                <li>Contact Investors</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t pt-4 flex flex-col md:flex-row md:justify-between items-center text-sm">
          <p className="mb-4 md:mb-0">
            &copy; 2025 Avira World. All rights reserved.
          </p>
          <div className="space-x-4">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/sitemap">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
