"use client"

import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-6 py-8">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:justify-between mb-8">
          {/* Left Column: Logo & Contact Info */}
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <Image
              src="/LogoNew.png"
              alt="AA Design Studio Logo"
              width={120}
              height={60}
              className="h-12 w-auto"
            />
            <p className="text-sm leading-6">
              Phone: 1-866-XXXX-XXXX
              <br />
              Media Inquiries: media@aadesignstudio.com
            </p>
          </div>

          {/* Right Columns */}
          <div className="w-full md:w-3/4 grid grid-cols-2 md:grid-cols-6 gap-6 text-sm">
            {/* Expertise */}
            <div>
              <h3 className="mb-3 uppercase font-semibold tracking-wide" style={{ color: "#003087" }}>
                expertise
              </h3>
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
              <h3 className="mb-3 uppercase font-semibold tracking-wide" style={{ color: "#003087" }}>
                initiatives
              </h3>
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
              <h3 className="mb-3 uppercase font-semibold tracking-wide" style={{ color: "#003087" }}>
                ideas
              </h3>
              <ul className="space-y-1 leading-6">
                <li>Visit Our Hub</li>
              </ul>
            </div>

            {/* Careers */}
            <div>
              <h3 className="mb-3 uppercase font-semibold tracking-wide" style={{ color: "#003087" }}>
                careers
              </h3>
              <ul className="space-y-1 leading-6">
                <li>Jobs</li>
                <li>Students &amp; Graduates</li>
                <li>Search &amp; Apply</li>
              </ul>
            </div>

            {/* About */}
            <div>
              <h3 className="mb-3 uppercase font-semibold tracking-wide" style={{ color: "#003087" }}>
                about
              </h3>
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
              <h3 className="mb-3 uppercase font-semibold tracking-wide" style={{ color: "#003087" }}>
                investors
              </h3>
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
          <p className="mb-4 md:mb-0">&copy; 2025 AA Design Studio. All rights reserved.</p>
          <div className="space-x-4">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/sitemap">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

