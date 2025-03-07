"use client"

import Image from "next/image"
import styles from "../styles/testimonialCard.module.css"

interface TestimonialCardProps {
    name: string
    role: string
    company: string
    companyColor?: string
    description: string
    imageSrc: string
}

export default function TestimonialCard({
    name,
    role,
    company,
    companyColor = "#FFD700",
    description,
    imageSrc,
}: TestimonialCardProps) {

    return (

        <>
            <div className={`${styles.reviews_carousel_item} swiper-slide swiper-slide-active`} style={{ width: "525px", marginRight: "60px" }} role="group" aria-label="1 / 4">
                <div className={styles.review_card_image}>
                    <Image src={imageSrc} width="112" height="112" alt="" />
                </div>
                <div className={styles.review_card_name}>{name}</div>
                <div className={styles.review_card_post}>{role} in <span style={{ color: `${companyColor}` }}>{company}</span>
                </div>
                <div className={styles.review_card_text}>{description}</div>
            </div>

        </>

    )
}