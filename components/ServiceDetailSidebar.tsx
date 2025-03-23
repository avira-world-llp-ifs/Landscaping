import type React from "react"

interface ServiceDetailSidebarProps {
  serviceName: string
  description: string
  price: number
  imageUrl: string
}

const ServiceDetailSidebar: React.FC<ServiceDetailSidebarProps> = ({ serviceName, description, price, imageUrl }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-md shadow-md">
      <img
        src={imageUrl || "/placeholder.svg"}
        alt={serviceName}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h2 className="text-xl font-semibold mb-2">{serviceName}</h2>
      <p className="text-gray-700 mb-4">{description}</p>
      <div className="flex items-center justify-between">
        <span className="text-lg font-bold text-green-600">${price}</span>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Book Now</button>
      </div>
    </div>
  )
}

export default ServiceDetailSidebar

