import styles from "./Features.module.css"
import { CodeIcon, LayoutIcon, PaintBrushIcon } from "./Icons"

export default function Features() {
  const features = [
    {
      icon: <CodeIcon />,
      title: "TypeScript Support",
      description: "Built with TypeScript for better type safety and developer experience.",
    },
    {
      icon: <LayoutIcon />,
      title: "Organized Structure",
      description: "Clean separation of components and styles for better maintainability.",
    },
    {
      icon: <PaintBrushIcon />,
      title: "CSS Modules",
      description: "Component-scoped CSS with modules to avoid style conflicts.",
    },
  ]

  return (
    <section className={styles.features}>
      <h2 className={styles.sectionTitle}>Key Features</h2>
      <div className={styles.featureGrid}>
        {features.map((feature, index) => (
          <div key={index} className={styles.featureCard}>
            <div className={styles.iconWrapper}>{feature.icon}</div>
            <h3 className={styles.featureTitle}>{feature.title}</h3>
            <p className={styles.featureDescription}>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

