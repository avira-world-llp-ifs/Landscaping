import type { ReactNode } from "react"
import Link from "next/link"
import styles from "./Service.module.css"

interface ServiceProps {
  icon: ReactNode
  title: string
  description: string
  link?: string
  linkText?: string
  className?: string
}

export default function Service({
  icon,
  title,
  description,
  link = "#",
  linkText = "Learn more",
  className = "",
}: ServiceProps) {
  return (
    <div className={`${styles.service} ${className}`}>
      {icon && <div className={styles.iconWrapper}>{icon}</div>}

      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>

        {link && (
          <Link href={link} className={styles.link}>
            {linkText}
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
              className={styles.arrowIcon}
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>
        )}
      </div>
    </div>
  )
}

