import Image from "next/image"

export default function BrandSection() {
  const brands = [
    { id: 1, image: "/placeholder.svg?height=80&width=160", alt: "Brand 1" },
    { id: 2, image: "/placeholder.svg?height=80&width=160", alt: "Brand 2" },
    { id: 3, image: "/placeholder.svg?height=80&width=160", alt: "Brand 3" },
    { id: 4, image: "/placeholder.svg?height=80&width=160", alt: "Brand 4" },
    { id: 5, image: "/placeholder.svg?height=80&width=160", alt: "Brand 5" },
  ]

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {brands.map((brand) => (
            <div key={brand.id} className="grayscale hover:grayscale-0 transition-all duration-300">
              <Image
                src={brand.image || "/placeholder.svg"}
                alt={brand.alt}
                width={160}
                height={80}
                className="h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

