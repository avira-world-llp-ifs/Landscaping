"use client"

import { usePathname } from "next/navigation"
import styles from "./Hero.module.css"

interface GlobalHeroProps {
  defaultTitle?: string
  defaultSubtitle?: string
}

// Map of paths to custom hero content
const heroContent: Record<string, { title: string; subtitle: string }> = {
  "/": {
    title: "Welcome to Design Studio",
    subtitle: "Professional design services for your projects",
  },

  // General Services
  "/services/consulting": {
    title: "Specialized Consultancy",
    subtitle: "Expert advice to guide your design and construction projects",
  },
  "/services/project-management": {
    title: "Project Management",
    subtitle: "Efficient management of your design and construction projects",
  },
  "/services/engineering": {
    title: "Engineering Services",
    subtitle: "Technical expertise for complex design challenges",
  },

  // Single Services
  "/services/architecture": {
    title: "Architecture Services",
    subtitle: "Innovative architectural solutions for modern needs",
  },
  "/services/interior-design": {
    title: "Interior Design",
    subtitle: "Transform your spaces with our expert interior design services",
  },
  "/services/landscape-architecture": {
    title: "Landscape Architecture",
    subtitle: "Creating beautiful and functional outdoor environments",
  },

  // Tech pages
  "/tech": {
    title: "Technology Solutions",
    subtitle: "Cutting-edge tools and software for design excellence",
  },

  // Tech Services
  "/tech/design-drafting": {
    title: "Design & Drafting Software",
    subtitle: "Cutting-edge tools for precision design and drafting",
  },
  "/tech/landscape-design": {
    title: "Landscape Design Software",
    subtitle: "Specialized tools for landscape architecture and planning",
  },
  "/tech/project-management": {
    title: "Project Management Tools",
    subtitle: "Digital solutions for efficient project coordination",
  },
  "/tech/rendering-visualization": {
    title: "Rendering & Visualization",
    subtitle: "Bring your designs to life with advanced visualization tools",
  },
  "/tech/surveying-gis": {
    title: "Surveying & GIS Tools",
    subtitle: "Precision mapping and geographical information systems",
  },
  "/tech/visualization-ar": {
    title: "Visualization & AR Tools",
    subtitle: "Immersive experiences with augmented reality technology",
  },

  // Industries page
  "/industries": {
    title: "Industries We Serve",
    subtitle: "Specialized design solutions for diverse sectors",
  },

  // Industries
  "/industries/residential-luxury-homes": {
    title: "Residential & Luxury Homes",
    subtitle: "Exceptional design for distinctive residential properties",
  },
  "/industries/corporate-office-spaces": {
    title: "Corporate & Office Spaces",
    subtitle: "Functional and inspiring workspaces for productivity",
  },
  "/industries/retail-commercial": {
    title: "Retail & Commercial",
    subtitle: "Engaging environments that enhance customer experience",
  },
  "/industries/hospitality-tourism": {
    title: "Hospitality & Tourism",
    subtitle: "Creating memorable experiences through thoughtful design",
  },
  "/industries/healthcare-wellness": {
    title: "Healthcare & Wellness",
    subtitle: "Healing environments that promote wellbeing",
  },
}

export default function GlobalHero({
  defaultTitle = "Design Studio",
  defaultSubtitle = "Professional design services",
}: GlobalHeroProps) {
  const pathname = usePathname() || ""

  // Find the closest matching path
  const matchingPath =
    Object.keys(heroContent).find((path) => pathname === path || pathname.startsWith(`${path}/`)) || "/"

  const content = heroContent[matchingPath] || {
    title: defaultTitle,
    subtitle: defaultSubtitle,
  }

  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>{content.title}</h1>
      <p className={styles.subtitle}>{content.subtitle}</p>
      <div className={styles.buttonGroup}>
        <button className={styles.primaryButton}>Get Started</button>
        <button className={styles.secondaryButton}>Learn More</button>
      </div>
    </section>
  )
}

