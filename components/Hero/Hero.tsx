import styles from "./Hero.module.css"

interface HeroProps {
  title: string
  subtitle: string
}

export default function Hero({ title, subtitle }: HeroProps) {
  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.subtitle}>{subtitle}</p>
      <div className={styles.buttonGroup}>
        <button className={styles.primaryButton}>Get Started</button>
        <button className={styles.secondaryButton}>Learn More</button>
      </div>
    </section>
  )
}

