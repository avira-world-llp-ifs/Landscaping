import Link from "next/link"
import Image from "next/image"
import { Twitter, Facebook, Linkedin, Instagram } from "lucide-react"

const CraftloreFooter = () => {
  return (
    <footer className="bg-[#003087] text-white py-10">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Section: Logo & Description */}
          <div className="flex flex-col md:items-start text-center md:text-left">
            <div className="flex items-center" style={{paddingLeft:0,marginLeft:0}}>
              <div className="relative w-32 md:w-40 h-16" >
                <Image
                  src="/inverseWhiteLogo.png"
                  alt="AA Design Studio"
                  fill
                  className="object-contain"
                />
              </div>
              <h2 className="text-2xl text-white font-bold ml-3">AA Design Studio</h2>
            </div>
            <p className="mt-4 text-sm leading-relaxed max-w-md">
              A professional design studio offering comprehensive services in architecture, interior design, and digital
              solutions. We transform spaces and create exceptional experiences through innovative design.
            </p>
            <div className="flex justify-center md:justify-start space-x-4 mt-4 text-xl">
              <Twitter className="cursor-pointer hover:text-gray-300" />
              <Facebook className="cursor-pointer hover:text-gray-300" />
              <Linkedin className="cursor-pointer hover:text-gray-300" />
              <Instagram className="cursor-pointer hover:text-gray-300" />
            </div>
          </div>

          {/* Right Section: Navigation Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Services</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/services/architecture" className="text-white hover:text-[#FF6B35]">
                    Architecture
                  </Link>
                </li>
                <li>
                  <Link href="/services/interior-design" className="text-white hover:text-[#FF6B35]">
                    Interior Design
                  </Link>
                </li>
                <li>
                  <Link href="/services/landscape-architecture" className="text-white hover:text-[#FF6B35]">
                    Landscape Design
                  </Link>
                </li>
                <li>
                  <Link href="/services/consulting" className="text-white hover:text-[#FF6B35]">
                    Consulting
                  </Link>
                </li>
                <li>
                  <Link href="/services/project-management" className="text-white hover:text-[#FF6B35]">
                    Project Management
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-white hover:text-[#FF6B35]">
                    All Services
                  </Link>
                </li>
              </ul>
            </div>

            {/* Industries */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Industries</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/industries/residential-luxury-homes" className="text-white hover:text-[#FF6B35]">
                    Residential
                  </Link>
                </li>
                <li>
                  <Link href="/industries/corporate-office-spaces" className="text-white hover:text-[#FF6B35]">
                    Corporate
                  </Link>
                </li>
                <li>
                  <Link href="/industries/retail-commercial" className="text-white hover:text-[#FF6B35]">
                    Retail & Commercial
                  </Link>
                </li>
                <li>
                  <Link href="/industries/hospitality-tourism" className="text-white hover:text-[#FF6B35]">
                    Hospitality
                  </Link>
                </li>
                <li>
                  <Link href="/industries/healthcare-wellness" className="text-white hover:text-[#FF6B35]">
                    Healthcare
                  </Link>
                </li>
                <li>
                  <Link href="/industries" className="text-white hover:text-[#FF6B35]">
                    All Industries
                  </Link>
                </li>
              </ul>
            </div>

            {/* About & Connect */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">About & Connect</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-white hover:text-[#FF6B35]">
                    Our Mission
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white hover:text-[#FF6B35]">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white hover:text-[#FF6B35]">
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white hover:text-[#FF6B35]">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white hover:text-[#FF6B35]">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white hover:text-[#FF6B35]">
                    Become a Sponsor
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-10 border-t border-white/20 pt-6 flex flex-col md:flex-row items-center md:items-start gap-6">
          {/* Left Section - Text */}
          <div className="md:w-2/5 text-center md:text-left">
            <h3 className="text-lg text-white font-semibold">Stay Updated</h3>
            <p className="text-sm max-w-md">
              Subscribe to our newsletter for the latest design trends, project showcases, and company news.
            </p>
          </div>

          {/* Right Section - Email Input & Button */}
          <div className="md:w-3/5 w-full">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full md:w-3/4 px-4 py-2 bg-white text-black rounded-md focus:outline-none"
              />
              <button className="w-full md:w-1/4 bg-orange-500 px-4 py-2 text-white hover:text-white font-semibold rounded-md">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          {/* Left - Copyright */}
          <p className="text-sm">© 2025 AA Design Studio. All rights reserved.</p>

          {/* Center - Company Info */}
          <p className="text-sm">123 Design Avenue, New York, NY 10001</p>

          {/* Right - Terms & Privacy */}
          <div className="flex space-x-4 text-sm">
            <Link href="/privacy-policy" className="hover:text-white text-white">
              Privacy
            </Link>
            <Link href="/sitemap" className="hover:text-white text-white">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default CraftloreFooter

