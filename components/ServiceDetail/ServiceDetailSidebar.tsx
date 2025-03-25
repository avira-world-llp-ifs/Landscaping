import Link from "next/link"
import { Search, Download, FileText, Phone } from "lucide-react"

export default function ServiceDetailSidebar() {
  const serviceCategories = [
    { name: "General Contracting", slug: "general-contracting", active: true },
    { name: "Material Management", slug: "material-management", active: false },
    { name: "Building Renovation", slug: "building-renovation", active: false },
    { name: "Architecture Design", slug: "architecture-design", active: false },
    { name: "Multistory Build", slug: "multistory-build", active: false },
  ]

  return (
    <div className="space-y-8">
      {/* Search */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-bold mb-4">Search</h3>
        <div className="relative">
          <input type="search" placeholder="Search..." className="w-full p-3 pr-10 border rounded-md" />
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
            <Search size={18} />
          </button>
        </div>
      </div>

      {/* Categories */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-bold mb-4">Services Category</h3>
        <ul className="space-y-2">
          {serviceCategories.map((category) => (
            <li key={category.slug}>
              <Link
                href={`/services/${category.slug}`}
                className={`flex items-center justify-between p-3 rounded-md transition-colors ${
                  category.active ? "bg-primary text-white" : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                }`}
              >
                <span>{category.name}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Download Buttons */}
      <div className="bg-white p-6 rounded-lg shadow-md space-y-3">
        <Link
          href="#"
          className="flex items-center justify-between bg-primary text-white p-4 rounded-md hover:bg-primary-dark transition-colors"
        >
          <span className="flex items-center">
            <Download size={18} className="mr-2" />
            Download Doc
          </span>
        </Link>

        <Link
          href="#"
          className="flex items-center justify-between bg-gray-800 text-white p-4 rounded-md hover:bg-gray-900 transition-colors"
        >
          <span className="flex items-center">
            <FileText size={18} className="mr-2" />
            Download PDF
          </span>
        </Link>
      </div>

      {/* Help Box */}
      <div className="bg-primary bg-opacity-10 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Need Any Help</h3>
        <p className="text-gray-600 mb-4">
          Ut enim ad minim veniam, nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
          aute irure dolor reprehenderit in voluptate velit esse
        </p>
        <div className="flex items-center text-primary font-bold">
          <Phone size={20} className="mr-2" />
          <a href="tel:6665559990">666-555-999-00</a>
        </div>
      </div>
    </div>
  )
}

