import Link from "next/link"
import styles from "./ServiceDetailHeader.module.css"
import { images } from "@/data/images"

interface ServiceDetailHeaderProps {
  title: string
}

export default function ServiceDetailHeader({ title }: ServiceDetailHeaderProps) {
  return (
    <section className={styles.pageHeader}>
      <div
        className={styles.pageHeaderBg}
        style={{
          backgroundImage: `url(${images.serviceHeader})`,
        }}
      ></div>
      <div className="container mx-auto px-4">
        <div className={styles.pageHeaderWrapper}>
          <div className={styles.pageHeaderContent}>
            <h2>{title}</h2>
            <div className={styles.pageHeaderMenu}>
              <ul>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>{title}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

