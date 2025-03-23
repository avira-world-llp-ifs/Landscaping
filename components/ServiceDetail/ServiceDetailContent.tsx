import Image from "next/image"
import { CheckIcon } from "lucide-react"

interface PlanningWork {
  title: string
  description: string
  features: string[]
}

interface ServiceDetailContentProps {
  title: string
  content: string
  planningWork: PlanningWork
  additionalInfo: string
  additionalFeatures: string[]
}

export default function ServiceDetailContent({
  title,
  content,
  planningWork,
  additionalInfo,
  additionalFeatures,
}: ServiceDetailContentProps) {
  return (
    <div className="space-y-12">
      <div>
        <div className="mb-6">
          <Image
            src="/placeholder.svg?height=400&width=800"
            alt={title}
            width={800}
            height={400}
            className="w-full h-auto rounded-lg"
          />
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <div className="text-gray-600 space-y-4">
            {content.split("\n\n").map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 bg-gray-50 p-6 rounded-lg">
        <div>
          <Image
            src="/placeholder.svg?height=300&width=400"
            alt="Planning Work"
            width={400}
            height={300}
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-3">{planningWork.title}</h3>
          <p className="text-gray-600 mb-4">{planningWork.description}</p>
          <ul className="space-y-3">
            {planningWork.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <div className="mr-3 mt-1 bg-primary rounded-full p-1 text-white">
                  <CheckIcon size={14} />
                </div>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <p className="text-gray-600 mb-4">{additionalInfo}</p>
        <ul className="space-y-3">
          {additionalFeatures.map((feature, index) => (
            <li key={index} className="flex items-start">
              <div className="mr-3 mt-1 bg-primary rounded-full p-1 text-white">
                <CheckIcon size={14} />
              </div>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

