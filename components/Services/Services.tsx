import type React from "react"
import styles from "./Services.module.css"
import Service from "@/components/Service/Service"
import { ServerIcon, ShieldIcon, SpeedIcon, SupportIcon } from "./ServiceIcons"

interface ServiceItem {
  icon: React.ReactNode
  title: string
  description: string
  link?: string
}

export default function Services() {
  const services: ServiceItem[] = [
    {
      icon: <ServerIcon />,
      title: "Cloud Hosting",
      description: "Reliable and scalable cloud hosting solutions for your applications with 99.9% uptime guarantee.",
      link: "/services/cloud-hosting",
    },
    {
      icon: <ShieldIcon />,
      title: "Security Services",
      description: "Advanced security measures to protect your data and applications from threats and vulnerabilities.",
      link: "/services/security",
    },
    {
      icon: <SpeedIcon />,
      title: "Performance Optimization",
      description: "Boost your application performance with our optimization techniques and best practices.",
      link: "/services/performance",
    },
    {
      icon: <SupportIcon />,
      title: "24/7 Support",
      description: "Round-the-clock technical support to help you resolve issues and answer your questions.",
      link: "/services/support",
    },
  ]

  return (
    <section className={styles.services}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Our Services</h2>
        <p className={styles.sectionDescription}>
          We offer a wide range of services to help you build, deploy, and maintain your applications.
        </p>

        <div className={styles.serviceGrid}>
          {services.map((service, index) => (
            <Service
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              link={service.link}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

