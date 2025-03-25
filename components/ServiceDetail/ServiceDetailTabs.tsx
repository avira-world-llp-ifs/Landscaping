"use client"

import { useState } from "react"
import Image from "next/image"

interface TabContent {
  materials: {
    title: string
    image: string
    content: string
  }
  design: {
    title: string
    image: string
    content: string
  }
  care: {
    title: string
    image: string
    content: string
  }
  support: {
    title: string
    hasForm: boolean
  }
}

interface ServiceDetailTabsProps {
  tabContent: TabContent
}

export default function ServiceDetailTabs({ tabContent }: ServiceDetailTabsProps) {
  const [activeTab, setActiveTab] = useState("materials")

  return (
    <div className="mt-12 border rounded-lg overflow-hidden">
      <div className="flex flex-wrap border-b">
        <TabButton
          id="materials"
          title={tabContent.materials.title}
          isActive={activeTab === "materials"}
          onClick={() => setActiveTab("materials")}
        />
        <TabButton
          id="design"
          title={tabContent.design.title}
          isActive={activeTab === "design"}
          onClick={() => setActiveTab("design")}
        />
        <TabButton
          id="care"
          title={tabContent.care.title}
          isActive={activeTab === "care"}
          onClick={() => setActiveTab("care")}
        />
        <TabButton
          id="support"
          title={tabContent.support.title}
          isActive={activeTab === "support"}
          onClick={() => setActiveTab("support")}
        />
      </div>

      <div className="p-6">
        {activeTab === "materials" && (
          <TabContentWithImage image={tabContent.materials.image} content={tabContent.materials.content} />
        )}

        {activeTab === "design" && (
          <TabContentWithImage image={tabContent.design.image} content={tabContent.design.content} />
        )}

        {activeTab === "care" && (
          <TabContentWithImage image={tabContent.care.image} content={tabContent.care.content} />
        )}

        {activeTab === "support" && (
          <div>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-1">
                <input type="text" placeholder="Full name" className="w-full p-3 border rounded-md" required />
              </div>
              <div className="md:col-span-1">
                <input type="email" placeholder="Email address" className="w-full p-3 border rounded-md" required />
              </div>
              <div className="md:col-span-2">
                <textarea placeholder="Your Message" className="w-full p-3 border rounded-md h-32" required></textarea>
              </div>
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-md transition-colors"
                >
                  Send Message +
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}

interface TabButtonProps {
  id: string
  title: string
  isActive: boolean
  onClick: () => void
}

function TabButton({ id, title, isActive, onClick }: TabButtonProps) {
  return (
    <button
      id={id}
      className={`px-6 py-4 font-medium text-sm md:text-base transition-colors ${
        isActive ? "bg-primary text-white" : "bg-gray-50 text-gray-700 hover:bg-gray-100"
      }`}
      onClick={onClick}
    >
      {title}
    </button>
  )
}

interface TabContentWithImageProps {
  image: string
  content: string
}

function TabContentWithImage({ image, content }: TabContentWithImageProps) {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div>
        <Image
          src={image || "/placeholder.svg"}
          alt="Tab content"
          width={400}
          height={300}
          className="w-full h-auto rounded-lg"
        />
      </div>
      <div className="space-y-4">
        {content.split("\n\n").map((paragraph, index) => (
          <p key={index} className="text-gray-600">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  )
}

