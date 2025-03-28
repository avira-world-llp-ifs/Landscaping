"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Check, Search, Download, FileText, Phone } from "lucide-react"
import styles from "./ServiceDetail.module.css"
import { type ServiceDetail, serviceCategories } from "@/data/services"

interface ServiceDetailBodyProps {
  serviceData: ServiceDetail
}

export default function ServiceDetailBody({ serviceData }: ServiceDetailBodyProps) {
  const [activeTab, setActiveTab] = useState("materials")

  // Ensure all required properties have default values
  const {
    title = "",
    content = "",
    planningWork = {
      title: "",
      description: "",
      features: [],
    },
    additionalInfo = "",
    additionalFeatures = [],
    tabContent = {
      materials: { title: "", image: "", content: "" },
      design: { title: "", image: "", content: "" },
      care: { title: "", image: "", content: "" },
      support: { title: "", hasForm: true },
    },
  } = serviceData

  return (
    <section className={styles.servicesDetailsPage}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row">
          {/* Main Content */}
          <div className="w-full lg:w-7/12">
            <div className={styles.servicesDetailsContent}>
              {/* Main Image */}
              <div className={styles.servicesDetailsImg1}>
                <Image
                  src="/placeholder.svg?height=500&width=800"
                  alt={title}
                  width={800}
                  height={500}
                  className="w-full h-auto"
                />
              </div>

              {/* Text Box 1 */}
              <div className={styles.servicesDetailsTextBox1}>
                <div className={styles.title}>
                  <h2>{title}</h2>
                </div>
                {content.split("\n\n").map((paragraph, index) => (
                  <p key={index} className={index === 0 ? styles.text1 : styles.text2}>
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Text Box 2 - Planning Work */}
              <div className={styles.servicesDetailsTextBox2}>
                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-5/12">
                    <div className={styles.servicesDetailsTextBox2Img}>
                      <Image
                        src="/placeholder.svg?height=300&width=400"
                        alt="Planning Work"
                        width={400}
                        height={300}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                  <div className="w-full md:w-7/12">
                    <div className={styles.servicesDetailsTextBox2Content}>
                      <div className={styles.title}>
                        <h2>{planningWork.title}</h2>
                      </div>
                      <div className={styles.text}>
                        <p>{planningWork.description}</p>
                      </div>
                      <ul>
                        {planningWork.features.map((feature, index) => (
                          <li key={index}>
                            <div className={styles.icon}>
                              <Check size={12} />
                            </div>
                            <div className={styles.text}>
                              <p>{feature}</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Text Box 3 - Additional Info */}
              

              {/* Tab Box */}
              <div className={styles.servicesDetailsTabBox}>
                <div className="w-full">
                  <div className={styles.servicesDetailsTab}>
                    <div className={styles.servicesDetailsTabButton}>
                      <ul>
                        <li
                          className={activeTab === "materials" ? styles.activeBtn : ""}
                          onClick={() => setActiveTab("materials")}
                        >
                          <h4>Quality Materials</h4>
                        </li>
                        <li
                          className={activeTab === "design" ? styles.activeBtn : ""}
                          onClick={() => setActiveTab("design")}
                        >
                          <h4>Interior Design</h4>
                        </li>
                        <li
                          className={activeTab === "care" ? styles.activeBtn : ""}
                          onClick={() => setActiveTab("care")}
                        >
                          <h4>Personal Care</h4>
                        </li>
                        <li
                          className={activeTab === "support" ? styles.activeBtn : ""}
                          onClick={() => setActiveTab("support")}
                        >
                          <h4>Super Support</h4>
                        </li>
                      </ul>
                    </div>

                    <div className={styles.tabsContent}>
                      {/* Materials Tab */}
                      <div
                        className={`${styles.tab} ${activeTab === "materials" ? styles.activeTab : ""}`}
                        id="materials"
                      >
                        <div className={styles.servicesDetailsTabContentItem}>
                          <div className={styles.qualityMaterialsTabBox}>
                            <div className="flex flex-col md:flex-row">
                              <div className="w-full md:w-6/12">
                                <div className={styles.qualityMaterialsTabBoxImg}>
                                  <Image
                                    src={tabContent.materials.image || "/placeholder.svg"}
                                    alt="Quality Materials"
                                    width={400}
                                    height={300}
                                    className="w-full h-auto"
                                  />
                                </div>
                              </div>
                              <div className="w-full md:w-6/12">
                                <div className={styles.qualityMaterialsTabBoxContent}>
                                  {(tabContent.materials.content || "").split("\n\n").map((paragraph, index) => (
                                    <p key={index} className={index === 0 ? styles.text1 : styles.text2}>
                                      {paragraph}
                                    </p>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Design Tab */}
                      <div className={`${styles.tab} ${activeTab === "design" ? styles.activeTab : ""}`} id="design">
                        <div className={styles.servicesDetailsTabContentItem}>
                          <div className={styles.interiorDesignTabBox}>
                            <div className="flex flex-col md:flex-row">
                              <div className="w-full md:w-6/12">
                                <div className={styles.interiorDesignTabBoxImg}>
                                  <Image
                                    src={tabContent.design.image || "/placeholder.svg"}
                                    alt="Interior Design"
                                    width={400}
                                    height={300}
                                    className="w-full h-auto"
                                  />
                                </div>
                              </div>
                              <div className="w-full md:w-6/12">
                                <div className={styles.interiorDesignTabBoxContent}>
                                  {(tabContent.design.content || "").split("\n\n").map((paragraph, index) => (
                                    <p key={index} className={index === 0 ? styles.text1 : styles.text2}>
                                      {paragraph}
                                    </p>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Care Tab */}
                      <div className={`${styles.tab} ${activeTab === "care" ? styles.activeTab : ""}`} id="care">
                        <div className={styles.servicesDetailsTabContentItem}>
                          <div className={styles.personalCareTabBox}>
                            <div className="flex flex-col md:flex-row">
                              <div className="w-full md:w-6/12">
                                <div className={styles.personalCareTabBoxImg}>
                                  <Image
                                    src={tabContent.care.image || "/placeholder.svg"}
                                    alt="Personal Care"
                                    width={400}
                                    height={300}
                                    className="w-full h-auto"
                                  />
                                </div>
                              </div>
                              <div className="w-full md:w-6/12">
                                <div className={styles.personalCareTabBoxContent}>
                                  {(tabContent.care.content || "").split("\n\n").map((paragraph, index) => (
                                    <p key={index} className={index === 0 ? styles.text1 : styles.text2}>
                                      {paragraph}
                                    </p>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Support Tab */}
                      <div className={`${styles.tab} ${activeTab === "support" ? styles.activeTab : ""}`} id="support">
                        <div className={styles.servicesDetailsTabContentItem}>
                          <div className={styles.superSupportTabBox}>
                            <div className="w-full">
                              <div className={styles.superSupportTabBoxForm}>
                                <form className="comment-one__form contact-form-validated">
                                  <div className="flex flex-col md:flex-row gap-4">
                                    <div className="w-full md:w-6/12">
                                      <div className={styles.commentFormInputBox}>
                                        <input type="text" placeholder="Full name" name="name" />
                                      </div>
                                    </div>
                                    <div className="w-full md:w-6/12">
                                      <div className={styles.commentFormInputBox}>
                                        <input type="email" placeholder="Email address" name="email" />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="w-full">
                                    <div className={styles.commentFormInputBox}>
                                      <textarea name="message" placeholder="Your Message"></textarea>
                                    </div>
                                    <button className={styles.thmBtn} type="submit">
                                      Send Message +
                                    </button>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-5/12">
            <div className={styles.servicesDetailsSidebar}>
              {/* Search */}
              <div className={`${styles.servicesDetailsSidebarSingle} ${styles.servicesDetailsSearch}`}>
                <div className={styles.title}>
                  <h2>Search</h2>
                </div>
                <form className={styles.servicesDetailsSearchForm}>
                  <input type="search" placeholder="Search.." />
                  <button type="submit">
                    <Search size={14} />
                  </button>
                </form>
              </div>

              {/* Categories */}
              <div className={`${styles.servicesDetailsSidebarSingle} ${styles.servicesDetailsCategory}`}>
                <div className={styles.title}>
                  <h2>Services Category</h2>
                </div>
                <ul className={styles.servicesDetailsCategoryList}>
                  {serviceCategories.map((category) => (
                    <li key={category.slug}>
                      <Link href={`/services/${category.slug}`} className={category.active ? "active" : ""}>
                        {category.name}
                        <span>
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
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Download Buttons */}
              <div className={`${styles.servicesDetailsSidebarSingle} ${styles.servicesDetailsButtonBox}`}>
                <div className={styles.btnOne}>
                  <Link href="#">
                    Download Doc <Download size={16} className="ml-2" />
                  </Link>
                </div>
                <div className={`${styles.btnOne} ${styles.btnOneTwo}`}>
                  <Link href="#">
                    Download PDF <FileText size={16} className="ml-2" />
                  </Link>
                </div>
              </div>

              {/* Help Box */}
              <div className={`${styles.servicesDetailsSidebarSingle} ${styles.servicesDetailsContactBox}`}>
                <div className={styles.title}>
                  <h2>Need Any Help</h2>
                </div>
                <p>
                  Ut enim ad minim veniam, nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  Duis aute irure dolor reprehenderit in voluptate velit esse
                </p>
                <div className={styles.number}>
                  <Link href="tel:6665559990">
                    <Phone size={20} className="mr-2" />
                    666-555-999-00
                  </Link>
                </div>
              </div>

              <div className={styles.servicesDetailsTextBox3}>
                <p>{additionalInfo}</p>
                <ul>
                  {additionalFeatures.map((feature, index) => (
                    <li key={index}>
                      <div className={styles.icon}>
                        <Check size={12} />
                      </div>
                      <div className={styles.text}>
                        <p>{feature}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

